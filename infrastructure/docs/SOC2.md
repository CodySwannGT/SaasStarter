# SOC2 Compliance for Infrastructure-as-Code

This document outlines the specific infrastructure components that need to be implemented or modified to achieve SOC2 compliance in our AWS infrastructure managed through CDK. These recommendations focus solely on the infrastructure aspects of SOC2 compliance.

## Overview of SOC2 Infrastructure Requirements

SOC2 compliance requires controls across five trust service principles: Security, Availability, Processing Integrity, Confidentiality, and Privacy. From an infrastructure perspective, we primarily need to address the Security, Availability, and Confidentiality principles.

## Required Infrastructure Changes

### 1. Comprehensive Logging and Monitoring

#### CloudTrail Configuration
- [x] Implement CloudTrail across all AWS accounts
- [ ] Enable log file validation for CloudTrail logs
- [ ] Configure CloudTrail to log data events for S3 and Lambda
- [ ] Ensure CloudTrail logs are encrypted at rest
- [ ] Set up SNS notifications for CloudTrail log delivery failures

```typescript
// Example CloudTrail implementation
export class CloudTrailStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const trail = new aws_cloudtrail.Trail(this, 'CloudTrail', {
      sendToCloudWatchLogs: true,
      trailName: 'SOC2-CompliantTrail',
      enableFileValidation: true,
      isMultiRegionTrail: true,
      includeGlobalServiceEvents: true,
      cloudWatchLogsRetention: aws_logs.RetentionDays.ONE_YEAR,
      encryptionKey: new aws_kms.Key(this, 'CloudTrailEncryptionKey', {
        enableKeyRotation: true,
      }),
    });
    
    // Enable data event logging
    trail.addEventSelector(aws_cloudtrail.EventSelector.builder()
      .readWriteType(aws_cloudtrail.ReadWriteType.ALL)
      .includeManagementEvents(true)
      .dataResourceType('AWS::S3::Object')
      .dataResourceValues(['arn:aws:s3:::'])
      .build());
    
    trail.addEventSelector(aws_cloudtrail.EventSelector.builder()
      .readWriteType(aws_cloudtrail.ReadWriteType.ALL)
      .includeManagementEvents(true)
      .dataResourceType('AWS::Lambda::Function')
      .dataResourceValues(['arn:aws:lambda'])
      .build());
      
    // Add SNS notification for log delivery failures
    const deliveryFailureTopic = new aws_sns.Topic(this, 'CloudTrailDeliveryFailure');
    // Add subscribers and alarm actions here
  }
}
```

#### CloudWatch Alarms and Metrics
- [ ] Create CloudWatch alarms for security-related events (e.g., root account usage, IAM policy changes)
- [ ] Set up metrics and alarms for API calls that modify infrastructure
- [ ] Implement dashboard for security monitoring
- [ ] Configure alarm notifications to appropriate channels

```typescript
// Example security alarm implementation
export class SecurityMonitoringStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const logGroup = aws_logs.LogGroup.fromLogGroupName(
      this, 
      'CloudTrailLogGroup', 
      '/aws/cloudtrail/SOC2-CompliantTrail'
    );
    
    // Root account usage alarm
    new aws_cloudwatch.Alarm(this, 'RootAccountUsageAlarm', {
      metric: new aws_cloudwatch.Metric({
        namespace: 'CloudTrailMetrics',
        metricName: 'RootAccountUsage',
        statistic: 'Sum',
        period: cdk.Duration.minutes(5),
        dimensions: { LogGroupName: logGroup.logGroupName },
      }),
      threshold: 1,
      evaluationPeriods: 1,
      comparisonOperator: aws_cloudwatch.ComparisonOperator.GREATER_THAN_OR_EQUAL_TO_THRESHOLD,
      alarmDescription: 'Alert on root account usage',
      treatMissingData: aws_cloudwatch.TreatMissingData.NOT_BREACHING,
    });
    
    // Add more security alarms here
  }
}
```

### 2. Access Controls and IAM Enhancements

#### IAM Improvements
- [ ] Implement least-privilege access for all IAM roles and policies
- [ ] Set up automated IAM access reviews (using AWS IAM Access Analyzer)
- [ ] Configure IAM password policy to meet SOC2 requirements
- [ ] Enforce MFA for all IAM users, especially those with administrative access
- [ ] Implement service control policies (SCPs) in AWS Organizations

