// Home-page hero copy. The model beside it is TokenCap's own source (see repoModel.js).

export const homeHero = {
  title: "Give your agent the files that matter.",
  body: "TokenCap maps every file and import in your repo, locally, then packs only what a task needs.",
  install: "npm install -g tokencap",
  docsLabel: "Read the docs",
  // Folders the camera moves in on, in turn, between wide views.
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
