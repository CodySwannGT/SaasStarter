# AWS CDK Coding Standards

This document outlines the coding standards for the infrastructure codebase, focusing on AWS CDK best practices, TypeScript guidelines, and project-specific conventions.

## TypeScript Standards

### General

- Use TypeScript strict mode
- Explicitly type all function parameters and return values
- Avoid using `any` type - use specific types or `unknown` if necessary
- Use immutable programming patterns and avoid state mutation
- Keep functions small (under 50 lines) and focused on a single task
- Keep files under 300 lines - split larger files into smaller modules

### Formatting

- 2-space indentation
- 80 character line length limit
- Double quotes for strings
- Trailing commas in multi-line arrays and objects
- Semi-colons at the end of statements
- Use the project's eslint and prettier configuration

### Naming Conventions

- **Variables/Functions**: `camelCase`
- **Classes/Interfaces/Types**: `PascalCase`
- **Stack Classes**: `PascalCase` with `Stack` suffix (e.g., `VpcStack`)
- **Stage Classes**: `PascalCase` with `Stage` suffix (e.g., `NetworkStage`)
- **Constants**: `UPPER_SNAKE_CASE` for truly constant values
- **Interfaces**: Prefix with `I` for interfaces representing complex objects
- **Props Interfaces**: Suffix with `Props` (e.g., `VpcStackProps`)

### File Organization

- One class per file for stack and construct definitions
- Name files after the main class they contain
- Group related functionality in directories
- Import statements in logical groups (external libraries first, then internal)
- Variables defined first, followed by functions, then class declarations

## AWS CDK Best Practices

### Stack Organization

- Organize stacks by functionality, not by environment
- Use environment-agnostic stacks with environment-specific props
- Group related resources in the same stack
- Use cross-stack references for dependencies between stacks
- Apply proper resource tagging for all resources

### Resource Naming

- Use consistent resource naming across all stacks
- Follow the format: `{service}-{purpose}-{environment}`
- Include environment name as a suffix for most resources
- Use kebab-case for physical resource names
- Ensure globally unique names for S3 buckets, CloudFront distributions, etc.

### Constructs

- Prefer AWS CDK L2 constructs over L1 whenever available
- Create custom constructs for reusable patterns
- Pass configuration through props instead of hard-coding
- Document props interfaces thoroughly
- Validate inputs at construct initialization time

### Security

- Apply least privilege principle for all IAM roles
- Explicitly configure all security-related properties
- Never commit secrets to the repository - use AWS Secrets Manager
- Encrypt sensitive data at rest and in transit
- Use security groups with minimal permissions

### IAM Policies

- Create granular IAM policies with minimum required permissions
- Use condition keys to restrict permissions further
- Avoid using `*` in resource ARNs and actions
- Comment IAM policies to explain their purpose
- Use managed policies only when you understand all of their permissions

## CDK-Specific Patterns

### Stack Props Pattern

```typescript
export interface MyStackProps extends StackProps {
  // Resource-specific parameters
  bucketName: string;
  // References to other stack outputs
  vpcId: string;
  // Optional parameters with defaults
  enableLogging?: boolean;
}
```

### Resource Creation Pattern

```typescript
// Create resources with explicit configuration
const bucket = new s3.Bucket(this, 'MyBucket', {
  bucketName: props.bucketName,
  encryption: s3.BucketEncryption.S3_MANAGED,
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  removalPolicy: RemovalPolicy.RETAIN,
  versioned: true,
});

// Add tags to resources
Tags.of(bucket).add('Environment', props.environment);
Tags.of(bucket).add('Service', 'MyService');
```

### Cross-Stack References Pattern

```typescript
// In producer stack
new CfnOutput(this, 'BucketNameOutput', {
  value: bucket.bucketName,
  exportName: `${this.stackName}-BucketName`,
});

// In consumer stack
const bucketName = Fn.importValue(`${producerStackName}-BucketName`);
```

### Environment-Specific Configuration

```typescript
// In Stack
const config = props.environmentConfig[props.environment];
const instance = new ec2.Instance(this, 'Instance', {
  instanceType: new ec2.InstanceType(config.instanceType),
  machineImage: ec2.MachineImage.lookup({
    name: config.amiName,
  }),
  vpc: props.vpc,
});
```

## Testing Standards

### Snapshot Tests

```typescript
test('VPC Stack creates expected resources', () => {
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

### Unit Tests

```typescript
test('Bucket has versioning enabled', () => {
  // GIVEN
  const app = new cdk.App();
  
  // WHEN
  const stack = new S3Stack(app, 'TestS3Stack', {
    env: { account: '123456789012', region: 'us-east-1' },
    bucketName: 'test-bucket',
  });
  
  // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::S3::Bucket', {
    VersioningConfiguration: {
      Status: 'Enabled',
    },
  });
});
```

## Code Documentation

- Document complex constructs and configurations
- Explain the purpose of custom resources
- Add comments for non-obvious behavior or workarounds
- Use JSDoc-style comments for classes and methods

```typescript
/**
 * Creates a VPC stack with public and private subnets.
 * 
 * @param scope The parent construct
 * @param id The construct ID
 * @param props Stack properties including CIDR range
 */
export class VpcStack extends Stack {
  constructor(scope: Construct, id: string, props: VpcStackProps) {
    // Implementation
  }
}
```

## Additional Guidelines

- Use CDK context values for values needed at synthesis time
- Use environment variables for values needed at deployment time
- Follow immutable infrastructure principles - replace resources instead of modifying them
- Avoid using raw CloudFormation templates or `CfnResource` when possible
- Centralize configuration in the `util` directory
- Keep the CDK app entry point simple - delegate complexity to stacks and constructs