export const roadmapItems = [
  {
    version: "1.5.0",
    title: "Self-Maintaining MCP Intelligence",
    description: "Background watcher, host auto-init (tokencap mcp --init --client <host>), and zero-latency caching.",
    status: "shipped",
    source: "Release v1.5.0",
  },
  {
    version: "1.4.0",
    title: "Repository Intelligence Service (MCP)",
    description: "11 local stdio MCP tool endpoints and Centralized Security Hardening Engine.",
    status: "shipped",
    source: "Release v1.4.0",
  },
  {
    version: "1.3.0",
    title: "Incremental Intelligence Engine",
    description: "Sub-100ms selective rebuilds, SHA-256 caching, and delta file outputs.",
    status: "shipped",
    source: "Release v1.3.0",
  },
  {
    version: "1.6.0",
    title: "Multi-Language Graph",
    description: "Extend the project knowledge graph beyond JS/TS with parsers for Python, Go, Rust, and Java.",
    status: "planned",
    source: "README.md Roadmap",
  },
  {
    version: "0.12.0",
    title: "Graph Cycle Detection",
    description:
      "Detect circular import dependencies in the project graph and surface them as warnings in TOKENCAP_GRAPH.md.",
    status: "planned",
    source: "Architecture analysis: buildGraph.js edge model supports cycle detection",
  },
];
