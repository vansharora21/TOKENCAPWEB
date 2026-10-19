export const blogPosts = [
  {
    id: "tokencap-v30-release",
    title: "TokenCap v3.0.0 Is Ready: TokenCap Becomes a Platform",
    author: "Vansh Arora",
    date: "October 19, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v3.0.0 ships the Platform release: a read-only SDK for generated intelligence, Git-backed team intelligence, a local opt-in plugin runtime, and a one-command migration from v2.",
    content: `TokenCap v3.0.0 is now ready. The "Platform" release lets other tools, teammates, and plugins build on the intelligence TokenCap generates, while everything still runs on your machine.

### What's New in v3.0.0:

- **Read-Only SDK:** \`@tokencap/sdk\` is a dependency-free, dual-module (CommonJS and ES module) interface for intelligence that \`tokencap make\` has already generated. \`loadIntelligence\`, \`search\`, \`queryGraph\`, \`getImpact\`, and \`buildContext\` answer questions about a repository without triggering a build, a watcher, a network request, or a file write. The SDK source lives in \`packages/sdk\` of the TokenCap repository.
- **Team Intelligence:** \`tokencap analyze team\` records shared rules, decisions, approvals, ownership profiles, and ADRs as append-only files under \`.tokencap/team/\`. You commit them with Git like any other file. There is no server or cloud account, and TokenCap never commits on your behalf.
- **Plugin Runtime:** Projects can list local plugins under \`tokencapPlugins\` in their own \`package.json\`. Plugins provide \`afterBuild\` and \`beforeRedact\` hooks and named tools, have no \`require\`, \`process\`, or network access, and can only read and write \`.tokencap/plugins/<plugin-name>/\`.
- **v3 Migration:** \`tokencap make --migrate\` upgrades a v2 workspace's integration config and schemas. The next \`tokencap make\` writes a v3 artifact manifest.

### Breaking Change: v2 Aliases Removed

The seven canonical commands stay the same: \`make\`, \`ask\`, \`analyze\`, \`serve\`, \`update\`, \`help\`, and \`version\`. The v2 standalone aliases are gone, and each one now prints its replacement instead of running:

| Old command | v3 command |
| --- | --- |
| \`tokencap impact <file>:<sym>\` | \`tokencap ask impact <file>:<sym>\` |
| \`tokencap health\` / \`risk\` / \`stats\` / \`debt\` | \`tokencap analyze health\` / \`risk\` / \`stats\` / \`debt\` |
| \`tokencap debug\` / \`refactor\` / \`feedback\` / \`verify\` | \`tokencap analyze debug\` / \`refactor\` / \`feedback\` / \`verify\` |
| \`tokencap rebuild\` | \`tokencap make --rebuild\` |
| \`tokencap remember\` / \`memory\` / \`handoff\` | \`tokencap serve session save\` / \`list\` / \`handoff\` |

### Upgrading:

\`\`\`bash
npm install -g tokencap@3.0.0
tokencap make --migrate
tokencap make
\`\`\`

MCP hosts configured before v3 keep working: \`tokencap mcp\` remains a hidden alias for \`tokencap serve --mcp\`, which new host configs use.

TokenCap remains local-first: no source upload, no API key, and no telemetry.`
  },
  {
    id: "tokencap-v29-release",
    title: "TokenCap v2.9.0 Is Ready: An Agent Skill for Every AI Coding Host",
    author: "Vansh Arora",
    date: "October 8, 2026",
    readTime: "3 min read",
    category: "Release",
    excerpt: "TokenCap v2.9.0 ships the Agent Skill release: a standard skill definition that makes TokenCap discoverable and executable by any AI agent, workflow playbooks for common engineering tasks, and a stable MCP Contract v2.",
    content: `TokenCap v2.9.0 is now ready — the "Agent Skill" release makes TokenCap discoverable and executable by any AI agent through the open skill system.

### What's New in v2.9.0:

- **Agent Skill System:** \`skills/tokencap/\` provides a standard skill definition (\`SKILL.md\`, \`commands.md\`, \`workflows.md\`) for OpenCode, Claude Code, Cursor, Codex, and Antigravity. The directory ships in the npm tarball and installs through each host's configured skill-discovery mechanism.
- **No Silent Host Changes:** TokenCap never overwrites host configuration automatically. You choose where the Skill lives.
- **Workflow Playbooks:** Structured guidance for codebase onboarding, deep refactoring, blast-radius impact audits, and change reviews, so agents follow a known path instead of exploring blind.
- **MCP Contract v2:** A stable tool contract, generated artifact schemas, and runtime artifact validation. A v2 minor release may add optional fields, but it will not rename a tool, remove an accepted field, or change a documented field's meaning.

### Getting Started:

\`\`\`bash
npm install -g tokencap
tokencap make
\`\`\`

Then copy or clone the Skill into your host's skills directory. The standalone Skill is also available at [Tokencap-skill](https://github.com/vansharora21/Tokencap-skill).

TokenCap remains local-first: no source upload, no API key, and no telemetry.`
  },
  {
    id: "tokencap-v28-release",
    title: "TokenCap v2.8.0 Is Ready: Local Repository Context for Browser AI Chats",
    author: "Vansh Arora",
    date: "September 28, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v2.8.0 ships the Companion workflow: a local, paired bridge that moves bounded repository context into ChatGPT, Claude, and Gemini while preserving drafts and keeping captures reviewable.",
    content: `TokenCap v2.8.0 is now ready — the Companion release connects local repository intelligence with browser-based AI chats without uploading your code to a hosted TokenCap service.

### What's New in v2.8.0:

- **Browser Companion Context Transfer:** Start \`tokencap serve\`, pair the Companion, choose an indexed project, and inject a focused project pack into ChatGPT, Claude, or Gemini.
- **Draft-Safe Injection:** Existing composer text remains intact. TokenCap marks the inserted block, refuses duplicate injection, and provides preview, copy, and download recovery paths.
- **Bounded, In-Memory Packs:** The bridge enforces the requested total context budget after adding the project primer and no longer writes a context artifact for every browser request.
- **Reviewable Browser Capture:** Captured session context is validated, redacted, staged, and only becomes durable project memory after explicit approval.
- **Seven Core Commands:** The CLI now centers on \`make\`, \`ask\`, \`analyze\`, \`serve\`, \`update\`, \`help\`, and \`version\`, while legacy commands remain compatible.

The Companion workflow has been verified with ChatGPT, Claude, and Gemini. TokenCap remains local-first: loopback-only transfer, no source upload, and no telemetry.`
  },
  {
    id: "tokencap-v27-release",
    title: "TokenCap v2.7.0 Is Now Ready: Conversation Loop, Session Capture & Build Health",
    author: "Vansh Arora",
    date: "September 19, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v2.7.0 closes the AI conversation → repository loop with graph-grounded Session Capture v1, staged inbound memory, 0-100 build health diagnostics, evidence-rich risk findings, and persistent watcher controls.",
    content: `TokenCap v2.7.0 is now live — the "Loop" release closing the conversation → repository boundary.

### What's New in v2.7.0:

- **Session Capture v1 & Conversation Loop:** Finished AI sessions become structured, redacted, and reviewable handoffs. Submissions via \`POST /capture\` and \`tokencap remember\` are validated, bounded, and scored against the repository graph (path validity, groundedness, specificity, novelty) into a confidence tier.
- **Staged Inbound Memory:** Captures land in \`.tokencap/memory/inbound/\` with full provenance; review them with \`tokencap remember --list/--approve/--reject/--note\`. Approved sessions archive to \`.tokencap/memory/sessions/\` — nothing touches durable memory without explicit human approval.
- **Session Handoff Surfaces:** Export the latest approved session as Markdown with \`tokencap handoff\` or \`tokencap export-session\`, surfaced in \`agent-pack.md\` and via MCP \`latestSession\`.
- **Honest Host Support:** Dedicated registry for 7 AI coding hosts (\`tokencap remember --hosts\`). No host is marked "auto" without a verified session-end hook.
- **Build Health Diagnostics:** \`tokencap health\` and \`tokencap rebuild\` emit an explainable 0–100 score evaluating freshness, drift, detection, and coverage with actionable remediation hints.
- **Evidence-Rich Risk Findings:** \`tokencap risk\` normalizes findings (oversized-file, todo-density, possible-secret) with confidence, evidence, and persistent \`--ack\`/\`--dismiss\` controls. Adds PEP 621 and Poetry \`pyproject.toml\` parsing.
- **Watcher Controls & Session ROI:** \`tokencap watch-config\` manages persistent file watching; \`tokencap memory\` tracks observed per-session token savings and dollar ROI across hosts.
- **Cold-Start Primer:** \`GET /primer\` on the loopback bridge returns a human-written ~1.5k token orientation so cold AI chats understand the project instantly without exploration loops.

### Community Coverage & Discussions:
- **CoderLegion Feature:** [Read on CoderLegion](https://coderlegion.com/27760/tokencap-v-2-7-0)
- **LinkedIn Launch Discussion:** [View on LinkedIn](https://www.linkedin.com/posts/vansharora2108_tokencap-270-is-now-live-closing-share-7507119072229167105-I59T/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEMuDswBETIpgY6wlzwGlpYf6DuOTilEP5Y)`
  },
  {
    id: "tokencap-v26-release",
    title: "TokenCap v2.6.0 Is Now Ready: Fast Warm Reuse, Model-Aware Budgeting & Bridge Daemon",
    author: "Vansh Arora",
    date: "September 13, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v2.6.0 makes the local bridge fast, model-aware, and always-on: 3x faster repeat IPC via warm reuse, dynamic token budgets scaled to target model context windows, and detached daemon background management.",
    content: `TokenCap v2.6.0 is now live — the Fast Warm Reuse, Model-Aware Budgeting, and Daemon release.

### What's New in v2.6.0:

- **Fast Warm In-Memory Reuse:** 'tokencap serve' now retains loaded graph representations across calls with an in-memory TTL cache, delivering up to 3x faster repeat IPC responses for companion extensions and agent tools while maintaining safe boundary invalidation on file modifications.
- **Model-Aware Dynamic Token Budgeting:** Bridge endpoints (\`POST /generate\`) and CLI generation now support \`--model\` and context sizing. Budgets automatically tune pack densities for target models (Claude 3.5 Sonnet, GPT-4o, o1, Gemini 1.5 Pro) to guarantee maximum relevance density without overflowing context ceilings.
- **Detached Daemon & Lifecycle Controls:** Run 'tokencap serve --daemon' to spawn detached background processes with robust PID file management, graceful teardown via 'tokencap serve --stop', and automated status reporting.
- **Companion IPC Optimization:** Upgraded bridge protocol handles high-frequency query bursts with low-latency JSON chunking, rock-solid connection keep-alives, and zero external network egress.`
  },
  {
    id: "tokencap-v25-release",
    title: "TokenCap v2.5.0 Is Now Ready: Local HTTP Bridge & Companion IPC",
    author: "Vansh Arora",
    date: "September 7, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v2.5.0 introduces 'tokencap serve', a loopback-only HTTP bridge that enables the Chrome Companion browser extension to access local repository intelligence with pairing tokens and zero network egress.",
    content: `TokenCap v2.5.0 is now live — the Bridge release.

### What's New in v2.5.0:

- **Local HTTP Bridge ('tokencap serve'):** An inbound loopback HTTP server bound exclusively to \`127.0.0.1:4545\`. It gives sandboxed browser extensions like the TokenCap Chrome Companion local access to repository intelligence via IPC without any remote network egress.
- **Bridge Contract v1:** Fully implements the bridge contract endpoints: \`GET /health\`, \`GET /projects\` (registry of indexed workspaces), \`POST /generate\` (quick overview ~300 tok vs query-scoped budgeted task packs with secret redaction and exact token counting), and \`POST /refresh\`.
- **Hardened Security & Pairing:** Mints cryptographic pairing tokens (\`X-TokenCap-Token\`), verifies allowed origins, binds strictly to \`127.0.0.1\` (prohibiting \`0.0.0.0\`), and makes zero outbound network requests.
- **Strict Four Laws Reconciliation:** Hardens test suite security guards in \`test/local-only.test.js\` while keeping runtime dependencies strictly capped at 4.`
  },
  {
    id: "tokencap-v24-release",
    title: "TokenCap v2.4.0 Is Now Ready: Deeper & Broader Language Intelligence",
    author: "Vansh Arora",
    date: "August 30, 2026",
    readTime: "4 min read",
    category: "Release",
    excerpt: "TokenCap v2.4.0 promotes Go, Rust, and Java to full Tier-1 call-graph resolution, adds Vue/Svelte/Angular SFC component intelligence, SQL & GraphQL schema extraction, and intra-procedural JS/TS static taint flow analysis.",
    content: `TokenCap v2.4.0 is now live — the Deeper & Broader release.

### What's New in v2.4.0:

- **Full Tier-1 Go / Rust / Java:** Go, Rust, and Java now resolve cross-file call graphs with the same precision as JS/TS/Python — locally-defined, import-bound, single-exported-match, and repo-unique symbols. Ambiguous overloads are explicitly marked unresolved rather than guessed.
- **Vue / Svelte / Angular Component Intelligence:** SFC-based component parsing reads \`defineProps\` / \`props:\` / \`export let\` for Vue and Svelte, and \`@Component\` decorators for Angular — no additional WASM grammars vendored.
- **SQL & GraphQL Schema Intelligence:** \`tokencap analyze schema\` extracts tables from \`CREATE TABLE\` DDL and types from GraphQL \`type\` blocks, surfacing heuristic code-to-schema links as evidence candidates, not verdicts.
- **Static Taint Flow Analysis:** \`tokencap analyze taint\` performs intra-procedural taint tracking in JS/TS from user-input sources (\`req.body\`, \`req.query\`, \`process.env\`) to dangerous sinks (SQL, \`exec\`, \`fs\` writes) with sanitizer modeling.
- **Evidence-Not-Verdict Reporting:** Every analyzer reports explicit counts of what it cannot resolve — unresolved renders, untracked cross-function flow, overloaded symbols — keeping AI agents honest about analysis limits.
- **Clean Dist Package:** Grammars and query files now ship inside \`dist/\`; the published npm package no longer requires \`src/\`.`
  },
  {
    id: "tokencap-v23-release",
    title: "TokenCap v2.3.0 Is Now Ready: Guided Change & Test Intelligence",
    author: "Vansh Arora",
    date: "August 29, 2026",
    readTime: "3 min read",
    category: "Release",
    excerpt: "TokenCap v2.3.0 introduces Guided Change — deterministic safe refactoring across the symbol graph, static test mapping and gap analysis, test coverage ingestion, and local-only agent feedback loops.",
    content: `TokenCap v2.3.0 is now live, introducing Guided Change for safe, deterministic codebase transformations and test intelligence.

### What's New in v2.3.0:

- **Guided Safe Refactoring Engine:** With 'tokencap refactor rename' and 'tokencap refactor rm-dead', developers and AI agents can safely rename symbols across definitions, imports, and caller sites, or remove uncalled dead code. Refactoring plans are dry-run by default, verifiable via the new 'tokencap_refactor_plan' MCP tool, and guarantee byte-exact preservation outside target edit ranges.
- **Refuse-on-Doubt Protections:** Built-in safeguards automatically refuse to execute when encountering aliased imports, shadowing, collisions, or dynamic computed accesses.
- **Static Test Intelligence & Gap Analysis:** 'tokencap analyze tests' links test fixtures to exercised symbols via static AST call paths and names, while '--gaps' instantly surfaces called-but-untested functions across the codebase.
- **Coverage Report Ingestion:** Ingest existing lcov and Istanbul JSON coverage reports ('tokencap analyze tests --coverage <path>') in a completely read-only manner, annotating symbol-level coverage ranges.
- **Local Agent Feedback Loop:** Track whether provided context helped, was neutral, or hurt agent task outcomes with 'tokencap feedback record' and 'tokencap feedback report' (100% offline, zero network telemetry).`
  },

  {
    id: "tokencap-v22-release",
    title: "TokenCap v2.2.0 Is Now Ready: Change Review & Ownership Signals",
    author: "Vansh Arora",
    date: "August 20, 2026",
    readTime: "3 min read",
    category: "Release",
    excerpt: "TokenCap v2.2.0 introduces evidence-backed local change review packets, opt-in git ownership and churn signals, and host-scoped agent pointers.",
    content: `TokenCap v2.2.0 is now live, introducing local-first Change Review packets and Ownership Signals. With 'tokencap analyze review', developers can create comprehensive local review packets including base-ref comparisons, caller candidates, test-file hints, and ADR context. The release also adds opt-in git churn and contributor signals ('tokencap analyze ownership'), and ensures host pointers generated during builds are strictly scoped to your configured AI assistant without overwriting existing files.`
  },
  {
    id: "tokencap-v21-release",
    title: "TokenCap v2.1.0 Is Now Ready",
    author: "Vansh Arora",
    date: "August 17, 2026",
    readTime: "3 min read",
    category: "Release",
    excerpt: "TokenCap v2.1.0 introduces evidence-backed simplify recommendations, automated debt ledger tracking, savings profiles, and dry-run compression previews.",
    content: `TokenCap v2.1.0 is here, focusing on helping developers identify and manage codebase debt while keeping context packing safe and transparent. Key additions include Evidence-Backed Simplify recommendations, an automated Debt Ledger tracking TODO/FIXME markers, Savings History profiles, and dry-run defaults for the compression tool.`
  },
  {
    id: "tokencap-v20-release",
    title: "TokenCap v2.0.0 Is Now Ready",
    author: "Vansh Arora",
    date: "August 12, 2026",
    readTime: "3 min read",
    category: "Release",
    url: "https://coderlegion.com/24452/tokencap-v2-0-0-is-now-ready?prompt=cl_badge_remind",
    secondaryUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7493024395335151616/",
    excerpt: "TokenCap v2.0.0 combines seven-language tree-sitter analysis, symbol-level impact intelligence, frontend understanding, scalable workspace context, and local-first privacy.",
    content: `TokenCap v2.0.0 is ready. The release combines repository understanding and scale: seven-language tree-sitter parsing, symbol-level impact analysis, dead-code detection, frontend intelligence, workspace-aware context, bounded graph builds, sharded caching, and byte-exact compression.\n\nThe next research direction is TokenCap Companion: a local-first bridge between browser AI chats and repository intelligence, without requiring a hosted TokenCap service, LLM API credits, or source-code uploads.`
  },
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
