# TokenCap Developer Platform Frontend

> **Your codebase. Compressed. Ready to hand off.**
>
> Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace into a single handoff-ready file, including your files, Git context, imports, and developer intent.

## 🚀 Overview

TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.

Run the installation command in your terminal:
```bash
npm install -g tokencap
```

## 🎨 Key Benefits

- **Local-first:** Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace.
- **AI-ready output:** Generates structured Markdown snapshots sized for any LLM context window, from llama-3-8b to Gemini 1.5 Pro.
- **Git-aware:** Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context.
- **Privacy-first:** Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk.
- **Zero configuration:** Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready.
- **VS Code native:** Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption.

## ⚡ Core Capabilities

### 📁 Intelligence

#### 🔹 Token & Dollar Savings Engine (v1.6.0)
Calculates exact token and dollar savings in real-time against a naive repository dump. Persists before-and-after baseline stats to .tokencap/savings.json on every build.

> ⚙️ *Technical Detail:* Uses js-tiktoken exact counting (cl100k/o200k base). Benchmarked across 15 real tasks showing 12.2× average reduction (94.3% cost savings).

#### 🔹 Multi-Host Agent Pointers (v1.6.0)
Automatically generates non-overwriting pointer files across 7 major AI hosts so AI coding assistants auto-load project context seamlessly.

> ⚙️ *Technical Detail:* Writes pointer files for AGENTS.md, CLAUDE.md, .cursor/rules/tokencap.md, .windsurf/rules/tokencap.md, .clinerules/tokencap.md, .github/copilot-instructions.md, and .kiro/steering/tokencap.md pointing to .tokencap/agent/START_HERE.md.

#### 🔹 Self-Maintaining MCP Intelligence (v1.5.0)
Query repository intelligence directly. Exposes 11 local MCP tool endpoints over stdio with automatic startup initialization, background repository watching, and sub-2ms local query performance.

> ⚙️ *Technical Detail:* Implements stdio Model Context Protocol (MCP) server. Running tokencap mcp --init wires workspace configs for Claude, Cursor, Windsurf, Cline, VS Code, Antigravity, and Codex automatically.

#### 🔹 Incremental Intelligence Engine
Analyze once. Update only what changed. Sub-100ms for single-file edits. TokenCap now uses a hash cache and bidirectional dependency walks to patch dirty nodes rather than rebuilding from scratch.

> ⚙️ *Technical Detail:* Uses SHA-256 caching and BFS on dependency graph. Generates delta files (.tokencap/delta/) for files, clusters, brain, graph, constitution, and agents. New CLI flags for selective rebuilds.

#### 🔹 Project Brain
Query any part of your codebase and get a unified intelligence view: files, risk, architecture, dependencies, review group, recent changes, and git timeline from a single command.

> ⚙️ *Technical Detail:* Wraps all intelligence engines (Graph, Diff, Agent, Memory). Renders terminal views in 6 modes, builds brain-index.json for fast cluster -> file lookup, and supports fuzzy cluster matching.

#### 🔹 Self-Loading Universal Context Layer
AI automatically discovers and loads your project intelligence without manual context copying. Generates a root AGENTS.md entry point that redirects AI agents directly to the onboarding suite under .tokencap/agent/START_HERE.md.

> ⚙️ *Technical Detail:* Generates root AGENTS.md, START_HERE.md, allowed-context.json (topic glob mapper), model-instructions.md (custom guidelines), context-manifest.json, agent-pack.md, and agent.json.

#### 🔹 Execution Contract
Teaches AI agents how to work, not just what to know. Generates an 8-file lifecycle contract covering state tracking, engineering principles, decision frameworks, execution scopes, verification rules, change classifications, and recovery modes.

> ⚙️ *Technical Detail:* Generates 8 files under .tokencap/agent/execution-contract/. Implements scope drift detection, minimal solution check frameworks, build/test/lint confidence ratings, loop recovery heuristics, and semantic taxonomy classifications.

#### 🔹 Repository Constitution
Encode permanent engineering laws that AI agents must never violate (API contracts, schema invariants, architecture laws, security boundaries, and compliance rules). Health checks are scored on a 0-100 index.

