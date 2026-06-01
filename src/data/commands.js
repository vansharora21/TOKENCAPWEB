export const commands = [
  { command: "tokencap make", description: "Generate all three output files in one shot: TOKENCAP.md, TOKENCAP_GRAPH.md, and TOKENCAP_MEMORY.md.", result: "Main snapshot, graph, and memory files generated." },
  { command: "tokencap graph", description: "Generate TOKENCAP_GRAPH.md — a dependency graph of your JS/TS project.", result: "Import and export relationships collected from local files." },
  { command: "tokencap memory", description: "Generate TOKENCAP_MEMORY.md from .tokencap-notes.md combined with Git context.", result: "Notes and branch state captured into persistent memory." },
  { command: "tokencap watch", description: "Start a background watcher that regenerates all snapshot files automatically.", result: "Watch mode active with configurable debounce." },
  { command: "tokencap init", description: "Create a default .tokencap.json configuration file in your project root.", result: "Config file template created." },
  { command: "tokencap config", description: "Print the fully resolved configuration as JSON.", result: "Resolved config output displayed." },
];
