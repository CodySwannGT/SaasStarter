# Applications (apps/)

This directory contains the main, deployable applications within the SaaS Starter Kit monorepo.

## Applications

-   **[`frontend/`](./frontend/README.md)**: The Expo-based universal frontend application, targeting iOS, Android, and Web. It is built with React Native, Gluestack UI, NativeWind, and Apollo Client.
-   **[`backend/`](./backend/README.md)**: The NestJS GraphQL API backend, using Apollo Server, TypeORM (PostgreSQL), and AWS Cognito for authentication. It is designed for serverless deployment.

## Development

Each application has its own specific development scripts and configurations detailed in its respective README file. However, common monorepo-wide commands for building, linting, testing, and running applications in development mode are managed by Turborepo and should be executed from the project root.

For overall project setup, monorepo commands, and contribution guidelines, please refer to the main project [README.md](../README.md).