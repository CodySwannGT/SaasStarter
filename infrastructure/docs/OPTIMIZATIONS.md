# Infrastructure Optimization Guide

This document outlines recommended optimizations to bring the infrastructure-v2 repository up to the same enterprise readiness level as other repositories in the organization. Each recommendation includes detailed implementation guidance suitable for developers of all experience levels.

## Table of Contents

1. [Testing Infrastructure](#1-testing-infrastructure)
2. [Developer Helper Scripts](#2-developer-helper-scripts)
3. [Enhanced Documentation](#3-enhanced-documentation)
4. [Local Testing Environment](#4-local-testing-environment)
5. [Infrastructure Validation](#5-infrastructure-validation)
6. [Deployment Safety](#6-deployment-safety)
7. [CDK Code Organization](#7-cdk-code-organization)
8. [Infrastructure Monitoring](#8-infrastructure-monitoring)

## 1. Testing Infrastructure

### Why It Matters

Comprehensive testing ensures infrastructure code behaves as expected, prevents regressions, and increases confidence in deployments. Many developers underestimate the importance of testing infrastructure code, but it's just as critical as testing application code.

### Implementation Steps

#### 1.1 Set Up Jest Test Structure

The repository already has Jest configured, but needs a comprehensive test structure:

```bash
# Create test directory structure
mkdir -p test/unit test/snapshot test/integration test/utils
```

#### 1.2 Create Stack Unit Tests

For each stack in `lib/`, create a corresponding test file in `test/unit/`:

```typescript
// test/unit/my-stack.test.ts
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../../lib/my-stack';

describe('MyStack', () => {
  const app = new App();
  const stack = new MyStack(app, 'TestStack', {
    // Add required props
  });
  const template = Template.fromStack(stack);
  
  test('Contains expected VPC resources', () => {
    // Assert the stack contains the expected VPC resources
    template.resourceCountIs('AWS::EC2::VPC', 1);
    template.hasResourceProperties('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/16',
      // Add other expected properties
    });
  });
  
  test('Contains expected security groups', () => {
    // Assert the stack contains the expected security groups
    template.resourceCountIs('AWS::EC2::SecurityGroup', 2);
  });
  
  // Add more specific tests
});
```

#### 1.3 Implement Snapshot Testing

Snapshots help detect unintended changes to CloudFormation templates:

```typescript
// test/snapshot/my-stack.snapshot.test.ts
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../../lib/my-stack';

describe('MyStack Snapshot', () => {
  test('Stack creates expected CloudFormation template', () => {
    const app = new App();
    const stack = new MyStack(app, 'TestStack', {
      // Add required props
    });
    
    const template = Template.fromStack(stack);
    expect(template.toJSON()).toMatchSnapshot();
  });
});
```

#### 1.4 Create Test Utilities

Build helpers to simplify testing:

```typescript
// test/utils/test-helpers.ts
import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';

/**
 * Finds all resources of a specific type in a stack
 */
export function findResources(stack: Stack, resourceType: string) {
  const template = Template.fromStack(stack);
  return template.findResources(resourceType);
}

/**
 * Validates IAM policies follow least privilege
 */
export function validateIamPolicies(stack: Stack) {
  const template = Template.fromStack(stack);
  const roles = template.findResources('AWS::IAM::Role');
  
  // Implementation to check roles don't have wildcard permissions
  // Return validation results
}

/**
 * Validates security group rules
 */
export function validateSecurityGroups(stack: Stack) {
  // Implementation to validate security group rules
}
```

#### 1.5 Setup Jest Configuration

Update `jest.config.js` with proper configuration:

```javascript
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

#### 1.6 Add Test Data

Create mock environment configurations for testing:

```typescript
// test/fixtures/test-context.ts
export const TEST_CONTEXT = {
  dev: {
    account: '111111111111',
    region: 'us-east-1',
    vpcCidr: '10.0.0.0/16',
    // Add other test values
  },
  staging: {
    account: '222222222222',
    region: 'us-east-1',
    vpcCidr: '10.1.0.0/16',
    // Add other test values
  }
};
```

## 2. Developer Helper Scripts

### Why It Matters

Developer productivity is greatly enhanced by consistent, well-documented helper scripts. They reduce typing errors, standardize common operations, and create a better developer experience.

### Implementation Steps

#### 2.1 Add CDK Utility Scripts to package.json

Update the `scripts` section in `package.json`:

```json
"scripts": {
  // Existing scripts
  "build": "tsc",
  "watch": "tsc -w",
  "test": "jest",
  
  // Add new scripts
  "cdk:ls": "cdk ls",
  "cdk:synth": "cdk synth",
  "cdk:synth-all": "cdk synth --all",
  "cdk:diff": "cdk diff",
  "cdk:diff-all": "cdk diff --all",
  "cdk:deploy-dev": "cdk deploy --profile <profile>-dev \"*-dev\"",
  "cdk:deploy-staging": "cdk deploy --profile <profile>-staging \"*-staging\"",
  "cdk:deploy-prod": "cdk deploy --profile <profile>-production \"*-production\"",
  "cdk:bootstrap-dev": "cdk bootstrap --profile <profile>-dev aws://<dev-account-id>/us-east-1",
  "cdk:bootstrap-staging": "cdk bootstrap --profile <profile>-staging aws://<staging-account-id>/us-east-1",
  "cdk:bootstrap-prod": "cdk bootstrap --profile <profile>-production aws://<prod-account-id>/us-east-1",
  "lint:security": "npx cdk-nag",
  "validate:cfn": "npx cfn-lint cdk.out/*.template.json",
  "cost:estimate": "npx cdk-cost-estimate"
}
```

#### 2.2 Create Specialized Scripts

Create a `scripts` directory with specialized tools:

```bash
mkdir -p scripts
```

#### 2.3 Stack Cleanup Script

```typescript
// scripts/cleanup-obsolete-stacks.ts
#!/usr/bin/env ts-node

/**
 * Script to identify and optionally remove CloudFormation stacks
 * that are no longer defined in the CDK code
 */

import { execSync } from 'child_process';
import * as fs from 'fs';

// Get active CDK stacks
const activeStacks = execSync('npx cdk ls').toString().split('\n').filter(Boolean);

// Get deployed CloudFormation stacks from AWS
const deployedStacks = JSON.parse(
  execSync(
    'aws cloudformation list-stacks --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE --profile <profile>-dev'
  ).toString()
).StackSummaries.map((stack: any) => stack.StackName);

// Find stacks that exist in AWS but not in CDK
const obsoleteStacks = deployedStacks.filter(
  (stack: string) => !activeStacks.includes(stack) && stack.startsWith('YourPrefix')
);

console.log('Potentially obsolete stacks:');
console.log(obsoleteStacks);

// If --delete flag is provided, delete the obsolete stacks
if (process.argv.includes('--delete')) {
  for (const stack of obsoleteStacks) {
    console.log(`Deleting stack: ${stack}`);
    execSync(`aws cloudformation delete-stack --stack-name ${stack} --profile <profile>-dev`);
  }
}
```

Make the script executable:

```bash
chmod +x scripts/cleanup-obsolete-stacks.ts
```

#### 2.4 Cross-Account Resource Finder

```typescript
// scripts/find-resource.ts
#!/usr/bin/env ts-node

/**
 * Script to find AWS resources across multiple accounts
 * Usage: ./scripts/find-resource.ts <resource-type> <search-term>
 * Example: ./scripts/find-resource.ts AWS::Lambda::Function MyFunction
 */

import { execSync } from 'child_process';

const resourceType = process.argv[2];
const searchTerm = process.argv[3];

if (!resourceType) {
  console.error('Please provide a resource type');
  process.exit(1);
}

const environments = ['dev', 'staging', 'production'];

for (const env of environments) {
  console.log(`\nSearching in ${env} environment:`);
  try {
    const command = searchTerm
      ? `aws cloudformation list-stack-resources --stack-name "*" --profile <profile>-${env} | grep -A 10 "${resourceType}" | grep -B 10 "${searchTerm}"`
      : `aws cloudformation list-stack-resources --stack-name "*" --profile <profile>-${env} | grep -A 3 "${resourceType}"`;
    
    const result = execSync(command).toString();
    console.log(result || 'No matching resources found');
  } catch (error) {
    console.log('No matching resources found');
  }
}
```

Make it executable:

```bash
chmod +x scripts/find-resource.ts
```

## 3. Enhanced Documentation

### Why It Matters

Comprehensive documentation reduces onboarding time for new developers and serves as a reference for everyone. It's especially critical for infrastructure code that impacts multiple systems.

### Implementation Steps

#### 3.1 Create Architecture Diagrams

Install cdk-dia for generating diagrams:

```bash
npm install --save-dev cdk-dia
```

Add a script to package.json:

```json
"scripts": {
  "diagram": "npx cdk-dia"
}
```

Create diagrams:

```bash
npm run diagram
```

This will generate a diagram.png file showing your CDK stacks and their relationships.

#### 3.2 Stack Documentation Template

Create a template for documenting each stack:

```markdown
# Stack Name: [StackName]

## Purpose

Brief description of the stack's purpose.

## Resources Created

- Resource 1: Purpose and configuration details
- Resource 2: Purpose and configuration details

## Dependencies

- Depends on Stack X for VPC information
- Depends on Stack Y for security group rules

## Environment-Specific Configuration

| Parameter | Dev | Staging | Production |
|-----------|-----|---------|------------|
| Instance Size | t3.small | t3.large | r5.large |
| Multi-AZ | false | true | true |

## Deployment Prerequisites

- Account must be bootstrapped with CDK
- Required IAM roles must exist
- VPC must be already deployed

## Outputs

- Output1: Purpose and usage
- Output2: Purpose and usage

## Monitoring and Alerts

- CloudWatch Dashboard: URL
- Configured Alarms: List of alarms and thresholds
```

#### 3.3 Infrastructure Dependency Diagram

Create a PlantUML document showing stack dependencies:

```
// docs/stack-dependencies.puml
@startuml
title Infrastructure Stack Dependencies

package "Network Layer" {
  [NetworkStack] as network
  [CiCdVpnStack] as cicdvpn
  [VpnStack] as vpn
}

package "Security Layer" {
  [SecurityGroupStack] as secgroup
  [IamDeployRoleStack] as iamrole
}

package "Data Layer" {
  [S3Stack] as s3
  [AuroraStack] as aurora
  [ElasticacheStack] as elasticache
}

package "Compute Layer" {
  [ApiStack] as api
  [LambdaStack] as lambda
}

package "Integration Layer" {
  [SqsStack] as sqs
  [SnsStack] as sns
}

network <-- secgroup
network <-- cicdvpn
network <-- vpn
iamrole <-- api
iamrole <-- lambda
secgroup <-- aurora
secgroup <-- elasticache
secgroup <-- api
aurora <-- api
elasticache <-- api
s3 <-- lambda
sqs <-- lambda
sns <-- api

@enduml
```

Use the PlantUML extension in VS Code to visualize this diagram.

#### 3.4 Deployment Guide

Create a comprehensive deployment guide:

```markdown
# Deployment Guide

## Prerequisites

1. AWS CLI installed and configured with appropriate profiles
2. CDK CLI installed globally: `npm install -g aws-cdk`
3. Node.js ≥ 18.0.0 installed
4. Access to all required AWS accounts

## Initial Deployment

For first-time deployment:

1. Bootstrap all accounts:
   ```
   npm run cdk:bootstrap-dev
   npm run cdk:bootstrap-staging
   npm run cdk:bootstrap-prod
   ```

2. Deploy the shared resources first:
   ```
   npx cdk deploy --profile <profile>-shared SharedStack
   ```

3. Deploy network resources next:
   ```
   npx cdk deploy --profile <profile>-dev "*Network*-dev"
   ```

4. Deploy the remaining stacks:
   ```
   npm run cdk:deploy-dev
   ```

## Incremental Updates

For making changes to existing infrastructure:

1. Make your code changes in the appropriate stack files

2. Validate the changes:
   ```
   npm run lint
   npm test
   npm run cdk:diff
   ```

3. Deploy the changes:
   ```
   npx cdk deploy --profile <profile>-dev StackName-dev
   ```

## Environment Promotion

To promote changes from dev to staging to production:

1. Ensure all tests pass in the dev environment
2. Run a diff against the staging environment:
   ```
   npx cdk diff --profile <profile>-staging "*-staging"
   ```
3. Deploy to staging:
   ```
   npm run cdk:deploy-staging
   ```
4. After validation in staging, promote to production:
   ```
   npx cdk diff --profile <profile>-production "*-production"
   npm run cdk:deploy-prod
   ```
```

#### 3.5 Troubleshooting Guide

Create a troubleshooting guide:

```markdown
# Troubleshooting Guide

## Common Deployment Errors

### Error: No credentials found
**Cause**: AWS credentials are not configured correctly
**Solution**: 
1. Verify AWS CLI configuration: `aws configure list --profile <profile>-dev`
2. Refresh SSO tokens if using SSO: `aws sso login --profile <profile>-dev`

### Error: Resource already exists
**Cause**: CloudFormation trying to create a resource that already exists
**Solution**:
1. Check if the resource was created manually or by another stack
2. Use `CustomResource` with a custom Lambda to adopt the existing resource
3. Or use `RemovalPolicy.RETAIN` and rename the new resource

### Error: Security token expired
**Cause**: SSO session has expired
**Solution**: Refresh the session: `aws sso login --profile <profile>-dev`

## Stack-Specific Issues

### VPC Stack

#### Issue: Subnet allocation conflicts
**Solution**: Check CIDR ranges in `environment-config.ts` to ensure they don't overlap

### Database Stack

#### Issue: Cannot delete Aurora cluster
**Cause**: Deletion protection is enabled
**Solution**: 
1. Update the stack to disable deletion protection
2. Deploy that change
3. Then delete the stack

## Debugging Techniques

### CloudFormation Events

View detailed deployment events:
```
aws cloudformation describe-stack-events --stack-name <stack-name> --profile <profile>-dev | jq '.StackEvents[] | {LogicalResourceId: .LogicalResourceId, ResourceStatus: .ResourceStatus, ResourceStatusReason: .ResourceStatusReason}'
```

### CDK Context

CDK context might be cached. Clear it with:
```
npx cdk context --clear
```

### CloudTrail

Check CloudTrail for API calls related to your resources:
```
aws cloudtrail lookup-events --lookup-attributes AttributeKey=ResourceName,AttributeValue=<resource-name> --profile <profile>-dev
```
```

## 4. Local Testing Environment

### Why It Matters

Local testing allows developers to validate infrastructure changes before deploying to AWS, saving time and preventing errors. It's particularly valuable for junior developers who can experiment safely.

### Implementation Steps

#### 4.1 LocalStack Integration

[LocalStack](https://github.com/localstack/localstack) provides a local AWS cloud stack for testing:

1. Install LocalStack:
```bash
npm install --save-dev aws-cdk-local localstack
```

2. Create a Docker Compose file for LocalStack:
```yaml
# docker compose.yml
version: '3.8'
services:
  localstack:
    container_name: localstack
    image: localstack/localstack:latest
    ports:
      - "4566:4566"
    environment:
      - SERVICES=s3,dynamodb,lambda,apigateway,iam,cloudformation,secretsmanager,sqs,sns
      - DEBUG=1
      - DOCKER_HOST=unix:///var/run/docker.sock
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
```

3. Add scripts to package.json:
```json
"scripts": {
  "localstack:start": "docker compose up -d",
  "localstack:stop": "docker compose down",
  "cdklocal:bootstrap": "cdklocal bootstrap",
  "cdklocal:deploy": "cdklocal deploy --all",
  "cdklocal:diff": "cdklocal diff"
}
```

4. Create a LocalStack-compatible CDK app:
```typescript
// bin/cdk-local.ts
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NetworkStack } from '../lib/network-stack';
import { LocalTestStack } from '../lib/local-test-stack';

// Special app for local testing
const app = new cdk.App();

// Create a simplified version of stacks for local testing
new NetworkStack(app, 'NetworkStack-local', {
  env: { account: '000000000000', region: 'us-east-1' },
  // Add other props
});

// Add a stack specifically for local testing
new LocalTestStack(app, 'LocalTestStack', {
  env: { account: '000000000000', region: 'us-east-1' }
});

app.synth();
```

5. Create a local test stack:
```typescript
// lib/local-test-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class LocalTestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a test bucket
    const bucket = new s3.Bucket(this, 'TestBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    // Create a test Lambda function
    const handler = new lambda.Function(this, 'TestFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello from Local CDK!' })
          };
        };
      `)
    });

    // Create a test API Gateway
    const api = new apigateway.RestApi(this, 'TestApi');
    api.root.addMethod('GET', new apigateway.LambdaIntegration(handler));

    // Output the bucket name and API URL
    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
    new cdk.CfnOutput(this, 'ApiUrl', { value: api.url });
  }
}
```

#### 4.2 Usage Instructions

Add instructions to README.md:

```markdown
## Local Development

This project supports local development using LocalStack:

1. Start LocalStack:
   ```
   npm run localstack:start
   ```

2. Bootstrap the local CDK environment:
   ```
   npm run cdklocal:bootstrap
   ```

3. Deploy to LocalStack:
   ```
   npm run cdklocal:deploy
   ```

4. Interact with local AWS resources:
   ```
   # List S3 buckets
   aws --endpoint-url=http://localhost:4566 s3 ls
   
   # Test API Gateway
   curl $(aws --endpoint-url=http://localhost:4566 cloudformation describe-stacks --stack-name LocalTestStack --query "Stacks[0].Outputs[?OutputKey=='ApiUrl'].OutputValue" --output text)
   ```

5. Stop LocalStack when finished:
   ```
   npm run localstack:stop
   ```
```

## 5. Infrastructure Validation

### Why It Matters

Infrastructure validation provides automated checks for security, compliance, and best practices. It prevents costly mistakes and ensures infrastructure meets organizational standards.

### Implementation Steps

#### 5.1 CDK-Nag for Policy Compliance

[cdk-nag](https://github.com/cdklabs/cdk-nag) checks CDK applications for best practices:

1. Install cdk-nag:
```bash
npm install --save-dev cdk-nag
```

2. Add to CDK app:
```typescript
// bin/infrastructure.ts
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Aspects } from 'aws-cdk-lib';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();

// Pipeline stack
const pipelineStack = new PipelineStack(app, 'PipelineStack', {
  env: { account: '111111111111', region: 'us-east-1' }
});

// Add CDK-Nag pack to check for best practices
Aspects.of(app).add(new AwsSolutionsChecks());

// Suppress specific rules for specific resources where appropriate
NagSuppressions.addStackSuppressions(pipelineStack, [
  { id: 'AwsSolutions-IAM4', reason: 'Pipeline role requires managed policy for deployments' }
]);

app.synth();
```

3. Add script to package.json:
```json
"scripts": {
  "validate:nag": "npx cdk synth | grep -A 100 'Nag'"
}
```

#### 5.2 CloudFormation Template Validation

1. Install cfn-lint:
```bash
npm install --save-dev cfn-lint
```

2. Add script to package.json:
```json
"scripts": {
  "validate:cfn": "npx cfn-lint cdk.out/*.template.json"
}
```

#### 5.3 Cost Estimation

1. Install cdk-cost-estimate:
```bash
npm install --save-dev @cdklabs/cdk-cost-estimate
```

2. Integrate with CDK app:
```typescript
// bin/cost-estimate.ts
#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Aspects } from 'aws-cdk-lib';
import { CostEstimationAspect } from '@cdklabs/cdk-cost-estimate';
import { NetworkStack } from '../lib/network-stack';
import { AppStack } from '../lib/app-stack';

const app = new cdk.App();

// Define stacks
const networkStack = new NetworkStack(app, 'NetworkStack-dev', {
  env: { account: '111111111111', region: 'us-east-1' }
});

const appStack = new AppStack(app, 'AppStack-dev', {
  env: { account: '111111111111', region: 'us-east-1' }
});

// Add cost estimation
Aspects.of(app).add(new CostEstimationAspect());

app.synth();
```

3. Add script to package.json:
```json
"scripts": {
  "cost:estimate": "node -r ts-node/register bin/cost-estimate.ts",
  "cost:report": "npx cdk synth | grep -A 100 'Cost'"
}
```

#### 5.4 Security Scanning for Infrastructure Code

1. Install security scanning tools:
```bash
npm install --save-dev eslint-plugin-security
```

2. Update ESLint configuration:
```json
// .eslintrc.json
{
  "plugins": ["security"],
  "extends": ["plugin:security/recommended"],
  "rules": {
    "security/detect-non-literal-fs-filename": "error",
    "security/detect-object-injection": "warn"
  }
}
```

3. Add script to package.json:
```json
"scripts": {
  "security:scan": "npx eslint --plugin security lib/**/*.ts"
}
```

#### 5.5 Pre-deployment Validation

Create a validation script:

```typescript
// scripts/validate-deployment.ts
#!/usr/bin/env ts-node
import { execSync } from 'child_process';

// Run all validation steps
console.log('Running pre-deployment validation...');

try {
  console.log('\n--- TypeScript Compilation ---');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n--- Linting ---');
  execSync('npm run lint', { stdio: 'inherit' });
  
  console.log('\n--- Tests ---');
  execSync('npm test', { stdio: 'inherit' });
  
  console.log('\n--- CDK Nag ---');
  execSync('npm run validate:nag', { stdio: 'inherit' });
  
  console.log('\n--- CloudFormation Linting ---');
  execSync('npm run validate:cfn', { stdio: 'inherit' });
  
  console.log('\n--- Cost Estimation ---');
  execSync('npm run cost:report', { stdio: 'inherit' });
  
  console.log('\n--- Security Scan ---');
  execSync('npm run security:scan', { stdio: 'inherit' });
  
  console.log('\n✅ All validation checks passed! Ready for deployment.');
} catch (error) {
  console.error('\n❌ Validation failed. Please fix the issues before deploying.');
  process.exit(1);
}
```

Make it executable:

```bash
chmod +x scripts/validate-deployment.ts
```

Add script to package.json:

```json
"scripts": {
  "pre:deploy": "ts-node scripts/validate-deployment.ts"
}
```

## 6. Deployment Safety

### Why It Matters

Safe deployment practices reduce risk and provide rollback options when things go wrong. They're essential for critical infrastructure deployments.

### Implementation Steps

#### 6.1 Deployment Approval Workflows

Create a GitHub Actions workflow for deployment approvals:

```yaml
# .github/workflows/deployment-approval.yml
name: Deployment Approval

on:
  push:
    branches:
      - main

jobs:
  validate:
    name: Validate
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run pre:deploy
  
  request-approval:
    name: Request Approval for Production
    needs: validate
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production-approval
    steps:
      - name: Approval Gate
        run: echo "Deployment approved for production!"
  
  deploy-production:
    name: Deploy to Production
    needs: request-approval
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - name: Deploy to Production
        run: npx cdk deploy --all --require-approval never
```

#### 6.2 Canary Deployments

For services that support it, implement canary deployments:

```typescript
// lib/lambda-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as codedeploy from 'aws-cdk-lib/aws-codedeploy';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Create Lambda function
    const handler = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      // Add version support
      currentVersionOptions: {
        // Keep previous versions when a new version is created
        removalPolicy: cdk.RemovalPolicy.RETAIN,
        // Set description for this version
        description: 'Current version'
      }
    });
    
    // Create alias that points to the current version
    const alias = new lambda.Alias(this, 'MyFunctionAlias', {
      aliasName: 'production',
      version: handler.currentVersion
    });
    
    // Create REST API
    const api = new apigateway.RestApi(this, 'MyApi');
    api.root.addMethod('GET', new apigateway.LambdaIntegration(alias));
    
    // Setup canary deployment configuration
    new codedeploy.LambdaDeploymentGroup(this, 'MyDeploymentGroup', {
      alias,
      deploymentConfig: codedeploy.LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES,
      alarms: [
        // Add CloudWatch alarms to monitor for errors
      ]
    });
  }
}
```

#### 6.3 Automatic Rollback Capabilities

Add CloudWatch alarms and automatic rollback mechanisms:

```typescript
// lib/monitoring-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as actions from 'aws-cdk-lib/aws-cloudwatch-actions';

export class MonitoringStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Create SNS topic for alarms
    const alarmTopic = new sns.Topic(this, 'AlarmTopic');
    
    // Create a dashboard
    const dashboard = new cloudwatch.Dashboard(this, 'Monitoring');
    
    // Add API Gateway 5XX errors alarm
    const api5xxAlarm = new cloudwatch.Alarm(this, 'Api5xxAlarm', {
      metric: new cloudwatch.Metric({
        namespace: 'AWS/ApiGateway',
        metricName: '5XXError',
        dimensionsMap: {
          ApiName: 'MyApi'
        },
        statistic: 'Sum',
        period: cdk.Duration.minutes(1)
      }),
      threshold: 5,
      evaluationPeriods: 1,
      datapointsToAlarm: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    // Add the alarm to the dashboard
    dashboard.addWidgets(
      new cloudwatch.AlarmWidget({
        alarm: api5xxAlarm,
        title: 'API Gateway 5XX Errors'
      })
    );
    
    // Add an action to the alarm
    api5xxAlarm.addAlarmAction(new actions.SnsAction(alarmTopic));
    
    // Add Lambda error alarm
    const lambdaErrorAlarm = new cloudwatch.Alarm(this, 'LambdaErrorAlarm', {
      metric: new cloudwatch.Metric({
        namespace: 'AWS/Lambda',
        metricName: 'Errors',
        dimensionsMap: {
          FunctionName: 'MyFunction'
        },
        statistic: 'Sum',
        period: cdk.Duration.minutes(1)
      }),
      threshold: 1,
      evaluationPeriods: 1,
      datapointsToAlarm: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    // Add the alarm to the dashboard
    dashboard.addWidgets(
      new cloudwatch.AlarmWidget({
        alarm: lambdaErrorAlarm,
        title: 'Lambda Function Errors'
      })
    );
    
    // Add an action to the alarm
    lambdaErrorAlarm.addAlarmAction(new actions.SnsAction(alarmTopic));
  }
}
```

#### 6.4 Deployment Notifications

Set up Slack notifications for deployments:

1. Install the required packages:
```bash
npm install --save-dev @aws-cdk/aws-chatbot-alpha aws-cdk-lib
```

2. Add integration to your stack:
```typescript
// lib/notification-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as chatbot from '@aws-cdk/aws-chatbot-alpha';
import * as sns from 'aws-cdk-lib/aws-sns';

export class NotificationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Create SNS topic for deployment notifications
    const deploymentTopic = new sns.Topic(this, 'DeploymentTopic');
    
    // Add Slack integration
    new chatbot.SlackChannelConfiguration(this, 'SlackIntegration', {
      slackChannelConfigurationName: 'deployment-notifications',
      slackWorkspaceId: 'T0123456789', // Replace with your Slack workspace ID
      slackChannelId: 'C0123456789',   // Replace with your Slack channel ID
      notificationTopics: [deploymentTopic]
    });
    
    // Export the SNS topic ARN
    new cdk.CfnOutput(this, 'DeploymentTopicArn', {
      value: deploymentTopic.topicArn,
      description: 'ARN of the SNS topic for deployment notifications',
      exportName: 'DeploymentTopicArn'
    });
  }
}
```

3. Add notification to your deployment script:
```typescript
// scripts/deploy-with-notification.ts
#!/usr/bin/env ts-node
import { execSync } from 'child_process';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

async function deployWithNotification() {
  const stackName = process.argv[2];
  const environment = process.argv[3] || 'dev';
  const profile = `<profile>-${environment}`;
  
  if (!stackName) {
    console.error('Please provide a stack name');
    process.exit(1);
  }
  
  console.log(`Deploying ${stackName} to ${environment}...`);
  
  try {
    // Run deployment
    execSync(`npx cdk deploy ${stackName} --profile ${profile}`, { stdio: 'inherit' });
    
    // Send success notification
    await sendNotification(
      `✅ Successfully deployed ${stackName} to ${environment}`,
      'Deployment completed successfully',
      'SUCCESS',
      profile
    );
    
    console.log('Deployment successful!');
  } catch (error) {
    // Send failure notification
    await sendNotification(
      `❌ Failed to deploy ${stackName} to ${environment}`,
      `Error: ${error}`,
      'FAILURE',
      profile
    );
    
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

async function sendNotification(subject, message, status, profile) {
  // Create SNS client
  const sns = new SNSClient({ profile });
  
  // Get the SNS topic ARN from CloudFormation outputs
  const topicArn = execSync(
    `aws cloudformation describe-stacks --stack-name NotificationStack --query "Stacks[0].Outputs[?OutputKey=='DeploymentTopicArn'].OutputValue" --output text --profile ${profile}`
  ).toString().trim();
  
  // Send notification
  const params = {
    TopicArn: topicArn,
    Subject: subject,
    Message: message,
    MessageAttributes: {
      Status: {
        DataType: 'String',
        StringValue: status
      }
    }
  };
  
  await sns.send(new PublishCommand(params));
}

deployWithNotification();
```

Make it executable:

```bash
chmod +x scripts/deploy-with-notification.ts
```

Add script to package.json:

```json
"scripts": {
  "deploy:notify": "ts-node scripts/deploy-with-notification.ts"
}
```

## 7. CDK Code Organization

### Why It Matters

Well-organized CDK code is easier to maintain, understand, and extend. It reduces duplication and promotes reuse of common patterns.

### Implementation Steps

#### 7.1 Create Reusable Constructs

Create a centralized library of reusable constructs:

```typescript
// lib/constructs/standard-vpc.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface StandardVpcProps {
  readonly cidr: string;
  readonly maxAzs: number;
  readonly natGateways: number;
  readonly flowLogs?: boolean;
}

export class StandardVpc extends Construct {
  public readonly vpc: ec2.Vpc;
  
  constructor(scope: Construct, id: string, props: StandardVpcProps) {
    super(scope, id);
    
    this.vpc = new ec2.Vpc(this, 'Vpc', {
      cidr: props.cidr,
      maxAzs: props.maxAzs,
      natGateways: props.natGateways,
      subnetConfiguration: [
        {
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24
        },
        {
          name: 'private',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24
        },
        {
          name: 'isolated',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24
        }
      ]
    });
    
    // Add flow logs if requested
    if (props.flowLogs) {
      new ec2.FlowLog(this, 'FlowLog', {
        resourceType: ec2.FlowLogResourceType.fromVpc(this.vpc),
        destination: ec2.FlowLogDestination.toCloudWatchLogs()
      });
    }
    
    // Add standard tags
    cdk.Tags.of(this.vpc).add('Module', 'StandardVpc');
    cdk.Tags.of(this.vpc).add('AutoDelete', 'No');
  }
}
```

```typescript
// lib/constructs/secure-bucket.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as kms from 'aws-cdk-lib/aws-kms';

export interface SecureBucketProps {
  readonly bucketName?: string;
  readonly encryption?: boolean;
  readonly versioning?: boolean;
  readonly lifecycleRules?: boolean;
  readonly removalPolicy?: cdk.RemovalPolicy;
}

export class SecureBucket extends Construct {
  public readonly bucket: s3.Bucket;
  public readonly encryptionKey?: kms.Key;
  
  constructor(scope: Construct, id: string, props: SecureBucketProps) {
    super(scope, id);
    
    // Create KMS key if encryption is requested
    if (props.encryption) {
      this.encryptionKey = new kms.Key(this, 'Key', {
        enableKeyRotation: true,
        removalPolicy: props.removalPolicy || cdk.RemovalPolicy.RETAIN
      });
    }
    
    // Create S3 bucket
    this.bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: props.bucketName,
      encryption: props.encryption ? s3.BucketEncryption.KMS : s3.BucketEncryption.S3_MANAGED,
      encryptionKey: props.encryption ? this.encryptionKey : undefined,
      versioned: props.versioning,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: props.removalPolicy || cdk.RemovalPolicy.RETAIN,
      lifecycleRules: props.lifecycleRules ? [
        {
          enabled: true,
          expiration: cdk.Duration.days(365),
          noncurrentVersionExpiration: cdk.Duration.days(90)
        }
      ] : undefined
    });
    
    // Add standard tags
    cdk.Tags.of(this.bucket).add('Module', 'SecureBucket');
  }
}
```

#### 7.2 Implement Consistent Typing

Create a central types file:

```typescript
// lib/types.ts
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';

export interface EnvironmentConfig {
  readonly account: string;
  readonly region: string;
  readonly stage: 'dev' | 'staging' | 'production';
  readonly vpc: VpcConfig;
  readonly database: DatabaseConfig;
  readonly security: SecurityConfig;
}

export interface VpcConfig {
  readonly cidr: string;
  readonly maxAzs: number;
  readonly natGateways: number;
  readonly flowLogs: boolean;
}

export interface DatabaseConfig {
  readonly engine: 'mysql' | 'postgres';
  readonly version: string;
  readonly instanceType: ec2.InstanceType;
  readonly multiAz: boolean;
  readonly backupRetention: cdk.Duration;
  readonly storageEncrypted: boolean;
  readonly deletionProtection: boolean;
}

export interface SecurityConfig {
  readonly allowedIps: string[];
  readonly bastionEnabled: boolean;
  readonly wafEnabled: boolean;
}

export interface StackProps extends cdk.StackProps {
  readonly config: EnvironmentConfig;
}
```

#### 7.3 Organize Stacks by Logical Function

Restructure your stacks:

```
lib/
├── constructs/
│   ├── standard-vpc.ts
│   ├── secure-bucket.ts
│   └── ...
├── network/
│   ├── network-stack.ts
│   ├── vpn-stack.ts
│   ├── security-group-stack.ts
│   └── dns-stack.ts
├── compute/
│   ├── api-stack.ts
│   ├── lambda-stack.ts
│   └── codebuild-stack.ts
├── data/
│   ├── aurora-stack.ts
│   ├── elasticache-stack.ts
│   └── s3-stack.ts
├── security/
│   ├── cognito-stack.ts
│   ├── iam-stack.ts
│   └── kms-stack.ts
├── stages/
│   ├── app-stage.ts
│   ├── network-stage.ts
│   └── security-stage.ts
├── pipeline/
│   ├── pipeline-stack.ts
│   └── cicd-stack.ts
├── types.ts
└── utils/
    ├── environment-config.ts
    ├── shared-config.ts
    └── cross-stage-imports.ts
```

#### 7.4 Use Interfaces and Abstract Classes

Create an abstract stack class:

```typescript
// lib/abstract-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackProps } from './types';

export abstract class AbstractStack extends cdk.Stack {
  protected readonly config: StackProps['config'];
  
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    
    this.config = props.config;
    
    // Add standard tags to all resources in the stack
    cdk.Tags.of(this).add('Environment', this.config.stage);
    cdk.Tags.of(this).add('StackName', id);
    cdk.Tags.of(this).add('ManagedBy', 'CDK');
    
    // Call the initialize method, which must be implemented by derived classes
    this.initialize();
  }
  
  // Abstract method that must be implemented by derived stacks
  protected abstract initialize(): void;
  
  // Helper method for outputs
  protected createOutput(id: string, value: string, description?: string, exportName?: string): cdk.CfnOutput {
    return new cdk.CfnOutput(this, id, {
      value,
      description,
      exportName: exportName ?? `${this.stackName}-${id}`
    });
  }
}
```

Use the abstract class in your stacks:

```typescript
// lib/network/network-stack.ts
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { AbstractStack } from '../abstract-stack';
import { StandardVpc } from '../constructs/standard-vpc';
import { StackProps } from '../types';

export class NetworkStack extends AbstractStack {
  public readonly vpc: ec2.Vpc;
  
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
  }
  
  protected initialize(): void {
    // Create VPC using the reusable construct
    const standardVpc = new StandardVpc(this, 'StandardVpc', {
      cidr: this.config.vpc.cidr,
      maxAzs: this.config.vpc.maxAzs,
      natGateways: this.config.vpc.natGateways,
      flowLogs: this.config.vpc.flowLogs
    });
    
    this.vpc = standardVpc.vpc;
    
    // Create outputs
    this.createOutput('VpcId', this.vpc.vpcId, 'VPC ID');
    this.createOutput('PublicSubnets', JSON.stringify(this.vpc.publicSubnets.map(s => s.subnetId)), 'Public Subnets');
    this.createOutput('PrivateSubnets', JSON.stringify(this.vpc.privateSubnets.map(s => s.subnetId)), 'Private Subnets');
    this.createOutput('IsolatedSubnets', JSON.stringify(this.vpc.isolatedSubnets.map(s => s.subnetId)), 'Isolated Subnets');
  }
}
```

## 8. Infrastructure Monitoring

### Why It Matters

Comprehensive monitoring provides visibility into your infrastructure's health and performance. It allows for early detection of issues and helps with capacity planning.

### Implementation Steps

#### 8.1 CloudWatch Dashboards

Create a central monitoring stack:

```typescript
// lib/monitoring/dashboard-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import { AbstractStack } from '../abstract-stack';
import { StackProps } from '../types';

export class DashboardStack extends AbstractStack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
  }
  
  protected initialize(): void {
    // Create a main dashboard
    const dashboard = new cloudwatch.Dashboard(this, 'MainDashboard', {
      dashboardName: `${this.config.stage}-main-dashboard`
    });
    
    // Add VPC metrics
    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'VPC NAT Gateway Bytes',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/NATGateway',
            metricName: 'BytesOutToDestination',
            dimensionsMap: {
              NatGatewayId: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/NATGateway',
            metricName: 'BytesOutToSource',
            dimensionsMap: {
              NatGatewayId: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'VPC NAT Gateway Packet Count',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/NATGateway',
            metricName: 'PacketsOutToDestination',
            dimensionsMap: {
              NatGatewayId: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/NATGateway',
            metricName: 'PacketsOutToSource',
            dimensionsMap: {
              NatGatewayId: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          })
        ]
      })
    );
    
    // Add API Gateway metrics
    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'API Gateway Requests',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: 'Count',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'API Gateway Latency',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: 'Latency',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'Average',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'API Gateway Errors',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: '4XXError',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: '5XXError',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'Sum',
            period: cdk.Duration.minutes(5)
          })
        ]
      })
    );
    
    // Create outputs
    this.createOutput('DashboardURL', `https://${this.region}.console.aws.amazon.com/cloudwatch/home?region=${this.region}#dashboards:name=${dashboard.dashboardName}`, 'Main Dashboard URL');
  }
}
```

#### 8.2 Automated Alerts

Create custom alarms for key metrics:

```typescript
// lib/monitoring/alarm-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import * as actions from 'aws-cdk-lib/aws-cloudwatch-actions';
import { AbstractStack } from '../abstract-stack';
import { StackProps } from '../types';

export interface AlarmStackProps extends StackProps {
  readonly alarmEmail: string;
}

export class AlarmStack extends AbstractStack {
  private readonly alarmTopic: sns.Topic;
  
  constructor(scope: Construct, id: string, props: AlarmStackProps) {
    super(scope, id, props as StackProps);
    
    // Create SNS topic for alarms
    this.alarmTopic = new sns.Topic(this, 'AlarmTopic', {
      topicName: `${this.config.stage}-alarms`
    });
    
    // Add email subscription
    this.alarmTopic.addSubscription(
      new subscriptions.EmailSubscription((props as AlarmStackProps).alarmEmail)
    );
  }
  
  protected initialize(): void {
    // Create alarms for API Gateway
    this.createApiGatewayAlarms();
    
    // Create alarms for Lambda
    this.createLambdaAlarms();
    
    // Create alarms for RDS
    this.createRdsAlarms();
    
    // Create alarms for NAT Gateways
    this.createNatGatewayAlarms();
    
    // Create outputs
    this.createOutput('AlarmTopicArn', this.alarmTopic.topicArn, 'Alarm SNS Topic ARN');
  }
  
  private createApiGatewayAlarms(): void {
    // 5XX Errors
    const api5xxAlarm = new cloudwatch.Alarm(this, 'Api5xxAlarm', {
      alarmName: `${this.config.stage}-api-5xx-errors`,
      alarmDescription: 'API Gateway is returning 5XX errors',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/ApiGateway',
        metricName: '5XXError',
        dimensionsMap: {
          ApiName: '*'
        },
        statistic: 'Sum',
        period: cdk.Duration.minutes(1)
      }),
      threshold: 5,
      evaluationPeriods: 1,
      datapointsToAlarm: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    api5xxAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    api5xxAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
    
    // Latency
    const apiLatencyAlarm = new cloudwatch.Alarm(this, 'ApiLatencyAlarm', {
      alarmName: `${this.config.stage}-api-latency`,
      alarmDescription: 'API Gateway latency is high',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/ApiGateway',
        metricName: 'Latency',
        dimensionsMap: {
          ApiName: '*'
        },
        statistic: 'p90',
        period: cdk.Duration.minutes(5)
      }),
      threshold: 1000, // 1 second
      evaluationPeriods: 3,
      datapointsToAlarm: 3,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    apiLatencyAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    apiLatencyAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
  }
  
  private createLambdaAlarms(): void {
    // Lambda errors
    const lambdaErrorAlarm = new cloudwatch.Alarm(this, 'LambdaErrorAlarm', {
      alarmName: `${this.config.stage}-lambda-errors`,
      alarmDescription: 'Lambda functions are experiencing errors',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/Lambda',
        metricName: 'Errors',
        dimensionsMap: {
          FunctionName: '*'
        },
        statistic: 'Sum',
        period: cdk.Duration.minutes(1)
      }),
      threshold: 1,
      evaluationPeriods: 1,
      datapointsToAlarm: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    lambdaErrorAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    lambdaErrorAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
    
    // Lambda throttles
    const lambdaThrottleAlarm = new cloudwatch.Alarm(this, 'LambdaThrottleAlarm', {
      alarmName: `${this.config.stage}-lambda-throttles`,
      alarmDescription: 'Lambda functions are being throttled',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/Lambda',
        metricName: 'Throttles',
        dimensionsMap: {
          FunctionName: '*'
        },
        statistic: 'Sum',
        period: cdk.Duration.minutes(1)
      }),
      threshold: 1,
      evaluationPeriods: 1,
      datapointsToAlarm: 1,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    lambdaThrottleAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    lambdaThrottleAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
  }
  
  private createRdsAlarms(): void {
    // Add RDS CPU Utilization alarm
    const rdsCpuAlarm = new cloudwatch.Alarm(this, 'RdsCpuAlarm', {
      alarmName: `${this.config.stage}-rds-cpu`,
      alarmDescription: 'RDS CPU utilization is high',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/RDS',
        metricName: 'CPUUtilization',
        dimensionsMap: {
          DBInstanceIdentifier: '*'
        },
        statistic: 'Average',
        period: cdk.Duration.minutes(5)
      }),
      threshold: 80,
      evaluationPeriods: 3,
      datapointsToAlarm: 3,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    rdsCpuAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    rdsCpuAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
    
    // Add RDS free storage space alarm
    const rdsStorageAlarm = new cloudwatch.Alarm(this, 'RdsStorageAlarm', {
      alarmName: `${this.config.stage}-rds-storage`,
      alarmDescription: 'RDS free storage space is low',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/RDS',
        metricName: 'FreeStorageSpace',
        dimensionsMap: {
          DBInstanceIdentifier: '*'
        },
        statistic: 'Minimum',
        period: cdk.Duration.minutes(5)
      }),
      threshold: 10 * 1024 * 1024 * 1024, // 10 GB
      evaluationPeriods: 3,
      datapointsToAlarm: 3,
      comparisonOperator: cloudwatch.ComparisonOperator.LESS_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    rdsStorageAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    rdsStorageAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
  }
  
  private createNatGatewayAlarms(): void {
    // NAT Gateway port allocation
    const natPortAllocationAlarm = new cloudwatch.Alarm(this, 'NatPortAllocationAlarm', {
      alarmName: `${this.config.stage}-nat-port-allocation`,
      alarmDescription: 'NAT Gateway port allocation is high',
      metric: new cloudwatch.Metric({
        namespace: 'AWS/NATGateway',
        metricName: 'PortAllocation',
        dimensionsMap: {
          NatGatewayId: '*'
        },
        statistic: 'Maximum',
        period: cdk.Duration.minutes(5)
      }),
      threshold: 55000, // NAT Gateways have a limit of 64,000 connections
      evaluationPeriods: 3,
      datapointsToAlarm: 3,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      treatMissingData: cloudwatch.TreatMissingData.NOT_BREACHING
    });
    
    natPortAllocationAlarm.addAlarmAction(new actions.SnsAction(this.alarmTopic));
    natPortAllocationAlarm.addOkAction(new actions.SnsAction(this.alarmTopic));
  }
}
```

#### 8.3 Performance Tracking

Create a custom performance dashboard:

```typescript
// lib/monitoring/performance-stack.ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import { AbstractStack } from '../abstract-stack';
import { StackProps } from '../types';

export class PerformanceStack extends AbstractStack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
  }
  
  protected initialize(): void {
    // Create a performance dashboard
    const dashboard = new cloudwatch.Dashboard(this, 'PerformanceDashboard', {
      dashboardName: `${this.config.stage}-performance-dashboard`
    });
    
    // Add API Gateway performance metrics
    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'API Gateway Latency (p50, p90, p99)',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: 'Latency',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'p50',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: 'Latency',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'p90',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/ApiGateway',
            metricName: 'Latency',
            dimensionsMap: {
              ApiName: '*'
            },
            statistic: 'p99',
            period: cdk.Duration.minutes(5)
          })
        ]
      })
    );
    
    // Add Lambda performance metrics
    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'Lambda Duration (p50, p90, p99)',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/Lambda',
            metricName: 'Duration',
            dimensionsMap: {
              FunctionName: '*'
            },
            statistic: 'p50',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/Lambda',
            metricName: 'Duration',
            dimensionsMap: {
              FunctionName: '*'
            },
            statistic: 'p90',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/Lambda',
            metricName: 'Duration',
            dimensionsMap: {
              FunctionName: '*'
            },
            statistic: 'p99',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'Lambda Concurrent Executions',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/Lambda',
            metricName: 'ConcurrentExecutions',
            statistic: 'Maximum',
            period: cdk.Duration.minutes(5)
          })
        ]
      })
    );
    
    // Add RDS performance metrics
    dashboard.addWidgets(
      new cloudwatch.GraphWidget({
        title: 'RDS CPU Utilization',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/RDS',
            metricName: 'CPUUtilization',
            dimensionsMap: {
              DBInstanceIdentifier: '*'
            },
            statistic: 'Average',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'RDS Database Connections',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/RDS',
            metricName: 'DatabaseConnections',
            dimensionsMap: {
              DBInstanceIdentifier: '*'
            },
            statistic: 'Average',
            period: cdk.Duration.minutes(5)
          })
        ]
      }),
      new cloudwatch.GraphWidget({
        title: 'RDS Read/Write IOPS',
        left: [
          new cloudwatch.Metric({
            namespace: 'AWS/RDS',
            metricName: 'ReadIOPS',
            dimensionsMap: {
              DBInstanceIdentifier: '*'
            },
            statistic: 'Average',
            period: cdk.Duration.minutes(5)
          }),
          new cloudwatch.Metric({
            namespace: 'AWS/RDS',
            metricName: 'WriteIOPS',
            dimensionsMap: {
              DBInstanceIdentifier: '*'
            },
            statistic: 'Average',
            period: cdk.Duration.minutes(5)
          })
        ]
      })
    );
    
    // Create outputs
    this.createOutput('PerformanceDashboardURL', `https://${this.region}.console.aws.amazon.com/cloudwatch/home?region=${this.region}#dashboards:name=${dashboard.dashboardName}`, 'Performance Dashboard URL');
  }
}
```

#### 8.4 Operational Runbooks

Create an operational runbook in Markdown:

```markdown
// docs/operational-runbook.md
# Operational Runbook

