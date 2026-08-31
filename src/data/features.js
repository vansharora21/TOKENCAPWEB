export const featurePipeline = [
  {
    id: "make",
    cmd: "tokencap make",
    badge: "AST Snapshot",
    title: "One command. Complete context handoff.",
    tagline: "Parses your repository AST, extracts Git diffs, scrubs secrets, and formats compressed LLM-ready markdown in 82ms.",
    stats: [
      { label: "Token Savings", val: "12.2× average" },
      { label: "Execution Time", val: "82ms" },
      { label: "Output Files", val: "3 artifacts" },
    ],
  },
  {
    id: "impact",
    cmd: "tokencap impact src/api/auth.rs:validate_token",
    badge: "Call Graph",
    title: "Deep cross-file symbol resolution.",
    tagline: "Traces upstream callers and downstream dependents across Rust, Go, Java, Python, and TypeScript with zero hallucinated edges.",
    stats: [
      { label: "Languages", val: "Tier-1 Multi-Lang" },
      { label: "Ambiguity Policy", val: "Refuse on doubt" },
      { label: "Resolution", val: "Byte-exact AST" },
    ],
  },
  {
    id: "analyze",
    cmd: "tokencap analyze taint --file src/routes/users.js",
    badge: "Security & Schema",
    title: "Static taint flow & schema intelligence.",
    tagline: "Follows user inputs to dangerous sinks, verifies sanitizers, and extracts database DDL tables without running untrusted code.",
    stats: [
      { label: "Taint Analysis", val: "Source-to-sink" },
      { label: "Schema Engine", val: "SQL & GraphQL" },
      { label: "Network Access", val: "Zero egress" },
    ],
  },
  {
    id: "mcp",
    cmd: "tokencap mcp --watch",
    badge: "MCP Protocol",
    title: "Auto-wired local AI memory over stdio.",
    tagline: "Exposes 11 local tool endpoints and auto-wires AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, Copilot, and Kiro seamlessly.",
    stats: [
      { label: "MCP Endpoints", val: "11 tools active" },
      { label: "Latency", val: "<2ms local IPC" },
      { label: "Host Support", val: "7 agent hosts" },
    ],
  },
];

export const featureShowcase = {
  title: "TokenCap gives you one command for the entire handoff story.",
  description: "Deterministic AST compression, verified call graphs, static taint tracking, and auto-wired agent pointers all local, zero cloud required.",
};
