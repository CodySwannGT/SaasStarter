# Architecture Decisions

This document captures key architecture decisions for the SaaS Starter Kit, addressing specific implementation questions and design choices.

## CI/CD Setup

### Decision: Use a Single Centralized CI/CD Pipeline for the Monorepo

For a monorepo using Turborepo, we've chosen to implement a single, centralized CI/CD pipeline designed to handle the monorepo structure. This approach has several advantages:

1. **Efficiency:** Turborepo optimizes build processes by leveraging its cache system and dependency graph. A single CI/CD pipeline can take advantage of these optimizations.

2. **Consistency:** A unified pipeline ensures consistent build, test, and deployment processes across all packages and applications.

3. **Orchestration:** The pipeline intelligently determines which parts of the monorepo need to be rebuilt based on changes, reducing build times.

### Implementation

We use GitHub Actions with a workflow file at the root level:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, dev, staging]
  pull_request:
    branches: [main, dev, staging]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      - name: Install dependencies
        run: bun install
      - name: Lint
        run: bun run lint
      - name: Type check
        run: bun run typecheck
      - name: Test
        run: bun run test
      - name: Build
        run: bun run build

  deploy-backend:
    needs: build-and-test
    if: github.event_name == 'push' && (github.ref == 'refs/heads/main' || github.ref == 'refs/heads/staging' || github.ref == 'refs/heads/dev')
    runs-on: ubuntu-latest
    steps:
      # Backend deployment steps

  deploy-frontend:
    needs: build-and-test
    if: github.event_name == 'push' && (github.ref == 'refs/heads/main' || github.ref == 'refs/heads/staging' || github.ref == 'refs/heads/dev')
    runs-on: ubuntu-latest
    steps:
      # Frontend deployment steps
