export const commands = [
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
    command: "tokencap pack",
    description: "Compresses the workspace into a token-budgeted, AST-aware, and git-history prioritized context pack for LLMs.",
    result: "Token-budgeted context pack file generated under .tokencap/packs/."
  },
  {
    command: "tokencap watch",
    description: "Start a background watcher that automatically regenerates snapshots on file saves with a configurable debounce delay.",
    result: "Workspace watcher initialized and active in background."
  }
];
