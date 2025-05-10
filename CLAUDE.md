# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@docs/ARCHITECTURE.md
@docs/MONOREPO_STRUCTURE.md
@apps/backend/docs/ARCHITECTURE_PATTERNS.md
@apps/backend/docs/API_DESIGN.md
@apps/backend/docs/DATABASE_PATTERNS.md
@apps/frontend/docs/ui-component-architecture.md
@apps/frontend/docs/directory-structure.md
@infrastructure/docs/SOC2.md

## Project Overview

This is a micro-SaaS starter kit organized as a monorepo with three main components:

1. **Backend (`backend-v2/`)**: NestJS GraphQL API with TypeORM, Cognito authentication, and serverless architecture
2. **Frontend (`frontend-v2/`)**: React Native with Expo for cross-platform (web, iOS, Android) support
3. **Infrastructure (`infrastructure-v2/`)**: AWS CDK for infrastructure as code with multi-environment support

The project provides a foundation for building multi-tenant SaaS applications with core features like user management, organization management, and role-based access control.

## Key Commands

### Backend Commands (`backend-v2/`)

```bash
cd backend-v2

# Install dependencies
yarn install

# Start development server
yarn start:dev

# Run tests
yarn test
yarn test:watch
yarn test:cov

# Lint code
yarn lint

# Format code
yarn format

# Generate GraphQL types
yarn generate-typings

# Database migrations
yarn db:migrate
yarn db:migrate:create

# Deploy to environments
yarn deploy:dev
yarn deploy:staging
yarn deploy:prod
```

### Frontend Commands (`frontend-v2/`)

```bash
cd frontend-v2

# Install dependencies
npm install

# Start development
npm start             # Start Expo development server
npm run android       # Start for Android
npm run ios           # Start for iOS
npm run web           # Start for web

# Testing
npm run test

# Linting
npm run lint
npm run lint:fix

# Build web application
npm run build:web

# Generate new component
npm run generate-component ComponentName
```

### Infrastructure Commands (`infrastructure-v2/`)

```bash
cd infrastructure-v2

# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run watch

# Test
npm test
npx jest path/to/test.test.ts

# Lint
npx eslint "{lib,test}/**/*.ts" --fix

# Format
npx prettier --write "{lib,test}/**/*.ts"

# CDK Operations
npx cdk synth <stack-name>
npx cdk deploy <stack-name>
npx cdk diff <stack-name>
npx cdk ls
```

## Architecture Overview

### Backend Architecture

- **NestJS**: Modular architecture with decorators
- **GraphQL**: Schema-first approach with SDL in `.graphql` files
- **Authentication**: AWS Cognito with JWT token validation
- **Database**: PostgreSQL with TypeORM entities
- **Caching**: Redis for performance optimization
- **Deployment**: Serverless Framework on AWS Lambda

### Frontend Architecture

- **React Native**: With Expo for cross-platform support
- **Navigation**: Expo Router for unified navigation
- **State Management**: React Hooks and Context API
- **API**: Apollo Client for GraphQL communication
- **UI Components**: Custom components with Container/View pattern
- **Styling**: TailwindCSS with NativeWind for consistent styling

### Infrastructure Architecture

- **AWS CDK**: Infrastructure as code
- **Multi-environment**: Development, Staging, Production
- **Key Services**:
  - Cognito for authentication
  - API Gateway for API endpoints
  - Lambda for serverless compute
  - RDS PostgreSQL for database
  - ElastiCache for Redis caching
  - SES for email delivery

## Development Patterns

### Backend Module Structure

Each feature module follows this structure:
- `module.ts` - NestJS module definition
- `service.ts` - Business logic
- `resolver.ts` - GraphQL resolver (API endpoints)
- `dto.ts` - Data transfer objects
- `graphql` - GraphQL schema definition

### Frontend Component Pattern

Components follow the Container/View pattern:
- `ComponentNameContainer.tsx`: Contains business logic
- `ComponentNameView.tsx`: Contains presentation logic
- `index.tsx`: Exports the Container component

### Multi-tenancy Approach

- Shared database with tenant ID pattern
- Tenant context middleware for request isolation
- Organization-based access control

## Authentication Flow

1. User authenticates with Cognito and receives JWT tokens
2. Tokens are sent in Authorization header for API requests
3. Backend validates tokens and extracts user information
4. Role-based permissions are enforced on resolvers

## Testing Strategy

- **Unit Tests**: Testing isolated components
- **Integration Tests**: Testing component interactions
- **E2E Tests**: Testing full user flows
- **CI/CD**: Automated testing in deployment pipeline

## Code Style Guidelines

- Use TypeScript with strict typing
- Follow the Single Responsibility Principle
- Keep files and functions small and focused
- Use descriptive naming conventions
- Document complex logic with comments
- Follow immutable patterns where possible

## Core Features

- **User Management**: Registration, authentication, profiles
- **Organization Management**: Multi-tenant organizations
- **Invitations**: Email-based user invitations
- **Role-Based Access**: User roles and permissions
- **GraphQL API**: Strongly-typed API endpoints

## Project Status

This project is transitioning from a sports analytics platform to a generic SaaS starter kit, with planned enhancements:
- Subscription/billing management
- SSO integration
- Enhanced audit logging
- API rate limiting
- Generic dashboard framework