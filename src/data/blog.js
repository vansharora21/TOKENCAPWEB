export const blogPosts = [
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
