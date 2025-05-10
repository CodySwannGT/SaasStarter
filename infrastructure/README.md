# 🏗️ Infrastructure

> This is a living document. If anything doesn't work as outlined, please collaborate with another developer to update this document.

## 📱 Overview

This directory contains a TypeScript AWS CDK Pipelines v2 project that creates and maintains cross-environment infrastructure on AWS. Unlike the backend and frontend applications which use GitHub Actions for CI/CD, this infrastructure module uses CDK Pipelines for deployment, which is a self-mutating pipeline that updates itself when code changes.

The infrastructure is organized into different stacks based on functionality:
- Network stacks (VPC, subnets, connectivity)
- Application stacks (API Gateway, Lambda, Aurora, etc.)
- Security stacks (IAM, KMS, backup)
- Shared resources (DNS zones, SNS topics)

## 🚀 Quick Start

### 📋 Prerequisites

- Node.js >= 18.0.0 (we recommend using [NVM](https://github.com/nvm-sh/nvm))
- [Visual Studio Code](https://code.visualstudio.com/) with recommended extensions (see below)
- AWS CLI configured with appropriate profiles
- AWS accounts bootstrapped for CDK

#### VS Code Extensions

When opening this project in VS Code, you should see a prompt to install recommended extensions. These extensions are configured in `.vscode/extensions.json` and enhance your development experience:

| Extension | Purpose |
|-----------|---------|
| **Core Development** |
| `dbaeumer.vscode-eslint` | ESLint integration for code quality |
| `editorconfig.editorconfig` | EditorConfig support for consistent formatting |
| `esbenp.prettier-vscode` | Prettier code formatting |
| `redhat.vscode-yaml` | YAML language support for AWS CDK templates |
| `yoavbls.pretty-ts-errors` | Improved TypeScript error messages |
| `ms-vscode.vscode-typescript-next` | Enhanced TypeScript support |
| `mikestead.dotenv` | .env file support for environment variables |
| `visualstudioexptteam.vscodeintellicode` | AI-assisted IntelliSense |
| **AWS CDK Specific** |
| `aws.aws-toolkit-vscode` | AWS Toolkit with CDK support |
| `amazon.aws-toolkit-vscode` | Amazon's AWS Toolkit integration |
| `kddejong.vscode-cfn-lint` | CloudFormation linting |
| `dsteenman.cloudformation-yaml-snippets` | CloudFormation snippets |
| **Git Integration** |
| `donjayamanne.githistory` | Enhanced Git history visualization |
| `eamodio.gitlens` | Advanced Git capabilities and history |
| `github.vscode-github-actions` | GitHub Actions workflows support |
| `cschleiden.vscode-github-actions` | Additional GitHub Actions integration |
| **Testing & Quality** |
| `firsttris.vscode-jest-runner` | Run Jest tests from editor |
| `orta.vscode-jest` | Jest testing framework integration |
| `sonarsource.sonarlint-vscode` | SonarQube/SonarLint code quality checks |
| **Documentation & Diagrams** |
| `aaron-bond.better-comments` | Enhanced comments with categorization |
| `hediet.vscode-drawio` | Draw.io integration for diagrams |
| `jebbs.plantuml` | PlantUML support for architecture diagrams |
| **Productivity** |
| `christian-kohler.path-intellisense` | Path completion for imports |
| `wix.vscode-import-cost` | Display inline import sizes |

### 🔧 Setup

```bash
# Install global dependencies
bun install -g aws-cdk @anthropic/claude-code

# Go to the infrastructure directory
cd infrastructure

# Install dependencies
bun install

# Start Claude Code for interactive guided onboarding
claude
```

> **Note**: When you first run Claude Code, it will automatically check if you have a `.gitignored` file called "onboarded" in the root directory. If not, it will guide you through a complete onboarding process to ensure you understand all project standards, practices, and setup requirements. After confirming all items, Claude will instruct you to create an empty "onboarded" file to mark the process as complete.

### Automated Onboarding Process

When you first run Claude Code in this repository, it will check for a `.gitignored` file called "onboarded" in the root directory. If this file doesn't exist, Claude will guide you through a complete onboarding process.

During the onboarding process:
- You can say "skip" at any time to mark yourself as onboarded and bypass the rest of the process
- You can say "onboard" at any time to restart the onboarding process from the beginning

The onboarding checklist covers:

#### Onboarding Checklist

1. **Development Environment Setup**
   - Install Node.js ≥ 18.0.0 (we recommend using [NVM](https://github.com/nvm-sh/nvm))
   - Install required global dependencies: `npm install -g aws-cdk @anthropic/claude-code`
   - Install VS Code with recommended extensions (VS Code will prompt you when opening the project)
   - Run `npm install` to install project dependencies
   - Verify AWS CLI is installed and configured with appropriate profiles

2. **Account Setup**
   - Request access to GitHub repository (organization: geminisportsai)
   - Request access to Jira project (sign up with @geminisports.ai email, contact manager first)
   - Request access to AWS environments (shared account and workload accounts)
   - Request access to SonarCloud (sign in with GitHub account, contact manager first)
   - Request access to Anthropic (sign up with @geminisports.ai email, contact manager first)
   - Request access to Slack:
     - If employee: sign up with @geminisports.ai email
     - If contractor: connect via employer's company Slack account

3. **Project Standards Review**
   - Understand CDK architecture and stack organization
   - Understand the environment configuration system
   - Understand cross-account deployment patterns
   - Understand infrastructure security best practices
   - Understand commit standards and PR workflow
   - Understand CI/CD pipeline structure
   - Understand resource naming conventions

4. **Completion**
   - After confirming all items, create an empty file called "onboarded" in the root directory
   - This file should not be committed (it's in .gitignore)
   - You can now proceed with normal development

Claude will not assist with other tasks until the onboarding process is complete. This ensures all developers have a consistent understanding of project standards and practices.

After completing the onboarding process with Claude:

```bash
# Install dependencies (if not already done)
npm install

# Configure Claude Code integrations
cp .mcp.json.example .mcp.json
# Edit .mcp.json with your credentials
```

#### Claude Code Integration Services

To enable external services integration with Claude Code, copy the example MCP configuration file and update it with your credentials:

```bash
cp .mcp.json.example .mcp.json
# Edit .mcp.json with your credentials
```

The following integrations are available:

| Service | Purpose | Configuration |
|---------|---------|---------------|
| **Jira** | Access Jira tickets, create issues, and query project information | Update `jira-url`, `jira-username`, and `jira-token` with your credentials |
| **AWS** | Query AWS resources and services directly | Set `AWS_PROFILE` and `AWS_REGION` to match your environment |
| **GitHub** | Search issues and code in GitHub repositories | Update `GITHUB_PERSONAL_ACCESS_TOKEN` with your token |
| **Fetch** | Make HTTP requests to external APIs | Pre-configured, no credentials needed |
| **Brave Search** | Perform web searches directly from Claude | Update `BRAVE_API_KEY` with your API key |
| **Browser Tools** | Analyze console logs, network traffic, and run audits | Pre-configured, no credentials needed |

##### Jira Integration Details

The primary Jira project for this repository is **SE** (Sports Engine), which focuses on the following:

* **Project Focus**: Infrastructure architecture and environment management
* **Development Workflow**: Issues follow a status progression from "To Do" → "In Progress" → "Awaiting Code Review" → "Deployed to Dev" → "Awaiting QA/UAT" → "Ready for Release" → "Released"
* **Issue Management**: Create branches directly from Jira tickets to ensure proper tracking and automated status transitions

When using Claude Code with Jira integration:
1. Ask Claude to search for tickets related to your current task
2. Request Claude to create or update Jira issues
3. Have Claude analyze ticket requirements and acceptance criteria
4. Get Claude to help link your commits to the correct Jira issue

##### Useful JQL Examples for Claude:

| Purpose | JQL Query | Example Command |
|---------|-----------|----------------|
| Find open tasks | `project = "SE" AND resolution = Unresolved AND status = "To Do"` | "Search for open tickets in the SE project" |
| My assigned tasks | `project = "SE" AND assignee = currentUser()` | "Show my assigned tickets" |
| Documentation tasks | `project = "SE" AND (summary ~ "documentation" OR summary ~ "docs")` | "Find documentation tasks" |
| Infrastructure tasks | `project = "SE" AND labels = "infrastructure"` | "Show infrastructure tasks" |
| Search by keyword | `project = "SE" AND summary ~ "searchterm"` | "Find tickets about VPC" |
| High priority items | `project = "SE" AND priority = High` | "Show high priority tickets" |
| Recently updated | `project = "SE" AND updated >= -7d` | "Show tickets updated in the last week" |

##### AWS Integration Details

The AWS integration is particularly useful for infrastructure work:

* Query AWS resources directly from Claude
* Check resource configurations and settings
* Search for specific resource types across accounts
* Retrieve information about deployed infrastructure

Example AWS commands:
```
# List all VPCs in a region
> List all VPCs in us-east-1

# Describe a specific resource
> Describe the CloudFormation stack named "NetworkStack-dev"

# Search for resources by tag
> Find all resources with the tag "Environment=Production"

# Get information about a subnet
> Get details for subnet subnet-12345
```

#### AWS Profiles Setup

To access AWS resources, you'll need to set up AWS CLI profiles for the shared account and each workload account (dev, staging, production):

```bash
aws configure sso
```

Complete the prompts:

```
"SSO session name": <prefix>-<account/env>
"SSO start URL": <starturl>
"SSO region": us-east-1
"SSO registration scopes": (accept default)
"CLI default client Region [us-east-1]": (Accept Default)
"CLI default output format [json]": (Accept Default)
"CLI profile name": <profile>-<account/env>
```

**Note**: SSO sessions expire, so if you see an authentication error, refresh your session:

```bash
aws sso login --profile <profile>-<account/env>
```

#### Account Bootstrapping

Before you can deploy with CDK, you need to bootstrap the AWS environments:

1. **Shared Account Bootstrap**:

```bash
npx cdk bootstrap \
  --profile <profile>-shared \
  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  aws://<shared-account-id>/us-east-1
```

2. **Workload Account Bootstrap**:

```bash
npx cdk bootstrap \
  --profile <profile>-<environment> \
  --trust <shared-account-id> \
  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  aws://<environment-account-id>/us-east-1
```

3. **GitHub Integration**:

Create a personal access token with `repo` and `admin:repo_hook` scopes, then store it in AWS Secrets Manager in each account:

```bash
aws secretsmanager create-secret --name github-token --secret-string "<token>" --profile <profile>-shared
```

Repeat this for each workload account (dev, staging, production).

#### Configure Environment Variables

Configure the variables in:
- `util/environment-config.ts` - Environment-specific settings
- `util/shared-config.ts` - Settings shared across environments

### ▶️ Running CDK Commands

#### 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the application |
| `npm run watch` | Watch for changes and rebuild automatically |
| `npm run test` | Run all tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:cov` | Run tests with coverage report |
| `npm run types:check` | Run TypeScript type checking |
| `npm run lint` | Run ESLint to check code quality |
| `npm run format` | Format code with Prettier |
| `npx cdk ls` | List all stacks in the app |
| `npx cdk synth` | Synthesize CloudFormation templates |
| `npx cdk diff` | Compare deployed stack with current state |
| `npx cdk deploy <stack-name>` | Deploy a specific stack |

#### Initial Deployment

You must deploy the pipeline manually once. After that, the pipeline keeps itself up to date from the source code repository.

```bash
npx cdk deploy --profile <profile>-shared
```

## 🧪 Testing

```bash
# Run all tests
bun test

# Run tests with coverage
bun run test:cov

# Run tests in watch mode
bun run test:watch

# Run a specific test file
bun jest path/to/file.test.ts
```

### 🎯 Testing Strategy

1. **Unit Tests**: Test individual stack resources and properties
2. **Snapshot Tests**: Verify that CloudFormation template output matches expected behavior
3. **Integration Tests**: For AWS SDK interaction tests (where applicable)

## 📊 Code Quality and Performance

### Code Quality Standards

- Maximum 300 lines per file, maximum 50 lines per function
- Use descriptive variable/function names
- Strict typing - avoid `any` types
- Follow immutable code principles
- Use L2 constructs over L1 when available
- Follow CDK best practices for stack organization and resource naming
- Follow conventional commits format (feat/fix/chore/etc)

### 🔍 Linting and Code Quality

The project uses ESLint to enforce code standards. The configuration is in `.eslintrc.js` and automatically loaded with VS Code.

## ⚙️ Environment Configuration

The application uses environment-specific configuration from various sources:

### 🔑 Environment Structure

Infrastructure is deployed to multiple AWS accounts:

| Account | Purpose |
|---------|---------|
| **Shared** | Pipeline and cross-account resources |
| **Dev** | Development environment resources |
| **Staging** | Testing environment resources |
| **Production** | Production environment resources |

Configuration is stored in:

1. **Environment Config**: `util/environment-config.ts` contains environment-specific settings
2. **Shared Config**: `util/shared-config.ts` contains settings used across all environments
3. **AWS Secrets Manager**: Sensitive values are stored in Secrets Manager
4. **CDK Context**: Values stored in `cdk.context.json` for caching and consistency

## 🚢 Deployment & CI/CD

### 🚀 Continuous Integration

The CDK Pipelines framework handles CI/CD. When you push to main, the pipeline:

1. Checks out the code
2. Installs dependencies
3. Runs tests and linting
4. Synthesizes CloudFormation templates
5. Self-mutates if the pipeline definition changed
6. Deploys to environments in sequence (dev → staging → production)

### 📝 PR Workflow

Unlike the backend and frontend applications which may use separate branches for dev/staging/production, the infrastructure codebase uses a single main branch:

1. All PRs are made to the `main` branch
2. PR validation includes:
   - Type checking with TypeScript
   - Linting with ESLint
   - Unit tests

3. When a PR is merged to `main`:
   - The pipeline will self-update
   - Resources will be deployed to all environments in sequence
   - Changes are applied to dev first, then staging, then production
   - Production deployment includes a manual approval step

### 🔧 Git Hooks

This repository uses Git hooks to enforce code quality standards:

#### Pre-commit Hook

The pre-commit hook automatically:
- Runs linting to check staged files
- Runs TypeScript type checking to prevent type errors
- Formats code with Prettier

#### Commit Message Format

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

- Format: `<type>(<scope>): <description> [SE-1234]`
- Examples:
  - `feat: add VPC flow logs [SE-6789]`
  - `fix(cognito): resolve user pool configuration issue [SE-5678]`
  - `docs: update README with AWS access instructions [SE-4567]`

## 🐛 Error Handling and Debugging

- CloudFormation deployment failures appear in the AWS CloudFormation console
- Pipeline failures appear in AWS CodePipeline console
- Logs are stored in CloudWatch Logs

## 📂 Project Structure

```
/
├── bin/                      # Entry point for CDK app
├── lib/                      # Stack definitions
│   ├── app-stage.ts          # Application stage definition
│   ├── network-stage.ts      # Network stage definition
│   ├── security-stage.ts     # Security stage definition
│   ├── shared-stage.ts       # Shared resources stage
│   ├── pipeline-stack.ts     # CI/CD pipeline definition
│   ├── aurora-stack.ts       # Aurora database resources
│   ├── api-stack.ts          # API Gateway resources
│   └── ...                   # Other stack definitions
├── test/                     # Test files
├── util/                     # Utility functions
│   ├── cross-stage-imports.ts  # Cross-stage reference utilities
│   ├── environment-config.ts   # Environment configuration
│   ├── shared-config.ts        # Shared configuration
│   └── policy-statements-for-deploy.ts  # IAM policy utilities
├── cdk.json                  # CDK configuration
└── tsconfig.json             # TypeScript configuration
```

## 🔐 Developer Account Setup

To work effectively on this project, you'll need access to several services. Request access to each of these through your team manager:

### 🔑 Required Accounts

| Service | Purpose | How to Obtain |
|---------|---------|---------------|
| **AWS Console** | Access to AWS environments | Request SSO access to all AWS accounts (shared, dev, staging, production) |
| **GitHub** | Source code repository | Request to be added to the geminisportsai organization |
| **Jira** | Project management and issue tracking | Sign up with your @geminisports.ai email |
| **BitWarden** | Credential management | Request access to shared vaults |
| **SonarCloud** | Code quality analysis | Sign in with GitHub account |
| **Slack** | Team communication | Sign up with @geminisports.ai email or via contractor channel |

## 🤖 Using Claude Code for Development

This project is configured to work with Claude Code, an AI pair programming tool.

Claude Code is aware of:
- The repository code structure and best practices
- CDK best practices and AWS service relationships
- Infrastructure design patterns used in this project
- The PR and deployment workflow 

Claude can assist with:
- Finding and understanding existing stacks
- Creating new resources following best practices
- Understanding CDK patterns and resource configurations
- Ensuring IAM permissions follow least privilege
- Following the company's coding standards

## 🔄 Enterprise Release Management

### 📊 Quarterly Development Cycle

While the backend and frontend repositories follow a branch-based deployment model (dev → staging → production), the infrastructure repository uses a self-mutating pipeline that deploys changes to all environments automatically:

1. Changes are thoroughly reviewed in PRs
2. Changes are merged to `main`
3. Pipeline self-updates and deploys to environments in sequence
4. Each environment deployment has approval gates for manual verification

### 📝 PR Review Process

- All PRs must follow the branch naming convention: `SE-ISSUEID-Description`
- If a PR has failing checks, it will be automatically rejected
- Request review from another infrastructure developer
- PRs should include appropriate test coverage for new stacks/resources

## 🧰 Technology Stack

- **CDK**: [AWS CDK](https://docs.aws.amazon.com/cdk/v2/guide/home.html) (TypeScript)
- **CI/CD**: [CDK Pipelines](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html)
- **Testing**: [Jest](https://jestjs.io/)
- **Linting**: ESLint, Prettier
- **IaC**: CloudFormation (via CDK)
- **AWS Services**: VPC, EC2, RDS, Lambda, API Gateway, Cognito, etc.
- **Security**: IAM, KMS, AWS Backup, Security Groups
- **Networking**: VPC, Subnets, NACLs, NAT Gateways, Transit Gateway