> ⚙️ *Technical Detail:* Builds an internal ConstitutionGraph mapping categories, severities, and relationships. Generates structured JSON/YAML/Markdown sheets and an interactive HTML visualization. Supports manual rule overrides.

#### 🔹 Smart Retrieval Engine
Ask a natural language question about your codebase and TokenCap finds only the relevant files. No more dumping entire repositories into AI. Features keywords extraction, multi-source relevance scoring, and auto-mode detection.

> ⚙️ *Technical Detail:* Scores files by combining Graph connectivity, context Memory logs, Git changed files, and Impact analysis. Auto-detects modes: review, debug, architecture. BFS traversal scans up to 2 hops away.

#### 🔹 Graph Intelligence Upgrade
TokenCap maps your project topology as a code intelligence graph. Visualizes files and imports in a dark-mode, three-panel Obsidian-style viewer with hover highlights, local graph mode, cluster filtering, and node inspector.

> ⚙️ *Technical Detail:* Generates TOKENCAP_GRAPH.md, exports JSON, and updates TOKENCAP.md. Classifies into 13 node types, evaluates 4-tier risk scoring, detects logical clusters, and supports presets (--full, --minimal, --quiet).

#### 🔹 Context Memory Layer
Never lose track of what you were doing. Fill in a simple notes file with your current task, intent, constraints, and next steps. TokenCap combines it with live Git context to produce a persistent memory snapshot alongside your code.

> ⚙️ *Technical Detail:* Generates TOKENCAP_MEMORY.md from .tokencap-notes.md (auto-created if missing) + git branch + git status. Executed automatically as part of tokencap make.

#### 🔹 Structural Outlines for Large Files
When a file exceeds your token budget and gets truncated, TokenCap doesn't just cut it off. It generates a structural outline of classes, functions, and methods so you still know what's inside.

> ⚙️ *Technical Detail:* Regex-based outline extraction for JS/TS functions, classes, interfaces, Python defs, Rust fns, and Go funcs. Capped at 30 definitions per file.

#### 🔹 TODO / FIXME / HACK Detection
Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section so technical debt is always visible in your handoff.

> ⚙️ *Technical Detail:* Case-insensitive regex scan across all selected files. Each entry includes file path, line number, and the full comment line. Capped at maxTodos (default: 100).

#### 🔹 AI Debug Handoff Mode
Preserves debugging state (logs, stack traces, uncommitted diffs, custom notes) in a dedicated folder (.tokencap/debug/) so that other developers or AI assistants can immediately continue investigation without starting over.

> ⚙️ *Technical Detail:* Auto-creates .tokencap-debug.md templates. Captures environment data and command failures. Managed via unified tokencap debug CLI with start, end, and log flags.

### 📁 Security

#### 🔹 CI-Enforced Zero Network Egress (v1.6.0)
100% offline local privacy guarantee. Enforced by CI test suites that scan all source files on every commit to ensure zero analytics or external tracking.

> ⚙️ *Technical Detail:* Scans all 147 source files for network calls. Only tokencap upgrade touches external endpoints.

#### 🔹 Automatic Secret Redaction
TokenCap scrubs sensitive values before writing anything to disk. API keys, tokens, passwords, and cloud credentials are replaced with [REDACTED] so you can safely share your snapshot with anyone.

> ⚙️ *Technical Detail:* Redacts: OpenAI keys (sk-...), GitHub PATs (ghp_..., github_pat_...), Slack tokens (xox...), AWS access keys (AKIA...), Google API keys (AIza...), and generic api_key/token/secret/password variable assignments.

### 📁 VS Code

#### 🔹 Auto Capture on Save
Every time you save a file in VS Code, TokenCap debounces and automatically regenerates your snapshot. You never have to remember to run it. The status bar shows the exact time of the last update.

> ⚙️ *Technical Detail:* Debounce interval configurable via tokencap.debounceMs. Default: 30,000ms. Skips TOKENCAP.md, .tokencap.json, and all generated output files to prevent re-trigger loops.

#### 🔹 VS Code Status Bar Integration
A persistent status bar item shows your auto-capture state and last snapshot time at all times. Click it to open the full command menu instantly.

