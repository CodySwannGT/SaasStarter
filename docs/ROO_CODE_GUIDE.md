# Mastering Roo Code: The Advanced Developer's Guide

Roo Code is an AI-powered autonomous coding agent that transforms VS Code into a collaborative environment where you work alongside AI assistants. This guide provides specific, technical guidance for multi-person development teams using TypeScript, React, Expo, NestJS, Turborepo, and AWS CDK.

## Latest architecture and capabilities

Roo Code has evolved significantly in 2025, now offering a sophisticated agent architecture with multiple specialized modes and extensive third-party integration capabilities. The current version (3.16) introduces Groq and Chutes API providers, clickable code references, improved MCP stability, and accessibility enhancements, building on recent additions of internationalization, text-to-speech, and specialized debug mode.

Roo's primary strength lies in its **multi-modal operation system** that provides contextually-aware assistants for different development tasks. Unlike simple code completers, Roo understands your entire codebase, executes commands, and maintains conversation context across sessions through its Memory Bank system. The agent architecture is permission-based, with configurable auto-approval settings that give you precise control over what Roo can modify in your project.

## Optimal configuration for team development

### Directory-based configuration structure

For multi-person teams, implement the directory-based configuration approach rather than single files:

```
.
├── .roo/                # Project-specific configurations 
│   ├── rules/           # Global workspace rules (applied to all modes)
│   │   ├── 01-general.md
│   │   ├── 02-coding-style.md
│   │   └── 03-team-standards.md
│   ├── rules-code/      # Specific rules for "code" mode
│   │   ├── 01-js-style.md
│   │   └── 02-ts-style.md
│   ├── rules-architect/ # Specific rules for "architect" mode
│   │   └── 01-architecture-guidelines.md
│   └── mcp.json         # Project-level MCP configuration
└── .roomodes            # Project-specific custom modes definition
```

Commit this structure to version control so all team members have consistent Roo Code behavior. This approach allows mode-specific instructions that maintain the same baseline rules across the team.

### Tech stack-specific modes

Create specialized modes for your tech stack components with precise file permissions and instructions:

```json
{
  "customModes": [
    {
      "slug": "typescript-dev",
      "name": "🔷 TypeScript",
      "roleDefinition": "You are a TypeScript expert focused on type safety and modern patterns.",
      "groups": ["read", ["edit", { "fileRegex": "\\.(ts|tsx)$" }], "command"],
      "customInstructions": "Use strict TypeScript patterns. Prefer interfaces over types for public APIs. Use type inference when obvious."
    },
    {
      "slug": "react-expo-dev",
      "name": "📱 React/Expo",
      "roleDefinition": "You are a React and Expo expert focused on cross-platform mobile development.",
      "groups": ["read", ["edit", { "fileRegex": "\\.(jsx|tsx|js|ts)$" }], "command", "browser"],
      "customInstructions": "Prioritize cross-platform compatibility. Follow React Native and Expo best practices."
    },
    {
      "slug": "nestjs-dev",
      "name": "🏗️ NestJS",
      "roleDefinition": "You are a NestJS expert focused on building scalable backend services.",
      "groups": ["read", ["edit", { "fileRegex": "\\.(ts|js)$" }], "command"],
      "customInstructions": "Follow NestJS architectural patterns. Use dependency injection properly."
    },
    {
      "slug": "turborepo-architect",
      "name": "🏛️ Turborepo Architect",
      "roleDefinition": "You are a monorepo architecture expert focused on Turborepo.",
      "groups": ["read", ["edit", { "fileRegex": "\\.(json|js|ts)$" }], "command"],
      "customInstructions": "Optimize for proper workspace configuration. Consider package boundaries and dependencies."
    },
    {
      "slug": "aws-cdk-dev",
      "name": "☁️ AWS CDK",
      "roleDefinition": "You are an AWS infrastructure expert using CDK for infrastructure as code.",
      "groups": ["read", ["edit", { "fileRegex": "\\.(ts|js)$" }], "command"],
      "customInstructions": "Follow AWS best practices. Design secure and scalable infrastructure."
    },
    {
      "slug": "pr-reviewer",
      "name": "🔍 PR Reviewer",
      "roleDefinition": "You are a seasoned code reviewer analyzing GitHub pull requests.",
      "groups": ["read", "command", "git"],
      "customInstructions": "Focus on code quality, performance issues, potential bugs, and adherence to project standards."
    }
  ]
}
```

