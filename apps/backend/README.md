# Backend API (apps/backend)

This directory contains the NestJS GraphQL API backend for the SaaS Starter Kit. It is built with TypeScript, Apollo Server, and TypeORM (PostgreSQL), and is designed for serverless deployment using the Serverless Framework.

## Overview

The backend provides the core business logic and data access layer for the SaaS application. It exposes a GraphQL API that the frontend application consumes. Key features include:

-   **Framework**: [NestJS](https://docs.nestjs.com/) (TypeScript-based Node.js framework)
-   **API**: [GraphQL](https://graphql.org/learn/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (Code-First approach)
-   **Database**: [PostgreSQL](https://www.postgresql.org/docs/) with [TypeORM](https://typeorm.io/)
-   **Authentication**: AWS Cognito (integration in progress, currently mocked in [`src/auth/auth.service.ts`](src/auth/auth.service.ts))
-   **Deployment**: [Serverless Framework](https://www.serverless.com/) (configuration in [`serverless.yml`](./serverless.yml))

For detailed project setup, monorepo commands, general development workflows, coding standards, contribution guidelines, and project-wide processes (like Jira and release management), please refer to the main project [README.md](../../README.md) and the documents in the root `/docs` directory.

## Development Commands

Ensure you have run `bun install` at the monorepo root. All commands should generally be run from the monorepo root unless specified otherwise.

```bash
# From the monorepo root:
# Start the backend development server (uses serverless-offline)
bun run dev:backend

# --- Backend-Specific Scripts (usually run from apps/backend directory) ---

# Generate GraphQL types from code-first definitions (TypeScript decorators)
# This updates apps/backend/src/schema.gql
cd apps/backend && bun run generate:typings

# Run database migrations (ensure your .env.dev or other relevant .env file is configured)
# For local database (ensure Docker Compose DB is running or local PG is set up)
cd apps/backend && bun run migration:run:local

# For a deployed cloud database (dev, staging, prod - ensure correct AWS_PROFILE and .env)
# Example for development stage:
# AWS_PROFILE=your-dev-profile STAGE=dev bun run migration:run --config serverless.yml
cd apps/backend && bun run migration:run # (Ensure environment variables like STAGE and AWS_PROFILE are set)

# Run backend tests
bun run test --filter=backend
```

## Project Structure

The backend follows a feature-based module organization as per NestJS conventions.
-   **`src/`**: Contains all source code.
    -   [`app.module.ts`](src/app.module.ts): The root module of the application.
    -   [`main.ts`](src/main.ts): Entry point for standalone NestJS application.
    -   [`main-serverless.ts`](src/main-serverless.ts): Entry point for Serverless Framework deployment.
    -   [`auth/`](src/auth): Authentication module (Cognito integration).
    -   [`config/`](src/config): Application configuration setup.
    -   `database/`: Database related code, including TypeORM entities and migrations (if used).
    -   `feature-modules/`: Placeholder for your business-specific feature modules.
    -   `common/`: Shared utilities, decorators, etc.
-   **`docs/`**: Backend-specific documentation.
    -   [`directory-structure.md`](docs/directory-structure.md)
    -   [`testing-guidelines.md`](docs/testing-guidelines.md)
    -   [`API_DESIGN.md`](docs/API_DESIGN.md)
    -   [`ARCHITECTURE_PATTERNS.md`](docs/ARCHITECTURE_PATTERNS.md)
-   **`test/`**: End-to-end and integration tests.
-   [`serverless.yml`](./serverless.yml): Serverless Framework configuration for deployment.
-   [`Dockerfile`](./Dockerfile): For containerizing the application (primarily for local development with Docker Compose).

## GraphQL IDE (Apollo Sandbox)

When the backend is running locally (e.g., via `bun run dev:backend`, which typically uses `serverless-offline`), the Apollo Sandbox GraphQL IDE is usually available at:
`http://localhost:3000/graphql` (or the port configured for `serverless-offline` in `serverless.yml`).

For deployed environments (dev, staging, production), the GraphQL endpoint will be specific to that environment. Refer to the deployment outputs or environment configuration for the exact URL.

## Environment Variables

The backend requires specific environment variables for its operation, particularly for database connections and Cognito integration. These are typically managed via `.env.<stage>` files (e.g., [`apps/backend/.env.dev`](./.env.dev), `.env.staging`) which are loaded by the `@nestjs/config` module. Refer to [`apps/backend/.env.example`](./.env.example) for required variables.
Key variables include:
-   `NODE_ENV`: Set by Serverless Framework based on the stage.
-   `DATABASE_URL`: Connection string for PostgreSQL.
-   `COGNITO_USER_POOL_ID`: AWS Cognito User Pool ID.
-   `COGNITO_CLIENT_ID`: AWS Cognito App Client ID.
-   `SENTRY_DSN` (Optional): For Sentry error tracking.

Ensure these are correctly configured for the environment you are targeting. For cloud environments, these are often sourced from AWS Parameter Store or Secrets Manager, configured via [`serverless.yml`](./serverless.yml).
