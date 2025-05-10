import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import environmentConfig from '../util/environment-config';
import sharedConfig from '../util/shared-config';
import { CognitoStack } from './cognito-stack';

/**
 * Stage representing a deployable unit of the application
 */
export class AppStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: cdk.StageProps) {
    super(scope, id, props);

    const { domainConfigs } = sharedConfig();
    // Removed unused frontendType variable

    // Determine stage from the stage name in props or default to dev
    const stage = !props?.stageName
      ? 'dev'
      : props.stageName.includes('prod')
      ? 'production'
      : props.stageName.includes('staging')
      ? 'staging'
      : 'dev';

    // Get environment configuration for the stage
    environmentConfig(stage);
    // Removed unused vpcId variable
    const account = props?.env?.account ?? process.env.CDK_DEFAULT_ACCOUNT;
    const region = props?.env?.region ?? process.env.CDK_DEFAULT_REGION;

    // Get domain configuration
    const primaryConfig = domainConfigs.find((r) => r.isPrimary);
    const primaryDomainName = primaryConfig?.name;
    // Removed unused formattedDomainName variable

    // Create SES stack with email identity if needed
    // For now, we'll comment this out since it's referenced but not defined
    // const sesStack = new SesStack(this, "SesStack", {
    //   stage,
    //   env: {
    //     account,
    //     region,
    //   },
    // });

    // Initialize Cognito stack without the SES identity for now
    new CognitoStack(this, 'CognitoStack', {
      stage,
      domainName: primaryDomainName,
      // Remove or comment out this line until SES stack is implemented
      // identity: sesStack.identity,
      env: {
        account,
        region,
      },
    });

    // You can add more stacks here as needed for your application
    // Example:
    // const apiStack = new ApiStack(this, "ApiStack", {
    //   stage,
    //   env: {
    //     account,
    //     region,
    //   },
    // });
  }
}
