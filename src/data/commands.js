export const commands = [
  {
    command: "tokencap make",
    description: "Generate the complete TokenCap snapshot. Calculates real-time token/dollar savings (.tokencap/savings.json) and auto-wires 7 multi-host agent pointers (AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, Copilot, Kiro).",
    result: "Main snapshot, graph, memory, savings report, and host pointers generated."
  },
  {
    command: "tokencap mcp",
    description: "Start the local Model Context Protocol (MCP) server or configure host IDEs (--init). Features 11 tool endpoints, live repository background watching, and zero-latency caching.",
    result: "Local stdio MCP server running or host IDE configuration written under workspace settings."
  },
  {
    command: "tokencap agent",
    description: "Analyzes the repository and automatically generates a complete Self-Loading Universal Context Layer. Use --execution flag to generate the Execution Contract lifecycle suite.",
    result: "Self-loading context layer, root AGENTS.md, and Execution Contract (with --execution) generated."
  },
  {
    command: "tokencap brain <topic>",
    description: "Project Brain — unified intelligence query about any part of your codebase (files, risk, architecture, dependencies, review groups, recent changes, git timeline).",
    result: "Unified cluster intelligence overview rendered to terminal."
  },
  {
    command: "tokencap constitution",
    description: "Manage and inspect your Repository Constitution to enforce permanent laws regarding APIs, schemas, security, and compliance.",
    result: "Repository Constitution analyzed, scored, and written under .tokencap/constitution/."
  },
  {
    command: "tokencap diff",
    description: "Generate semantic Change Intelligence report mapping breaking changes, endpoint edits, and test recommendations.",
    result: "Change report, PR description, and AI code review prompt generated."
  },
  {
    command: "tokencap debug",
    description: "Initialize, log, and end session-based debugging memory with automated CLI command output and stack trace capture.",
    result: "Active debug session managed, timeline logged, and handoff report compiled."
  },
  {
    command: "tokencap pack <topic>",
    description: "Compresses the workspace into a token-budgeted, AST-aware, and git-history prioritized context pack. If a topic is provided, scopes to files inside that cluster.",
    result: "Topic-scoped, token-budgeted context pack generated under .tokencap/packs/."
  },
  {
    command: "tokencap scan",
    description: "Scans workspace source files for leaked secrets, API keys, tokens, and high-entropy credentials before snapshot generation.",
    result: "Secret scan report with file locations and quarantine flags rendered."
  },
  {
    command: "tokencap audit",
    description: "Performs security audit of generated TokenCap outputs to verify redaction engine compliance and zero-egress guarantees.",
    result: "Audit verification summary with risk assessment passed."
  },
  {
    command: "tokencap upgrade",
    description: "Checks NPM registry for TokenCap updates and safely upgrades the global package installation.",
    result: "TokenCap package version checked and updated."
  }
];

