export const heroStats = [
  { label: "Local-first", value: "Offline" },
  { label: "AI-ready output", value: "Markdown" },
  { label: "Git-aware", value: "Context" },
];

export const heroContent = {
  headline: "Your codebase. Compressed. Ready to hand off.",
  subheadline: "Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace — files, Git context, imports, and developer intent — into a single handoff-ready file.",
  description: "TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.",
  primaryCTA: "Install Free via npm",
  primaryCTACommand: "npm install -g tokencap",
  secondaryCTA: "View on GitHub",
  secondaryCTAUrl: "https://github.com/vansharora21/TOKENCAP",
  keyBenefits: [
    { label: "Local-first", description: "Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace." },
    { label: "AI-ready output", description: "Generates structured Markdown snapshots sized for any LLM context window — from llama-3-8b to Gemini 1.5 Pro." },
    { label: "Git-aware", description: "Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context." },
    { label: "Privacy-first", description: "Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk." },
    { label: "Zero configuration", description: "Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready." },
    { label: "VS Code native", description: "Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption." },
  ],
  socialProof: { npmPackage: "tokencap", license: "MIT", publisher: "VanshArora21" },
};

export const problemPoints = [
  { title: "Local-first", description: "Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace." },
  { title: "AI-ready output", description: "Generates structured Markdown snapshots sized for any LLM context window, from local models to Gemini 1.5 Pro." },
  { title: "Git-aware", description: "Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context." },
];

export const howItWorksSteps = [
  { title: "Local-first capture", description: "TokenCap snapshots your workspace files, Git context, imports, and developer intent into a single handoff file." },
  { title: "Persistent memory", description: "The memory layer combines your notes file with live Git context so the next developer can pick up faster." },
  { title: "Zero disruption", description: "Works from the CLI or VS Code with auto-capture on save and a status bar indicator." },
];

export const finalCallout = {
  title: "Build a handoff-ready codebase instead of another context window pile-up.",
  description: "TokenCap keeps the snapshot local, structured, and ready to share without re-explaining the project every time.",
};
