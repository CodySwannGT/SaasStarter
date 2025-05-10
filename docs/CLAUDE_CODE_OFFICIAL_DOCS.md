# Claude Code Documentation

## Overview

Claude Code is an agentic coding tool developed by Anthropic that lives in your terminal, understands your codebase, and helps you code faster through natural language commands. It integrates directly with your development environment and uses Claude 3.7 Sonnet by default.

## Key Capabilities

- **Edit files and fix bugs** across your codebase
- **Answer questions** about your code's architecture and logic
- **Execute and fix tests**, linting, and other commands
- **Search git history**, resolve merge conflicts, and create commits/PRs
- **Understand unfamiliar code** with deep codebase awareness
- **Automate Git operations** from simple commits to complex workflows

## Status

Claude Code is currently in **beta as a research preview**. Anthropic is gathering developer feedback to understand:
- How developers prefer to collaborate with AI tools
- Which development workflows benefit most from AI assistance
- How to improve the agent experience

## System Requirements

- **Operating Systems**: macOS 10.15+, Ubuntu 20.04+/Debian 10+, or Windows via WSL
- **Node.js**: Required (latest LTS version recommended)
- **npm**: For package management
- **Terminal**: Any modern terminal environment

Note: Claude Code does not run directly in Windows; it requires WSL (Windows Subsystem for Linux).

## Installation

### Prerequisites
1. Node.js and npm installed
2. Non-privileged user account (avoid root installation)

### Installation Steps

```bash
# Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# Navigate to your project directory
cd /path/to/your/project

# Run Claude Code
claude

# Complete one-time OAuth authentication
```

### NPM Prefix Configuration (Recommended)
If you encounter permission errors, configure a user-writable npm prefix:

```bash
# Create directory for global packages
mkdir -p ~/.npm-global

# Configure npm to use it
npm config set prefix ~/.npm-global

# Add to PATH (for bash)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Now install Claude Code
npm install -g @anthropic-ai/claude-code
```

## Command Line Usage

### Basic Usage

```bash
# Start Claude Code in current directory
claude

# Ask a question about your codebase
claude > how does our authentication system work?

# Fix issues
claude "fix the type errors in the auth module"

# Create commits
claude commit

# Create pull requests
claude pr
```

### CLI Flags

```bash
# Non-interactive mode (print mode)
claude -p "explain this code"
claude --print "generate unit tests"

# Output format options
claude -p --output-format json "analyze this function"
claude -p --output-format verbose "debug this issue"

# Resume previous conversations
claude --continue          # Continue most recent
claude --resume           # Choose from list

# Limit turns in non-interactive mode
claude -p --max-turns 5 "implement feature"

# Debug mode for MCP servers
claude --mcp-debug
```

### Slash Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `/help`           | Show available commands                  |
| `/config`         | Configure Claude Code settings           |
| `/mcp`            | Check MCP server status                  |
| `/bug`            | Report a bug                             |
| `/terminal-setup` | Configure terminal for better experience |
| `/vim`            | Enable Vim keybindings                   |
| `/logout`         | Clear authentication                     |
| `/login`          | Re-authenticate                          |

## Extended Thinking Mode

Claude Code supports an extended thinking mode that provides deeper reasoning:

```bash
# Using thinking keywords
claude > think about potential security vulnerabilities
claude > think harder about edge cases

# Intensifying phrases trigger deeper thinking
claude > think more about optimization
claude > think longer about architecture
```

The thinking process appears as gray italic text above responses.

## Memory Management

### CLAUDE.md File
Claude Code automatically creates and maintains a `CLAUDE.md` file containing:
- Project structure and technologies
- Setup instructions
- Test commands
- Frequently used operations
-  CLAUDE.md files can now import other files. Add @path/to/file.md to ./CLAUDE.md to load additional files on launch 

### Memories
Add memories during conversation by starting with `#`:
```bash
claude > # Our API always returns JSON with status codes
claude > # Prefer functional programming style
```