Each mode specifies:
- A unique identifier and display name
- A role definition for the AI
- Permission groups specifying what files the agent can modify
- Custom instructions tailored to the specific technology

### Auto-approval settings for teams

For team environments, implement restrictive auto-approval settings by default:

```json
{
  "autoApprove": {
    "readFile": false,
    "writeFile": false,
    "command": false,
    "mcpTools": {
      "allowList": ["query_schema", "list_tables"],
      "blockList": ["execute_query", "modify_schema"]
    }
  }
}
```

Senior developers who need more autonomy can create personal profiles with broader permissions, but the default team profile should require explicit approval for file writes and command execution.

## Model selection recommendations

### Optimal models for your tech stack

For TypeScript, React, Expo, NestJS, Turborepo, and AWS CDK development:

1. **Claude 3.7 Sonnet** - Best overall choice, especially for TypeScript code generation, React components, and NestJS architecture understanding
2. **Claude 3.5 Sonnet** - Excellent balance of performance and cost
3. **GPT-4o** - Strong alternative with good JavaScript/TypeScript ecosystem understanding
4. **DeepSeek R1** (via Ollama) - Best local option for offline development

Recent benchmarks show Claude models achieving top scores on coding tasks (92.0% on HumanEval) and knowledge tasks (85-88% on MMLU), with particular strengths in TypeScript/React codebases. The qualitative difference is that Claude models typically provide more detailed responses and better documentation, while GPT models tend to offer more concise solutions with faster response times.

### Workflow-specific model recommendations

**Task-optimized model selection:**

| Development Phase       | Recommended Mode | Optimal Model         |
| ----------------------- | ---------------- | --------------------- |
| Architecture & Planning | Architect        | Claude 3.7 Sonnet     |
| Core TypeScript/React   | Code             | Claude 3.5/3.7 Sonnet |
| NestJS Backend          | nestjs-dev       | Claude 3.7 Sonnet     |
| AWS CDK Infrastructure  | aws-cdk-dev      | Claude 3.7 Sonnet     |
| Interactive Prototyping | Code             | GPT-4o                |
| PR Reviews              | pr-reviewer      | Claude 3.5 Sonnet     |
| Documentation           | Code             | Claude 3.5/3.7 Sonnet |

For cost-effective development, consider:
- Using Claude 3.5 Sonnet for routine coding tasks
- Reserving Claude 3.7 Sonnet for complex architectural work and large refactors
- Using local models (via Ollama) for quick iterations during early development

## MCP integration strategies

Multi-Context Prompting (MCP) is a protocol that extends Roo Code's capabilities by connecting to external tools and data sources. It follows a client-server architecture where Roo Code connects to MCP servers that expose tools and resources.

### Project-level MCP configuration

Create a `.roo/mcp.json` file for project-specific configuration:

```json
{
  "mcpServers": {
    "postgres-connector": {
      "command": "node",
      "args": ["./tools/mcp-servers/postgres-server.js"],
      "cwd": "${workspaceFolder}",
      "env": {
        "DB_CONNECTION_STRING": "${env:DATABASE_URL}"
      },
      "alwaysAllow": ["list_tables", "describe_table"],
      "disabled": false
    },
    "typescript-analyzer": {
      "command": "npx",
      "args": ["ts-mcp", "serve"],
      "cwd": "${workspaceFolder}",
      "disabled": false
    },
    "aws-resources": {
      "command": "python",
      "args": ["-m", "aws_mcp"],
      "cwd": "${workspaceFolder}",
      "env": {
        "AWS_PROFILE": "dev"
      },
      "disabled": false
    }
  }
}
```

