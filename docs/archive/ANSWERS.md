# Answers to Questions in REVIEW.md

This document provides answers to the specific questions outlined in REVIEW.md regarding the Micro SaaS Starter Kit implementation.

## CI/CD Setup

**Question:** Is our CI/CD setup correctly? Should each repo have their own or is it just one for a monorepo?

**Answer:**
For a monorepo using Turborepo, the recommended approach is to have a single, centralized CI/CD pipeline that is designed to handle the monorepo structure. This approach has several advantages:

1. **Efficiency:** Turborepo is specifically designed to optimize build processes in monorepos by leveraging its cache system and dependency graph. A single CI/CD pipeline can take advantage of these optimizations.

2. **Consistency:** A unified pipeline ensures consistent build, test, and deployment processes across all packages and applications.

3. **Orchestration:** The pipeline can intelligently determine which parts of the monorepo need to be rebuilt based on changes, reducing build times.

The recommended implementation would be:

- Use GitHub Actions with a workflow file at the root level (`.github/workflows/`)
- Configure the workflow to understand the Turborepo structure
- Use the Turborepo cache for CI to improve build speeds
- Implement separate deployment steps for different applications within the same pipeline

Example GitHub Actions workflow structure:
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

**Question:** Do we have a list of environment variables, secrets and parameters we need to configure? Where they go. Where we get them from, etc.

**Answer:**
The SaaS starter should implement a comprehensive environment variable and secrets management system:

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

Secrets should be stored securely and never committed to version control:

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

1. **Setup Phase**: The `bun run setup` command should:
   - Generate a `.env.local` file with required variables
   - Prompt for sensitive information
   - Store non-sensitive defaults

2. **Development Phase**:
   - Read from appropriate .env files
   - Fall back to defaults when needed

3. **Deployment Phase**:
   - CI/CD pipeline should inject appropriate secrets
   - Use environment-specific configurations

## Monorepo File Organization

**Question:** Are there things we need to move out of the individual repos/apps and into the monorepo? linters?, .gitignore?, tsconfigs?

**Answer:**
Following Turborepo's best practices, configuration files should be organized in a specific way to optimize for performance and maintainability:

### Shared Configuration Packages

Instead of placing configuration files at the root level, Turborepo recommends creating dedicated packages in the `packages/` directory for shared configurations:

1. **TypeScript Configuration**:
   - Create a package (e.g., `packages/tsconfig`) with various base configs
   - Each app/package extends these shared configs with local overrides
   
   ```
   packages/tsconfig/
   ├── base.json             # Base TypeScript config
   ├── nextjs.json           # Next.js specific config
   ├── react-library.json    # React library config
   └── package.json          # Package definition
   ```

2. **ESLint Configuration**:
   - Create a package (e.g., `packages/eslint-config-custom`) for shared ESLint rules
   - Each app/package references this config via extends
   
   ```
   packages/eslint-config-custom/
   ├── index.js              # Base ESLint config
   ├── nextjs.js             # Next.js specific rules
   ├── react.js              # React specific rules
   └── package.json          # Package definition
   ```

3. **Prettier Configuration**:
   - Similar approach with a `packages/prettier-config-custom` package
   - Or use a single file that packages can reference

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

Each app or package should have:

1. **Local configuration files** that extend from the shared configs:
   ```javascript
   // apps/frontend/.eslintrc.js
   module.exports = {
     root: true,
     extends: ["custom"], // References packages/eslint-config-custom
     parserOptions: {
       tsconfigRootDir: __dirname,
       project: './tsconfig.json',
     },
   };
   ```

2. **TypeScript configuration** that extends shared configs:
   ```json
   // apps/frontend/tsconfig.json
   {
     "extends": "tsconfig/nextjs.json",
     "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
     "exclude": ["node_modules"]
   }
   ```

3. **Framework-specific configs** (e.g., `next.config.js`, `nest-cli.json`, etc.)

This approach has several benefits:
- Easier updates to shared configs
- Better performance with Turborepo caching
- Clearer separation of concerns
- Ability to have context-specific configurations

## Documentation Location

**Question:** Where should docs go? Should we have a docs folder in the monorepo or should we have a separate repo for docs? or both?

