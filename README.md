# TokenCap Developer Platform Frontend

> **Your codebase. Compressed. Ready to hand off.**
>
> Stop wasting tokens re-explaining your project. TokenCap snapshots your workspace — files, Git context, imports, and developer intent — into a single handoff-ready file.

## 🚀 Overview

TokenCap is a local-first developer tool that generates structured, AI-ready snapshots of your codebase. Works offline. Never uploads your code. Runs from the CLI or VS Code.

Run the installation command in your terminal:
```bash
npm install -g tokencap
```

## 🎨 Key Benefits

- **Local-first:** Runs entirely on your machine. No cloud. No uploads. Your code never leaves your workspace.
- **AI-ready output:** Generates structured Markdown snapshots sized for any LLM context window — from llama-3-8b to Gemini 1.5 Pro.
- **Git-aware:** Automatically surfaces changed files, staged and unstaged diffs, recent commits, and branch context.
- **Privacy-first:** Built-in secret redaction strips API keys, tokens, and passwords before anything is written to disk.
- **Zero configuration:** Works out of the box. One command generates everything. Customize with a single JSON config file when you're ready.
- **VS Code native:** Auto-captures on every file save. Status bar indicator. One-click command menu. No workflow disruption.

## ⚡ Core Capabilities

### 📁 VS Code

#### 🔹 Auto Capture on Save
Every time you save a file in VS Code, TokenCap debounces and automatically regenerates your snapshot. You never have to remember to run it. The status bar shows the exact time of the last update.

> ⚙️ *Technical Detail:* Debounce interval configurable via tokencap.debounceMs. Default: 30,000ms. Skips TOKENCAP.md, .tokencap.json, and all generated output files to prevent re-trigger loops.

#### 🔹 VS Code Status Bar Integration
A persistent status bar item shows your auto-capture state and last snapshot time at all times. Click it to open the full command menu instantly.

> ⚙️ *Technical Detail:* Displays '$(files) TokenCap • HH:MM' format. Tooltip shows status, auto-capture state, last run time, file count, and estimated tokens. Command: tokencap.showMenu.

### 📁 Intelligence

#### 🔹 Project Knowledge Graph
Automatically maps how your files connect to each other. Scans every JS/TS file, follows every import, export, and require, resolves paths to actual files, and classifies each node as a route, component, service, API, database model, or config file.

> ⚙️ *Technical Detail:* Generates TOKENCAP_GRAPH.md. Supports .ts, .tsx, .js, .jsx, .mjs, .cjs. Parses ES import/export and CommonJS require. Classifies nodes by path pattern and filename conventions.

#### 🔹 Context Memory Layer
Never lose track of what you were doing. Fill in a simple notes file with your current task, intent, constraints, and next steps — TokenCap combines it with live Git context to produce a persistent memory snapshot alongside your code.

> ⚙️ *Technical Detail:* Generates TOKENCAP_MEMORY.md from .tokencap-notes.md (auto-created if missing) + git branch + git status. Parses markdown sections into structured data.

#### 🔹 Structural Outlines for Large Files
When a file exceeds your token budget and gets truncated, TokenCap doesn't just cut it off. It generates a structural outline of classes, functions, and methods so you still know what's inside.

> ⚙️ *Technical Detail:* Regex-based outline extraction for JS/TS functions, classes, interfaces, Python defs, Rust fns, and Go funcs. Capped at 30 definitions per file.

#### 🔹 TODO / FIXME / HACK Detection
Every TODO, FIXME, and HACK comment across your selected files is extracted and surfaced in a dedicated section — so technical debt is always visible in your handoff.

> ⚙️ *Technical Detail:* Case-insensitive regex scan across all selected files. Each entry includes file path, line number, and the full comment line. Capped at maxTodos (default: 100).

#### 🔹 AI Debug Handoff Mode
Preserves debugging state (logs, stack traces, uncommitted diffs, custom notes) in a dedicated folder (.tokencap/debug/) so that other developers or AI assistants can immediately continue investigation without starting over.

> ⚙️ *Technical Detail:* Auto-creates .tokencap-debug.md templates. Captures environment data and command failures. Archives ended sessions under .tokencap/debug/archive/.

### 📁 Security

