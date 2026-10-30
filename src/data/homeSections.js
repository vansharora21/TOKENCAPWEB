// Home-page sections below the hero. Figures come from data/benchmarks.js;
// file names and commands match the TokenCap README for v3.1.0.

export const proofSection = {
  figureLabel: "fewer tokens than reading the repo with grep.",
  linkLabel: "See the benchmark",
  linkHref: "/benchmarks",
};

export const hostsSection = {
  title: "Your agent finds it without being told.",
  body: "tokencap make writes a short pointer file that each AI tool already reads at the start of a session. The MCP server then answers the agent's questions while it works.",
  command: "tokencap serve --mcp --init",
  commandNote: "Writes the MCP config for the tool it detects in your repo.",
  pointers: [
    { file: "CLAUDE.md", host: "Claude Code" },
    { file: "AGENTS.md", host: "Codex, OpenCode" },
    { file: ".cursor/rules/tokencap.md", host: "Cursor" },
    { file: ".windsurf/rules/tokencap.md", host: "Windsurf" },
    { file: ".clinerules/tokencap.md", host: "Cline, Roo Code" },
    { file: ".github/copilot-instructions.md", host: "GitHub Copilot" },
    { file: ".kiro/steering/tokencap.md", host: "Kiro" },
  ],
};

export const localSection = {
  title: "Your code stays on your machine.",
  facts: [
    {
      lead: "No network calls.",
      text: "The one command that goes online is tokencap update, which asks npm for a newer version. A test checks every source file for network imports on each build.",
    },
    {
      lead: "Secrets are redacted first.",
      text: "API keys, tokens, connection strings and private keys become [REDACTED] markers before anything is written to disk.",
    },
    {
      lead: "Plain files you can read.",
      text: "The index lives in .tokencap/ inside your repo as Markdown and JSON. Delete the folder and it is gone.",
    },
  ],
};

export const setupSection = {
  title: "From install to a mapped repo.",
  commands: [
    { command: "npm install -g tokencap", note: "Install the CLI. Needs Node.js 18 or newer." },
    { command: "tokencap make", note: "Index the repo you are in." },
    { command: "tokencap serve --mcp --init", note: "Connect your AI tool." },
  ],
};