## MCP (Model Context Protocol)

MCP enables Claude Code to connect to external tools and services.

### Configuration Locations

1. **Project-specific**: `.mcp.json` in project root
2. **User config**: `~/.config/claude/config.json` (Linux/macOS)

### Example MCP Configuration

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["/path/to/server.js"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
```

### Adding MCP Servers

```bash
# Add a server locally for current project
claude mcp add my-server -e API_KEY=123 -- /path/to/server

# Add project-scoped server (sharable via git)
claude mcp add shared-server -s project /path/to/server

# Check MCP status
claude mcp
```

## Custom Commands

### Project Commands
Create files in `.claude/commands/` directory:

```bash
# Create command directory
mkdir -p .claude/commands

# Create custom command
echo 'Find and fix security vulnerabilities' > .claude/commands/security-audit.md
```

### Personal Commands
For global commands, use `~/.claude/commands/`

### Commands with Arguments
Use `$ARGUMENTS` placeholder:

```bash
echo 'Fix GitHub issue #$ARGUMENTS' > .claude/commands/fix-issue.md

# Usage
claude > /project:fix-issue 123
```

## Git Workflows

Claude Code excels at Git operations:

```bash
# Create commits with context-aware messages
claude commit

# Create pull requests
claude pr

# Search git history
claude > which commit added tests for authentication?

# Resolve conflicts
claude > rebase on main and resolve conflicts
```

## Best Practices

### Effective Workflow

1. **Ask Claude to research first**
   - Understand the problem before coding
   - Read relevant files without editing

2. **Create a plan**
   - Ask for implementation approach
   - Review before proceeding

3. **Implement incrementally**
   - Test changes as you go
   - Use unit tests for verification

4. **Commit and document**
   - Create descriptive commits
   - Update documentation

### Terminal Configuration

- Use `Shift+Enter` for line breaks
- Configure with `/terminal-setup` for iTerm2/VSCode
- Enable Vim keybindings with `/vim` if preferred

### Context Management

- Use subagents for complex problems: `claude > use a subagent to analyze performance issues`
- Reset context when switching tasks: `claude > ok that's done, let's start fresh`
- Interrupt with `Escape` key to redirect

## Security & Privacy

### Architecture
- Direct API connection (no intermediate servers)
- Local file system access only
- Permission-based operations
- No background processes

### Data Handling
- Feedback stored for 30 days (opt-in)
- Not used for model training
- Direct communication with Anthropic API
- Local conversation storage

### Best Practices
- Review all proposed changes
- Be cautious with auto-approval
- Use development containers for sensitive projects
- Avoid running as root/admin user

## Troubleshooting

### Common Issues

1. **Permission Errors**
   - Use npm prefix configuration
   - Avoid sudo/root installation

2. **WSL Issues**
   - Ensure using Linux npm, not Windows
   - Check paths start with `/usr/` not `/mnt/c/`

3. **Performance Issues**
   - Close unused applications
   - Consider token limits for large codebases

4. **MCP Connection Issues**
   - Use `--mcp-debug` flag
   - Check server configuration syntax
   - Verify environment variables

## Cost & Pricing

Claude Code uses the Anthropic API with standard pricing:
- **Input tokens**: $3 per million tokens
- **Output tokens**: $15 per million tokens
- Includes thinking tokens in extended thinking mode

Monitor usage through the Anthropic Console.

## Limitations

- No direct Windows support (requires WSL)
- Cannot access external resources besides Anthropic API
- Terminal-based only (no GUI)
- Beta status means features are evolving

## Resources

- **Documentation**: [docs.anthropic.com/claude-code](https://docs.anthropic.com/en/docs/claude-code/overview)
- **GitHub**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
- **Support**: Use `/bug` command or GitHub issues
- **Community**: Anthropic Discord and forums

## License

Claude Code is provided under Anthropic's Commercial Terms of Service.

---

*This documentation is based on Claude Code beta release as of May 2025. Features and capabilities may evolve based on user feedback.*