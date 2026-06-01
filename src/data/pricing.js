export const pricingPlans = [
  {
    name: "Open Source",
    price: "$0",
    description: "Everything. No limits.",
    features: [
      "TOKENCAP.md — full project snapshot",
      "TOKENCAP_GRAPH.md — JS/TS dependency graph",
      "TOKENCAP_MEMORY.md — developer context memory",
      "8 context profiles (compact → Gemini 1.5 Pro)",
      "Git integration: diffs, status, branch, commits",
      "Automatic secret redaction",
      "VS Code / Cursor extension",
      "Watch mode (CLI)",
      "All future features",
      "MIT license — use in any project",
    ],
    cta: "npm install -g tokencap",
    highlighted: true,
  },
];

export const comparisonRows = [
  ["License", "MIT", "Open source", "No restrictions"],
  ["Pricing", "$0", "$0", "$0"],
  ["Usage limits", "None", "None", "None"],
  ["Account required", "No", "No", "No"],
];
