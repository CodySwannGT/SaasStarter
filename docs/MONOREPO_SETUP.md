# Monorepo Setup Guide

This document describes the setup and configuration of our monorepo structure.

## Project Structure

The monorepo is organized as follows:

```
micro-saas-starter/
├── apps/                   # Applications 
│   └── frontend/           # Main mobile/web application
├── packages/               # Shared packages
│   ├── auth/               # Authentication package
│   ├── config/             # Configuration and constants
│   ├── types/              # Shared TypeScript types
│   └── ui/                 # UI component library
├── scripts/                # Project scripts
└── docs/                   # Project documentation
```

## Technology Stack

- **Package Manager:** Bun (v1.0.29+)
- **Monorepo Tool:** Turborepo
- **Frontend Framework:** React Native + Expo (v53.0.8+)
- **Navigation:** Expo Router (v5.0.6+)
- **UI Components:** GlueStack UI (v1.0.38+)
- **Styling:** NativeWind (v4.1.23+)
- **State Management:** Apollo Client + React Context
- **Form Management:** React Hook Form (v7.52.1+) with Zod validation
- **GraphQL:** Apollo Client (v3.10.8+) with code generation
- **TypeScript:** v5.4.5+
- **Testing:** React Testing Library with Jest

## Configuration Files

### Root Configuration

- **package.json:** Defines workspaces and shared scripts
- **turbo.json:** Configures task dependencies and caching
- **tsconfig.base.json:** Base TypeScript configuration shared across packages
- **.eslintrc.js:** ESLint configuration with plugins for React and TypeScript
- **.prettierrc:** Prettier formatting configuration

### Application Configuration

- **apps/frontend/package.json:** Frontend app dependencies
- **apps/frontend/app.config.ts:** Expo configuration
- **apps/frontend/tsconfig.json:** TypeScript configuration extending the base config
- **apps/frontend/babel.config.js:** Babel configuration for the frontend
- **apps/frontend/tailwind.config.js:** TailwindCSS/NativeWind configuration

### Package Configuration

Each package has its own configuration files:

- **package.json:** Package-specific dependencies
- **tsconfig.json:** Package-specific TypeScript configuration

## Dependency Management

- **Root Dependencies:** Contains build tools and shared dev dependencies
- **App Dependencies:** Frontend-specific dependencies
- **Package Dependencies:** Package-specific dependencies that aren't shared

## Development Workflow

1. Install dependencies: `bun install`
2. Start development:
   - All apps: `bun run dev`
   - Frontend only: `bun run dev:web`
3. Run code quality checks:
   - Linting: `bun run lint`
   - Type checking: `bun run typecheck`
   - Formatting: `bun run format`

## Package Structure Guidelines

Each package follows this structure:

```
packages/package-name/
├── src/
│   ├── index.ts         # Main entry point
│   ├── components/      # (if applicable)
│   ├── hooks/           # (if applicable)
│   ├── utils/           # (if applicable)
│   └── types.ts         # Type definitions
├── package.json         # Package manifest
└── tsconfig.json        # TypeScript configuration
```

## Component Guidelines

Follow the Container/View pattern:

- **Container Component:** Handles logic and state
- **View Component:** Presentation only, receives props from Container
- **Export:** Default export from Container via an index.ts file

## Known Issues and Workarounds

1. **Dependency Resolution:** Sometimes packages need to be explicitly added to the root dependencies to resolve conflicts.
2. **TypeScript Errors:** TypeScript may show errors for template placeholders like `{{COMPANY_NAME}}`.
3. **NativeWind Config:** NativeWind requires proper setup for the `className` prop to work correctly.

## Additional Setup

For local development, create an `.env.local` file in the apps/frontend directory with appropriate values for:

```
API_URL=http://localhost:3000
COMPANY_NAME=YourCompanyName
```