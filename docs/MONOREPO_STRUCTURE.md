# Monorepo Structure Guidelines

This document outlines the structure and organization of our monorepo, which is managed using Turborepo.

## Overview

Our monorepo is organized into the following main directories:

- `apps/` - Contains deployable applications
- `packages/` - Contains shared internal packages
- `scripts/` - Contains project-wide scripts
- `docs/` - Contains project documentation
- `tasks/` - Contains project tasks and task management

## Apps

Applications are standalone deployable entities:

```
apps/
├── frontend/  # Main React Native application
└── backend/   # (Future) Backend API service
```

Each application:
- Has its own `package.json` with dependencies
- Can be built and deployed independently
- May depend on internal packages from the `packages/` directory
- Should not depend on other applications

## Packages

Shared internal packages that are used across multiple applications:

```
packages/
├── auth/     # Authentication utilities
├── config/   # Shared configuration
├── types/    # Shared TypeScript types
└── ui/       # Shared UI components
```

Each package:
- Has its own `package.json` with dependencies
- Exports a clear public API
- Should follow the principle of minimal dependencies
- Should include TypeScript types
- May depend on other internal packages, but be cautious of circular dependencies

### Package Structure

Each package should follow a consistent structure:

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

## Dependency Management

We manage dependencies with Bun:

1. **Root dependencies** - Dev tools used across the monorepo (Turborepo, TypeScript, ESLint)
2. **App dependencies** - Dependencies specific to an application
3. **Package dependencies** - Dependencies needed by shared packages

### Rules

1. Shared dependencies should be hoisted to the root `package.json` when possible
2. Packages should declare all dependencies they use (no relying on hoisting)
3. Use strict versioning for internal package references:
   ```json
   {
     "dependencies": {
       "@micro-saas/ui": "*"  // Always use the latest version
     }
   }
   ```

## Workspaces

Our monorepo uses the workspace feature of Bun and Turborepo. This is configured in the root `package.json`:

```json
{
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

This allows us to:
1. Install all dependencies with a single `bun install` command
2. Reference internal packages as if they were published
3. Make changes across packages and immediately see them in consuming apps

## Build System

We use Turborepo to manage our build pipeline:

```
turbo.json
```

This file defines:
- Tasks (build, test, lint)
- Task dependencies (what needs to run before what)
- Caching strategies
- Workspace filtering

## Scripts

Common scripts defined in root `package.json`:

```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "typecheck": "turbo run typecheck",
    "test": "turbo run test"
  }
}
```

These scripts execute the corresponding script in each package and app.

## Local Development

To work on the entire monorepo:

```bash
# Install all dependencies
bun install

# Start development servers for all applications
bun run dev
```

To work on a specific application with its dependencies:

```bash
# Start just the frontend application
bun --cwd apps/frontend dev
```

## Adding New Packages

To add a new shared package:

1. Create a new directory in `packages/`
2. Initialize it with `package.json` and `tsconfig.json`
3. Define the public API in `src/index.ts`
4. Run `bun install` from the root to update workspaces

## Best Practices

1. **Keep packages focused** - Each package should have a clear, single responsibility
2. **Minimize API surface** - Export only what's necessary
3. **Test at appropriate levels** - Unit tests for packages, integration tests for apps
4. **Document public APIs** - Each package should have clear documentation
5. **Version consistently** - Coordinate version bumps across dependent packages
6. **Avoid cross-application imports** - Apps should not import from other apps