#### 🔹 Automatic Secret Redaction
TokenCap scrubs sensitive values before writing anything to disk. API keys, tokens, passwords, and cloud credentials are replaced with [REDACTED] — so you can safely share your snapshot with anyone.

> ⚙️ *Technical Detail:* Redacts: OpenAI keys (sk-...), GitHub PATs (ghp_..., github_pat_...), Slack tokens (xox...), AWS access keys (AKIA...), Google API keys (AIza...), and generic api_key/token/secret/password variable assignments.

### 📁 AI Optimization

#### 🔹 Context Window Profiles
Different AI models have different context limits. TokenCap ships with profiles tuned for eight model families — from llama-3-8b at 40KB to Gemini 1.5 Pro at 1.2MB. Switch profiles with a single flag.

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
TokenCap reads your Git state automatically — current branch, recent commits, staged and unstaged diffs, and changed file paths. Changed files are ranked higher in the snapshot so they always appear first.

> ⚙️ *Technical Detail:* Uses git status --short, git diff --cached, git diff, git log --oneline -8, git rev-parse. Separates staged vs unstaged diffs into distinct sections. Changed files receive +120 ranking score.

### 📁 Optimization

#### 🔹 Intelligent File Ranking
Not every file deserves the same attention. TokenCap scores and ranks files by relevance — changed files, source files, project metadata, and documentation surface first within your token budget.

> ⚙️ *Technical Detail:* Scoring: changed files +120, important project files (package.json, README, tsconfig) +70, high-signal docs +35, src/ files +30, test files +18. Large files penalized by floor(size/12000).

#### 🔹 Real-Time Token Estimation
Always know how large your snapshot is before you paste it into an AI tool. TokenCap estimates token count in real-time and displays it in the VS Code status bar and CLI output.

> ⚙️ *Technical Detail:* Estimates tokens as bytes / 4. Covers both source file bytes and Git diff bytes.

### 📁 CLI

#### 🔹 Watch Mode
Run TokenCap as a persistent background process. It watches your workspace for file changes and automatically regenerates all snapshot files after a configurable debounce delay.

> ⚙️ *Technical Detail:* Built on chokidar. Ignores generated output files, node_modules, dist, build, coverage. Default debounce: 30,000ms, configurable via --debounce.

#### 🔹 Automated CLI Capture
Execute any command under the debug runner (e.g. npm test) and TokenCap will automatically intercept, format, and save the stdout/stderr stream, failed tests, and stack traces.

> ⚙️ *Technical Detail:* Parses error tracebacks and test runner fail patterns (Jest, Vitest, Mocha, Node, pytest, Go test). Auto-detects and prioritizes suspected workspace files using stack traces.

### 📁 Configuration

#### 🔹 Flexible Configuration
Drop a .tokencap.json into your project root to override any default. Tune file budgets, include/exclude patterns, diff settings, profile, and more — all scoped to the project.

> ⚙️ *Technical Detail:* Config resolution order: defaults → profile overrides → .tokencap.json → CLI flags. Supports includePatterns, excludePatterns with glob matching.

### 📁 Compatibility

#### 🔹 Multi-Language Snapshot
The main snapshot works across every language TokenCap can read. Python, Go, Rust, Java, C++, Ruby, PHP, Swift, Kotlin, SQL, YAML, and more — if it's a text file, it's in your snapshot.

> ⚙️ *Technical Detail:* Supports 40+ file extensions including .py, .go, .rs, .java, .cs, .cpp, .rb, .php, .swift, .kt, .sql, .yaml, .toml, .vue, .svelte, and all JS/TS variants.

## 💻 CLI Commands

### 🛠️ `tokencap make`

Generate all three output files in one shot: TOKENCAP.md (main snapshot), TOKENCAP_GRAPH.md (project dependency graph), and TOKENCAP_MEMORY.md (developer context memory).