> ⚙️ *Technical Detail:* Displays '$(files) TokenCap • HH:MM' format. Tooltip shows status, auto-capture state, last run time, file count, and estimated tokens. Command: tokencap.showMenu.

### 📁 AI Optimization

#### 🔹 Context Window Profiles
Different AI models have different context limits. TokenCap ships with profiles tuned for eight model families from llama-3-8b at 40KB to Gemini 1.5 Pro at 1.2MB. Switch profiles with a single flag.

| Profile | Max Files | Max Bytes | Use Case |
| --- | --- | --- | --- |
| `compact` | 45 | 90000 B | Tight context windows |
| `balanced` | 90 | 220000 B | Default production profile |
| `deep` | 140 | 420000 B | Complex codebases |
| `gpt-4o` | 80 | 150000 B | OpenAI GPT-4o |
| `claude-3-5-sonnet` | 120 | 250000 B | Anthropic Claude |
| `gemini-1.5-flash` | 200 | 600000 B | Gemini Flash |
| `gemini-1.5-pro` | 400 | 1200000 B | Gemini Pro |
| `llama-3-8b` | 25 | 40000 B | Local LLMs |

### 📁 Git

#### 🔹 Deep Git Integration
TokenCap reads your Git state automatically: current branch, recent commits, staged and unstaged diffs, and changed file paths. Changed files are ranked higher in the snapshot so they always appear first.

> ⚙️ *Technical Detail:* Uses git status --short, git diff --cached, git diff, git log --oneline -8, git rev-parse. Separates staged vs unstaged diffs into distinct sections. Changed files receive +120 ranking score.

### 📁 Optimization

#### 🔹 Intelligent File Ranking
Not every file deserves the same attention. TokenCap scores and ranks files by relevance so changed files, source files, project metadata, and documentation surface first within your token budget.

> ⚙️ *Technical Detail:* Scoring: changed files +120, important project files (package.json, README, tsconfig) +70, high-signal docs +35, src/ files +30, test files +18. Large files penalized by floor(size/12000).

#### 🔹 Real-Time Token Estimation
Always know how large your snapshot is before you paste it into an AI tool. TokenCap estimates token count in real-time and displays it in the VS Code status bar and CLI output.

> ⚙️ *Technical Detail:* Estimates tokens as bytes / 4. Covers both source file bytes and Git diff bytes.

### 📁 CLI

#### 🔹 Watch Mode
Run TokenCap as a persistent background process. It watches your workspace for file changes and automatically regenerates all snapshot files after a configurable debounce delay.

> ⚙️ *Technical Detail:* Built on chokidar. Ignores generated output files, node_modules, dist, build, coverage. Default debounce: 30,000ms, configurable via --debounce.

#### 🔹 Automated CLI Capture
Execute any command under the debug runner (e.g. tokencap debug --start -- npm test) and TokenCap will automatically intercept, format, and save the stdout/stderr stream, failed tests, and stack traces.

> ⚙️ *Technical Detail:* Parses error tracebacks and test runner fail patterns (Jest, Vitest, Mocha, Node, pytest, Go test). Auto-detects and prioritizes suspected workspace files using stack traces.

### 📁 Configuration

#### 🔹 Flexible Configuration
Drop a .tokencap.json into your project root to override any default. Tune file budgets, include/exclude patterns, diff settings, profile, and more scoped to the project.

> ⚙️ *Technical Detail:* Config resolution order: defaults → profile overrides → .tokencap.json → CLI flags. Supports includePatterns, excludePatterns with glob matching.

### 📁 Compatibility

#### 🔹 Multi-Language Snapshot
The main snapshot works across every text language TokenCap can read, including Python, Go, Rust, Java, C++, Ruby, PHP, Swift, Kotlin, SQL, and YAML.

> ⚙️ *Technical Detail:* Supports 40+ file extensions including .py, .go, .rs, .java, .cs, .cpp, .rb, .php, .swift, .kt, .sql, .yaml, .toml, .vue, .svelte, and all JS/TS variants.

## 💻 CLI Commands

### 🛠️ `tokencap mcp`

Start the local Model Context Protocol (MCP) server over stdio or automatically wire host IDE configurations (--init). Keeps a live repository watcher active for background intelligence updates.

