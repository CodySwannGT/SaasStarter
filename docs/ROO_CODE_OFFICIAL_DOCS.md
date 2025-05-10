# RooCode AI Coding Assistant Documentation

## Overview

RooCode (formerly Roo Cline) is an AI-powered autonomous coding agent that lives in your VS Code editor. It provides a whole dev team of AI agents to help you code faster and smarter, whether you're starting a new project, maintaining existing code, or learning new technologies.

## Key Features

### 🚀 Core Capabilities
- **Generate Code** from natural language descriptions
- **Refactor & Debug** existing code
- **Write & Update** documentation
- **Answer Questions** about your codebase
- **Automate** repetitive tasks
- **Create** new files and projects

### 🛠️ Smart Tools
RooCode comes with powerful tools that can:
- Read and write files in your project
- Execute commands in your VS Code terminal
- Control a web browser for testing and verification
- Use external tools via MCP (Model Context Protocol)

### 🎭 Multiple Modes
RooCode adapts to your needs with specialized modes:

1. **💻 Code Mode** (Default)
   - General-purpose coding tasks
   - Full access to all tools
   - Writing code, implementing features, debugging

2. **🏗️ Architect Mode**
   - System design and high-level planning
   - Can read files and edit markdown only
   - Technical leadership and architecture discussions

3. **❓ Ask Mode**
   - Answering questions without changing code
   - Read-only access to files
   - Code explanation and concept exploration

4. **🪲 Debug Mode**
   - Systematic problem diagnosis
   - Full tool access
   - Methodical troubleshooting approach

5. **🪃 Orchestrator Mode** (aka Boomerang Mode)
   - Managing complex tasks
   - Breaks down work and delegates to other modes
   - Workflow automation

## Installation

### VS Code Marketplace (Recommended)
1. Open VS Code
2. Click the Extensions icon or press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (macOS)
3. Search for "Roo Code"
4. Click Install
5. Find the Roo Code icon (🦘) in the Activity Bar

### Alternative Installation Methods
- **Open VSX Registry**: For VS Code-compatible editors like VSCodium
- **Manual VSIX**: Download from marketplace and drag into editor

## Configuration

### API Providers
RooCode supports multiple AI providers:
- Anthropic (Claude)
- OpenAI (GPT models)
- OpenRouter
- Google (Gemini)
- AWS Bedrock
- Azure OpenAI
- Ollama (local models)
- And more...

### Model Context Protocol (MCP)

MCP extends RooCode's capabilities by allowing integration with external tools and services.

#### Key Features of MCP:
- **Standardized Protocol**: Universal adapter between AI and various data sources
- **Tool Discovery**: AI can automatically discover and use available tools
- **Stateful Context**: Maintains conversation context across tool uses
- **Extensible**: Add unlimited custom tools

#### MCP Configuration
MCP servers can be configured at two levels:
1. **Global Configuration**: In `mcp_settings.json` file
2. **Project Configuration**: In `.roo/mcp.json` file

Example MCP configuration:
```json
{
  "mcpServers": {
    "server-name": {
      "command": "python",
      "args": ["/path/to/server.py"],
      "env": {
        "API_KEY": "your_api_key"
      },
      "alwaysAllow": ["tool1", "tool2"],
      "disabled": false
    }
  }
}
```

#### Transport Types:
- **STDIO**: Local servers communicating via standard input/output
- **SSE**: Remote servers using Server-Sent Events

## Customization Options

### Custom Instructions
Configure RooCode's behavior using:
- **Global Instructions**: Apply across all workspaces
- **Workspace Instructions**: Project-specific settings
- **Mode-specific Instructions**: Tailored for each mode

#### Rule Files:
- `.roorules`: Primary configuration file
- `.clinerules`: Alternative naming
- `.cursorrules` / `.windsurfrules`: For compatibility

Example structure:
```
project/
├── .roorules                    # Workspace-wide rules
├── .roorules-code              # Code mode specific
├── .roorules-architect         # Architect mode specific
└── .roo/
    ├── mcp.json                # MCP configuration
    └── rules-code/             # Mode-specific rules directory
        ├── style-guide.md
        └── testing-rules.md
```

### Custom Modes
Create specialized AI assistants with:
- Custom role definitions
- Specific tool permissions
- File access restrictions
- Tailored instructions

Example custom mode configuration:
```json
{
  "slug": "docs-writer",
  "name": "Documentation Writer",
  "roleDefinition": "You are a technical documentation expert...",
  "groups": [
    ["read", {}],
    ["edit", { "fileRegex": "\\.(md|mdx)$" }]
  ],
  "customInstructions": "Always use clear, concise language..."
}
```

## Usage Tips

### Switching Modes
1. **Dropdown Menu**: Click selector next to chat input
2. **Slash Commands**: Type `/code`, `/architect`, `/ask`, etc.
3. **Keyboard Shortcut**: 
   - macOS: `⌘ + .`
   - Windows/Linux: `Ctrl + .`

### Best Practices
- Be clear and specific in your requests
- Use mode switching for different tasks
- Review and approve actions before execution
- Enable auto-approval cautiously
- Use custom instructions for consistency
- Leverage MCP for external integrations

### Performance Optimization
- Turn off MCP if not needed to reduce prompt size
- Adjust file truncation settings for large files
- Use appropriate context window sizes
- Consider model selection per mode

## Security Considerations

- RooCode can access your file system and execute commands
- MCP servers can run arbitrary code
- Always review actions before approval
- Be cautious with auto-approval settings
- Only use trusted MCP servers
- Consider security implications of web browsing features

## Advanced Features

### Sticky Models
Each mode remembers your last-used model, automatically switching between them as you change modes.

### Tool Permissions
Control what each mode can do:
- Read files
- Write/edit files
- Execute commands
- Browse web
- Use MCP tools

### File Restrictions
Limit file access using regex patterns:
```json
{
  "fileRegex": "\\.(md|mdx|txt)$",
  "description": "Only markdown and text files"
}
```

## Community & Support

- **Discord**: [Join the server](https://discord.gg/roocode)
- **Reddit**: [r/RooCode](https://www.reddit.com/r/RooCode)
- **GitHub**: [Issues](https://github.com/RooVetGit/Roo-Code/issues) & [Features](https://github.com/RooVetGit/Roo-Code/discussions)
- **Twitter**: [@roo_code](https://x.com/roo_code)
- **Bluesky**: [roocode.bsky.social](https://bsky.app/profile/roocode.bsky.social)
- **LinkedIn**: [Roo Code](https://www.linkedin.com/company/roo-code)

## Disclaimer

RooCode is provided "as is" without warranties. Users assume all risks associated with code generation and execution. Always review AI-generated code before use in production environments.

## License

RooCode is open source software. Check the GitHub repository for license details.

---

*This documentation is based on RooCode's official documentation and community resources as of May 2025.*