This document provides operational procedures for common scenarios and emergencies.

## Monitoring and Dashboards

Our infrastructure has the following dashboards:

- **Main Dashboard**: Overall health and status of all components
  - URL: https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=dev-main-dashboard
  
- **Performance Dashboard**: Detailed performance metrics
  - URL: https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=dev-performance-dashboard

## Alerts and Notifications

Alerts are sent to the following channels:

- **Email**: ops@example.com
- **Slack**: #alerts channel

## Common Operational Tasks

### Scaling Resources

#### Scaling RDS

1. Update the `instanceType` property in the appropriate environment configuration file:
   ```typescript
   // util/environment-config.ts
   export const devConfig: EnvironmentConfig = {
     // ...
     database: {
       instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MEDIUM),
       // ...
     }
   };
   ```

2. Deploy the changes:
   ```bash
   npm run cdk:deploy-dev "AuroraStack-dev"
   ```

#### Scaling Lambda Functions

1. Update the memory allocation and/or concurrency in the Lambda stack:
   ```typescript
   // lib/compute/lambda-stack.ts
   const handler = new lambda.Function(this, 'MyFunction', {
     memorySize: 1024,
     reservedConcurrentExecutions: 100,
     // ...
   });
   ```

2. Deploy the changes:
   ```bash
   npm run cdk:deploy-dev "LambdaStack-dev"
   ```

