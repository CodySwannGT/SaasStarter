# Questions for SaaS Starter Clarification

This document contains questions that need clarification for improving the Micro SaaS Starter Kit.

## Repository Structure Questions

1. **Repository Naming Inconsistency**:
   - The CLAUDE.md refers to `backend-v2/`, `frontend-v2/`, and `infrastructure-v2/` but the actual directories are `apps/backend/`, `apps/frontend/`, and `infrastructure/`. Are we in a transition phase? NO
   - Should references be updated to match actual directory structure? -----> YES. All The documentation needs to be reviewed closely and updated as needed.

2. **Package Organization**:
   - The README mentions packages (auth, config, ui, types) but these don't appear to be fully implemented. What is the status of these shared packages? =>>>>> They were temporarily removed until we can figure out best practices for what packages we need
   - Is there a plan to move common code from apps to these packages? =>>>> YES

3. **Infrastructure Management**:
   - The directory structure shows both `infrastructure/` and `infrastructure-v2/` (marked as deleted). Which should be used going forward? infrastructure
   - Is there documentation on the infrastructure setup and migration plan? NO. there is no migration. this is brand new

## Technical Implementation Questions

1. **Authentication Strategy**:
   - The documentation mentions AWS Cognito. Is this implemented or planned? 
   - Which authentication flows should be prioritized (password, social, passwordless)? PASSWORDLESS should be the default with the ability to add social and password (with MFA) by phone number or email
   - Are there specific enterprise SSO integrations that should be prioritized? Google and Apple

2. **GraphQL Implementation**:
   - Is there a preference for code-first or schema-first GraphQL? Code first
   - Should we implement GraphQL federation for microservice architecture? federation but that's lower priority
   - What's the strategy for handling GraphQL subscriptions? ---- we need to support them. Ideally through AWS API Gateway sockets

3. **Database and ORM**:
   - Is TypeORM the preferred ORM or should we consider alternatives like Prisma? TYPEORM
   - What's the database migration strategy for production? We don't have anything to migrate
   - How should we handle multi-tenancy at the database level? We tenantId - schema separation

4. **State Management**:
   - The frontend documentation mentions Apollo Reactive Variables. Is this the preferred state management solution? YES
   - Should we implement additional state management like Redux, Zustand, or Jotai? NO

5. **Testing Strategy**:
   - What's the expected test coverage percentage? 80%
   - Should we implement E2E testing or focus on unit/integration tests? unit for backend and infra, e2e for frontend
   - How should we handle test data management? I want to use a live database like sqlite

## CI/CD and Deployment Questions

1. **Deployment Strategy**:
   - The CLAUDE.md mentions serverless for backend, but what's the preferred deployment for frontend? To either EAS Hosting or AWS Amplify
   - Is there a preferred Cloud provider (AWS, GCP, Azure)? AWS is all
   - How should environment configuration be managed? Depends. SSM, Secrets manager, Github Vars, Github secrets.

2. **CI/CD Pipeline**:
   - Should we use GitHub Actions, AWS CodePipeline, or another CI/CD tool? GitHub actions for frontend and backend, CDK Pipeliens v2 for infra triggered by github pushes
   - What's the branching strategy for development, staging, and production? See the docs
   - How should we handle secrets in the CI/CD pipeline? Store them in Github. Best practices for CDK Pipeliens v2

3. **Container Strategy**:
   - Should Docker be used for development, testing, or production? only development
   - Is Kubernetes being considered for orchestration? no
   - How should container images be managed and versioned? docker compose

4. **Release Management**:
   - What's the versioning strategy (semantic versioning, calendar versioning)? See the various docs
   - How should changelogs be generated and maintained? See the various docs
   - What's the process for releasing hotfixes? Open PR to staging branch

## Documentation and Standards Questions

1. **Documentation Approach**:
   - Where should documentation be stored (GitHub, external site, internal wiki)? In the repo itself
   - Is there a preferred documentation format or tool? Markdown
   - Should documentation be versioned alongside code? Via git

2. **Coding Standards**:
   - Are there specific coding standards beyond what's mentioned in the existing documentation? No.
   - Should we implement automated code quality checks? Yes. There are many already
   - How strictly should linting rules be enforced? Very. on commit, on deploy, etc

3. **API Design**:
   - Are there specific API design principles to follow? Graphql
   - How should API versioning be handled? You tell me what's best practices for graphql
   - What's the strategy for API evolution and deprecation? You tell me 

## Multi-tenancy and Enterprise Features

1. **Multi-tenant Architecture**:
   - What level of tenant isolation is required (database, schema, row-level)? row-level marked with tenant id
   - How should tenant provisioning be implemented? basic signup
   - What's the strategy for tenant-specific customizations? We're not doing that

2. **User Management**:
   - How complex should the permission system be? Pretty simple. Guest, Member, Admin, Owner
   - Should we implement row-level security? TBD
   - What user attributes need to be stored and managed? I don't understand the question.

3. **Enterprise Requirements**:
   - Are there specific compliance requirements (GDPR, CCPA, HIPAA)? GDPR and CCPA with the ability to add HIPAA
   - What audit logging is required? SOC2 level
   - Are there data residency requirements? SOC2 level

## Business and Product Questions

1. **Subscription and Billing**:
   - Should we implement usage-based billing or fixed subscriptions? Fixed subscriptions
   - What payment processors should be supported? Revenue Cat
   - How should plan upgrades/downgrades be handled? REvenue Cat

2. **White-labeling**:
   - Is white-labeling a requirement? NO
   - What level of customization should be supported? TBD
   - How should tenant-specific branding be managed? They don't get that

3. **Internationalization**:
   - Which languages should be supported? only US at first
   - Should we implement localization from the start? Yes
   - How should date/time/number formatting be handled? the date-fn library

## Open Source and Licensing

1. **Licensing Concerns**:
   - What license should be used for the starter kit? open source
   - Are there any restrictions on third-party libraries? no
   - How should attributions be managed? you tell me

2. **Contribution Process**:
   - Should we establish a contribution process for the community? no
   - How should external contributions be reviewed and managed? N/A
   - What's the governance model for the project? What's best practice?

## Future Development

1. **Roadmap Prioritization**:
   - Which features should be prioritized for the first stable release? TBD
   - Are there specific enterprise features that should be implemented early? Yes. Cost optimization. The infra should be configurable to be cheap or expensive with parameters like VPCs, flowlogs, database size, engine, etc, etc
   - What's the long-term vision for the starter kit? Growth

2. **Extension Mechanisms**:
   - How should the starter kit support extensions? It shouldn't
   - Should we implement a plugin architecture? no
   - What customization points should be exposed? no

3. **Integration Strategy**:
   - Which third-party services should have first-class integration? none
   - How should integrations be architected? n/a
   - What's the strategy for managing API keys and credentials? TBD