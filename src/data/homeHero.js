// Home-page hero copy. The model beside it is TokenCap's own source (see repoModel.js).

export const homeHero = {
  title: "Give your agent the files that matter.",
  body: "TokenCap maps every file and import in your repo, locally, then packs only what a task needs.",
  install: "npm install -g tokencap",
  docsLabel: "Read the docs",
  caption: "This is TokenCap's own source: 280 files, 702 imports. Hover a block to see what depends on it.",
  // Folders a visitor can jump to; each is a real src/ directory in the model.
  focusFolders: [
    { id: "security", label: "security" },
    { id: "graph", label: "graph" },
    { id: "pack", label: "pack" },
    { id: "mcp", label: "mcp" },
    { id: "agent", label: "agent" },
  ],
  // Files the idle tour highlights: the most-imported ones in the real graph.
  tour: ["src/security/redact.js", "src/core/gitUtils.js", "src/graph/types.js", "src/agent/types.js"],
};
