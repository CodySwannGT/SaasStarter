# Project Decisions

This document outlines key decisions and clarifications for the SaaS Starter Kit, answering important questions about the implementation approach, technical choices, and future direction.

## Repository Structure Decisions

1. **Repository Organization**:
   - The repository follows a monorepo structure with apps in `apps/` directory and shared packages in `packages/`
   - Legacy references to `backend-v2/`, `frontend-v2/`, and `infrastructure-v2/` should be updated to reflect the current structure

2. **Package Organization**:
   - Shared packages (auth, config, ui, types) will be implemented to extract common code from apps
   - There is a plan to move common code from apps to these packages for better code sharing

3. **Infrastructure Management**:
   - The `infrastructure/` directory is the current and only infrastructure implementation
   - This is a new implementation without migration needs from previous versions

## Technical Implementation Decisions

1. **Authentication Strategy**:
   - AWS Cognito is the chosen authentication provider
   - Passwordless authentication should be the default option
   - Additional authentication methods include:
     - Social logins (prioritizing Google and Apple)
     - Password-based authentication with MFA
     - Phone number or email verification

2. **GraphQL Implementation**:
   - Code-first approach is preferred for GraphQL implementation
   - GraphQL federation will be implemented (lower priority)
   - GraphQL subscriptions should be supported through AWS API Gateway WebSockets

3. **Database and ORM**:
   - TypeORM is the preferred ORM
   - Multi-tenancy will be implemented using tenant ID pattern with schema separation
   - No legacy database migration needs at this point

4. **State Management**:
   - Apollo Reactive Variables is the preferred state management solution
   - No additional state management libraries (Redux, Zustand, Jotai) are needed

5. **Testing Strategy**:
   - Expected test coverage: 80%
   - Backend and infrastructure: Focus on unit tests
   - Frontend: Focus on E2E tests
   - Test data management using SQLite for live database testing

## CI/CD and Deployment Decisions

1. **Deployment Strategy**:
   - Backend: Serverless deployment
   - Frontend: EAS Hosting or AWS Amplify
   - AWS is the preferred cloud provider
   - Environment configuration management:
     - AWS SSM Parameter Store
     - AWS Secrets Manager
     - GitHub Variables and Secrets

2. **CI/CD Pipeline**:
   - GitHub Actions for frontend and backend
   - AWS CDK Pipelines v2 for infrastructure, triggered by GitHub pushes
   - Secrets should be stored in GitHub following best practices for CDK Pipelines v2

3. **Container Strategy**:
   - Docker for development environments only
   - No Kubernetes orchestration planned
   - Container management through Docker Compose

4. **Release Management**:
   - Semantic versioning for releases
   - Hotfixes process: Open PR to staging branch

## Documentation and Standards Decisions

1. **Documentation Approach**:
   - Documentation stored in the repository itself
   - Markdown is the preferred documentation format
   - Versioning through Git alongside code

2. **Coding Standards**:
   - Automated code quality checks will be implemented
   - Strict enforcement of linting rules:
     - On commit
     - On deployment
     - During CI/CD

3. **API Design**:
   - GraphQL-based API design
   - API versioning and evolution following GraphQL best practices
   - Detailed in [Architecture Decisions](./ARCHITECTURE_DECISIONS.md)

## Multi-tenancy and Enterprise Features

1. **Multi-tenant Architecture**:
   - Row-level tenant isolation using tenant ID
   - Tenant provisioning through basic signup process
   - No tenant-specific customizations planned

2. **User Management**:
   - Simple permission system with roles:
     - Guest
     - Member
     - Admin
     - Owner
   - Row-level security implementation to be determined

3. **Enterprise Requirements**:
   - Compliance requirements:
     - GDPR and CCPA compliance required
     - Ability to add HIPAA compliance later
   - SOC2 level audit logging
   - SOC2 level data residency requirements

## Business and Product Decisions

1. **Subscription and Billing**:
   - Fixed subscription model
   - Payment processing through RevenueCat
   - Plan upgrades/downgrades managed by RevenueCat

2. **White-labeling**:
   - White-labeling is not a requirement
   - No tenant-specific branding planned

3. **Internationalization**:
   - Initial support for US English only
   - Localization framework will be implemented from the start
   - Date/time/number formatting using the date-fns library

## Open Source and Licensing

1. **Licensing Approach**:
   - Open source license for the starter kit
   - No restrictions on third-party libraries

## Future Development

1. **Roadmap Priorities**:
   - Cost optimization is a priority enterprise feature
   - Infrastructure should be configurable to be cost-efficient
   - Parameters for VPCs, flow logs, database size, engine, etc.

2. **Extension Mechanisms**:
   - No plugin architecture planned
   - No customization points planned

3. **Integration Strategy**:
   - No first-class third-party integrations planned initially
   - API key and credential management strategy to be determined