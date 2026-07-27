export const blogPosts = [
  {
    id: "tokencap-v16-savings-pointers",
    title: "TokenCap v1.6 — Token Savings Engine, Multi-Host Pointers & Verified Benchmarks",
    author: "Vansh Arora",
    date: "July 23, 2026",
    readTime: "5 min read",
    category: "Release & Benchmarks",
    url: "https://dev.to/vansharora21/tokencap-v160-is-now-live-3153",
    secondaryUrl: "https://coderlegion.com/23530/tokencap-v1-6-0-is-now-live",
    excerpt: "Introducing the Token & Dollar Savings Engine, 12.2× average token reduction (94.3% cost savings), non-overwriting multi-host pointers for 7 AI hosts, and CI-enforced zero network egress security.",
    content: `TokenCap v1.6.0 introduces real-time Token & Dollar Savings reporting, multi-host AI agent pointer generation, and verified open-source benchmarks.

### Verified Benchmarks: 12.2× Token Reduction

Across 15 real-world repository tasks, TokenCap's graph-ranked capsule compression reduced prompt token size from an average of 820,101 tokens down to 46,337 tokens—a **94.3% cost reduction** with exact tiktoken counting.

### What's New in v1.6.0

- **Real-Time Savings Engine:** Calculates exact token and dollar savings against naive codebase dumps during \`tokencap make\` and writes persistent reports to \`.tokencap/savings.json\`.
- **Multi-Host Agent Pointers:** Auto-wires non-overwriting pointer files for AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, Copilot, and Kiro to point seamlessly to \`.tokencap/agent/START_HERE.md\`.
- **CI-Enforced Zero Egress:** Guaranteed 100% offline local privacy verified by automated test suites scanning source code on every commit.
- **Security Commands:** Added \`tokencap scan\`, \`tokencap audit\`, and \`tokencap upgrade\` CLI tools.`
  },
  {
    id: "tokencap-v15-mcp",
    title: "TokenCap v1.5 — Making MCP Feel Invisible",
    author: "Vansh Arora",
    date: "July 18, 2026",
    readTime: "5 min read",
    category: "Model Context Protocol",
    excerpt: "How TokenCap v1.5 eliminates manual setup and cold start overhead for Local Model Context Protocol (MCP), delivering live repository watching, auto-initialization, and sub-2ms query responses.",
    url: "https://dev.to/vansharora21/tokencap-v15-making-mcp-feel-invisible-4ha4",
    content: `Two days after releasing TokenCap v1.4 with Local Model Context Protocol (MCP) support, v1.5 is here to make MCP feel completely invisible.

### Cold Start & Manual Pre-Build Problems

Before v1.5, using MCP with AI hosts required manual preparation:
1. Running \`tokencap make\` beforehand to compile knowledge files.
2. Running a separate watch command to keep snapshots fresh during editing.
3. Manually crafting JSON configurations for different IDEs (VS Code, Cursor, Windsurf, Claude Code, Antigravity, Codex).

### What's New in v1.5.0

- **Automatic Initialization:** When the MCP server boots up, it automatically runs \`tokencap make\` to build project intelligence if it's missing or stale.
- **Live Watcher Service:** The MCP server process maintains an internal background watcher for source edits and \`.tokencap-notes.md\`, keeping memory current automatically.
- **Universal Host Config Command:** \`tokencap mcp --init\` auto-detects host IDEs in the workspace and merges TokenCap definitions safely into host configs.
- **Zero-Latency In-Memory Caching:** Server-side handler durations measure between 0–2 ms on local runs.`
  },
  {
    id: "mcp-launch",
    title: "Announcing TokenCap MCP: Local Repository Intelligence Service",
    author: "Vansh Arora",
    date: "July 15, 2026",
    readTime: "4 min read",
    category: "Product Launch",
    excerpt: "TokenCap v1.4 introduces Local Model Context Protocol support. Don't read repository intelligence—query it on demand with 11 local tool endpoints.",
    url: "https://www.linkedin.com/posts/vansharora2108_tokencap-mcp-ai-share-7483602223256465409-z1XG/",
    content: `Stop teaching every AI agent your codebase from scratch.

TokenCap v1.4 turns TokenCap into a local repository intelligence service over stdio MCP. AI agents query only what they need when they need it, saving up to 92% of context token budgets while maintaining total privacy.`
  },
  {
    id: "building-in-public",
    title: "Building TokenCap in Public: Self-Loading Universal Context Layer",
    author: "Vansh Arora",
    date: "July 12, 2026",
    readTime: "4 min read",
    category: "Open Source",
    excerpt: "Reflections and journey on building TokenCap—an open-source, local-first context layer that makes project intelligence self-discoverable for AI agents.",
    url: "https://www.linkedin.com/posts/vansharora2108_buildinpublic-opensource-ai-share-7484319017009184768-Q1oV/",
    content: `Building open source software in public for the AI coding ecosystem. 

TokenCap was born out of frustration with cold-start AI sessions, context limits, and repetitive codebase discovery. Today it powers self-loading context, repository constitutions, execution contracts, and local MCP intelligence.`
  },
  {
    id: "smart-retrieval",
    title: "The Smart Context Retrieval Era: Moving Beyond Code Dumping",
    author: "Vansh Arora",
    date: "June 17, 2026",
    readTime: "5 min read",
    category: "AI Engineering",
    excerpt: "Why dumping entire repositories into AI context windows is a productivity killer—and how semantic keyword extraction, code graphs, and multi-source relevance scoring retrieve only what matters.",
    content: `LLMs have massive context windows, with models like Gemini 1.5 Pro supporting up to 2 million tokens. This has led many developers to adopt a "code dumping" workflow—zipping their entire project or pasting hundreds of files into the prompt to ask a simple question.

But code dumping has severe drawbacks:
1. **Lost in the Middle:** LLMs struggle to locate relevant details when drowned in thousands of lines of unrelated code.
2. **Context Drifts:** High token usage makes conversation histories balloon, leading to slow response times and memory drift.
3. **Budget Waste:** Unnecessary tokens cost developer time, API budget, and processing speed.

### Enter Smart Context Retrieval

With TokenCap v0.7.0, we introduced a flagship command to solve this: \`tokencap ask "your question"\`. Instead of packaging the entire project, TokenCap acts as a local-first semantic indexer:

- **Keyword Analysis:** Scans your query for keywords like "auth", "login", or "database".
- **Graph Cluster Matching:** Matches extracted keywords to the logical modules detected in your Project Knowledge Graph.
- **Multi-Source Ranking:** Scores every file in your project based on graph connectivity (centrality), git changes (recency), developer memory logs (active tasks), and risk scoring.
- **BFS Expansion:** Traverses the import dependency graph up to 2 hops to ensure matching files bring along their helper functions and controllers.
- **AST Truncation:** Applies a strict token budget (default 12k tokens) by automatically rendering core files in full, mid-importance files as outline signatures, and distant files as summaries.

By moving from *snapshots* to *smart retrieval*, you get faster, more accurate answers from AI assistants with a fraction of the token budget.`
  },
  {
    id: "obsidian-style-graphs",
    title: "Obsidian-Style Interactive Graphs for Code Topology",
    author: "Vansh Arora",
    date: "June 14, 2026",
    readTime: "4 min read",
    category: "Data Visualization",
    excerpt: "Visualizing codebase structure, mapping imports, scoring file change risks, and navigating dependencies in a self-contained, dark-mode graph canvas.",
    content: `Understanding how code hangs together is one of the hardest parts of onboarding or refactoring. Documentation is often stale, and drawing boxes by hand is tedious.

TokenCap's Interactive Graph Explorer (\`tokencap graph --open\`) compiles your local JS/TS import topology and launches a dark-mode viewer inside your default browser—entirely offline, powered by Cytoscape.js.

### Key Capabilities of the Code Intelligence Graph:

1. **13 Node Classifications:** Code files are scanned and automatically colored by role (e.g. green for routes/apis, blue for UI components, purple for services, orange for database schemas, red for middleware).
2. **4-Tier Risk Scoring:** Computes risk ratings (CRITICAL, HIGH, MEDIUM, LOW) for every node. A file that is changed frequently in git and has high connectivity (many dependents) is flagged as critical risk.
3. **Local Graph Mode:** Isolates the active node and displays only its direct dependencies and dependents, reducing visual noise for complex graphs.
4. **Impact Analysis:** Tells you exactly which systems, routes, or modules will be affected if you edit a specific utility or database model.

By making your codebase visual and interactive, TokenCap bridges the gap between text-based files and structural understanding.`
  },
  {
    id: "context-packing-budget",
    title: "AI-Optimized Context Packing with Token Budgets",
    author: "Vansh Arora",
    date: "June 8, 2026",
    readTime: "6 min read",
    category: "LLM Optimization",
    excerpt: "Compressing codebases of any size into strict token windows by dynamically ranking files and generating AST outlines, summaries, or reference-only stubs.",
    content: `When building context packages for LLMs, you often hit a hard token ceiling. If your budget is 20,000 tokens, how do you decide which files to truncate, which to omit, and which to keep in full?

TokenCap's Context Packing Engine (\`tokencap pack\`) uses a budget-driven compression algorithm:

- 🟢 **Full Content:** High-relevance files (e.g., recently changed files, entry points) are written in full.
- 🟡 **Structural Outline:** Mid-importance files are trimmed using regex parsing to show only function signatures, class layouts, and interface definitions.
- 🟠 **AST Summary:** Low-importance files are summarized into short, token-dense structural descriptions (~80 tokens).
- 🔴 **Reference Only:** Distant files are represented as paths and export lists, preserving import structure without wasting budget.

This tiered representation ensures that the AI assistant remains aware of the entire project structure and interfaces, while focusing its attention on the full source of the target modules.`
  }
];
