import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import { CodePipeline, CodePipelineSource, ShellStep, CodeBuildStep } from 'aws-cdk-lib/pipelines';

import { BuildSpec, LinuxBuildImage } from 'aws-cdk-lib/aws-codebuild';
import { Construct } from 'constructs';
import sharedConfig from '../util/shared-config';
import { AppStage } from './app-stage';

/**
 * The stack that defines the application pipeline
 */
export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipelineRole = new iam.Role(this, 'CustomPipelineRole', {
      assumedBy: new iam.ServicePrincipal('codepipeline.amazonaws.com'),
      managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess')],
    });

    const config = sharedConfig();

    // Define the synth step using the new CodeBuildStep (which replaces ShellStep)
    const synthStep = new CodeBuildStep('Synth', {
      input: CodePipelineSource.gitHub(
        `${config.githubOwner}/${config.infrastructureRepo}`,
        'main',
        {
          authentication: cdk.SecretValue.secretsManager('github-token'),
        }
      ),
      installCommands: ['npm i -g npm@9.x.x'],
      commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      buildEnvironment: {
        buildImage: LinuxBuildImage.STANDARD_7_0,
        environmentVariables: {
          NODE_OPTIONS: {
            value: '--max-old-space-size=8192',
          },
        },
      },
      partialBuildSpec: BuildSpec.fromObject({
        phases: {
          install: {
            'runtime-versions': {
              nodejs: '20',
            },
          },
        },
      }),
    });

    // Create the pipeline with the new v2 syntax
    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'InfrastructurePipeline',
      crossAccountKeys: true,
      role: pipelineRole,
      synth: synthStep,
      // Use dockerEnabledForSynth if you need Docker support
      dockerEnabledForSynth: true,
      // Use publishAssetsInParallel to control parallel asset publishing
      publishAssetsInParallel: true,
      // Use codeBuildDefaults to configure default settings for all CodeBuild projects
      codeBuildDefaults: {
        timeout: cdk.Duration.minutes(30),
        buildEnvironment: {
          privileged: true,
        },
      },
    });

    // Topic for security change notifications
    const securityTopic = new sns.Topic(this, 'SecurityChangesTopic');
    securityTopic.addSubscription(new subscriptions.EmailSubscription(config.supportEmail));

    // Topic for pipeline failure notifications
    const pipelineFailureTopic = new sns.Topic(this, 'PipelineFailureTopic');
    pipelineFailureTopic.addSubscription(new subscriptions.EmailSubscription(config.supportEmail));

    // Add wave-based deployment for improved control over stage deployments
    const wave = pipeline.addWave('Environments');

    // Add stages to the wave
    ['dev', 'staging', 'production'].forEach((stage) => {
      const appStage = new AppStage(this, `AppStage${stage}`, {
        stageName: `app-${stage}`,
        env: {
          account: config.accountIds[stage],
          region: config.baseRegion,
        },
      });

      // Add stage with pre and post deployment steps if needed
      if (stage === 'production') {
        // For production, add manual approval step
        wave.addStage(appStage, {
          pre: [new ManualApprovalStep('PromoteToProd')],
          // Add post-deployment validation steps if needed
          post: [
            new CodeBuildStep('ValidateDeployment', {
              commands: [
                'echo "Running validation tests"',
                'sleep 10', // Replace with actual validation
                'echo "Deployment validated"',
              ],
            }),
          ],
        });
      } else {
        // For non-production environments, no manual approval
        wave.addStage(appStage);
      }
    });
  }
}

// Define a manual approval step
class ManualApprovalStep extends ShellStep {
  constructor(id: string) {
    super(id, {
      commands: ['echo "Please approve this deployment"'],
    });
  }

  // Add custom method for pipeline customization
  public beforeSelfMutation(scope: Construct): void {
    const stack = cdk.Stack.of(scope);
    const pipeline = stack.node
      .findChild('Pipeline')
      .node.findChild('Pipeline') as codepipeline.Pipeline;

    const stage = pipeline.stages.find((stage) =>
      stage.actions.some((action) => action.actionProperties.actionName.includes(this.id))
    );

    if (stage) {
      stage.addAction(
        new codepipeline_actions.ManualApprovalAction({
          actionName: `${this.id}Approval`,
          runOrder: 1, // Adjust as needed
        })
      );
    }
  }
}
