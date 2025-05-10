# Getting Started with SaaS Starter Kit

This guide will help you set up your own SaaS application using our starter kit with minimal effort.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh/) v1.0.0 or higher
- [Node.js](https://nodejs.org/) v18 or higher
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate access
- [AWS CDK](https://aws.amazon.com/cdk/) v2 or higher
- Git

## Quick Start

### 1. Create Your Project

```bash
# Initialize a new project using our CLI
npx create-saas-starter my-app

# Or clone and set up manually
git clone https://github.com/your-org/saas-starter.git my-app
cd my-app
bun install
```

### 2. Configure Your Application

```bash
# Run the interactive setup wizard
bun run setup
```

The setup wizard will guide you through:
- Company/application name
- Domain configuration
- Authentication options
- Subscription plan setup
- AWS resource configuration

This will generate a `.env` file with your configuration.

### 3. Set Up Required External Services

You'll need to set up accounts with the following services:

#### AWS
1. Create AWS accounts for development, staging, and production environments
2. Configure Cognito User Pools for authentication
3. Set up SES for email sending with verified domains

#### RevenueCat (For Subscription Management)
1. Create an account at [RevenueCat](https://www.revenuecat.com/)
2. Set up your product offerings and subscription plans
3. Add the API keys to your `.env` file

#### Google Analytics
1. Create a Google Analytics 4 property
2. Add your tracking ID to your `.env` file

#### Sentry
1. Create an account at [Sentry](https://sentry.io/)
2. Set up a new project and get your DSN
3. Add the DSN to your `.env` file

### 4. Local Development

```bash
# Start development environment
bun run dev

# Run in web-only mode (no mobile)
bun run dev:web

# Run backend only
bun run dev:backend
```

### 5. Deploy Your Infrastructure

```bash
# Deploy development environment
bun run deploy:dev

# Deploy staging environment
bun run deploy:staging

# Deploy production environment
bun run deploy:prod
```

## Project Structure

```
my-app/
├── apps/
│   ├── backend/        # NestJS GraphQL API
│   └── frontend/       # React Native/Expo frontend
├── packages/
│   ├── ui/             # Shared UI components
│   ├── config/         # Configuration utilities
│   ├── auth/           # Authentication utilities
│   └── types/          # Shared TypeScript definitions
├── infrastructure/     # AWS CDK infrastructure
├── docs/               # Documentation
└── scripts/            # Utility scripts
```

## Authentication Methods

By default, this starter kit comes with the following authentication methods enabled:

- Email/Password authentication
- Google social login
- Apple social login

Additional methods can be enabled in the configuration:
- Phone number/SMS authentication
- Magic link authentication
- Enterprise SSO (SAML, OIDC)

## Customization

### Theming

Edit the theme configuration in `packages/ui/src/theme/index.ts` to match your brand colors and styles.

### Email Templates

Customize email templates in `packages/auth/src/templates/`.

### Adding New Features

1. Create backend modules in `apps/backend/src/modules/`
2. Create frontend screens in `apps/frontend/src/screens/`
3. Define shared types in `packages/types/src/`

## Multi-tenancy

This starter kit uses a shared database with tenant ID pattern. Each organization has its own tenant ID, and all resources are associated with a tenant.

To understand how this works:
1. See `apps/backend/src/common/decorators/tenant.decorator.ts`
2. Review `apps/backend/src/middleware/tenant.middleware.ts`

## Troubleshooting

### Common Issues

1. **AWS Deployment Failures**
   - Ensure your AWS CLI is properly configured
   - Check IAM permissions for deployment

2. **Authentication Problems**
   - Verify Cognito User Pool configuration
   - Check .env settings for authentication providers

3. **Development Environment Issues**
   - Clear Turbo cache: `bun run clean`
   - Reinstall dependencies: `bun install`

### Getting Help

- Open an issue on GitHub
- Check documentation in the `docs` directory
- Join our Discord community: [link]

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## License

This project is MIT licensed. See the [LICENSE](./LICENSE) file for details.