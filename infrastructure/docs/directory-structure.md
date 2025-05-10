# Infrastructure Code Directory Structure

This document outlines the directory structure of the infrastructure-v2 codebase and explains the purpose of each major directory.

## Overview

The infrastructure codebase is organized using AWS CDK best practices, with a focus on maintainability, reusability, and clarity.

## Top-Level Structure

```
/
├── bin/                    # CDK application entry point
├── lib/                    # Stack definitions
├── test/                   # Test files
├── docs/                   # Documentation
├── cdk.out/                # Generated CloudFormation templates (git-ignored)
├── node_modules/           # Dependencies (git-ignored)
└── util/                   # Utility functions and shared code
```

## Key Directories Explained

### `/bin`

Contains the entry point for the CDK application. This is where the CDK app is instantiated and stacks are defined.

```typescript
// bin/infrastructure.ts
import { App } from 'aws-cdk-lib';
import { PipelineStack } from '../lib/pipeline-stack';
import { sharedConfig } from '../util/shared-config';

const app = new App();

new PipelineStack(app, 'PipelineStack', {
  env: {
    account: sharedConfig.accountId,
    region: sharedConfig.region,
  },
});

app.synth();
```

### `/lib`

Contains all stack definitions organized by functionality. Each stack is defined in its own file:

- **Stage Definitions**:
  - `app-stage.ts` - Application stage (API, Databases, etc.)
  - `network-stage.ts` - Network stage (VPC, subnets, connectivity)
  - `security-stage.ts` - Security stage (IAM, KMS, etc.)
  - `shared-stage.ts` - Shared resources stage (DNS, etc.)

- **Stack Definitions**:
  - `pipeline-stack.ts` - CI/CD pipeline definition
  - `vpc-stack.ts` - VPC and subnet definitions
  - `aurora-stack.ts` - Aurora database definitions
  - `cognito-stack.ts` - User authentication resources
  - `api-stack.ts` - API Gateway resources
  - `s3-stack.ts` - S3 bucket resources
  - etc.

### `/test`

Contains test files that correspond to the stack definitions in `/lib`. The test files are organized to mirror the structure of the `lib` directory:

```
test/
├── app-stage.test.ts
├── network-stage.test.ts
├── pipeline-stack.test.ts
├── aurora-stack.test.ts
└── ...
```

The primary types of tests are:
- **Snapshot Tests**: Ensure CloudFormation template output is consistent
- **Unit Tests**: Test specific properties of resources in a stack
- **Integration Tests**: Test integration between different stacks

### `/util`

Contains utility functions and configuration that are used across multiple stack definitions:

- `cross-stage-imports.ts` - Utilities for cross-stack references
- `environment-config.ts` - Environment-specific configuration 
- `shared-config.ts` - Configuration shared across all environments
- `policy-statements-for-deploy.ts` - Common IAM policy statements

## CDK Stages and Stacks

The infrastructure is organized into several stages, each containing multiple stacks:

1. **Pipeline Stage**: The self-mutating CI/CD pipeline
2. **Network Stage**: Networking resources for each environment
3. **App Stage**: Application-specific resources for each environment
4. **Security Stage**: Security-related resources for each environment
5. **Shared Stage**: Resources shared across environments

## Best Practices

When adding new stacks or resources, follow these best practices:

1. **Stack Boundaries**: Create new stacks for logically grouped resources
2. **Parameterization**: Use props/context for environment-specific values
3. **Cross-Stack References**: Use stack outputs and imports for cross-stack references
4. **Testing**: Add snapshot tests for new stacks
5. **Documentation**: Update this document if you modify the directory structure

## Common Patterns

### Stack Definition Pattern

```typescript
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface MyStackProps extends StackProps {
  /* Stack-specific properties */
}

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: MyStackProps) {
    super(scope, id, props);

    // Stack resources defined here
  }
}
```

### Stage Definition Pattern

```typescript
import { Stage, StageProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MyStack } from './my-stack';

export interface MyStageProps extends StageProps {
  /* Stage-specific properties */
}

export class MyStage extends Stage {
  constructor(scope: Construct, id: string, props: MyStageProps) {
    super(scope, id, props);

    // Create stacks within this stage
    new MyStack(this, 'MyStack', {
      // Stack properties
    });
  }
}
```