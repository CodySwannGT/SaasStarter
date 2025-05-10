# SaaS Starter Kit Transformation Plan

This document outlines the comprehensive plan to transform the existing codebase into a focused SaaS starter kit organized as a monorepo. It details the features to preserve, features to add, and implementation steps.

## Core SaaS Features

### Preserved Features
- ✅ **User Management**: Registration, authentication, profile management, password reset
- ✅ **Organization Management**: Multi-tenant organizations, settings, profiles
- ✅ **Role-Based Access Control**: User roles, permissions, role assignment
- ✅ **User Invitations**: Email invitations, acceptance flow, organization join requests
- ✅ **Infrastructure**: AWS CDK setup, CI/CD pipelines, monitoring and logging

### Features to Add
- 🔄 **Billing & Subscription**: RevenueCat integration, subscription plans, usage tracking
- 🔄 **Enhanced User Management**: Improved password reset flow, bulk operations
- 🔄 **Advanced Audit Logging**: GDPR-compliant activity logs, access auditing
- 🔄 **API Rate Limiting**: Configurable limits, tenant quotas
- 🔄 **SSO Integration**: SAML/OIDC provider support, enterprise identity framework
- 🔄 **Generic Dashboard**: Admin dashboard, customizable widgets, system monitoring

## De-Branding and Templatization

### Brand References Removed
- ✅ Domain names (geminisports.io, geminisports.co, geminisports.ai)
- ✅ Organization names ("Gemini Sports Analytics", "GSA")
- ✅ Resource naming (AWS profiles, app configurations, database names)
- ✅ Email addresses and cognito pool names

### Templatization Strategy
- ✅ Global variables for substitution (COMPANY_NAME, DOMAIN_NAME, etc.)
- ✅ Replaced hardcoded references with variables
- ✅ Parameterized AWS resources with CDK variables
- ✅ Created setup wizard for configuration

## Architecture Decisions

### Core Architecture
- **Monorepo Tool**: Turborepo for optimized build performance and caching
- **Package Manager**: Bun for faster installation, building, and testing
- **Authentication Provider**: AWS Cognito with abstraction layer
- **Multi-tenancy Approach**: Shared database with tenant ID pattern
- **Mobile Platform**: Expo/React Native with responsive web support

### Project Structure
```
saas-starter/
├── .github/                    # GitHub workflows
├── apps/
│   ├── backend/                # NestJS backend
│   └── frontend/               # React Native/Expo frontend  
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── config/                 # Shared configuration
│   ├── auth/                   # Authentication utilities
│   └── types/                  # Shared TypeScript types
├── infrastructure/             # AWS CDK infrastructure
├── docs/                       # Documentation
├── scripts/                    # Utility scripts
└── turbo.json                  # Turborepo configuration
```

### Third-Party Services
- **Payment Processing**: RevenueCat for subscription management
- **Email Service**: AWS SES for transactional emails
- **Analytics Platform**: Google Analytics for user behavior tracking
- **Error Tracking**: Sentry for error monitoring

## Implementation Plan

### 1. Initialize Monorepo Structure
- ✅ Create new repository with Turborepo and Bun setup
- ✅ Configure workspaces in `package.json`
- ✅ Create shared ESLint/Prettier/TypeScript configs
- ✅ Set up Bun scripts in package.json

### 2. Extract Core Backend Features
- 🔄 Migrate authentication module
- 🔄 Migrate user module
- 🔄 Migrate organization module
- 🔄 Migrate invitation module
- 🔄 Set up core GraphQL schema
- 🔄 Ensure database migrations work
- ✅ Remove sports-specific code

### 3. Extract Core Frontend Features
- 🔄 Migrate authentication screens
- 🔄 Migrate user profile screens
- 🔄 Migrate organization management screens
- 🔄 Migrate invitation screens
- 🔄 Create minimal dashboard
- ✅ Remove sports-specific components
- 🔄 Implement theming system for customization

### 4. Adapt Infrastructure
- 🔄 Parameterize CDK stacks
- 🔄 Create templated environment configuration
- 🔄 Set up core infrastructure (Cognito, API, Database)
- 🔄 Ensure CI/CD works with monorepo
- ✅ Remove sports-specific resources

### 5. De-Brand and Templatize
- ✅ Create global replacement variables
- ✅ Remove all references to previous branding
- ✅ Set up configuration for company name, colors, logos
- ✅ Create simple customization mechanism
- ✅ Update all documentation with template variables

### 6. Implement Missing Features
- 🔄 Add subscription management framework
- 🔄 Implement enhanced auditing
- 🔄 Set up SSO integration framework
- 🔄 Create generic dashboard components
- 🔄 Implement rate limiting

### 7. Documentation
- ✅ Create getting started guide
- 🔄 Document authentication flows
- 🔄 Document organization management
- 🔄 Document invitation system
- 🔄 Create deployment guide
- 🔄 Document customization options
- 🔄 Document extension points

## Core Database Models

- **User**: Basic profile information, authentication details, preferences
- **Organization**: Name, details, settings, plan/tier information
- **OrganizationUser**: User-to-organization relationship, role, join date
- **Invitation**: Invitation details, status, expiration, target email/user
- **Role**: Role definitions, permissions

## Core API Endpoints/GraphQL Operations

- **Authentication**: Sign up, sign in, sign out, reset password, verify email
- **User**: Get profile, update profile, change password
- **Organization**: Create/update organization, get organizations for user, get details
- **Invitation**: Send invitation, accept/reject invitation, list pending invitations

## Required External Accounts

### Infrastructure
- **AWS**: Multiple accounts (dev, staging, production)
- **GitHub**: Source code repository access
- **GitHub Actions**: CI/CD workflows

### Services
- **RevenueCat**: Subscription management (optional)
- **Sentry**: Error tracking
- **Google Analytics**: User behavior tracking (optional)

## Implementation Timeline

1. **Week 1**: Set up monorepo structure, strip non-essential code
2. **Week 2**: Extract and clean up core backend functionality
3. **Week 3**: Extract and clean up core frontend functionality
4. **Week 4**: Adapt infrastructure and parameterize configurations
5. **Week 5**: Implement missing features
6. **Week 6**: Create scaffolding scripts and documentation
7. **Week 7**: Testing, refinement, and polish

## Testing Verification

To verify the template works correctly, we'll test:
- User signup flow
- Organization creation
- Inviting users to organization
- Role assignment
- Payment processing
- Deployment to AWS
- Customization through scaffolding

## Final Architecture

1. **Monorepo**: Turborepo for optimized build performance
2. **Package Manager**: Bun for faster installations and builds
3. **Authentication**: AWS Cognito with abstraction layer
4. **Database**: PostgreSQL with TypeORM using tenant ID pattern
5. **API**: GraphQL with NestJS for core operations
6. **Frontend**: React Native with Expo supporting responsive web
7. **Infrastructure**: AWS CDK with parameterized resources
8. **Payment**: RevenueCat for subscription management (optional)
9. **Analytics**: Google Analytics for user behavior (optional)
10. **Monitoring**: Sentry for error tracking