```

## Environment Variables and Secrets

### Decision: Structured Approach to Environment Variables with Multi-level Configuration

The SaaS starter implements a comprehensive environment variable and secrets management system:

### Environment Variables Structure

1. **Project-level variables** (defined in `.env` files at the root):
   - `NODE_ENV`: Development, staging, or production
   - `APP_NAME`: Application name
   - `APP_VERSION`: Application version
   - `DEFAULT_LOCALE`: Default language

2. **App-specific variables** (defined in respective app directories):
   - **Frontend**:
     - `API_URL`: GraphQL API endpoint
     - `WEB_PUBLIC_URL`: Public URL for web application
     - `EXPO_PUBLIC_*`: Public environment variables for Expo
     - `SENTRY_DSN`: Sentry error tracking
     - `ANALYTICS_ID`: Google Analytics identifier

   - **Backend**:
     - `PORT`: Server port
     - `DATABASE_URL`: Database connection string
     - `REDIS_URL`: Redis connection string
     - `LOG_LEVEL`: Logging level

3. **Infrastructure variables** (in infrastructure directory):
   - `AWS_REGION`: AWS region
   - `STAGE`: Deployment stage
   - `DOMAIN_NAME`: Base domain name
   - `CERTIFICATE_ARN`: SSL certificate ARN

### Secrets Management

Secrets are stored securely and never committed to version control:

1. **Local Development**:
   - Use `.env.local` files (gitignored)
   - Store sensitive values in `.env.local`

2. **CI/CD Environments**:
   - Store in GitHub Secrets (for GitHub Actions)
   - Map to environment variables during CI/CD

3. **Production Environments**:
   - AWS Secrets Manager for application secrets
   - AWS Systems Manager Parameter Store for configuration
   - AWS CDK Secrets for infrastructure secrets

### Secret Types

- **API Keys**: Third-party service credentials
- **Database Credentials**: Username/passwords
- **JWT Secrets**: Authentication tokens
- **Encryption Keys**: For data encryption
- **OAuth Credentials**: For social authentication

### Secrets Management Workflow

1. **Setup Phase**: The `bun run setup` command:
   - Generates a `.env.local` file with required variables
   - Prompts for sensitive information
   - Stores non-sensitive defaults

2. **Development Phase**:
   - Reads from appropriate .env files
   - Falls back to defaults when needed

3. **Deployment Phase**:
   - CI/CD pipeline injects appropriate secrets
   - Uses environment-specific configurations

## Monorepo File Organization

### Decision: Shared Configuration Packages Instead of Root Configuration Files

Following Turborepo's best practices, we've moved configuration files from the root level to dedicated packages in the `packages/` directory:

### Shared Configuration Packages

1. **TypeScript Configuration**:
   - Created a package (`packages/tsconfig`) with various base configs
   - Each app/package extends these shared configs with local overrides
   
   ```
   packages/tsconfig/
   ├── base.json             # Base TypeScript config
   ├── nextjs.json           # Next.js specific config
   ├── react.json            # React specific config
   ├── react-library.json    # React library config
   └── package.json          # Package definition
   ```

2. **ESLint Configuration**:
   - Created a package (`packages/eslint`) for shared ESLint rules
   - Each app/package references this config via extends
   
   ```
   packages/eslint/
   ├── index.js              # Base ESLint config
   ├── nextjs.js             # Next.js specific rules
   ├── react.js              # React specific rules
   └── package.json          # Package definition
   ```

3. **Prettier Configuration**:
   - Similar approach with a `packages/prettier` package
   - Packages reference these shared configurations

### Root Level Configuration

Some files do belong at the root of the monorepo:

1. **Monorepo Configuration**:
   - `turbo.json`: Turborepo configuration
   - `package.json`: Workspace definition and shared scripts
   - `bun.lock`: Dependency lock file

2. **Git Configuration**:
   - Root `.gitignore` with common patterns
   - `.gitattributes` at the root
   - Root-level GitHub templates

3. **CI/CD Configuration**:
   - `.github/workflows/`: GitHub Actions workflows

### App-Level Configuration

Each app or package has:

1. **Local configuration files** that extend from the shared configs:
   ```javascript
   // apps/frontend/.eslintrc.js
   module.exports = {
     root: true,
     extends: ["@saas-starter/eslint-config/react"], // References packages/eslint
   };
   ```

2. **TypeScript configuration** that extends shared configs:
   ```json
   // apps/frontend/tsconfig.json
   {
     "extends": "@saas-starter/tsconfig/react.json",
     "include": ["**/*.ts", "**/*.tsx"],
     "exclude": ["node_modules"]
   }
   ```

3. **Framework-specific configs** (e.g., `next.config.js`, `nest-cli.json`, etc.)

This approach enables:
- Easier updates to shared configs
- Better performance with Turborepo caching
- Clearer separation of concerns
- Ability to have context-specific configurations

## Documentation Approach

### Decision: Include Documentation in the Monorepo

For a SaaS starter kit, we've decided to include documentation within the main monorepo, rather than in a separate repository. This offers several advantages:

### Documentation Organization

1. **Documentation as Code**:
   - Documentation changes are part of the same PR as code changes
   - Ensures documentation stays in sync with code
   - Version history is maintained alongside code

2. **Structure**:
   - Root-level `/docs` directory for project-wide documentation
   - App/package-specific documentation in each app's own `/docs` directory
   - README.md files in each directory for quick orientation

3. **Organization**:
   - `/docs/architecture/`: System architecture documentation
   - `/docs/guides/`: How-to guides for common tasks
   - `/docs/api/`: API documentation (can be auto-generated)
   - `/docs/development/`: Development workflow and process
   - `/docs/deployment/`: Deployment instructions
   - `/docs/tutorials/`: Step-by-step tutorials for getting started

4. **Cross-linking**:
   - Documentation easily links to actual code files
   - Code references documentation when needed

### Documentation Generation

We've implemented automatic documentation generation:

1. **API Documentation**:
   - Generate GraphQL schema documentation
   - Create TypeScript interface documentation
   - Document REST endpoints if applicable

2. **Component Documentation**:
   - Generate component documentation from component files
   - Include usage examples and props tables

3. **Integration in CI/CD**:
   - Validate documentation in CI/CD pipeline
   - Generate and deploy documentation sites automatically

## GraphQL API Design Principles

### Decision: Use Continuous Evolution Instead of API Versioning

For GraphQL API best practices in a SaaS context:

### GraphQL API Versioning

Unlike REST APIs, our GraphQL has a different approach to versioning:

1. **Continuous Evolution Instead of Versioning**:
   - GraphQL APIs are designed to be versionless through schema evolution
   - Add new fields without removing old ones
   - Mark deprecated fields with the `@deprecated` directive
   - Provide migration paths via field arguments

2. **Schema Evolution Best Practices**:
   - Add fields instead of changing existing ones
   - Use nullable fields for new additions
   - Implement field aliases for complex renames
   - Monitor field usage to know when it's safe to remove deprecated fields

3. **Breaking Changes Management**:
   - Avoid removing or renaming fields without deprecation periods
   - Change return types only to more specific types (interface → concrete type)
   - Only add optional input arguments, never required ones to existing operations
   - Use schema directives for field lifecycle management

### API Evolution Strategy

1. **Deprecation Process**:
   - Mark fields for deprecation: `@deprecated(reason: "Use newField instead")`
   - Monitor usage of deprecated fields with metrics
   - Set reasonable timelines for deprecation (typically 3-6 months)
   - Communicate changes through documentation and deprecation notices

2. **Schema Design for Adaptability**:
   - Use interfaces and unions for flexibility
   - Implement the Relay connection specification for collections
   - Consider Custom scalars for specialized types
   - Use enum types for fixed sets of values

3. **Documentation and Communication**:
   - Generate schema documentation automatically
   - Provide examples for all operations
   - Document breaking changes clearly
   - Consider developer changelogs for API modifications

### Additional GraphQL Best Practices

1. **Performance Considerations**:
   - Implement DataLoader pattern to avoid N+1 query problems
   - Configure appropriate complexity limits
   - Use persisted queries for production clients
   - Implement query depth limits for security

2. **Security Practices**:
   - Rate limiting on a per-client basis
   - Query complexity analysis
   - Proper authentication and authorization at resolver level
   - Input validation using dedicated input types

3. **Real-time Data**:
   - Use GraphQL subscriptions for real-time updates
   - Implement subscriptions over WebSockets via AWS API Gateway
   - Design subscription payloads to be minimal
   - Consider filtering subscription events on the server