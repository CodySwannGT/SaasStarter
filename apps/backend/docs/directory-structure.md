# NestJS Backend Directory Structure

This document provides an overview of our NestJS backend project structure, explaining the organization of modules, serverless functions, and AWS resources.

## Project Structure

```
backend-v2/
├── .github/               # GitHub workflows and settings
├── .husky/                # Git hooks
├── docs/                  # Documentation files
├── src/                   # Application source code
│   ├── @types/            # Global TypeScript type definitions
│   ├── app.module.ts      # Root application module
│   ├── auth/              # Authentication module
│   ├── common/            # Shared utilities, decorators, and helpers
│   ├── config/            # Configuration modules for different services
│   ├── database/          # Database-related code
│   │   ├── entities/      # TypeORM entity definitions
│   │   ├── migrations/    # Database migrations
│   │   └── repositories/  # TypeORM repositories
│   ├── feature-modules/   # Domain-specific feature modules
│   ├── graphql.ts         # GraphQL setup
│   └── main.ts            # Application entry point
├── test/                  # Test files
├── serverless.yml         # Serverless Framework configuration
└── tsconfig.json          # TypeScript configuration
```

## Module Organization

We follow NestJS's modular architecture pattern where each feature or domain concept is encapsulated in its own module.

### Module Structure

Each feature module follows this structure:

```
feature-name/
├── feature-name.module.ts       # Module definition
├── feature-name.service.ts      # Business logic
├── feature-name.resolver.ts     # GraphQL resolvers (for GraphQL API)
├── feature-name.controller.ts   # REST controllers (if applicable)
├── feature-name.graphql         # GraphQL schema definitions
├── dto/                         # Data Transfer Objects
│   ├── input.dto.ts             # Input types
│   └── output.dto.ts            # Output types
├── entities/                    # Entity definitions (if not in global entities)
└── interfaces/                  # TypeScript interfaces
```

## Serverless Functions Organization

Our application is deployed as serverless functions defined in `serverless.yml`.

### Function Types

1. **GraphQL API Handler**: Main API entry point that handles GraphQL requests
2. **Background Workers**: Functions triggered by events or schedule
3. **Webhooks**: HTTP endpoints that handle external service callbacks

### Serverless Configuration Structure

The `serverless.yml` file organizes functions by their purpose:

```yaml
functions:
  # Main GraphQL API entry point
  graphql:
    handler: src/handlers/graphql.handler
    events:
      - http:
          path: /graphql
          method: post
          cors: true

  # Background Workers
  processData:
    handler: src/handlers/process-data.handler
    events:
      - sqs:
          arn: ${self:custom.sqsArn}

  # Scheduled Tasks
  dailyReport:
    handler: src/handlers/daily-report.handler
    events:
      - schedule: cron(0 0 * * ? *)
```

## AWS Resources Configuration

AWS resources are declared in the `resources` section of `serverless.yml`:

```yaml
resources:
  Resources:
    # DynamoDB Tables
    UserTable:
      Type: AWS::DynamoDB::Table
      Properties: ...

    # S3 Buckets
    DataBucket:
      Type: AWS::S3::Bucket
      Properties: ...

    # SQS Queues
    ProcessingQueue:
      Type: AWS::SQS::Queue
      Properties: ...
```

## NestJS and Serverless Integration

NestJS applications are traditionally designed to run as long-lived processes. To adapt NestJS to serverless environments:

1. **Bootstrap Adaptation**: We modify the way NestJS bootstraps to handle serverless cold starts and warm reuse
2. **Handler Wrapping**: Each Lambda handler initializes or reuses a NestJS application instance
3. **Context Preservation**: We maintain request context across asynchronous operations

Example of a Lambda handler:

```typescript
// src/handlers/graphql.handler.ts
import { Server } from "../server";
import { Context, APIGatewayProxyEvent } from "aws-lambda";
import { createHandler } from "@vendia/serverless-express";

let server: Server;
let serverlessHandler: ReturnType<typeof createHandler>;

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  if (!server) {
    server = new Server();
    await server.bootstrap();
    serverlessHandler = createHandler(server.getApp());
  }

  return serverlessHandler(event, context);
};
```

## Best Practices

1. **Single Responsibility**: Each module should handle one feature or domain concept
2. **Clear Boundaries**: Modules should have clear boundaries and well-defined interfaces
3. **Dependency Injection**: Use NestJS's dependency injection to manage dependencies
4. **Repository Pattern**: Use repositories to abstract database access
5. **Command-Query Separation**: Separate commands (write operations) from queries (read operations)
6. **Environment-Specific Configuration**: Use environment variables for different deployment stages
