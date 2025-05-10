# @saas-starter/prettier-config

Shared Prettier configurations for the SaaS Starter Kit.

## Overview

This package provides a standardized Prettier configuration to maintain consistent code formatting across all applications and packages within the monorepo. It is intended for internal use and is automatically available to other workspaces.

This configuration includes `prettier-plugin-tailwindcss` for automatic sorting of Tailwind CSS classes.

## Available Configurations

The primary configuration is exported by default. Specific configurations for different environments (if available, e.g., `react.json`, `node.json`) can also be referenced.

- **Base/Default**: `require.resolve('@saas-starter/prettier-config')` (typically points to `base.json` or `index.js`)
- **React**: `require.resolve('@saas-starter/prettier-config/react.json')`
- **Node**: `require.resolve('@saas-starter/prettier-config/node.json')`
- **Next.js**: `require.resolve('@saas-starter/prettier-config/next.json')`

## Usage

Configure Prettier in your individual apps or packages by referencing this shared configuration.

**Method 1: Using `package.json` (for the default export)**

```json
{
  "name": "my-app-or-package",
  "version": "1.0.0",
  "prettier": "@saas-starter/prettier-config"
}
```

**Method 2: Using `.prettierrc.js` (recommended for flexibility and overrides)**

```javascript
// .prettierrc.js
// To use the default base configuration
module.exports = require("@saas-starter/prettier-config");

// Or, to use a specific configuration file, for example, for React:
// module.exports = require('@saas-starter/prettier-config/react.json');
```

**Method 3: Using `.prettierrc.json` (referencing the package name for default export)**

```json
"@saas-starter/prettier-config"
```

## Customization

To extend or override the shared configuration, use a `.prettierrc.js` file in your project:

```javascript
// .prettierrc.js
const baseConfig = require("@saas-starter/prettier-config"); // Or your chosen specific config

module.exports = {
  ...baseConfig,
  // Your overrides here
  semi: false,
  tabWidth: 4,
};
```

For IDE integration (like VS Code) and overall project setup, please refer to the main project [README.md](../../README.md).
