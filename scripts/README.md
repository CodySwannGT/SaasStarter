# SaaS Starter CLI

This directory contains scripts for the SaaS Starter Kit, including the unified CLI tool that helps set up and create projects.

## SaaS CLI Tool

The `saas-cli.ts` script provides a unified interface for both configuring an existing SaaS Starter Kit repository and creating new projects based on the template.

### Installation

The CLI is already installed as part of the repository. The required dependencies are:

- chalk - For colored terminal output
- ora - For spinners and loading indicators
- commander - For command-line argument parsing

### Usage

```bash
# Configure the existing repository (setup mode)
bun run setup

# Create a new project from the template (create mode)
bun run create

# Update branding configuration in an existing project
bun run branding

# Show help and available commands
bun run saas
```

### Setup Mode

Use this mode to configure your existing SaaS Starter repository with custom settings. It will:

1. Collect configuration information (company name, domain, etc.)
2. Create a `.env` file with your settings
3. Provide next steps for development

```bash
bun run setup
```

### Create Mode

Use this mode to create a new project based on the SaaS Starter template. It will:

1. Clone the SaaS Starter repository into a new directory
2. Remove Git history and initialize a new repository
3. Collect configuration information
4. Replace placeholder values across all files
5. Create a `.env` file with your settings
6. Install dependencies
7. Provide next steps for development

```bash
bun run create
```

### Branding Mode

Use this mode to update the branding settings in your existing SaaS Starter repository. It will:

1. Collect detailed branding information (company name, colors, etc.)
2. Update specific files with branding values
3. Create a `.env.branding` file with your settings
4. Provide next steps for development

```bash
bun run branding
```

## Contributing

When modifying scripts:

1. Follow TypeScript best practices
2. Add proper error handling for better user experience
3. Keep scripts modular and focused on specific tasks
4. Update this documentation as needed