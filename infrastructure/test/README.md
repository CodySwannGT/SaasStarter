# Testing AWS CDK Infrastructure

This directory contains tests for the AWS CDK infrastructure components. The tests use the CDK Assertions module to validate that the generated CloudFormation templates have the expected resources and properties.

## Testing Approach

For CDK infrastructure, we focus on the following types of tests:

1. **Unit Tests**: Test individual constructs or stacks in isolation
2. **Integration Tests**: Test how constructs or stacks interact with each other
3. **Snapshot Tests**: Ensure that the CloudFormation template hasn't changed unexpectedly

## Test Framework

We use Jest as our test framework, and the AWS CDK Assertions module for validating templates.

## Writing Tests

### Basic Structure

```typescript
import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../lib/my-stack';

describe('MyStack', () => {
  test('Contains Expected Resources', () => {
    // ARRANGE
    const app = new App();
    const stack = new MyStack(app, 'MyTestStack');
    
    // ACT
    const template = Template.fromStack(stack);
    
    // ASSERT
    template.resourceCountIs('AWS::S3::Bucket', 1);
  });
});
```

### Assertions

The CDK Assertions module provides several methods for validating templates:

- `template.resourceCountIs(resourceType, count)`: Asserts the number of resources of a given type
- `template.hasResourceProperties(resourceType, properties)`: Checks resource properties
- `template.hasResource(resourceType, properties)`: Checks logical ID and/or resource properties
- `template.findResources(resourceType)`: Returns resources of a given type
- `template.hasOutput(outputName, props)`: Validates stack outputs

### Snapshot Testing

Snapshot tests compare the current template to a previously saved version to detect unexpected changes:

```typescript
test('Stack matches snapshot', () => {
  const app = new App();
  const stack = new MyStack(app, 'MyTestStack');
  
  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
```

## Running Tests

You can run the tests using npm:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:cov

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

## Best Practices

1. **Isolate tests**: Each test should be independent and not rely on the state of other tests
2. **Test one thing at a time**: Each test should focus on validating a specific aspect of the infrastructure
3. **Use descriptive names**: Test names should clearly describe what is being tested
4. **Follow the AAA pattern**: Arrange, Act, Assert
5. **Focus on behavior, not implementation**: Test what resources are created, not how they are created
6. **Check security configurations**: Always verify IAM roles, security groups, and encryption settings

## Example Test Cases

- Verify that a stack creates the expected number and type of resources
- Check that resources have required properties (e.g., encryption, versioning)
- Validate IAM roles have the minimum necessary permissions
- Ensure security groups only allow necessary traffic
- Verify that resources are properly tagged
- Check that dependencies between resources are correctly defined