### Responding to Alarms

#### API Gateway 5XX Errors

1. Check the CloudWatch Logs for the affected API:
   ```bash
   aws logs filter-log-events --log-group-name "API-Gateway-Execution-Logs_<api-id>/dev" --filter-pattern "ERROR" --profile <profile>-dev
   ```

2. If the issue is with a Lambda integration, check the Lambda logs:
   ```bash
   aws logs filter-log-events --log-group-name "/aws/lambda/<function-name>" --filter-pattern "ERROR" --profile <profile>-dev
   ```

3. Common resolutions:
   - Deploy a fix to the Lambda function
   - Roll back to a previous version using the Lambda console
   - Check for dependency issues (e.g., database connectivity)

#### RDS High CPU Utilization

1. Check the current database activity:
   ```bash
   aws rds describe-db-instances --db-instance-identifier <instance-id> --profile <profile>-dev
   ```

2. Connect to the database and identify slow queries:
   ```bash
   # PostgreSQL
   SELECT query, calls, total_time, mean_time, rows
   FROM pg_stat_statements
   ORDER BY mean_time DESC
   LIMIT 10;
   
   # MySQL
   SELECT * FROM performance_schema.events_statements_summary_by_digest
   ORDER BY sum_timer_wait DESC
   LIMIT 10;
   ```