```typescript
// Example IAM policy implementation with least privilege
export class SOC2IAMStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // IAM Access Analyzer
    new aws_accessanalyzer.CfnAnalyzer(this, 'SOC2Analyzer', {
      type: 'ACCOUNT',
      analyzerName: 'soc2-access-analyzer',
    });
    
    // Password policy
    new aws_iam.CfnAccountPasswordPolicy(this, 'SOC2PasswordPolicy', {
      maxPasswordAge: 90,
      minimumPasswordLength: 14,
      passwordReusePrevention: 24,
      requireLowercaseCharacters: true,
      requireNumbers: true,
      requireSymbols: true,
      requireUppercaseCharacters: true,
      allowUsersToChangePassword: true,
    });
    
    // Example of a restricted role with least-privilege
    const restrictedRole = new aws_iam.Role(this, 'RestrictedServiceRole', {
      assumedBy: new aws_iam.ServicePrincipal('lambda.amazonaws.com'),
      description: 'SOC2 compliant service role with least privilege',
    });
    
    restrictedRole.addToPolicy(new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.ALLOW,
      actions: [
        // Only specific actions needed, not wildcard permissions
        's3:GetObject',
        's3:PutObject',
      ],
      resources: [
        // Only specific resources, not wildcard
        'arn:aws:s3:::specific-bucket/specific-path/*',
      ],
    }));
  }
}
```

### 3. Data Protection and Encryption

#### Encryption Standards
- [ ] Enforce encryption at rest for all data stores (S3, RDS, DynamoDB, etc.)
- [ ] Implement encryption in transit for all services
- [ ] Set up KMS for key management with appropriate rotation policies
- [ ] Configure S3 bucket policies to enforce encryption
- [ ] Ensure AWS Secrets Manager or Parameter Store is used for secrets with encryption

```typescript
// Example encryption implementation
export class DataProtectionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // KMS key with rotation
    const encryptionKey = new aws_kms.Key(this, 'SOC2EncryptionKey', {
      enableKeyRotation: true,
      description: 'SOC2 compliant encryption key for data protection',
    });
    
    // Encrypted S3 bucket
    const encryptedBucket = new aws_s3.Bucket(this, 'EncryptedBucket', {
      encryption: aws_s3.BucketEncryption.KMS,
      encryptionKey: encryptionKey,
      enforceSSL: true,  // Encryption in transit
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      lifecycleRules: [
        {
          id: 'DeleteOldVersions',
          enabled: true,
          noncurrentVersionExpiration: cdk.Duration.days(90),
        },
      ],
    });
    
    // Add bucket policy to enforce encryption
    encryptedBucket.addToResourcePolicy(new aws_iam.PolicyStatement({
      effect: aws_iam.Effect.DENY,
      principals: [new aws_iam.AnyPrincipal()],
      actions: ['s3:PutObject'],
      resources: [encryptedBucket.arnForObjects('*')],
      conditions: {
        StringNotEquals: {
          's3:x-amz-server-side-encryption': 'aws:kms',
        },
      },
    }));
    
    // Encrypted RDS instance
    const encryptedDatabase = new aws_rds.DatabaseInstance(this, 'EncryptedDatabase', {
      engine: aws_rds.DatabaseInstanceEngine.postgres({
        version: aws_rds.PostgresEngineVersion.VER_13,
      }),
      storageEncrypted: true,
      storageEncryptionKey: encryptionKey,
      // Other configuration as needed
    });
  }
}
```

### 4. Network Security

#### VPC and Network Controls
- [ ] Implement VPC flow logs for all VPCs
- [ ] Configure security groups with least-privilege access
- [ ] Set up NACLs as an additional layer of defense
- [ ] Implement AWS WAF for public-facing applications
- [ ] Configure VPC endpoints for AWS services to avoid public internet exposure