Commit this file to version control for consistent team experience.

### Security best practices

1. Use environment variables for sensitive information
2. Implement least privilege for tool access through careful `alwaysAllow` settings
3. Disable MCP servers when not needed
4. Regularly audit MCP server usage patterns
5. Create a `.env.example` file documenting required environment variables

### Recommended MCP servers for your tech stack

1. **TypeScript Analyzer**: Provides deeper TypeScript type introspection
   - GitHub: `https://github.com/ts-ai/mcp-typescript`
   - Capabilities: Type inference, API documentation generation

2. **React Component Library**: Assists with component development
   - GitHub: `https://github.com/react-tools/mcp-components`
   - Capabilities: Component analysis, prop validation, accessibility checking

3. **NestJS Helper**: Streamlines NestJS module development
   - GitHub: `https://github.com/nest-community/mcp-nest`
   - Capabilities: Module generation, controller analysis, dependency mapping

4. **AWS CDK Assistant**: Simplifies CDK infrastructure management
   - GitHub: `https://github.com/cdk-tools/mcp-cdk`
   - Capabilities: Stack validation, resource mapping, security analysis

5. **Turborepo Navigator**: Improves monorepo management
   - GitHub: `https://github.com/turbo-tools/mcp-turborepo`
   - Capabilities: Workspace analysis, dependency graph generation

## Memory management for large codebases

The primary challenge with large codebases is context window management. Roo Code provides several techniques to prevent the tool from "forgetting" your code.

### Memory Bank implementation

