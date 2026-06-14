export const roadmapItems = [
  {
    version: "0.7.0",
    title: "Multi-Language Graph",
    description:
      "Extend the project knowledge graph beyond JS/TS with parsers for Python, Go, Rust, and Java.",
    status: "planned",
    source: "README.md Roadmap",
  },
  {
    version: "0.7.0",
    title: "Visual Graph Export",
    description:
      "Export the project knowledge graph as a Mermaid diagram embedded directly inside TOKENCAP_GRAPH.md.",
    status: "planned",
    source: "README.md Roadmap",
  },
  {
    version: "0.8.0",
    title: "Incremental Snapshots",
    description:
      "Only re-process changed files on subsequent runs instead of scanning the full project every time.",
    status: "exploratory",
    source: "Architecture analysis — current full-scan approach in collectFiles()",
  },
  {
    version: "0.8.0",
    title: "Graph Cycle Detection",
    description:
      "Detect circular import dependencies in the project graph and surface them as warnings in TOKENCAP_GRAPH.md.",
    status: "exploratory",
    source: "Architecture analysis — buildGraph.js edge model supports cycle detection",
  },
];