```typescript
// Example network security implementation
export class NetworkSecurityStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new aws_ec2.Vpc(this, 'SOC2CompliantVPC', {
      maxAzs: 3,
      flowLogs: {
        'SOC2FlowLogs': {
          destination: aws_ec2.FlowLogDestination.toCloudWatchLogs(),
          trafficType: aws_ec2.FlowLogTrafficType.ALL,
        },
      },
    });
    
    // Restricted security group
    const restrictedSG = new aws_ec2.SecurityGroup(this, 'RestrictedSG', {
      vpc,
      description: 'SOC2 compliant restricted security group',
      allowAllOutbound: false,
    });
    
    // Only allow specific inbound and outbound rules
    restrictedSG.addIngressRule(
      aws_ec2.Peer.ipv4('10.0.0.0/16'),
      aws_ec2.Port.tcp(443),
      'Allow HTTPS from internal network only'
    );
    
    restrictedSG.addEgressRule(
      aws_ec2.Peer.ipv4('10.0.0.0/16'),
      aws_ec2.Port.tcp(443),
      'Allow HTTPS to internal services only'
    );
    
    // VPC Endpoints to avoid public internet
    new aws_ec2.InterfaceVpcEndpoint(this, 'SecretsManagerEndpoint', {
      vpc,
      service: aws_ec2.InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
      securityGroups: [restrictedSG],
    });
    
    // WAF for public applications
    const wafAcl = new aws_wafv2.CfnWebACL(this, 'SOC2WebACL', {
      defaultAction: { allow: {} },
      scope: 'REGIONAL',
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: 'SOC2WebACL',
        sampledRequestsEnabled: true,
      },
      rules: [
        // Add WAF rules as per security requirements
      ],
    });
  }
}
```

### 5. Backup and Disaster Recovery

#### Data Backup
- [ ] Implement AWS Backup for all critical data stores
- [ ] Configure appropriate backup retention periods
- [ ] Set up cross-region backup for critical systems
- [ ] Implement backup monitoring and alerting

```typescript
// Example backup implementation
export class BackupStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a backup vault with encryption
    const backupVault = new aws_backup.BackupVault(this, 'SOC2BackupVault', {
      backupVaultName: 'soc2-backup-vault',
      encryptionKey: new aws_kms.Key(this, 'BackupEncryptionKey', {
        enableKeyRotation: true,
      }),
    });
    
    // Create a backup plan
    const backupPlan = new aws_backup.BackupPlan(this, 'SOC2BackupPlan', {
      backupVault: backupVault,
    });
    
    // Daily backups retained for 30 days
    backupPlan.addRule(new aws_backup.BackupPlanRule({
      ruleName: 'DailyBackups',
      scheduleExpression: aws_events.Schedule.cron({
        day: '*',
        hour: '3',
        minute: '0',
      }),
      deleteAfter: cdk.Duration.days(30),
    }));
    
    // Weekly backups retained for 90 days
    backupPlan.addRule(new aws_backup.BackupPlanRule({
      ruleName: 'WeeklyBackups',
      scheduleExpression: aws_events.Schedule.cron({
        day: 'SUN',
        hour: '5',
        minute: '0',
      }),
      deleteAfter: cdk.Duration.days(90),
    }));
    
    // Monthly backups retained for 1 year
    backupPlan.addRule(new aws_backup.BackupPlanRule({
      ruleName: 'MonthlyBackups',
      scheduleExpression: aws_events.Schedule.cron({
        day: '1',
        hour: '7',
        minute: '0',
      }),
      deleteAfter: cdk.Duration.days(365),
    }));
    
    // Add resources to the backup plan
    backupPlan.addSelection('SOC2BackupSelection', {
      resources: [
        aws_backup.BackupResource.fromRdsDatabaseInstance(/* database instance */),
        aws_backup.BackupResource.fromDynamoDbTable(/* dynamodb table */),
        aws_backup.BackupResource.fromEfsFileSystem(/* efs file system */),
      ],
    });
  }
}
```

### 6. Configuration Management and Vulnerability Scanning

#### AWS Config
- [ ] Implement AWS Config with SOC2-relevant rules
- [ ] Set up automated remediation for non-compliant resources
- [ ] Configure Config aggregation for multi-account environments
- [ ] Implement regular reporting on compliance status

