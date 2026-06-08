export const docsSections = [
  { title: "Getting Started", slug: "getting-started", order: 1, content: "Install TokenCap globally with npm:\n\n```bash\nnpm install -g tokencap\n```\n\nThen run from your project root:\n\n```bash\ntokencap make\n```\n\nThis generates three files in your project root:\n\n- `TOKENCAP.md` — compressed project snapshot (all languages)\n- `TOKENCAP_GRAPH.md` — dependency graph (JS/TS projects)\n- `TOKENCAP_MEMORY.md` — developer context memory (all projects)\n\nFor VS Code, install the TokenCap extension from the marketplace (publisher: VanshArora21). It auto-captures on every file save." },
  { title: "Configuration", slug: "configuration", order: 2, content: "Create a `.tokencap.json` file in your project root to customize behavior:\n\n```json\n{\n  \"profile\": \"balanced\",\n  \"outputPath\": \"TOKENCAP.md\",\n  \"maxFiles\": 90,\n  \"maxSourceBytes\": 220000,\n  \"maxFileBytes\": 14000,\n  \"maxDiffBytes\": 50000,\n  \"includeGitDiff\": true,\n  \"includeFileContents\": true,\n  \"excludePatterns\": [\"node_modules/**\", \"dist/**\", \"build/**\", \"coverage/**\"],\n  \"redactSecrets\": true\n}\n```\n\nRun `tokencap init` to auto-generate this file. Run `tokencap config` to see the fully resolved configuration including profile defaults.\n\n**Config resolution order:** defaults → profile overrides → .tokencap.json → CLI flags" },
  { title: "Context Profiles", slug: "profiles", order: 3, content: "TokenCap ships with 8 context profiles tuned for different AI models and use cases.\n\n| Profile | Max Files | Source Budget | Use Case |\n| --- | --- | --- | --- |\n| `compact` | 45 | 90KB | Local LLMs, tight windows |\n| `balanced` | 90 | 220KB | Default — most models |\n| `deep` | 140 | 420KB | Complex codebases |\n| `gpt-4o` | 80 | 150KB | OpenAI GPT-4o |\n| `claude-3-5-sonnet` | 120 | 250KB | Anthropic Claude |\n| `gemini-1.5-flash` | 200 | 600KB | Gemini Flash |\n| `gemini-1.5-pro` | 400 | 1.2MB | Gemini Pro |\n| `llama-3-8b` | 25 | 40KB | Local Llama |\n\nSelect a profile via CLI flag or `.tokencap.json`:\n\n```bash\ntokencap make --profile claude-3-5-sonnet\n```" },
  { title: "Project Knowledge Graph", slug: "graph", order: 4, content: "TokenCap scans all JS/TS source files and maps how they connect to each other.\n\n```bash\ntokencap graph\n```\n\nThis generates `TOKENCAP_GRAPH.md` containing:\n\n- **Changed Files** — files with unstaged/staged Git changes\n- **File Relationships** — `source → dependency` import edges\n- **Important Nodes** — files classified by type\n- **All Scanned Files** — grouped by classification\n\n### Interactive Graph & Summary Options\n\n- **Interactive Viewer (`--open`)** — Renders and opens a self-contained HTML graph visualization inside your browser using Cytoscape.js, helping you inspect imports and node dependencies visually.\n- **AI Narrative Summary (`--ai`)** — Generates `.tokencap/graph/ai-graph-summary.md`, translating your code topology into structured subsystem, boundary, and module descriptions.\n- **Graph Structural Diffing (`--diff`)** — Compares current relationships vs the previous run to produce `.tokencap/graph/graph-diff.md` detailing added/removed edges and files.\n- **JSON Export (`--json`)** — Exports raw nodes and edges JSON files to `.tokencap/graph/` for custom pipelines.\n\n**Supported file extensions:** `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs`, `.cjs`\n\n**Import patterns parsed:**\n- `import x from \"./file\"`\n- `import { x } from \"../file\"`\n- `export { x } from \"./file\"`\n- `const x = require(\"./file\")`\n\n**Node classification:**\n\n| Pattern | Type |\n| --- | --- |\n| `/app/`, `/pages/`, `page.*`, `route.*`, `layout.*` | `route` |\n| `/api/` + `route.*` | `api` |\n| Uppercase name, `/components/`, `/ui/`, `.tsx` | `component` |\n| `/lib/`, `/services/`, `/utils/`, `/hooks/` | `service` |\n| `schema.prisma`, `/models/`, `/db/`, `/database/` | `database` |\n| `next.config.*`, `vite.config.*`, `tsconfig.*`, `package.json` | `config` |\n\n**Note:** Only local relative imports are followed. External packages (react, lodash, etc.) are ignored." },
  { title: "Context Memory Layer", slug: "memory", order: 5, content: "Preserve your developer context across sessions.\n\n```bash\ntokencap memory\n```\n\nThis:\n1. Creates `.tokencap-notes.md` if it doesn't exist\n2. Reads your notes\n3. Combines with Git context (branch + changed files)\n4. Writes `TOKENCAP_MEMORY.md`\n\n**Edit `.tokencap-notes.md` directly:**\n\n```md\n## Current Task\nFix login redirect after successful authentication.\n\n## Developer Intent\nImprove auth flow without changing the DB schema.\n\n## Known Issues\n- Session sometimes not ready before redirect.\n\n## Constraints\n- Do not modify Prisma schema.\n\n## Decisions Made\n- Using server-side session validation.\n\n## Next Steps\n- Test login flow.\n- Check middleware.\n```\n\nThe file is re-read every time you run `tokencap memory` or `tokencap make`." },
  { title: "AI Context Packing", slug: "pack", order: 6, content: "The Context Packing Engine is a budget-driven, importance-scoring compressor that fits codebases of any size into AI context windows. Instead of dumping every file in full (which can quickly overwhelm LLM token limits), it scores files based on import centrality, git modification history, and debug relevance.\n\n```bash\ntokencap pack\n```\n\n### Pack Modes\n\n- **`review`** (Default) — Optimized for code reviews. Prioritizes recent git changes, main application entry points, and files with pending/recent diffs.\n- **`debug`** — Optimized for troubleshooting. Prioritizes stack trace files, active debug logs, and immediate dependencies of failing modules.\n- **`architecture`** — Optimized for system understanding. Excludes deep implementation details, providing high-level structural outlines and module interfaces.\n- **`minimal`** — A lightweight context profile containing only git status, active tasks, recent change lists, and high-level module metadata.\n\n### How it Compresses (Budget Engine)\n\nTokenCap analyzes files and applies one of four representation tiers based on their importance score and remaining token budget:\n\n- 🟢 **Full Content**: Critical files are written in full.\n- 🟡 **Structural Outline**: Mid-importance files are trimmed to show only function signatures, class definitions, and structural layout using regex parsing.\n- 🟠 **AST Summary**: Low-importance files are summarized into small, token-dense structural descriptions (~80 tokens).\n- 🔴 **Reference Only**: Distant/utility files are represented as simple file paths with export counts to preserve structural awareness without wasting budget.\n\nGenerate a pack with a custom token budget:\n\n```bash\ntokencap pack --mode debug --budget 30000\n```" },
  { title: "AI Change Intelligence", slug: "diff", order: 7, content: "The Change Intelligence Engine goes beyond standard git diffs by analyzing changes semantically. It provides a deterministic, rule-based report outlining impact, risk, breaking changes, and testing suggestions.\n\n```bash\ntokencap diff\n```\n\n### Key Capabilities\n\n1. **Semantic Layering** — Classifies modified files into functional layers like `Authentication`, `Payment`, `Database`, `API`, `Frontend`, `Security`, etc.\n2. **Deterministic Risk Rating** — Computes risk levels (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`) based on files touched, lines modified, database schema changes, or breaking change detections.\n3. **Breaking Change Scanning** — Scans for common breaking patterns such as removed exports, function signature alterations, prisma field deletions, and `.env` modifications.\n4. **Endpoint Capture** — Identifies added or modified HTTP routes/endpoints (e.g. Express, Next.js App Router) and suggests specific edge cases to test.\n5. **Prompt Generator** — Produces ready-to-use markdown prompts for AI code review or PR summaries:\n   - `--pr` generates a condensed pull request description.\n   - `--prompt` generates a structured prompt guiding an LLM to review your changes.\n\nAnalyze staged changes or the last commit:\n\n```bash\ntokencap diff --staged\ntokencap diff --last\n```" },
  { title: "Secret Redaction", slug: "secret-redaction", order: 8, content: "TokenCap automatically redacts secrets before writing any file content to disk. Redaction is enabled by default (`redactSecrets: true`).\n\n**Patterns detected and redacted:**\n\n- OpenAI API keys: `sk-...` → `[REDACTED_OPENAI_KEY]`\n- GitHub PATs: `ghp_...`, `github_pat_...` → `[REDACTED]`\n- Slack tokens: `xox...` → `[REDACTED]`\n- AWS access keys: `AKIA...` → `[REDACTED]`\n- Google API keys: `AIza...` → `[REDACTED]`\n- Bearer tokens (≥20 chars)\n- Generic variable assignments: `api_key=`, `token=`, `secret=`, `password=`, `passwd=`, `pwd=`\n\nTo disable redaction (not recommended for shared snapshots):\n\n```json\n{ \"redactSecrets\": false }\n```" },
  {
    title: "CLI Reference", slug: "cli", order: 9, content: `TokenCap provides a set of commands for generating AI-ready project context, visualizing architecture, preserving developer memory, tracking debugging investigations, and analyzing code changes.

---

# Installation

Install TokenCap globally:

\`\`\`bash
npm install -g tokencap
\`\`\`

Verify installation:

\`\`\`bash
tokencap --version
\`\`\`

---

# tokencap make

Generate a complete AI-ready project context.

\`\`\`bash
tokencap make
\`\`\`

## What it does

Scans your repository and generates:

* Project structure
* Important files
* Git status
* Git diffs
* Dependencies
* TODOs
* Architecture summary
* Memory context
* Recent changes

Updates:

\`\`\`text
TOKENCAP.md
\`\`\`

## Example

\`\`\`bash
tokencap make
\`\`\`

## Best For

* Starting a new AI session
* Sharing project context
* Team handoffs
* Documentation generation

---

# tokencap pack

Generate a token-budgeted, importance-scored context pack for LLM prompts.

\`\`\`bash
tokencap pack
\`\`\`

## Key Flags

* \`--mode <name>\` — Select pack mode: review | debug | architecture | minimal
* \`--budget <number>\` — Set maximum token budget. Default: 20000

## Example

\`\`\`bash
tokencap pack --mode review --budget 25000
\`\`\`

---

# tokencap diff

Perform a semantic "Change Intelligence" analysis on your edits.

\`\`\`bash
tokencap diff
\`\`\`

## Key Flags

* \`--staged\` — Analyze only staged changes
* \`--last\` — Analyze changes in the last commit (HEAD~1..HEAD)
* \`--pr\` — Generate a pull request summary description
* \`--prompt\` — Generate an optimized AI code review prompt
* \`--json\` — Output machine-readable JSON analysis

## Example

\`\`\`bash
tokencap diff --staged --pr
\`\`\`

---

# tokencap watch

Automatically regenerate TokenCap context whenever files change.

\`\`\`bash
tokencap watch
\`\`\`

## Example

\`\`\`bash
tokencap watch
\`\`\`

## Useful For

* Active development
* Keeping context up to date
* Cursor workflows
* Long coding sessions

---

# tokencap graph

Generate a project knowledge graph.

\`\`\`bash
tokencap graph
\`\`\`

## Key Flags

* \`--open\` — Opens interactive HTML dependency graph viewer in browser
* \`--ai\` — Generates detailed narrative architecture summary
* \`--diff\` — Evaluates structural graph changes vs last run
* \`--json\` — Exports raw node/edge list data to .tokencap/graph/

## Example

\`\`\`bash
tokencap graph --open --ai --diff
\`\`\`

## Output

Stores graph data inside:

\`\`\`text
.tokencap/graph/
\`\`\`

---

# tokencap memory

Generate project memory and developer context.

\`\`\`bash
tokencap memory
\`\`\`

## Tracks

* Current task
* Developer intent
* Constraints
* Known issues
* Decisions made
* Next steps

## Example

\`\`\`bash
tokencap memory
\`\`\`

---

# tokencap debug:start

Start a debugging session.

\`\`\`bash
tokencap debug:start
\`\`\`

Or automatically capture a failing command:

\`\`\`bash
tokencap debug:start -- npm test
\`\`\`

## Automatically Captures

* Error logs
* Stack traces
* Failed tests
* Changed files
* Related files
* Investigation order

## Example

\`\`\`bash
tokencap debug:start -- npm run test
\`\`\`

---

# tokencap debug

Regenerate the active debug report.

\`\`\`bash
tokencap debug
\`\`\`

Use after editing:

\`\`\`text
.tokencap-debug.md
\`\`\`

or after trying fixes.

---

# tokencap debug:log

Add a timestamped event to the investigation timeline.

\`\`\`bash
tokencap debug:log "Tested auth middleware"
\`\`\`

Example output:

\`\`\`text
[14:22] Tested auth middleware
\`\`\`

---

# tokencap debug:end

End a debug session.

\`\`\`bash
tokencap debug:end
\`\`\`

## What happens

* Final report generated
* Timeline finalized
* Session archived
* Active session cleared

---

# tokencap debug:history

View archived debug sessions.

\`\`\`bash
tokencap debug:history
\`\`\`

---

# tokencap init

Create a local configuration file.

\`\`\`bash
tokencap init
\`\`\`

Generates:

\`\`\`text
.tokencap.json
\`\`\`

---

# tokencap config

Print resolved configuration.

\`\`\`bash
tokencap config
\`\`\`

---

# Profiles

TokenCap supports multiple profiles.

\`\`\`bash
tokencap make --profile compact
\`\`\`

Available profiles:

\`\`\`text
compact
balanced
deep
gpt-4o
claude-3-5-sonnet
gemini-1.5-flash
gemini-1.5-pro
llama-3-8b
\`\`\`

---

# Recommended Workflow

### Daily Development

\`\`\`bash
tokencap watch
\`\`\`

---

### Before Asking AI

\`\`\`bash
tokencap make
\`\`\`

---

### During Debugging

\`\`\`bash
tokencap debug:start -- npm test

tokencap debug:log "Tested middleware"

tokencap debug:end
\`\`\`

---

### Before Deployment

\`\`\`bash
tokencap diff
\`\`\`

Review:

* Risks
* Breaking changes
* Suggested tests

before shipping.` },
  { title: "VS Code Extension", slug: "vscode", order: 10, content: "The TokenCap VS Code extension brings all functionality directly into your editor.\n\n**Installation:** Search for `TokenCap` by `VanshArora21` in the VS Code Extensions panel, or install the VSIX package manually.\n\n**Auto Capture:** After installing, TokenCap starts watching your workspace immediately. Every time you save a file, it waits 30 seconds (configurable) then regenerates all three snapshot files.\n\n**Status Bar:** A `$(files) TokenCap • HH:MM` item appears in the status bar showing your last snapshot time. Click it to open the command menu.\n\n**Command Menu (Quick-Pick):**\n- Make Snapshot Now\n- Open TokenCap Snapshot\n- Toggle Auto Capture ON/OFF\n- Create Config File\n\n**VS Code Settings:**\n\n| Setting | Default | Description |\n| --- | --- | --- |\n| `tokencap.autoCapture` | `true` | Auto-regenerate on save |\n| `tokencap.debounceMs` | `30000` | Wait time after save |\n| `tokencap.outputPath` | `TOKENCAP.md` | Output file path |\n| `tokencap.profile` | `balanced` | Context profile |\n| `tokencap.maxFiles` | `90` | Max files in snapshot |\n| `tokencap.maxSourceBytes` | `220000` | Source byte budget |\n| `tokencap.maxFileBytes` | `14000` | Per-file byte limit |\n| `tokencap.maxDiffBytes` | `50000` | Diff byte budget |\n| `tokencap.includeGitDiff` | `true` | Include git diffs |\n| `tokencap.includeFileContents` | `true` | Include file contents |" },
];
