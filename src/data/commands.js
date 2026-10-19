export const commands = [
  {
    command: "tokencap serve",
    description: "Start the local loopback HTTP bridge (127.0.0.1) implementing Bridge Contract v1 for the Chrome companion browser extension.",
    result: "Local loopback bridge listening on 127.0.0.1:4545 with pairing token authentication."
  },
  {
    command: "tokencap make",
    description: "Generate the complete TokenCap snapshot. Calculates real-time token/dollar savings (.tokencap/savings.json) and auto-wires 7 multi-host agent pointers (AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, Copilot, Kiro).",
    result: "Main snapshot, graph, memory, savings report, and host pointers generated."
  },
  {
    command: "tokencap serve --mcp",
    description: "Start the local Model Context Protocol (MCP) server or configure host IDEs (--init). Features 11 tool endpoints, live repository background watching, and zero-latency caching.",
    result: "Local stdio MCP server running or host IDE configuration written under workspace settings."
  },
  {
    command: "tokencap analyze agent",
    description: "Analyzes the repository and automatically generates a complete Self-Loading Universal Context Layer. Use --execution flag to generate the Execution Contract lifecycle suite.",
    result: "Self-loading context layer, root AGENTS.md, and Execution Contract (with --execution) generated."
  },
  {
    command: "tokencap ask brain <topic>",
    description: "Project Brain — unified intelligence query about any part of your codebase (files, risk, architecture, dependencies, review groups, recent changes, git timeline).",
    result: "Unified cluster intelligence overview rendered to terminal."
  },
  {
    command: "tokencap analyze constitution",
    description: "Manage and inspect your Repository Constitution to enforce permanent laws regarding APIs, schemas, security, and compliance.",
    result: "Repository Constitution analyzed, scored, and written under .tokencap/constitution/."
  },
  {
    command: "tokencap analyze diff",
    description: "Generate semantic Change Intelligence report mapping breaking changes, endpoint edits, and test recommendations.",
    result: "Change report, PR description, and AI code review prompt generated."
  },
  {
    command: "tokencap analyze debug",
    description: "Initialize, log, and end session-based debugging memory with automated CLI command output and stack trace capture.",
    result: "Active debug session managed, timeline logged, and handoff report compiled."
  },
  {
    command: "tokencap ask \"<question>\"",
    description: "Builds a task-scoped, token-budgeted context pack for a natural-language question, ranking the files that match the task.",
    result: "Task-scoped, token-budgeted context pack generated."
  },
  {
    command: "tokencap analyze security scan",
    description: "Scans workspace source files for leaked secrets, API keys, tokens, and high-entropy credentials before snapshot generation.",
    result: "Secret scan report with file locations and quarantine flags rendered."
  },
  {
    command: "tokencap analyze security audit",
    description: "Performs security audit of generated TokenCap outputs to verify redaction engine compliance and zero-egress guarantees.",
    result: "Audit verification summary with risk assessment passed."
  },
  {
    command: "tokencap update",
    description: "Checks NPM registry for TokenCap updates and safely upgrades the global package installation.",
    result: "TokenCap package version checked and updated."
  }
];