**Answer:**
For a SaaS starter kit, the recommended approach is to have documentation within the main monorepo, not in a separate repository. This approach offers several advantages:

### Documentation in the Monorepo

1. **Documentation as Code**:
   - Documentation changes can be part of the same PR as code changes
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
   - Documentation can easily link to actual code files
   - Code can reference documentation when needed

5. **Tools**:
   - Use documentation tools that work well with monorepos
   - Consider tools like VitePress, Docusaurus, or even simple Markdown

### Documentation Generation

Implement automatic documentation generation:

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

### Implementation Steps

1. Create a structured `/docs` directory at the root
2. Add app-specific documentation folders in each app
3. Establish clear documentation standards
4. Set up automation for documentation generation where applicable
5. Consider integrating Markdown linting in the CI/CD pipeline

## Root-level Configuration Files

**Question:** What files should NOT be at the root? tsconfig? lint configs, etc?

**Answer:**
According to Turborepo best practices, rather than placing configuration files directly at the root, they recommend creating shared configuration packages. This approach helps with caching efficiency and maintainability.

### What Should NOT Be at the Root

1. **Shared ESLint/TypeScript Configurations**:
   - Instead of root-level `.eslintrc.js` or `tsconfig.json` files, create dedicated packages:
     - `packages/eslint-config-custom` for ESLint
     - `packages/tsconfig` for TypeScript
   - This approach prevents cache misses that would happen if you modified a root config

2. **App-specific Configs**:
   - Framework configurations such as `next.config.js`, `babel.config.js`, etc.
   - App-specific environment variables or `.env.example` files
   - Build tool configurations specific to individual apps

3. **Large Generated Files**:
   - Build output directories (`dist/`, `build/`, `.next/`)
   - Generated code or schema files
   - Large data files

### What SHOULD Be at the Root

1. **Workspace Configuration**:
   - `package.json` with workspace definitions
   - `turbo.json` for Turborepo pipeline configuration
   - Package manager files (`bun.lock`, `yarn.lock`, `pnpm-lock.yaml`)

2. **Git and CI Configuration**:
   - `.gitignore`, `.gitattributes`
   - `.github/` directory with workflows and templates

3. **Project Documentation**:
   - `README.md`, `LICENSE`, `CONTRIBUTING.md`
   - `/docs` directory for project-wide documentation

4. **Developer Tooling**:
   - `.vscode/` for shared editor settings
   - `.husky/` for Git hooks
   - `commitlint.config.js` for commit message linting

### Implementation Example

Here's the recommended structure for a Turborepo monorepo:

```
/
├── .github/                    # GitHub configuration
├── .husky/                     # Git hooks
├── docs/                       # Project-wide documentation
├── package.json                # Workspace definition
├── turbo.json                  # Turborepo configuration
├── README.md                   # Project overview
├── apps/                       # Applications
│   ├── frontend/
│   │   ├── .eslintrc.js        # Extends shared config
│   │   ├── tsconfig.json       # Extends shared config
│   │   └── package.json        # App-specific dependencies
│   └── backend/
│       ├── .eslintrc.js        # Extends shared config
│       ├── tsconfig.json       # Extends shared config
│       └── package.json        # App-specific dependencies
└── packages/                   # Shared packages
    ├── ui/                     # UI component library
    │   ├── .eslintrc.js        # Extends shared config
    │   ├── tsconfig.json       # Extends shared config
    │   └── package.json
    ├── eslint-config-custom/   # Shared ESLint configuration
    │   ├── index.js            # Base rules
    │   ├── react.js            # React rules
    │   └── package.json
    └── tsconfig/               # Shared TypeScript configuration
        ├── base.json
        ├── react.json
        ├── nextjs.json
        └── package.json
```

This structure allows:
1. Each app/package to have its own configuration that extends the shared configs
2. Easier updates to shared rules across all packages
3. Better performance from Turborepo's caching system
4. Clearer separation of concerns in your repository

## GraphQL API Best Practices

**Question:** 
- Are there specific API design principles to follow? GraphQL
- How should API versioning be handled? 
- What's the strategy for API evolution and deprecation?

**Answer:**
For GraphQL API best practices, especially in a SaaS context:

### GraphQL API Versioning

Unlike REST APIs, GraphQL has a different approach to versioning:

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