# @saas-starter/eslint-config

Shared ESLint configurations for the SaaS Starter Kit.

## Overview

This package provides standardized ESLint configurations for different project types within the monorepo to maintain consistent code quality and style. It is intended for internal use and is automatically available to other workspaces via the monorepo setup.

## Available Configurations

-   **Base**: General TypeScript configuration (default). Use by extending `'@saas-starter/eslint-config'` or `require.resolve('@saas-starter/eslint-config')`.
-   **React**: For React and React Native projects. Use by extending `'@saas-starter/eslint-config/react'` or `require.resolve('@saas-starter/eslint-config/react')`.
-   **Node**: For Node.js backend projects. Use by extending `'@saas-starter/eslint-config/node'` or `require.resolve('@saas-starter/eslint-config/node')`.
-   **Next**: For Next.js applications. Use by extending `'@saas-starter/eslint-config/next'` or `require.resolve('@saas-starter/eslint-config/next')`.

## Usage

In your project's `.eslintrc.js` or `.eslintrc.json` file (e.g., in `apps/frontend/.eslintrc.js`), extend the desired configuration:

```javascript
// .eslintrc.js example for a React project
module.exports = {
  root: true,
  extends: [require.resolve('@saas-starter/eslint-config/react')],
  // ... any project-specific overrides or additional configurations
};
```

## Customization

You can override or extend any of the provided configurations by adding your own rules in your project's ESLint config file:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [require.resolve('@saas-starter/eslint-config/react')],
  rules: {
    // Your custom rules here
    'react/jsx-sort-props': 'off',
  },
  // You can also add other ESLint properties like 'parserOptions', 'settings', etc.
};
```

For overall project setup, development workflows, and how to run linters, please refer to the main project [README.md](../../README.md).