# @saas-starter/tsconfig

Shared TypeScript configurations for the SaaS Starter Kit.

## Overview

This package provides standardized TypeScript configurations for different project types within the monorepo. It aims to maintain consistent TypeScript settings across all applications and packages, promoting code quality and developer efficiency. This package is intended for internal use and is automatically available to other workspaces via the monorepo setup.

## Available Configurations

The following base configurations are available and can be extended in your project's `tsconfig.json`:

-   **Base**: `@saas-starter/tsconfig/base.json`
    -   Core TypeScript settings suitable for most packages.
-   **React**: `@saas-starter/tsconfig/react.json`
    -   Tailored for React web applications (e.g., includes `jsx: 'react-jsx'`).
-   **React Native**: `@saas-starter/tsconfig/react-native.json`
    -   Specific settings for React Native projects (e.g., includes `jsx: 'react-native'`).
-   **Node**: `@saas-starter/tsconfig/node.json`
    -   Optimized for Node.js backend applications (e.g., module resolution, target ES version).
-   **Next.js**: `@saas-starter/tsconfig/next.json`
    -   Settings for Next.js applications, often extending the React config with Next.js specifics.

## Usage

In your application or package `tsconfig.json` file, use the `extends` property to inherit from one of the shared configurations. You will also need to specify project-specific `include`, `exclude`, and `compilerOptions` (like `outDir` or `baseUrl`).

**Example for a Node.js Project (`apps/backend/tsconfig.json`):**

```json
{
  "extends": "@saas-starter/tsconfig/node.json",
  "compilerOptions": {
    "outDir": "./dist",
    "baseUrl": "./",
    // Add any backend-specific compiler option overrides here
  },
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**Example for a React Native (Expo) Project (`apps/frontend/tsconfig.json`):**

```json
{
  "extends": "@saas-starter/tsconfig/react-native.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
    // Add any frontend-specific compiler option overrides here
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"],
  "exclude": ["node_modules"]
}
```

## Customization

You can override any settings from the extended configuration by specifying them directly in your project's `tsconfig.json` under the `compilerOptions` or other relevant top-level keys.

```json
{
  "extends": "@saas-starter/tsconfig/node.json",
  "compilerOptions": {
    // Overriding a setting from node.json
    "strictNullChecks": false,
    // Adding a new setting
    "target": "ES2022" 
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Benefits

-   **Consistency**: Ensures uniform TypeScript settings across all projects.
-   **Maintainability**: Centralizes management of common TypeScript configurations.
-   **DRY**: Avoids duplication of configuration in each `tsconfig.json`.
-   **Scalability**: Simplifies adding or updating TypeScript configurations across the monorepo.

For overall project setup and development workflows, please refer to the main project [README.md](../../README.md).