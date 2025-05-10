import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { NumberAttribute, StringAttribute } from 'aws-cdk-lib/aws-cognito';
import * as ses from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';
import { BRANDING, EMAIL_TEMPLATES, AWS_CONFIG } from '@saas-starter/config';

interface CognitoStackProps extends cdk.StackProps {
  stage: 'dev' | 'staging' | 'production';
  domainName?: string | null | undefined;
  identity?: ses.EmailIdentity | null | undefined;
}

export class CognitoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CognitoStackProps) {
    super(scope, id, props);

    const { stage, domainName, identity } = props;

    const domainPrefix = stage === 'production' ? 'app' : `${stage}`;

    const fromDomain = `${stage === 'production' ? '' : `${stage}.`}${
      domainName || BRANDING.DOMAIN_NAME
    }`;

    const userPool = new cdk.aws_cognito.UserPool(this, AWS_CONFIG.COGNITO_POOL_ID, {
      removalPolicy: stage === 'production' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.RETAIN,
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: 'Your verification code',
        emailBody: 'Your verification code is {####}',
        emailStyle: cdk.aws_cognito.VerificationEmailStyle.CODE,
        smsMessage: 'Your verification code is {####}',
      },
      userInvitation: {
        emailSubject: EMAIL_TEMPLATES.INVITATION_SUBJECT,
        emailBody: `<h1 style="color:black">${EMAIL_TEMPLATES.INVITATION_SUBJECT}</h1>
          <p style="color:black">To get started visit https://${domainPrefix}.${BRANDING.DOMAIN_NAME}/ and use the following credentials: </p>
          <p style="color:black">Your username is {username}.</p>
          <p style="color:black">For more detailed help, please email ${BRANDING.SUPPORT_EMAIL} directly. </p>
          <p style="color:black">Sincerely, </p>
          <p style="color:black">The ${BRANDING.COMPANY_NAME} Team</p>
          <p style="display:none">{####}</p>`,
        smsMessage: 'Your username is {username} and temporary password is {####}',
      },
      mfaMessage: 'Your authentication code is {####}.',
      mfa: cdk.aws_cognito.Mfa.OPTIONAL,
      mfaSecondFactor: {
        sms: true,
        otp: true,
      },
      email: !identity
        ? undefined
        : cdk.aws_cognito.UserPoolEmail.withSES({
            sesRegion: AWS_CONFIG.REGION,
            fromEmail: `no-reply@${fromDomain}`,
            fromName: BRANDING.COMPANY_NAME,
            replyTo: BRANDING.SUPPORT_EMAIL,
            sesVerifiedDomain: fromDomain,
          }),
      passwordPolicy: {
        minLength: 7,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
        tempPasswordValidity: Duration.days(3),
      },
      // userVerification: {
      //   emailSubject: "Verify your email!",
      //   emailBody: "Thanks for signing up! Your verification code is {####}",
      //   emailStyle: cdk.aws_cognito.VerificationEmailStyle.CODE,
      //   smsMessage: "Thanks for signing up! Your verification code is {####}",
      // },
      signInAliases: {
        // username: true,
        // preferredUsername: true,
        email: true,
        phone: true,
      },
      autoVerify: {
        email: true,
        phone: true,
      },
      signInCaseSensitive: false,
      customAttributes: {
        org_id: new StringAttribute({
          mutable: true,
        }),
        user_id: new StringAttribute({
          mutable: true,
          maxLen: 25,
          minLen: 1,
        }),
        sport_id: new NumberAttribute({
          mutable: true,
        }),
      },
      standardAttributes: {
        email: {
          required: true,
          mutable: true,
        },
        phoneNumber: {
          required: false,
          mutable: true,
        },
        givenName: {
          required: false,
          mutable: true,
        },
        familyName: {
          required: false,
          mutable: true,
        },
        profilePicture: {
          required: false,
          mutable: true,
        },
        preferredUsername: {
          required: false,
          mutable: true,
        },
      },
    });

    if (identity) {
      userPool.node.addDependency(identity);
    }

    // userPool.node.addDependency(identity);

    const client = userPool.addClient('global-app-client', {
      accessTokenValidity: Duration.minutes(60),
      idTokenValidity: Duration.minutes(60),
      refreshTokenValidity: Duration.days(30),
      authSessionValidity: Duration.minutes(10),
      authFlows: {
        adminUserPassword: true,
        userPassword: true,
        custom: true,
      },
    });

    new cdk.CfnOutput(this, 'CognitoClientId', {
      value: client.userPoolClientId,
      exportName: 'CognitoClientId',
    });
    new cdk.CfnOutput(this, 'UserPoolId', {
      value: userPool.userPoolId,
      exportName: 'UserPoolId',
    });
    new cdk.CfnOutput(this, 'UserPoolName', {
      value: userPool.userPoolProviderName,
      exportName: 'UserPoolName',
    });
    new cdk.CfnOutput(this, 'UserPoolArn', {
      value: userPool.userPoolArn,
      exportName: 'UserPoolArn',
    });
  }
}
