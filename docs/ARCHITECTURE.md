# SaaS Starter Kit Architecture

This document provides a comprehensive overview of the architecture used in our SaaS Starter Kit.

## Overview

The SaaS Starter Kit is built as a monorepo using Turborepo, providing a complete, production-ready foundation for building multi-tenant SaaS applications with:

- Backend API using NestJS and GraphQL
- Frontend using React Native with Expo (web and mobile)
- Infrastructure as Code using AWS CDK
- Authentication with AWS Cognito
- Subscription management with RevenueCat
- Monitoring with Sentry and Google Analytics

## Architecture Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                     SaaS Application                            │
│                                                                │
│  ┌───────────┐    ┌───────────┐    ┌───────────────────────┐   │
│  │  Frontend │    │  Backend  │    │     Infrastructure    │   │
│  │           │    │           │    │                       │   │
│  │  React    │    │  NestJS   │    │     AWS CDK           │   │
│  │  Native   │◄───►  GraphQL  │◄───►     Terraform         │   │
│  │  Expo     │    │  API      │    │                       │   │
│  └───────────┘    └───────────┘    └───────────────────────┘   │
│        ▲                ▲                     ▲                │
└────────┼────────────────┼─────────────────────┼────────────────┘
         │                │                     │
┌────────┼────────────────┼─────────────────────┼────────────────┐
│        │                │                     │                │
│  ┌─────▼──────┐   ┌─────▼──────┐      ┌──────▼────────┐       │
│  │ Auth       │   │ Data       │      │ Deployment    │       │
│  │            │   │            │      │               │       │
│  │ AWS        │   │ PostgreSQL │      │ CI/CD         │       │
│  │ Cognito    │   │ TypeORM    │      │ GitHub        │       │
│  └────────────┘   └────────────┘      └───────────────┘       │
│                                                               │
│  ┌────────────┐   ┌────────────┐      ┌───────────────┐       │
│  │ Payments   │   │ Monitoring │      │ Email         │       │
│  │            │   │            │      │               │       │
│  │ RevenueCat │   │ Sentry     │      │ AWS SES       │       │
│  │            │   │ GA4        │      │               │       │
│  └────────────┘   └────────────┘      └───────────────┘       │
│                                                               │
└───────────────────────────────────────────────────────────────┘
                External Services & Infrastructure