3. Common resolutions:
   - Optimize slow queries
   - Add appropriate indexes
   - Scale up the instance
   - Consider read replicas for read-heavy workloads

### Deployment Rollbacks

If a deployment causes issues, follow these steps to roll back:

1. Identify the previous working version:
   ```bash
   aws cloudformation list-stacks --stack-status-filter UPDATE_COMPLETE --profile <profile>-dev
   ```

2. Roll back to the previous version:
   ```bash
   aws cloudformation deploy --stack-name <stack-name> --template-file previous-template.json --parameter-overrides file://previous-parameters.json --profile <profile>-dev
   ```

3. For Lambda functions, use the AWS console to select a previous version and create an alias pointing to it.

## Disaster Recovery

### VPC Connectivity Issues

1. Check the status of NAT Gateways:
   ```bash
   aws ec2 describe-nat-gateways --profile <profile>-dev
   ```

2. Verify security group rules:
   ```bash
   aws ec2 describe-security-groups --group-ids <security-group-id> --profile <profile>-dev
   ```

3. Check network ACLs:
   ```bash
   aws ec2 describe-network-acls --profile <profile>-dev
   ```

4. Common resolutions:
   - Check route tables for correct routes
   - Verify security group rules allow required traffic
   - Ensure network ACLs are not blocking traffic
   - Check if NAT Gateways are in a healthy state

### Database Failures

1. Check the status of the database instance:
   ```bash
   aws rds describe-db-instances --db-instance-identifier <instance-id> --profile <profile>-dev
   ```

2. Look for recent events:
   ```bash
   aws rds describe-events --source-type db-instance --source-identifier <instance-id> --profile <profile>-dev
   ```

3. Common resolutions:
   - For a multi-AZ setup, manually trigger failover if needed
   - Restore from a snapshot if the database is corrupted
   - Check for disk space issues and add capacity if needed
   - Verify connectivity issues aren't related to security groups
```

These optimizations provide a comprehensive approach to enhancing the infrastructure-v2 repository's enterprise readiness. By implementing these recommendations, you'll achieve better code organization, enhanced testing, improved monitoring, and safer deployments.