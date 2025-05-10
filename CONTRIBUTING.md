# Contributing to SaaS Starter

First and foremost, thank you for considering contributing to this SaaS Starter Kit! This project aims to provide a solid foundation for building multi-tenant SaaS applications, and your contributions help make it better for everyone.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before participating.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

**Before submitting a bug report**:
- Check the [issues](../../issues) to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible.
- Provide specific examples to demonstrate the steps.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

**Before submitting an enhancement suggestion**:
- Check if the enhancement has already been suggested.
- Determine which repository the enhancement should be suggested in.
- Use a clear and descriptive title for the issue to identify the suggestion.
- Provide a step-by-step description of the suggested enhancement in as many details as possible.
- Describe the current behavior and explain which behavior you expected to see instead and why.

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the style guides
- Include well-written tests
- Document new code
- End all files with a newline
- Avoid platform-dependent code

## Development Environment Setup

### Prerequisites

- [Bun](https://bun.sh/) v1.0.0 or higher
- [Node.js](https://nodejs.org/) v18 or higher
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate access
- [AWS CDK](https://aws.amazon.com/cdk/) v2 or higher
- Git

### Setup

1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/saas-starter.git
   cd saas-starter
   ```
3. Install dependencies
   ```bash
   bun install
   ```
4. Run the configuration wizard
   ```bash
   bun run config-branding
   ```
5. Start the development environment
   ```bash 
   bun run dev
   ```

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * ⚡️ `:zap:` when improving performance
    * 🔥 `:fire:` when removing code or files
    * 🐛 `:bug:` when fixing a bug
    * 🚑 `:ambulance:` when applying a critical fix
    * ✨ `:sparkles:` when introducing a new feature
    * 📝 `:memo:` when adding or updating documentation
    * 🚀 `:rocket:` when deploying stuff
    * 💄 `:lipstick:` when updating the UI and style files
    * 🎉 `:tada:` when starting a new project or celebrating a milestone
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies
    * 🔧 `:wrench:` when updating configuration files

### JavaScript/TypeScript Style Guide

* Use TypeScript for all code
* 2 spaces for indentation
* Use semicolons
* Prefer `const` over `let`
* Use arrow functions when possible
* Use template literals instead of string concatenation
* Use destructuring when appropriate
* Use async/await over Promise chains
* Always include explicit return types for functions

### Documentation Style Guide

* Use [Markdown](https://guides.github.com/features/mastering-markdown/) for documentation
* Include code examples when relevant
* Use relative links for referencing other documentation in the repo
* Use h2 (##) for section headers and h3 (###) for subsections

## Testing

* Write tests for new features and bug fixes
* Ensure tests pass before submitting a pull request
* Aim for at least 80% test coverage for new code

## Additional Notes

### Issue and Pull Request Labels

This project uses labels to categorize issues and pull requests. Having the right labels helps with triaging and prioritization.

* `bug`: Something isn't working
* `enhancement`: New feature or request
* `documentation`: Improvements or additions to documentation
* `good first issue`: Good for newcomers
* `help wanted`: Extra attention is needed
* `question`: Further information is requested
* `frontend`: Related to frontend code
* `backend`: Related to backend code
* `infrastructure`: Related to AWS/infrastructure code
* `security`: Addressing security concerns

Thank you for contributing to our SaaS Starter Kit!