```

## Monorepo Structure

The project is organized as a monorepo using Turborepo for build optimization and dependency management:

```
saas-starter/
├── apps/
│   ├── backend/        # NestJS GraphQL API
│   └── frontend/       # React Native with Expo
├── packages/
│   ├── ui/             # Shared UI components
│   ├── config/         # Configuration utilities
│   ├── auth/           # Authentication utilities
│   └── types/          # Shared TypeScript types
├── infrastructure/     # AWS CDK definitions
├── docs/               # Documentation
└── scripts/            # Utility scripts
```

### Key Components

1. **Frontend (`apps/frontend/`)**
   - React Native with Expo for cross-platform (web, iOS, Android)
   - Apollo Client for GraphQL communication
   - Expo Router for navigation
   - State management with React Query and context
   - RevenueCat for subscription management

2. **Backend (`apps/backend/`)**
   - NestJS framework with GraphQL API
   - TypeORM for database interactions
   - Multi-tenancy implemented at the database level
   - Role-based access control
   - Organizations and invitations system

3. **Shared Packages**
   - **UI (`packages/ui/`)**: Design system and component library
   - **Config (`packages/config/`)**: Shared configuration
   - **Auth (`packages/auth/`)**: Authentication utilities
   - **Types (`packages/types/`)**: Shared TypeScript types

4. **Infrastructure (`infrastructure/`)**
   - AWS CDK for infrastructure as code
   - Multi-environment deployment (dev, staging, prod)
   - Cognito user pools for authentication
   - RDS PostgreSQL database
   - API Gateway and Lambda for backend

## Multi-Tenancy

The SaaS Starter Kit uses a shared database with tenant ID approach for multi-tenancy:

1. Each organization has a unique tenant ID
2. All database queries are automatically filtered by tenant ID
3. Tenant isolation is enforced at the application layer

### Implementation Details

1. **Database Structure**
   - All multi-tenant tables include a `tenantId` column
   - Foreign key relationships respect tenant boundaries
   - Indexes include `tenantId` for query optimization

2. **Request Processing**
   - Tenant context is extracted from JWT tokens
   - Middleware injects tenant ID into the request context
   - Query builders automatically add tenant filters

3. **Cross-Tenant Operations**
   - Super admin role for cross-tenant administration
   - Audit logging for cross-tenant operations
   - Strict validation for tenant-switching operations

## Authentication Flow

The authentication system leverages AWS Cognito with the following flow:

1. **User Registration**
   - User signs up via frontend form
   - Account creation in Cognito user pool
   - Verification email sent via AWS SES
   - User confirms email to activate account

2. **Login Process**
   - User submits credentials to frontend
   - Frontend authenticates against Cognito
   - Tokens stored in secure storage
   - User profile loaded from backend API

3. **Token Management**
   - JWT tokens for authentication
   - Automatic token refresh
   - Secure token storage (AsyncStorage, Keychain)
   - Token invalidation on logout

4. **SSO & Social Integration**
   - Google and Apple login support
   - JWT token exchange for Cognito tokens
   - Unified profile system regardless of login method

## Subscription Management

Subscription handling is implemented using RevenueCat:

1. **Subscription Plans**
   - Defined in RevenueCat dashboard
   - Synchronized with backend database
   - Support for multiple plan tiers

2. **Payment Processing**
   - In-app purchases for mobile (App Store, Google Play)
   - RevenueCat SDK integration in frontend
   - Purchase verification on backend

3. **Subscription Status**
   - Real-time status through RevenueCat webhooks
   - Grace periods for failed payments
   - Automatic downgrades for expired subscriptions

4. **Entitlements**
   - Feature access based on subscription tier
   - Organization-wide subscription benefits
   - User-level feature flags

## Database Schema

The core database schema includes the following main entities:

### User
- Basic profile information
- Authentication details
- Preferences
- Linked to organizations through OrganizationUser

### Organization
- Organization details
- Subscription tier
- Settings
- Branding information

### OrganizationUser
- Links users to organizations
- Defines roles within organization
- Tracks join date and status

### Invitation
- Pending invitations to organizations
- Expiration handling
- Email tracking

### Role
- Permission definitions
- Organization-specific roles
- System-wide roles

## Deployment Environments

The infrastructure supports three deployment environments:

1. **Development**
   - For active development
   - Reduced infrastructure costs
   - Simplified setup for quick iterations

2. **Staging**
   - Mirrors production setup
   - Used for QA and testing
   - Separate database from production

3. **Production**
   - Full redundancy and high availability
   - Optimized for performance and security
   - Backup and disaster recovery

## Extension Points

The SaaS Starter Kit is designed with multiple extension points:

1. **Authentication Providers**
   - Abstraction layer for authentication
   - Pluggable identity providers
   - Consistent API regardless of provider

2. **UI Theming**
   - Comprehensive theming system
   - White-labeling support
   - Design tokens for consistent styling

3. **Feature Modules**
   - Backend module system
   - Frontend feature flags
   - Pluggable business logic

4. **Middleware Extensions**
   - Request processing pipeline
   - Custom middleware injection
   - Cross-cutting concerns

## Security Considerations

The SaaS Starter Kit follows security best practices:

1. **Data Protection**
   - Encryption at rest for database
   - Encryption in transit with TLS
   - Secure handling of sensitive data

2. **Authentication & Authorization**
   - Multi-factor authentication
   - JWT token validation
   - Role-based access control
   - Fine-grained permissions

3. **Infrastructure Security**
   - Private VPC configuration
   - Security groups and NACLs
   - IAM least privilege principles
   - Regular security patches

4. **Compliance**
   - GDPR-friendly architecture
   - Audit logging
   - Data portability
   - Data retention policies

## Performance Optimizations

The starter kit includes performance optimizations:

1. **API Efficiency**
   - GraphQL query optimization
   - DataLoader for batching and caching
   - Efficient pagination implementation

2. **Frontend Performance**
   - Code splitting and lazy loading
   - Optimized bundle sizes
   - Asset preloading
   - Memoization for expensive calculations

3. **Database Optimization**
   - Appropriate indexing
   - Query optimization
   - Connection pooling
   - Cache layer for frequent queries

## Monitoring and Logging

Complete observability with:

1. **Error Tracking**
   - Sentry integration for error reporting
   - Structured error handling
   - Context-rich error information

2. **Performance Monitoring**
   - API response time tracking
   - Database query performance
   - Client-side performance metrics

3. **User Analytics**
   - Google Analytics integration
   - User journey tracking
   - Feature usage analytics
   - Conversion funnel analysis

## Getting Started

For setup instructions, see the [GETTING_STARTED.md](../GETTING_STARTED.md) guide.

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](../CONTRIBUTING.md) for details on how to contribute to this project.