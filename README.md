# SaaS Starter Kit: Monorepo Edition

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- TODO: Add build status, coverage, and other relevant badges -->

Welcome to the SaaS Starter Kit! This project provides a comprehensive, production-ready foundation for building modern, scalable Software-as-a-Service (SaaS) applications. It features a monorepo structure powered by Turborepo and Bun, a universal frontend application built with React Native/Expo, a robust NestJS backend with GraphQL, and infrastructure-as-code using AWS CDK.

## ✨ Core Features

-   **Monorepo Architecture**: Managed with [Turborepo](https://turborepo.org/) and [Bun](https://bun.sh/) for optimized builds, efficient dependency management, and a streamlined developer experience across multiple packages and applications.
-   **Universal Frontend**: A single [React Native](https://reactnative.dev/) codebase using [Expo](https://expo.dev/) to build applications for iOS, Android, and the Web.
    -   **UI & Styling**: [Gluestack UI v2](https://gluestack.io/ui/docs/overview/introduction) component library with [NativeWind](https://www.nativewind.dev/) for Tailwind CSS utility-first styling.
    -   **Navigation**: [Expo Router](https://expo.github.io/router/docs/) for file-system based routing.
    -   **API Communication**: [Apollo Client](https://www.apollographql.com/docs/react/) for interacting with the GraphQL backend.
-   **Scalable Backend**: A [NestJS](https://nestjs.com/) API built with:
    -   **GraphQL**: [Apollo Server](https://www.apollographql.com/docs/apollo-server/) using a code-first schema approach.
    -   **Database**: [PostgreSQL](https://www.postgresql.org/) integration via [TypeORM](https://typeorm.io/).
    -   **Deployment**: Configured for serverless deployment using the [Serverless Framework](https://www.serverless.com/).
-   **Authentication**: Secure user authentication and management via [AWS Cognito](https://aws.amazon.com/cognito/).
-   **Infrastructure as Code (IaC)**: Manage and deploy your AWS infrastructure repeatably and reliably using the [AWS CDK (Cloud Development Kit)](https://aws.amazon.com/cdk/).
-   **Developer Experience**:
    -   End-to-end [TypeScript](https://www.typescriptlang.org/) for robust type safety.
    -   Pre-configured linting with [ESLint](https://eslint.org/) and code formatting with [Prettier](https://prettier.io/).
    -   Shared configurations for TypeScript, ESLint, and Prettier located in the `packages/` directory.
    -   Unit and integration testing setup with [Jest](https://jestjs.io/).
-   **(Planned) Multi-Tenancy**: Architectural considerations for organization-based multi-tenancy.
-   **(Planned) Role-Based Access Control (RBAC)**: Foundation for a flexible permission system.

## 🛠️ Technology Stack

-   **Monorepo Management**: [Turborepo](https://turborepo.org/), [Bun](https://bun.sh/)
-   **Frontend**:
    -   Core: [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), [Expo Router](https://expo.github.io/router/docs/)
    -   UI: [Gluestack UI v2](https://gluestack.io/ui/docs/overview/introduction)
    -   Styling: [NativeWind v4](https://www.nativewind.dev/), [Tailwind CSS](https://tailwindcss.com/)
    -   Data: [Apollo Client](https://www.apollographql.com/docs/react/) (for GraphQL)
-   **Backend**:
    -   Framework: [NestJS](https://nestjs.com/)
    -   API: [GraphQL](https://graphql.org/learn/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
    -   ORM: [TypeORM](https://typeorm.io/)
    -   Database: [PostgreSQL](https://www.postgresql.org/docs/)
    -   Deployment: [Serverless Framework](https://www.serverless.com/)
-   **Authentication**: [AWS Cognito](https://aws.amazon.com/cognito/)
-   **Infrastructure**: [AWS CDK (Cloud Development Kit)](https://aws.amazon.com/cdk/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Linting & Formatting**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
-   **Testing**: [Jest](https://jestjs.io/), (Planned: Playwright for E2E)
-   **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

Ensure the following tools are installed and configured on your system:

-   **[Bun](https://bun.sh/docs/installation)**: v1.0.0 or higher.
-   **[Node.js](https://nodejs.org/)**: v18 or v20 (LTS versions recommended). Use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.
-   **[Git](https://git-scm.com/)**: For version control.
-   **[Docker](https://www.docker.com/get-started)**: For running local development services (e.g., PostgreSQL database for the backend).
-   **[AWS CLI](https://aws.amazon.com/cli/)**: Configured with appropriate AWS credentials.
-   **[AWS CDK Toolkit](https://aws.amazon.com/cdk/)**: v2 or higher (`npm install -g aws-cdk`).

### Installation & Setup

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-org/saas-starter.git my-saas-app
    cd my-saas-app
    ```
    *(Replace `your-org/saas-starter.git` with your actual repository URL)*

2.  **Install Dependencies:**
    From the root of the monorepo, run:
    ```bash
    bun install
    ```
    This installs dependencies for all workspaces.

3.  **Environment Configuration:**
    -   **Root `.env`:** Copy `.env.example` to `.env` at the project root. Update with `TURBO_TOKEN` and `TURBO_TEAM` if using Turborepo Remote Caching.
    -   **Frontend (`apps/frontend`):**
        -   Copy `apps/frontend/.env.example` to `apps/frontend/.env.local` (for local development).
        -   Set `EXPO_PUBLIC_GRAPHQL_BASE_URL` (e.g., `http://localhost:3000/graphql` or your deployed backend URL).
        -   Update `EXPO_PUBLIC_SENTRY_DSN` if using Sentry.
        -   **Important**: Update the EAS Project ID in [`apps/frontend/eas.json`](apps/frontend/eas.json) and potentially in [`apps/frontend/app.config.ts`](apps/frontend/app.config.ts).
    -   **Backend (`apps/backend`):**
        -   Copy `apps/backend/.env.example` to `apps/backend/.env.dev` (used by `serverless-offline`).
        -   Set `DATABASE_URL` (e.g., `postgresql://postgres:postgres@localhost:5432/saas_starter_db` for the local Docker setup).
        -   `COGNITO_USER_POOL_ID` and `COGNITO_CLIENT_ID` will be outputs from your Cognito CDK stack deployment.
        -   Update `SENTRY_DSN` if using Sentry.

4.  **AWS Setup (for cloud deployments):**
    -   Configure your AWS CLI with SSO or IAM credentials: `aws configure sso` (recommended) or `aws configure`.
    -   If your organization uses an AWS VPN for specific environments, ensure it's connected.

5.  **(Optional) Local Database with Docker:**
    A `docker-compose.yml` is provided in [`apps/backend/`](apps/backend/docker-compose.yml) for a local PostgreSQL instance.
    ```bash
    # From the apps/backend directory
    docker-compose up -d
    ```

## 🏗️ Project Structure

The monorepo is organized to promote separation of concerns and scalability:

-   **`apps/`**: Contains the deployable applications.
    -   [`frontend/`](./apps/frontend/README.md): Expo universal application (iOS, Android, Web).
    -   [`backend/`](./apps/backend/README.md): NestJS GraphQL API.
-   **`docs/`**: Project-level documentation, including architecture, development guides, and decision records.
    -   [`CONTRIBUTING.md`](./CONTRIBUTING.md): Guidelines for contributing.
    -   *(Links to other key documents like `CODING_STANDARDS.md`, `WORKFLOWS.md` will be added here as they are created).*
-   **`infrastructure/`**: AWS CDK code for defining and provisioning cloud infrastructure. See [`infrastructure/README.md`](./infrastructure/README.md).
-   **`packages/`**: Shared TypeScript packages.
    -   [`config/`](./packages/config/README.md): Shared runtime configurations (e.g., branding).
    -   [`eslint-config/`](./packages/eslint/README.md): Shared ESLint configurations.
    -   [`prettier-config/`](./packages/prettier/README.md): Shared Prettier configuration.
    -   [`tsconfig/`](./packages/tsconfig/README.md): Shared TypeScript base configurations.
-   **`scripts/`**: Utility scripts for automation and development tasks. See [`scripts/README.md`](./scripts/README.md).

## 💻 Development Workflow

Execute commands from the **root of the monorepo** using `bun run <script>`.

### Core Monorepo Scripts

-   **Start all apps in development mode:** `bun run dev`
-   **Lint all code:** `bun run lint`
-   **Format all code:** `bun run format`
-   **Run all tests:** `bun run test`
-   **Build all apps and packages:** `bun run build`
-   **Type check all packages:** `bun run typecheck`
-   **Clean build artifacts & caches:** `bun run clean`

### Application-Specific Development

-   **Frontend:**
    -   Dev server (Expo Go, Web): `bun run dev:frontend` or `bun run dev:web`
    -   iOS simulator: `bun run dev:ios`
    -   Android emulator: `bun run dev:android`
    -   Environment-specific start: `bun start:local-frontend` (see [`apps/frontend/README.md`](apps/frontend/README.md))
    -   Generate GraphQL types: `bun generate:types:frontend`
-   **Backend:**
    -   Dev server (NestJS + Serverless Offline): `bun run dev:backend`
    -   GraphQL Playground/Sandbox: `http://localhost:3000/graphql` (or configured port)
    -   Generate GraphQL schema/types: `cd apps/backend && bun run generate:typings`
    -   Database migrations: `cd apps/backend && bun run migration:run:local` (or `migration:run` for cloud)

Refer to individual app READMEs in `apps/` for more detailed commands.

## 🛠️ Tooling & IDE

-   **VS Code**: Recommended. Install workspace-recommended extensions (prompt on open or check `.vscode/extensions.json`). Key extensions include ESLint, Prettier, GraphQL, Apollo Client Devtools, Jest.
-   **Prettier**: Configured via [`packages/prettier-config`](./packages/prettier/README.md). Enable "Format on Save" in VS Code.

## 📦 Shared Configurations

Shared configurations ensure consistency across the monorepo:
-   **ESLint**: [`packages/eslint-config`](./packages/eslint/README.md)
-   **Prettier**: [`packages/prettier-config`](./packages/prettier/README.md)
-   **TypeScript**: [`packages/tsconfig`](./packages/tsconfig/README.md)
-   **Runtime Config**: [`packages/config`](./packages/config/README.md) (for branding, etc.)

See each package's README for usage details.

## ☁️ Deployment

-   **Infrastructure (AWS CDK)**: From [`infrastructure/`](./infrastructure/README.md):
    ```bash
    cd infrastructure
    # bun run cdk bootstrap --profile <aws-profile> # If first time
    bun run deploy:<dev|staging|prod>
    ```
-   **Backend API (Serverless Framework)**: From [`apps/backend/`](apps/backend/README.md):
    ```bash
    cd apps/backend
    bun run deploy:<dev|staging|prod>
    ```
-   **Frontend App (Expo EAS)**: From [`apps/frontend/`](apps/frontend/README.md):
    ```bash
    cd apps/frontend
    eas build -p <android|ios|all> --profile <development|preview|production>
    eas submit -p <ios|android> --profile <production> --latest
    ```
    Web builds (`bun run build:web` in `apps/frontend`) are deployed to static hosting.

## 🤝 Contributing

Contributions are welcome! Please review our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on commit messages, the PR process, coding standards, and more.
*(Note: `CONTRIBUTING.md` will be created/populated with content moved from `apps/backend/README.md` in a separate step/task).*

## 📚 Further Documentation

-   [Backend Documentation Index](./apps/backend/docs/README.md)
-   [Frontend Documentation Index](./apps/frontend/docs/README.md)
-   [Infrastructure Documentation Index](./infrastructure/docs/README.md)
-   *(More specific guides like CODING_STANDARDS.md, WORKFLOWS.md, etc., will be added to the `/docs` directory and linked here).*

## 🧰 Troubleshooting

-   **Stale Cache/Build Issues**:
    ```bash
    bun run clean
    rm -rf node_modules bun.lockb apps/*/node_modules apps/*/bun.lockb packages/*/node_modules packages/*/bun.lockb
    bun install
    ```
-   **Type Errors**: Run `bun run typecheck` to identify TypeScript issues.
-   **Environment Variables**: Double-check `.env` files in the root and app directories.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.# SaasStarter
