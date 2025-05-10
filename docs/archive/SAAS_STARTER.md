# SaaS Starter Kit Transformation Plan

This document outlines a comprehensive plan to transform our existing repositories (`infrastructure-v2`, `backend-v2`, and `frontend-v2`) into a focused SaaS starter kit organized as a monorepo.

## Core SaaS Features to Preserve

### User Management
- [x] User registration (email-based)
- [x] User authentication (Cognito)
- [x] User profile management
- [x] Password reset flow
- [x] Email verification

### Organization Management
- [x] Multi-tenant organizations
- [x] User-to-organization relationships
- [x] Organization settings/profile

### Role-Based Access Control
- [x] User roles within organizations
- [x] Permission system 
- [x] Role assignment

### User Invitations
- [x] Email invitation system
- [x] Invitation acceptance flow
- [x] Organization join requests

### Infrastructure
- [x] AWS CDK setup with proper environments
- [x] CI/CD pipelines
- [x] Monitoring and logging
- [x] Security best practices

## Features to Add

### Billing & Subscription Management
- [ ] RevenueCat integration for subscription management
- [ ] Subscription plans/tiers definition
- [ ] Usage tracking and limits
- [ ] Billing history/invoices
- [ ] Payment method management
- [ ] In-app purchase support for mobile platforms

### Enhanced User Management
- [ ] Improved password reset flow
- [ ] Bulk user operations
- [ ] Admin user impersonation for support
- [ ] User activity tracking

### Advanced Audit Logging
- [ ] GDPR-compliant activity logs
- [ ] Data access auditing
- [ ] Compliance-focused reporting

### API Rate Limiting
- [ ] Configurable rate limits
- [ ] Per-tenant quotas
- [ ] Rate limit headers in responses

### SSO Integration
- [ ] SAML provider support
- [ ] OIDC provider connections
- [ ] Enterprise identity provider framework

### Generic Dashboard Framework
- [ ] Basic admin dashboard
- [ ] Customizable widgets
- [ ] System health monitoring

## Brand References to Remove

### Domain Names
- [ ] geminisports.io
- [ ] geminisports.co
- [ ] geminisports.ai

### Organization Names
- [ ] "Gemini Sports Analytics"
- [ ] "The Gemini Team"
- [ ] "GSA" 

### Resource Naming
- [ ] GitHub organization: "geminisportsai"
- [ ] AWS profiles: "gemini-${stage}-v2"
- [ ] App configurations: Expo owner "geminisports"
- [ ] Service names: "gemini-backend"
- [ ] Database/table names with "gemini" or "gsa" prefixes
- [ ] Email addresses: @geminisports.ai domains
- [ ] Cognito pool: "gsauserpool"

### De-branding Strategy
1. Create global variables for template substitution:
   - COMPANY_NAME
   - DOMAIN_NAME
   - SUPPORT_EMAIL
   - GITHUB_ORG
   - DATABASE_PREFIX

2. Replace all hardcoded references with variables:
   - In code files
   - In configuration files
   - In documentation
   - In UI components

3. Parameterize all AWS resources with CDK variables


## Decisions Made

We've made the following key architectural decisions for the SaaS starter kit:

### Monorepo and Package Management
- **Monorepo Tool**: Turborepo for optimized build performance and caching
- **Package Manager**: Bun for faster installation, building, and testing

### Third-Party Services
- **Payment Processing**: RevenueCat for subscription management, especially suited for mobile apps
- **Email Service**: AWS SES for transactional emails
- **Analytics Platform**: Google Analytics for user behavior tracking
- **Error Tracking**: Sentry for error monitoring and reporting

### Architecture Choices
- **Authentication Provider**: AWS Cognito with abstraction layer for flexibility
- **Multi-tenancy Approach**: Shared database with tenant ID for simplicity and cost-efficiency
- **Mobile Platform**: Continue with Expo/React Native with responsive web support

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

## Remaining Decisions

### Authentication Methods to Support
- Which Cognito authentication methods to implement:
  - Username/Password
  - Email/Password
  - Phone/Password
  - Passwordless options
  - Social identity providers
  - Enterprise identity providers
  - Multi-factor authentication
  
### Authentication Implementation Considerations
- Create provider-agnostic interfaces for authentication methods
- Allow configuration to enable/disable specific methods
- Implement consistent UI flows for all authentication types
- Design customization options for email templates and SMS messages
- Support MFA configuration at organization level

### Extension Points Design
- **Decision needed**: How to allow for customizations
- **Options**:
  - Plugin architecture
  - Extension hooks
  - Theme/configuration system
  - Template overrides

## Components to Consolidate

### Configuration Files
- [ ] Create unified TypeScript configuration
- [ ] Share ESLint and Prettier configs
- [ ] Set up common Jest testing config
- [ ] Consolidate commitlint configurations
- [ ] Create shared SonarCloud properties

### Documentation
- [ ] Merge testing guidelines
- [ ] Create single directory structure documentation
- [ ] Combine onboarding processes (CLAUDE.md)
- [ ] Unify architectural documentation

### Development Tooling
- [ ] Share Husky git hooks
- [ ] Create unified scripts in package.json
- [ ] Build common CI/CD pipeline definitions
- [ ] Use single lint-staged configuration

### Reusable Code
- [ ] Extract shared TypeScript types
- [ ] Create common utility functions
- [ ] Share authentication helpers
- [ ] Centralize GraphQL fragments

### Build Process
- [ ] Implement unified build pipeline
- [ ] Create shared deployment scripts
- [ ] Consolidate environment configuration