**Example:**
```bash
tokencap mcp --init
```

| Option / Flag | Description |
| --- | --- |
| `--init` | Write workspace configuration file for host IDE automatically. |
| `--client <host>` | Specify target host explicitly (vscode, antigravity, codex, cursor, claude, windsurf, cline). |
| `--tools` | List all 11 MCP endpoints and descriptions. |
| `--test` | Run self-test: call every endpoint and verify JSON RPC output. |
| `--health` | Run one-shot health check without launching the persistent server. |

### 🛠️ `tokencap brain`

Project Brain — unified intelligence query about any part of your codebase (files, risk, architecture, dependencies, review groups, recent changes, and git timeline).

**Example:**
```bash
tokencap brain auth
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--impact` | Show affected file/feature count, critical files, and risk level. |
| `--architecture` | Render dependency chain ASCII view for the cluster. |
| `--review` | Show review group files and reason for grouping. |
| `--timeline` | Show git commit history (date + message) for cluster files. |
| `--risk` | Show risk areas and affected files. |
| `--deps` | Show full depends-on and used-by lists. |

### 🛠️ `tokencap agent`

Analyzes the repository and automatically generates a complete Self-Loading Universal Context Layer (AGENTS.md, START_HERE.md, allowed-context.json, model-instructions.md, context-manifest.json). Use --execution flag to generate the Execution Contract.

**Example:**
```bash
tokencap agent --full
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--full` | Run full Universal Context Layer pipeline (default) |
| `--architecture` | Focused generation of tech stack and architecture details |
| `--rules` | Focused generation of project coding rules and conventions |
| `--skills` | Focused generation of agent skill definitions and instructions |
| `--no-agents-file` | Skip generating the root-level AGENTS.md file |
| `--export <target>` | Export rules directly to IDE rulesets (cursor | windsurf | cline | roocode) |
| `--execution` | Also generate the Execution Contract lifecycle suite under .tokencap/agent/execution-contract/ |
| `--strict` | Strict mode: enables scope drift confirmation and gating rules (requires --execution) |

### 🛠️ `tokencap ask`

Smart context retrieval from a natural language question. Auto-detects target mode, retrieves relevant files, traverses the graph (BFS), applies a token budget, and generates a context package and suggested AI prompt.

**Example:**
```bash
tokencap ask "How does authentication work?"
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--mode <name>` | Override auto-detected mode: review | debug | architecture |
| `--budget <n>` | Custom token budget for the context pack. Default: 12000 |
| `--json` | Also export a machine-readable context.json file |
| `--no-prompt` | Skip generating the prompt.md file |

### 🛠️ `tokencap context`

Manual context generation by topic keyword (e.g. auth, payments, dashboard). Finds files by topic, scores them, performs graph BFS, and generates a context package.

**Example:**
```bash
tokencap context auth
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--mode <name>` | Override context mode: review | debug | architecture |
| `--budget <n>` | Custom token budget for the context pack. Default: 8000 |
| `--json` | Also export a machine-readable context.json file |
| `--prompt` | Generate a suggested AI prompt.md alongside the context |

### 🛠️ `tokencap make`

Generate the complete TokenCap snapshot. Incremental by default since v1.3.0. Updates graph, brain, constitution, and agent files by rebuilding only what changed.

**Example:**
```bash
tokencap make
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--full` | Force full rebuild (v1.2.0 behavior) |
| `--rebuild-brain` | Rebuild only the Brain knowledge base |
| `--rebuild-constitution` | Rebuild only the Constitution Engine |
| `--rebuild-graph` | Rebuild only the Dependency Graph |
| `--clean-cache` | Clear the incremental cache (next build = full) |
| `--out <path>` | Snapshot output path. Default: TOKENCAP.md |
| `--profile <name>` | Context profile: compact | balanced | deep | gpt-4o | claude-3-5-sonnet | gemini-1.5-flash | gemini-1.5-pro | llama-3-8b |
| `--max-files <n>` | Maximum number of files to include |
| `--max-bytes <n>` | Total source byte budget |
| `--max-file-bytes <n>` | Per-file content byte limit |
| `--max-diff-bytes <n>` | Git diff byte budget |
| `--no-diff` | Skip Git diff snippets |
| `--no-contents` | Skip file contents (structure only) |
| `--no-pointers` | Skip multi-host agent pointer file generation |