```typescript
// Example AWS Config implementation
export class ConfigStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Set up AWS Config Recorder
    const configRole = new aws_iam.Role(this, 'ConfigRole', {
      assumedBy: new aws_iam.ServicePrincipal('config.amazonaws.com'),
      managedPolicies: [
        aws_iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSConfigRole'),
      ],
    });
    
    // S3 bucket for config recordings
    const configBucket = new aws_s3.Bucket(this, 'ConfigBucket', {
      encryption: aws_s3.BucketEncryption.S3_MANAGED,
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      versioned: true,
    });
    
    // Config recorder
    new aws_config.CfnConfigurationRecorder(this, 'ConfigRecorder', {
      roleArn: configRole.roleArn,
      recordingGroup: {
        allSupported: true,
        includeGlobalResources: true,
      },
    });
    
    // Delivery channel
    new aws_config.CfnDeliveryChannel(this, 'ConfigDeliveryChannel', {
      s3BucketName: configBucket.bucketName,
      configSnapshotDeliveryProperties: {
        deliveryFrequency: 'Six_Hours',
      },
    });
    
    // SOC2 relevant config rules
    new aws_config.ManagedRule(this, 'S3BucketPublicReadProhibited', {
      identifier: 'S3_BUCKET_PUBLIC_READ_PROHIBITED',
    });
    
    new aws_config.ManagedRule(this, 'S3BucketPublicWriteProhibited', {
      identifier: 'S3_BUCKET_PUBLIC_WRITE_PROHIBITED',
    });
    
    new aws_config.ManagedRule(this, 'S3BucketServerSideEncryptionEnabled', {
      identifier: 'S3_BUCKET_SERVER_SIDE_ENCRYPTION_ENABLED',
    });
    
    new aws_config.ManagedRule(this, 'IAMPasswordPolicy', {
      identifier: 'IAM_PASSWORD_POLICY',
    });
    
    new aws_config.ManagedRule(this, 'CloudTrailEnabled', {
      identifier: 'CLOUD_TRAIL_ENABLED',
    });
    
    new aws_config.ManagedRule(this, 'RootAccountMfaEnabled', {
      identifier: 'ROOT_ACCOUNT_MFA_ENABLED',
    });
    
    // Add more rules as needed for compliance
  }
}
```

#### Security Scanning
- [ ] Implement Amazon Inspector for vulnerability scanning
- [ ] Set up GuardDuty for threat detection
- [ ] Configure Security Hub for comprehensive security monitoring
- [ ] Implement automated triage and response for security findings

```typescript
// Example security scanning implementation
export class SecurityScanningStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Enable GuardDuty
    new aws_guardduty.CfnDetector(this, 'GuardDutyDetector', {
      enable: true,
      findingPublishingFrequency: 'FIFTEEN_MINUTES',
    });
    
    // Enable Security Hub
    new aws_securityhub.CfnHub(this, 'SecurityHub');
    
    // Enable Amazon Inspector
    new aws_inspector.CfnResourceGroup(this, 'InspectorResourceGroup', {
      resourceGroupTags: [
        {
          key: 'Inspector',
          value: 'Enabled',
        },
      ],
    });
    
    new aws_inspector.CfnAssessmentTarget(this, 'InspectorTarget', {
      resourceGroupArn: cdk.Fn.ref('InspectorResourceGroup'),
      assessmentTargetName: 'SOC2-Scanning-Target',
    });
    
    new aws_inspector.CfnAssessmentTemplate(this, 'InspectorTemplate', {
      assessmentTargetArn: cdk.Fn.ref('InspectorTarget'),
      durationInSeconds: 3600,
      assessmentTemplateName: 'SOC2-Vulnerability-Scan',
      rulesPackageArns: [
        // Add appropriate rules packages for your environment
        `arn:aws:inspector:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:rulespackage/0-PmNV0Tcd`,
        `arn:aws:inspector:${cdk.Stack.of(this).region}:${cdk.Stack.of(this).account}:rulespackage/0-wNqHa8M9`,
      ],
    });
    
    // Add Event Rule to run Inspector assessment daily
    const dailyRule = new aws_events.Rule(this, 'DailyInspectorScan', {
      schedule: aws_events.Schedule.cron({
        minute: '0',
        hour: '0',
        day: '*',
        month: '*',
        year: '*',
      }),
    });
    
    // Add target for the rule
    dailyRule.addTarget(new aws_events_targets.AwsApi({
      service: 'Inspector',
      action: 'StartAssessmentRun',
      parameters: {
        assessmentTemplateArn: cdk.Fn.ref('InspectorTemplate'),
      },
    }));
  }
}
```

### 7. Automated Compliance Controls

#### Compliance Automation
- [ ] Implement automated remediation for common compliance issues
- [ ] Set up continuous compliance validation in CI/CD pipeline
- [ ] Configure Systems Manager Automation for remediation of non-compliant resources
- [ ] Implement compliance reporting and dashboards

