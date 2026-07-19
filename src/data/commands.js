export const commands = [
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
    command: "tokencap ask",
    description: "Ask a natural language question about your codebase and TokenCap automatically retrieves only the relevant files.",
    result: "Smart context package and suggested AI prompt generated."
  },
  {
    command: "tokencap context",
    description: "Build a focused context package manually for a specific topic keyword.",
    result: "Topic context package generated."
  },
  {
    command: "tokencap make",
    description: "Generate the complete TokenCap snapshot: TOKENCAP.md, TOKENCAP_GRAPH.md, and TOKENCAP_MEMORY.md in one shot.",
    result: "Main snapshot, graph, and memory files generated."
  },
  {
    command: "tokencap graph",
    description: "Generate project knowledge graph. Classifies nodes, detects clusters, calculates risk ratings, and opens interactive Obsidian-style HTML viewer.",
    result: "Code intelligence graph data, summaries, diffs, and HTML viewer generated."
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
    description: "Compresses the workspace into a token-budgeted, AST-aware, and git-history prioritized context pack. If a topic is provided, the pack engine scopes the context to files inside that cluster.",
    result: "Topic-scoped, token-budgeted context pack generated under .tokencap/packs/."
  },
  {
    command: "tokencap constitution",
    description: "Manage and inspect your Repository Constitution to enforce permanent laws regarding APIs, schemas, security, and compliance.",
    result: "Repository Constitution analyzed, scored, and written under .tokencap/constitution/."
  },
  {
    command: "tokencap watch",
    description: "Start a background watcher that automatically regenerates snapshots on file saves with a configurable debounce delay.",
    result: "Workspace watcher initialized and active in background."
  }
];