**Example:**
```bash
tokencap make
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |
| `--out <path>` | Snapshot output path. Default: TOKENCAP.md |
| `--profile <name>` | Context profile: compact, balanced, deep, gpt-4o, claude-3-5-sonnet, gemini-1.5-flash, gemini-1.5-pro, llama-3-8b |
| `--max-files <n>` | Maximum number of files to include |
| `--max-bytes <n>` | Total source byte budget |
| `--max-file-bytes <n>` | Per-file content byte limit |
| `--max-diff-bytes <n>` | Git diff byte budget |
| `--no-diff` | Skip Git diff snippets |
| `--no-contents` | Skip selected file contents |

### 🛠️ `tokencap pack`

Compresses the project workspace into a token-budgeted, importance-scored context pack specifically designed for LLM prompts.

**Example:**
```bash
tokencap pack --mode review --budget 20000
```

| Option / Flag | Description |
| --- | --- |
| `--mode <name>` | Pack mode: review | debug | architecture | minimal |
| `--budget <number>` | Pack token budget. Default: 20000 |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap diff`

Performs a semantic 'Change Intelligence' analysis on your edits (unstaged, staged, or last commit).

**Example:**
```bash
tokencap diff --staged --pr
```

| Option / Flag | Description |
| --- | --- |
| `--staged` | Analyze only staged changes (prior to a commit) |
| `--last` | Analyze changes in the last commit (HEAD~1..HEAD) |
| `--pr` | Generate PR summary description |
| `--prompt` | Generate optimized AI code review prompt |
| `--json` | Output machine-readable JSON analysis |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap graph`

Generate TOKENCAP_GRAPH.md — a dependency graph of your JS/TS project. Scans all source files, resolves imports and exports, and classifies each file as a route, component, service, API, database model, or config.

**Example:**
```bash
tokencap graph --open --ai --diff
```

| Option / Flag | Description |
| --- | --- |
| `--open` | Open interactive graph viewer in browser |
| `--ai` | Generate AI narrative summary |
| `--diff` | Generate graph diff vs last run |
| `--json` | Output machine-readable JSON |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap memory`

Generate TOKENCAP_MEMORY.md from your .tokencap-notes.md file combined with live Git context. Auto-creates the notes file from a template if it doesn't exist yet.

**Example:**
```bash
tokencap memory
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap watch`

Start a background watcher that regenerates all snapshot files automatically whenever a file changes. Powered by chokidar with configurable debounce.

**Example:**
```bash
tokencap watch --debounce 5000
```

| Option / Flag | Description |
| --- | --- |
| `--debounce <ms>` | Milliseconds to wait after a change before regenerating. Default: 30000 |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap init`

Create a default .tokencap.json configuration file in your project root. Safe — will not overwrite an existing config unless you pass --force.

**Example:**
```bash
tokencap init
```

| Option / Flag | Description |
| --- | --- |
| `--force` | Overwrite an existing .tokencap.json |

### 🛠️ `tokencap config`

Print the fully resolved configuration as JSON — showing the merged result of defaults, profile overrides, .tokencap.json, and any CLI flags. Useful for debugging your setup.

**Example:**
```bash
tokencap config --profile deep
```

| Option / Flag | Description |
| --- | --- |
| `--profile <name>` | Profile to resolve |
| `--root <path>` | Workspace root |

### 🛠️ `tokencap debug:start`

Initialize a new debug session, optionally running a command to capture stdout/stderr, failed tests, and stack traces.

**Example:**
```bash
tokencap debug:start -- npm test
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap debug`

Regenerate the active debug handoff report using current workspace state and custom notes from .tokencap-debug.md.

**Example:**
```bash
tokencap debug
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap debug:log`

Add a timestamped progress update or discovery note to the active debug session timeline.

**Example:**
```bash
tokencap debug:log "Found issue in auth middleware"
```

### 🛠️ `tokencap debug:end`

End the active debug session, generate the final handoff report, and archive the session under .tokencap/debug/archive/.

**Example:**
```bash
tokencap debug:end
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

### 🛠️ `tokencap debug:history`

List all archived debug sessions with their timestamps and summaries.

**Example:**
```bash
tokencap debug:history
```

| Option / Flag | Description |
| --- | --- |
| `--root <path>` | Workspace root. Default: current directory |

## 📦 Metadata & License

- **NPM Package Name:** `tokencap`
- **License:** `MIT`
- **Publisher:** `VanshArora21`

---  
*Generated automatically from `website-content` JSON source files on 8/6/2026.*