The most effective solution is implementing [Roo Code Memory Bank](https://github.com/GreatScottyMac/roo-code-memory-bank), which creates a structured file system for persistent memory:

1. Clone the repository: `git clone https://github.com/GreatScottyMac/roo-code-memory-bank.git`
2. Copy the `.roorules-*` files to your project root
3. Create a `projectBrief.md` in your project root with high-level project description
4. Initialize the Memory Bank using Architect mode

This creates a memory-bank directory with files including:
- `activeContext.md`: Current session state
- `productContext.md`: Project overview
- `progress.md`: Development progress tracking
- `decisionLog.md`: Technical decision history
- `systemPatterns.md`: Architectural patterns

Use the "update memory bank" or "UMB" command to explicitly sync context when needed.

### Context optimization techniques

1. **Strategic .rooignore configuration**

   Create a `.rooignore` file to exclude non-essential files:
   ```
   node_modules/
   dist/
   build/
   .git/
   *.log
   *.lock
   coverage/
   .turbo/
   ```

   For large codebases, generate an optimized .rooignore:
   ```bash
   npx roo-memory-tools generate-ignore --threshold=30000 ./my-project
   ```

2. **Selective context loading**

   Instead of broad references, use specific ones:
   - `@/path/to/file.ts` to include specific files
   - `@folder ./src/components limited:10` to include only top-level files
   - `@problems` to include current errors and warnings
   - `@git commit a1b2c3d` to reference specific commits

3. **Advanced Memory Bank alternatives**

   For particularly complex projects, consider:
   - [Advanced Roo Code Memory Bank](https://github.com/enescingoz/roo-advanced-memory-bank): JIT rule loading and adaptive workflows
   - [RooFlow](https://github.com/GreatScottyMac/RooFlow): Enhanced memory with YAML-based system prompts

4. **Mode-specific context management**

   Configure different memory strategies per mode:
   - Architect mode: Broad, high-level context
   - Code mode: Focused, file-specific context
   - Debug mode: Error-centric context

## Third-party extensions ecosystem

### Essential extensions

1. **[Roo Code Memory Bank](https://github.com/GreatScottyMac/roo-code-memory-bank)**
   - Purpose: Persistent memory management
   - Key features: Cross-session context retention, project history tracking

2. **[RooFlow](https://github.com/GreatScottyMac/RooFlow)**
   - Purpose: Enhanced Memory Bank with workflow optimization
   - Key features: YAML-based system prompts, token usage optimization

3. **[Roo Commander](https://github.com/jezweb/roo-commander)**
   - Purpose: Advanced configuration for structured development
   - Key features: Workflow management, integrated task tracking

4. **[Memory Bank MCP](https://github.com/alioshr/memory-bank-mcp)**
   - Purpose: Remote memory bank management
   - Key features: Team synchronization, cloud-based memory storage

### MCP servers collection

The [Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers) repository catalogs Model Context Protocol servers:

- **Database integrations**: PostgreSQL, Redis, MongoDB connectors
- **API connectors**: OpenAPI, GitHub, GitLab, Jira integrations
- **AI tools**: Vector databases, embeddings, RAG systems
- **Cloud services**: AWS, GCP, Azure integration tools
- **Development tools**: Debugging, testing, monitoring utilities

### Community guides and resources

1. **[Managing Large Codebases](https://docs.roocode.com/guides/large-codebases)**
   - Official documentation on handling large projects
   - Optimization techniques and configuration options

2. **[Memory Bank Developer Primer](https://github.com/GreatScottyMac/roo-code-memory-bank/blob/main/developer-primer.md)**
   - Detailed technical documentation for Memory Bank
   - Configuration examples and workflows

3. **[RooCode-Tips-Tricks](https://github.com/Michaelzag/RooCode-Tips-Tricks)**
   - Collection of optimization scripts
   - Includes .rooignore generator and context optimization tools

## Collaborative development workflow

### GitHub integration best practices

1. **PR review workflow**

   Create a custom PR reviewer mode:
   ```json
   {
     "slug": "pr-reviewer",
     "name": "🔍 PR Reviewer",
     "roleDefinition": "You are a seasoned code reviewer analyzing GitHub pull requests.",
     "groups": ["read", "command", "git"],
     "customInstructions": "Focus on code quality, performance issues, potential bugs, and adherence to project standards."
   }
   ```

   Use Roo Code's git integration to analyze PR changes:
   ```
   @git diff main...feature-branch
   ```

2. **Team coordination workflows**

   Implement a standardized workflow pattern across your team:
   - **Architect mode first**: Plan new features using Architect mode
   - **Write to Memory Bank**: Store architectural decisions
   - **Switch to Code mode**: Implement planned features
   - **PR reviewer mode**: Review changes before merging

3. **Team standards in rules files**

   Create rule files for consistent coding standards. Example content for `.roo/rules/02-coding-style.md`:

   ```markdown
   # Team Coding Standards

   - Use TypeScript for all new code
   - Use 2-space indentation
   - Use camelCase for variables and functions, PascalCase for components and classes
   - Import order: React core, external libraries, internal modules, types, styles
   - Use absolute imports with path aliases
   - Prefer async/await over promises
   - Use optional chaining and nullish coalescing
   - Follow React Hooks best practices
   - Document all public APIs with JSDoc comments
   ```

## Conclusion

Roo Code represents a significant advancement in AI-assisted development, providing a customizable, context-aware assistant that can dramatically enhance productivity for teams working with TypeScript, React, Expo, NestJS, Turborepo, and AWS CDK. By implementing the directory-based configuration structure, optimizing model selection, leveraging MCP for tool integration, and using Memory Bank for context retention, your team can effectively collaborate with Roo Code on large-scale projects while maintaining consistent practices and high code quality.

As Roo Code continues to evolve rapidly, stay updated with the latest features and community extensions by following the official repository and joining the Discord community. The growing ecosystem of tools and extensions makes Roo Code increasingly powerful for handling the complexities of modern software development.