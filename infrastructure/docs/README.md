# Infrastructure Documentation

Welcome to the documentation for the infrastructure-v2 repository. This directory contains detailed documentation on various aspects of the infrastructure codebase.

## Documentation Index

- [Directory Structure](./directory-structure.md) - Overview of code organization
- [Coding Standards](./coding-standards.md) - CDK and TypeScript coding guidelines
- [Testing Guidelines](./testing-guidelines.md) - Best practices for testing CDK infrastructure
- [AWS SMS Registration Guide](./aws-sms-registration-guide.md) - Guide for setting up SMS with AWS

## Key Concepts

### AWS CDK

The AWS Cloud Development Kit (CDK) is an open-source software development framework for defining cloud infrastructure as code using familiar programming languages. In this project, we use TypeScript to define our AWS infrastructure.

### CDK Pipelines

We use CDK Pipelines for continuous delivery of our infrastructure code. Unlike the backend and frontend repositories which use GitHub Actions, our infrastructure uses a self-mutating pipeline that updates itself when code changes.

### Cross-Account Deployment

Our infrastructure spans multiple AWS accounts:
- Shared account - Contains the pipeline and shared resources
- Dev account - Development environment resources
- Staging account - Testing environment resources
- Production account - Production environment resources

### Infrastructure as Code (IaC)

All infrastructure is defined as code, allowing for version control, peer review, and consistent deployments across environments.

## Getting Started

Refer to the [README.md](../README.md) in the root of the repository for detailed setup instructions, including:
- Prerequisites installation
- AWS profile configuration
- Account bootstrapping
- Initial deployment

## Key Resources

- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [CDK Pipelines Documentation](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)

## Contributing

Before contributing to this codebase, please:
1. Read the [Coding Standards](./coding-standards.md) document
2. Understand the [Directory Structure](./directory-structure.md)
3. Review the [Testing Guidelines](./testing-guidelines.md)
4. Create a new branch from a Jira ticket using the format `SE-ISSUEID-Description`
5. Submit a pull request to the `main` branch