```typescript
// Example compliance automation implementation
export class ComplianceAutomationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create remediation role
    const remediationRole = new aws_iam.Role(this, 'RemediationRole', {
      assumedBy: new aws_iam.ServicePrincipal('ssm.amazonaws.com'),
      managedPolicies: [
        aws_iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AmazonSSMAutomationRole'),
      ],
    });
    
    // Add specific permissions for remediation
    remediationRole.addToPolicy(new aws_iam.PolicyStatement({
      actions: [
        's3:PutEncryptionConfiguration',
        's3:PutBucketPolicy',
        's3:PutBucketPublicAccessBlock',
      ],
      resources: ['*'],
    }));
    
    // Automated remediation for S3 buckets without encryption
    new aws_config.CfnRemediationConfiguration(this, 'S3EncryptionRemediation', {
      configRuleName: 'S3_BUCKET_SERVER_SIDE_ENCRYPTION_ENABLED',
      targetType: 'SSM_DOCUMENT',
      targetId: 'AWS-EnableS3BucketEncryption',
      automatic: true,
      maximumAutomaticAttempts: 3,
      retryAttemptSeconds: 60,
      parameters: {
        BucketName: {
          resourceValue: {
            value: 'RESOURCE_ID',
          },
        },
        SSEAlgorithm: {
          staticValue: {
            values: ['AES256'],
          },
        },
      },
      resourceType: 'AWS::S3::Bucket',
    });
    
    // Automated remediation for S3 buckets with public access
    new aws_config.CfnRemediationConfiguration(this, 'S3PublicAccessRemediation', {
      configRuleName: 'S3_BUCKET_PUBLIC_READ_PROHIBITED',
      targetType: 'SSM_DOCUMENT',
      targetId: 'AWS-ConfigureS3BucketPublicAccessBlock',
      automatic: true,
      maximumAutomaticAttempts: 3,
      retryAttemptSeconds: 60,
      parameters: {
        BucketName: {
          resourceValue: {
            value: 'RESOURCE_ID',
          },
        },
        BlockPublicAcls: {
          staticValue: {
            values: ['true'],
          },
        },
        BlockPublicPolicy: {
          staticValue: {
            values: ['true'],
          },
        },
        IgnorePublicAcls: {
          staticValue: {
            values: ['true'],
          },
        },
        RestrictPublicBuckets: {
          staticValue: {
            values: ['true'],
          },
        },
      },
      resourceType: 'AWS::S3::Bucket',
    });
  }
}
```

## Compliance Validation Process

To ensure ongoing compliance with SOC2 requirements, implement the following validation processes:

1. **Pre-deployment Validation**
   - Implement cdk-nag to validate infrastructure before deployment
   - Include SOC2-specific checks in CI/CD pipeline
   - Block deployments that don't meet SOC2 requirements

2. **Continuous Compliance Monitoring**
   - Set up AWS Config with continuous compliance checks
   - Configure Security Hub for compliance monitoring
   - Implement automated alerting for compliance violations

3. **Regular Compliance Auditing**
   - Schedule periodic reviews of infrastructure compliance
   - Implement automated evidence collection for SOC2 audits
   - Maintain compliance documentation

## Implementation Strategy

1. **Phase 1: Foundation**
   - Implement basic logging and monitoring (CloudTrail, Config)
   - Set up IAM password policies and MFA requirements
   - Configure encryption for existing data stores

2. **Phase 2: Advanced Controls**
   - Implement network security controls
   - Set up backup and disaster recovery
   - Configure automated remediation

3. **Phase 3: Continuous Validation**
   - Implement security scanning and threat detection
   - Set up compliance dashboards and reporting
   - Configure automated evidence collection for audits

## Additional Considerations

- **Costs**: Many of the security services (GuardDuty, Security Hub, Config) incur additional AWS costs. Budget accordingly.
- **Performance Impact**: Some security controls may impact performance or development velocity. Balance security needs with operational requirements.
- **Resource Management**: Consider the resource overhead of implementing and maintaining these controls.

## References and Resources

- [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html)
- [AWS Well-Architected Framework - Security Pillar](https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html)
- [AWS SOC2 Compliance Guide](https://aws.amazon.com/compliance/soc-faqs/)
- [CDK Nag](https://github.com/cdklabs/cdk-nag) - For infrastructure compliance scanning