### 🛠️ `tokencap graph`

Generate a code knowledge graph. Maps imports/exports across JS/TS source files and classifies nodes (route, service, component, controller, database, config, etc.) with risk ratings and automatic cluster detection. Note: 'tokencap graph' is deprecated in v1.5. Use: tokencap make --open-graph

**Example:**
```bash
tokencap make --open-graph
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--open` | Open Obsidian-style interactive graph viewer in default browser |
| `--full` | Runs full graph intelligence: JSON export + AI summary + graph diff + HTML viewer + opens browser |
| `--minimal` | Generates only graph-data.json, nodes.json, edges.json. Fastest, no HTML or AI summaries |
| `--quiet` | Suppress logs, displaying only a summary of nodes, edges, clusters, and high-impact files |
| `--diff` | Generate graph-diff.md and graph-diff.json comparing current vs previous graph run |
| `--ai` | Generate AI narrative summary only |
| `--json` | Export JSON files only |

### 🛠️ `tokencap diff`

Perform semantic Change Intelligence analysis on your edits to detect breaking changes, evaluate risk levels (LOW to CRITICAL), map API endpoints, and suggest test cases.

**Example:**
```bash
tokencap diff --staged --pr
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--staged` | Analyze only staged changes (prior to a commit) |
| `--last` | Analyze changes in the last commit (HEAD~1..HEAD) |
| `--json` | Export machine-readable analyzed-diff.json |
| `--pr` | Generate PR summary description |
| `--prompt` | Generate optimized AI code review prompt |

### 🛠️ `tokencap debug`

Manage interactive debug sessions. Captures command failures (stdout/stderr, failed tests, stack traces), tracks changed/related files, and maintains a timestamped session timeline.

**Example:**
```bash
tokencap debug --start -- npm test
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--start` | Start a new debug session (append '-- <command>' to auto-capture execution failures) |
| `--end` | End active session, compile the final handoff report, and archive it |
| `--log "message"` | Add a timestamped event or discovery note to the active investigation timeline |

### 🛠️ `tokencap pack`

Compresses the codebase into a token-budgeted, importance-scored context pack for LLMs. If a topic is provided, the pack engine scopes the context to files inside that cluster.

**Example:**
```bash
tokencap pack auth --mode review --budget 15000
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `<topic>` | Optional topic or cluster keyword (queries Brain to scope context pack) |
| `--mode <name>` | Select compression mode: review | debug | architecture | minimal |
| `--budget <n>` | Maximum token budget for output pack. Default: 20000 |

### 🛠️ `tokencap constitution`

Manage and inspect your Repository Constitution. Analyzes codebase invariants, schema rules, security boundaries, and API contracts to enforce permanent laws.

**Example:**
```bash
tokencap constitution --diff
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--json` | Output raw JSON rule list and graph data |
| `--diff` | Diff current constitution rules against the last run |
| `--history` | Show snapshot history and score tracking over time |
| `--impact <file>` | Query which constitution laws are affected by a specific file |
| `search <query>` | Search constitution rules by keyword, ID, severity, or category |

### 🛠️ `tokencap scan`

Scans workspace source files for leaked secrets, API keys, private tokens, and high-entropy credentials before snapshot generation.

**Example:**
```bash
tokencap scan
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--quarantine` | Automatically quarantine files containing unredacted secrets |

### 🛠️ `tokencap audit`

Performs security audit of generated TokenCap intelligence outputs to verify redaction compliance and zero-egress guarantees.

**Example:**
```bash
tokencap audit
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap upgrade`

Checks NPM registry for TokenCap updates and safely upgrades the global package installation.

**Example:**
```bash
tokencap upgrade
```

| Option / Flag | Description |
| --- | --- |
| `--check` | Check current vs latest version without performing installation |

## 📦 Metadata & License

- **NPM Package Name:** `tokencap`
- **License:** `MIT`
- **Publisher:** `VanshArora21`

---  
*Generated automatically from `website-content` JSON source files on 27/7/2026.*
