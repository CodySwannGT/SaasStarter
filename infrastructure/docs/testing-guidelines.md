# Testing Guidelines for AWS CDK Infrastructure

This document outlines best practices and patterns for testing AWS CDK infrastructure code, providing guidance on creating effective tests for your CDK stacks and constructs.

## Testing Philosophy

AWS CDK infrastructure tests focus on verifying:

1. **Correctness**: CloudFormation templates are generated as expected
2. **Configuration**: Resources have the correct properties
3. **Security**: IAM roles and security groups have appropriate permissions
4. **Integration**: Resources are correctly connected to each other
5. **Compliance**: Infrastructure meets organizational compliance requirements

## Types of Tests

### 1. Snapshot Tests

Snapshot tests capture the entire CloudFormation template generated by a stack and compare it to a previously saved version.

**When to use**: For catching unexpected changes to a stack's resources.

```typescript
import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/vpc-stack';

test('VPC Stack snapshot test', () => {
  // GIVEN
  const app = new cdk.App();
  
  // WHEN
  const stack = new VpcStack(app, 'TestVpcStack', {
    env: { account: '123456789012', region: 'us-east-1' },
    cidrRange: '10.0.0.0/16',
  });
  
  // THEN
  expect(Template.fromStack(stack)).toMatchSnapshot();
});
```

**Pros**:
- Quickly catches unintended changes
- Provides comprehensive coverage

**Cons**:
- Requires careful review of changes when legitimate updates are made
- Doesn't validate the specific properties that matter most

### 2. Fine-Grained Assertions

Tests that verify specific properties or counts of resources in a CloudFormation template.

**When to use**: For validating critical properties or relationships that must be correct.

```typescript
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { S3Stack } from '../lib/s3-stack';

test('S3 Stack has properly configured bucket', () => {
  // GIVEN
  const app = new cdk.App();
  
  // WHEN
  const stack = new S3Stack(app, 'TestS3Stack', {
    env: { account: '123456789012', region: 'us-east-1' },
    bucketName: 'test-bucket',
  });
  
  // THEN
  const template = Template.fromStack(stack);
  
  // Verify the bucket exists
  template.resourceCountIs('AWS::S3::Bucket', 1);
  
  // Verify bucket properties
  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketEncryption: {
      ServerSideEncryptionConfiguration: [
        {
          ServerSideEncryptionByDefault: {
            SSEAlgorithm: 'AES256',
          },
        },
      ],
    },
    VersioningConfiguration: {
      Status: 'Enabled',
    },
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true,
    },
  });
});
```

**Pros**:
- Focuses on critical properties
- More resilient to legitimate changes in other properties
- Easier to understand test failures

**Cons**:
- Requires more maintenance when properties change intentionally
- May not catch all issues if assertions aren't comprehensive

### 3. Validation Tests

Tests that validate the constraints and validations built into your stack's logic.

**When to use**: For stacks with input validation or error-prone configurations.

```typescript
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/vpc-stack';

test('VPC Stack throws error with invalid CIDR range', () => {
  // GIVEN
  const app = new cdk.App();
  
  // WHEN/THEN
  expect(() => {
    new VpcStack(app, 'TestVpcStack', {
      env: { account: '123456789012', region: 'us-east-1' },
      cidrRange: 'invalid-cidr',
    });
  }).toThrow(/Invalid CIDR range/);
});
```

**Pros**:
- Verifies defensive coding practices
- Prevents misconfigurations

**Cons**:
- Limited to validations implemented in your code

### 4. Integration Tests (Between Stacks)

Tests that verify the correct integration and dependencies between stacks.

**When to use**: For complex architectures with cross-stack references.

```typescript
import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/vpc-stack';
import { RdsStack } from '../lib/rds-stack';

test('RDS Stack references VPC from VPC Stack', () => {
  // GIVEN
  const app = new cdk.App();
  
  // WHEN
  const vpcStack = new VpcStack(app, 'TestVpcStack', {
    env: { account: '123456789012', region: 'us-east-1' },
    cidrRange: '10.0.0.0/16',
  });
  
  const rdsStack = new RdsStack(app, 'TestRdsStack', {
    env: { account: '123456789012', region: 'us-east-1' },
    vpc: vpcStack.vpc,
  });
  
  // THEN
  const template = Template.fromStack(rdsStack);
  
  // Verify DBSubnetGroup references subnets from VPC
  template.hasResourceProperties('AWS::RDS::DBSubnetGroup', {
    SubnetIds: {
      'Fn::Split': [
        ',',
        {
          'Fn::ImportValue': {
            'Fn::Sub': '${TestVpcStack}-PrivateSubnetIds',
          },
        },
      ],
    },
  });
});
```

