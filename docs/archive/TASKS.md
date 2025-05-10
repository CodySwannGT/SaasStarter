# Tasks for SaaS Starter Improvement

This document outlines prioritized tasks to transform the existing repository into a production-ready SaaS starter kit.

## Priority 1: Core Foundation Tasks

### 1. Repository Structure Cleanup
- [x] Fix directory naming inconsistencies (update references to match `apps/backend`, `apps/frontend`, etc.)
- [x] Ensure that `infrastructure` directory is properly set up and references to `infrastructure-v2` are removed
- [ ] Create shared configuration packages following Turborepo best practices:
  - [x] Create `packages/tsconfig` with base TypeScript configurations
  - [x] Create `packages/eslint` with shared ESLint rules
  - [x] Create `packages/prettier` for shared formatting rules
  - [x] Create `packages/config` for shared branding configuration

### 2. Authentication Implementation
- [ ] Implement passwordless authentication as the default option
- [ ] Configure Cognito for authentication with proper abstraction layer
- [ ] Add support for Google and Apple social logins
- [ ] Set up authentication flow with proper token handling
- [ ] Implement configurable MFA support

### 3. Infrastructure Setup
- [ ] Configure AWS CDK infrastructure with environment-based parameterization (dev, staging, production <--- all optional)
- [ ] Create shared database with tenant ID pattern for multi-tenancy
- [ ] Set up CI/CD pipelines (GitHub Actions for frontend/backend, CDK Pipelines for infrastructure)
- [ ] Configure AWS SES for transactional emails
- [ ] Enable infrastructure cost optimization options (configurable VPCs, database size, etc.)

## Priority 2: Core Backend Features

### 1. GraphQL API Setup
- [ ] Implement NestJS GraphQL code-first approach
- [ ] Set up GraphQL schema for core entities (User, Organization, Invitation, Role)
- [ ] Implement DataLoader pattern to prevent N+1 query issues
- [ ] Configure TypeORM with proper entity definitions
- [ ] Enable GraphQL subscriptions through AWS API Gateway websockets

### 2. Multi-tenancy Implementation
- [ ] Implement row-level tenant isolation with tenant ID pattern
- [ ] Create tenant middleware for request processing
- [ ] Set up database schema for core multi-tenant models
- [ ] Configure database connection pooling for optimal performance
- [ ] Implement tenant provisioning during signup process

### 3. Role-Based Access Control
- [ ] Create permission system with Guest, Member, Admin, and Owner roles
- [ ] Implement GraphQL directive for permission checking
- [ ] Set up role assignment within organizations
- [ ] Configure default permissions for each role level
- [ ] Add role-based UI element visibility

## Priority 3: Core Frontend Features

### 1. User Management UI
- [ ] Create authentication screens (sign in, sign up, password reset)
- [ ] Build user profile management interface
- [ ] Implement Apollo Client for GraphQL communication
- [ ] Set up proper state management with Apollo Reactive Variables
- [ ] Configure error handling and loading states

### 2. Organization Management UI
- [ ] Build organization creation and management screens
- [ ] Implement user invitation flow
- [ ] Create role assignment interface
- [ ] Set up organization settings screens
- [ ] Add organization switching functionality

### 3. Cross-Platform Setup
- [ ] Configure responsive layouts for web, iOS, and Android
- [ ] Set up Expo for cross-platform deployment
- [ ] Implement NativeWind for consistent styling
- [ ] Configure navigation with Expo Router
- [ ] Ensure platform-specific adaptations where needed

## Priority 4: Developer Experience Improvements

### 1. Testing Framework
- [ ] Set up backend unit testing (80% coverage target)
- [ ] Configure frontend E2E testing
- [ ] Implement infrastructure testing
- [ ] Create test data management with SQLite
- [ ] Add CI integration for automated testing

### 2. Documentation System
- [x] Create comprehensive project documentation in `/docs`
- [ ] Add app-specific documentation in respective app directories
- [ ] Generate API documentation from GraphQL schema
- [ ] Implement documentation for UI components
- [x] Create getting started and onboarding guides

### 3. Development Tooling
- [ ] Configure Husky for Git hooks
- [ ] Set up lint-staged for pre-commit checks
- [ ] Create unified scripts in root package.json
- [ ] Implement VSCode workspace settings
- [ ] Add development convenience scripts

## Priority 5: Enterprise Features

### 1. Security Enhancements
- [ ] Implement GDPR and CCPA compliance features
- [ ] Set up SOC2-level audit logging
- [ ] Configure API rate limiting
- [ ] Implement proper request validation
- [ ] Add security headers and best practices

### 2. Monitoring and Observability
- [ ] Set up Sentry for error tracking
- [ ] Configure Google Analytics for user behavior tracking
- [ ] Implement logging with proper levels
- [ ] Create health check endpoints
- [ ] Set up performance monitoring

### 3. Deployment Environments
- [ ] Configure development environment
- [ ] Set up staging environment
- [ ] Prepare production environment configuration
- [ ] Create database migration process
- [ ] Implement blue/green deployment strategy

## Priority 6: Business Features

### 1. Subscription Management
- [ ] Integrate RevenueCat for subscription handling
- [ ] Set up subscription plans and tiers
- [ ] Implement payment method management
- [ ] Create subscription upgrade/downgrade flows
- [ ] Set up subscription status checks

### 2. Localization
- [ ] Implement localization framework (initially US English only)
- [ ] Set up date/time/number formatting with date-fns
- [ ] Create structure for future language additions
- [ ] Configure locale detection and selection
- [ ] Prepare translation workflow

### 3. Templatization
- [x] Implement global replacement variables (COMPANY_NAME, DOMAIN_NAME, etc.)
- [x] Create setup wizard for initial configuration
- [x] Set up environment-specific settings
- [x] Create customization points for branding
- [x] Document customization process

## Priority 7: Additional Improvements

### 1. Performance Optimization
- [ ] Implement caching strategies (Redis)
- [ ] Optimize GraphQL queries and resolvers
- [ ] Configure proper database indexing
- [ ] Add lazy loading for frontend components
- [ ] Implement bundle size optimization

### 2. Accessibility
- [ ] Add ARIA attributes to UI components
- [ ] Ensure proper keyboard navigation
- [ ] Implement screen reader support
- [ ] Check color contrast compliance
- [ ] Create accessibility testing workflow

### 3. De-branding and Open Source Preparation
- [x] Remove all references to original brand ("Gemini", "GeminiSports", etc.)
- [x] Set up MIT license file
- [x] Create contribution guidelines
- [x] Update all documentation with clean branding
- [x] Prepare repository for public release