## Required External Accounts

### Source Control & Project Management
- **GitHub**: Source code repository access
- **Jira**: Project management and issue tracking

### Cloud Infrastructure
- **AWS**: Multiple accounts (dev, staging, production)
  - IAM roles and policies
  - SSO for authentication

### CI/CD & Quality
- **GitHub Actions**: Workflow automation
- **AWS CodeBuild/CodePipeline**: For infrastructure
- **SonarCloud**: Code quality analysis

### Development Tools
- **Slack**: Team communication
- **BitWarden**: Credential management
- **Anthropic/Claude**: AI assistance

### Application Services
- **Expo**: Mobile app development
- **Sentry**: Error tracking
- **RevenueCat**: Payment processing and subscription management
- **AWS SES**: Email delivery
- **Google Analytics**: User behavior tracking

## Implementation Steps

### 1. Initialize Monorepo Structure
- [ ] Create new repository with Turborepo and Bun setup
- [ ] Install Bun globally: `npm install -g bun`
- [ ] Initialize Turborepo: `bunx create-turbo@latest`
- [ ] Configure workspaces in `package.json`
- [ ] Add `bunfig.toml` configuration
- [ ] Create shared ESLint/Prettier/TypeScript configs
- [ ] Set up Bun scripts in package.json

### 2. Extract Core Backend Features
- [ ] Migrate authentication module
- [ ] Migrate user module
- [ ] Migrate organization module
- [ ] Migrate invitation module
- [ ] Set up core GraphQL schema
- [ ] Ensure database migrations work
- [ ] Remove sports-specific code

### 3. Extract Core Frontend Features
- [ ] Migrate authentication screens
- [ ] Migrate user profile screens
- [ ] Migrate organization management screens
- [ ] Migrate invitation screens
- [ ] Create minimal dashboard
- [ ] Remove sports-specific components
- [ ] Implement theming system for customization

### 4. Adapt Infrastructure
- [ ] Parameterize CDK stacks
- [ ] Create templated environment configuration
- [ ] Set up core infrastructure (Cognito, API, Database)
- [ ] Ensure CI/CD works with monorepo
- [ ] Remove sports-specific resources

### 5. De-Brand and Templatize
- [ ] Create global replacement variables
- [ ] Remove all references to "Gemini"/"GeminiSports"/"GeminiSportsAI"
- [ ] Set up configuration for company name, colors, logos
- [ ] Create simple customization mechanism
- [ ] Update all documentation with template variables

### 6. Implement Missing Features
- [ ] Add subscription management framework
- [ ] Implement enhanced auditing
- [ ] Set up SSO integration framework
- [ ] Create generic dashboard components
- [ ] Implement rate limiting

### 7. Documentation
- [ ] Create getting started guide
- [ ] Document authentication flows
- [ ] Document organization management
- [ ] Document invitation system
- [ ] Create deployment guide
- [ ] Document customization options
- [ ] Document extension points

## Core Database Models to Preserve

- **User**
  - Basic profile information
  - Authentication details
  - Preferences

- **Organization**
  - Name, details
  - Settings
  - Plan/tier information

- **OrganizationUser**
  - User-to-organization relationship
  - Role within organization
  - Join date

- **Invitation**
  - Invitation details
  - Status
  - Expiration
  - Target email/user

- **Role**
  - Role definitions
  - Permissions

## Core API Endpoints/GraphQL Operations

- **Authentication**
  - Sign up
  - Sign in
  - Sign out
  - Reset password
  - Verify email

- **User**
  - Get profile
  - Update profile
  - Change password

- **Organization**
  - Create organization
  - Update organization
  - Get organizations for user
  - Get organization details

- **Invitation**
  - Send invitation
  - Accept invitation
  - Reject invitation
  - List pending invitations

## Customization Points to Include

- [ ] Authentication methods (email, social, phone)
- [ ] Email templates
- [ ] Theming (colors, typography, spacing)
- [ ] Organization features (basic/advanced)
- [ ] User profile fields
- [ ] Default roles and permissions

## Implementation Timeline

1. **Week 1**: Set up monorepo structure, strip non-essential code
2. **Week 2**: Extract and clean up core backend functionality
3. **Week 3**: Extract and clean up core frontend functionality
4. **Week 4**: Adapt infrastructure and parameterize configurations
5. **Week 5**: Implement missing features
6. **Week 6**: Create scaffolding scripts and documentation
7. **Week 7**: Testing, refinement, and polish

## Testing Verification

To verify the template works correctly, we'll:
- [ ] Test user signup flow
- [ ] Test organization creation
- [ ] Test inviting users to organization
- [ ] Test role assignment
- [ ] Test payment processing
- [ ] Test deployment to AWS
- [ ] Test customization through scaffolding

## Final Architecture Summary

1. **Monorepo**: Turborepo for optimized build performance and caching
2. **Package Manager**: Bun for faster installation, building, and testing
3. **Authentication**: AWS Cognito with abstraction layer for flexibility
4. **Database**: PostgreSQL with TypeORM, using shared database with tenant ID pattern
5. **API**: GraphQL with NestJS, focusing on core operations
6. **Frontend**: React Native with Expo, supporting responsive web
7. **Infrastructure**: AWS CDK with parameterized resources
8. **Payment Processing**: RevenueCat for subscription management
9. **Analytics**: Google Analytics for user behavior tracking
10. **Error Tracking**: Sentry for monitoring and reporting
11. **Email Service**: AWS SES for transactional emails