**Pros**:
- Verifies cross-stack dependencies
- Catches integration issues

**Cons**:
- More complex to set up and maintain
- May require mocking certain resources

## Test Structure

Follow the "Arrange-Act-Assert" (or "Given-When-Then") pattern:

1. **Arrange/Given**: Set up the test context and inputs
2. **Act/When**: Perform the action to be tested
3. **Assert/Then**: Verify the expected outcomes

## Testing Best Practices

### 1. Test Structure

- Create a test file for each stack or construct
- Place test files in the `/test` directory
- Name test files to match the source files they test (e.g., `vpc-stack.test.ts` for `vpc-stack.ts`)
- Group related tests using `describe` blocks
- Use clear test names that describe what is being tested

### 2. Test Isolation

- Create a new `App` instance for each test
- Don't reuse stack instances between tests
- Mock external dependencies when appropriate

### 3. Test Coverage

- Aim for high coverage of stacks and constructs
- Focus on testing critical configuration properties
- Test error cases and edge conditions
- Include at least one snapshot test for each stack

### 4. Test Maintenance

- Review and update snapshot tests when making legitimate changes
- Keep assertions focused on the properties that matter
- Use `Match.objectLike()` to ignore irrelevant properties in template assertions

## Testing Tools and Utilities

### 1. AWS CDK Assertions

The `@aws-cdk/assertions` package provides utilities for testing CDK applications:

- `Template.fromStack()`: Creates a template object for a stack
- `template.resourceCountIs()`: Asserts the number of resources of a given type
- `template.hasResourceProperties()`: Asserts a resource has specific properties
- `template.hasOutput()`: Asserts a stack has a specific output
- `Match.objectLike()`: Matches objects with a subset of properties

### 2. Jest

Jest is the recommended testing framework for CDK applications:

- `expect()`: Creates an assertion
- `describe()`: Groups related tests
- `test()` or `it()`: Defines a test
- `beforeEach()` and `afterEach()`: Set up and tear down test fixtures

## Example Test Suite

```typescript
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import { S3Stack } from '../lib/s3-stack';

describe('S3Stack', () => {
  let app: cdk.App;
  
  beforeEach(() => {
    app = new cdk.App();
  });
  
  test('snapshot test', () => {
    // GIVEN
    const stack = new S3Stack(app, 'TestS3Stack', {
      env: { account: '123456789012', region: 'us-east-1' },
      bucketName: 'test-bucket',
    });
    
    // WHEN/THEN
    expect(Template.fromStack(stack)).toMatchSnapshot();
  });
  
  test('creates bucket with encryption', () => {
    // GIVEN
    const stack = new S3Stack(app, 'TestS3Stack', {
      env: { account: '123456789012', region: 'us-east-1' },
      bucketName: 'test-bucket',
    });
    
    // WHEN
    const template = Template.fromStack(stack);
    
    // THEN
    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketEncryption: Match.objectLike({
        ServerSideEncryptionConfiguration: [
          {
            ServerSideEncryptionByDefault: {
              SSEAlgorithm: 'AES256',
            },
          },
        ],
      }),
    });
  });
  
  test('blocks public access', () => {
    // GIVEN
    const stack = new S3Stack(app, 'TestS3Stack', {
      env: { account: '123456789012', region: 'us-east-1' },
      bucketName: 'test-bucket',
    });
    
    // WHEN
    const template = Template.fromStack(stack);
    
    // THEN
    template.hasResourceProperties('AWS::S3::Bucket', {
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });
  
  test('has retention policy set to RETAIN', () => {
    // GIVEN
    const stack = new S3Stack(app, 'TestS3Stack', {
      env: { account: '123456789012', region: 'us-east-1' },
      bucketName: 'test-bucket',
    });
    
    // WHEN
    const template = Template.fromStack(stack);
    
    // THEN
    template.hasResource('AWS::S3::Bucket', {
      DeletionPolicy: 'Retain',
      UpdateReplacePolicy: 'Retain',
    });
  });
});
```

## Running Tests

```bash
# Run all tests
npm test

# Run a specific test file
npx jest path/to/file.test.ts

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```