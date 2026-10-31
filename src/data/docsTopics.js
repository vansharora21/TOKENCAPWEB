// Short, task-first docs content for the redesigned /docs page.
//
// Mirrors TokenCap v3.1.0. Every command, flag, file path and MCP tool name
// was checked against the TokenCap repo: bin/tokencap.js, src/cli/*.js,
// src/cli/parseOptions.js, src/mcp/server.js (TOOL_SCHEMAS),
// src/mcp/generateMcpConfig.js, src/capsule.js, src/security/config.js,
// package.json (VS Code contributes), README.md and docs/*.md.
// Sample outputs are illustrative and marked with outputNote.

export const docsGroups = [
  { id: "start", label: "Start" },
  { id: "use", label: "Use" },
  { id: "connect", label: "Connect" },
  { id: "reference", label: "Reference" },
];

const EXAMPLE = "Example output";

export const docsTopics = [
  // ── Start ────────────────────────────────────────────────────────────────
  {
    slug: "quick-start",
    group: "start",
    title: "Quick start",
    summary: "Install the CLI, index your repo once, then ask for context scoped to a task.",
    aliases: ["getting-started"],
    steps: [
      {
        label: "Install",
        command: "npm install -g tokencap",
        note: "Needs Node.js 18 or newer and Git.",
      },
      {
        label: "Index the repo",
        command: "tokencap make",
        note: "Run from the project root. Writes everything to .tokencap/.",
        output:
          "TokenCap snapshot written:   ./.tokencap/snapshot.md\nKnowledge graph written:     .tokencap/graph/summary.md\nMemory layer written:        .tokencap/memory/current.md\nSecurity engine:             active (redaction engine v1)",
        outputNote: EXAMPLE,
      },
      {
        label: "Ask for task context",
        command: 'tokencap ask "Where is authentication handled?"',
        note: "Builds a ranked context pack for that task.",
      },
    ],
    tasks: [
      {
        id: "index",
        label: "Index a repo",
        command: "tokencap make",
        why: "Builds the graph, memory and agent entry point in .tokencap/ so agents stop re-reading the repo.",
        output:
          "TokenCap snapshot written:   ./.tokencap/snapshot.md\nKnowledge graph written:     .tokencap/graph/summary.md\nMemory layer written:        .tokencap/memory/current.md",
      },
      {
        id: "ask",
        label: "Get context for a task",
        command: 'tokencap ask "fix the login redirect bug"',
        why: "Returns only the files and code that matter for this task, inside a token budget.",
        output:
          "Task context: 6 file(s) as code, 18 retrieved of 240; 9,412 / 12,000 file tokens.\nContext: .tokencap/context/login-redirect-context.md\nPrompt:  .tokencap/context/login-redirect-prompt.md",
      },
      {
        id: "impact",
        label: "See what breaks if I change it",
        command: "tokencap ask impact src/auth/token.js:validateToken",
        why: "Lists direct and transitive callers, files touched and a risk level before you edit.",
        output:
          "Direct callers      3 symbols, 2 files\nTransitive impact  17 symbols, 9 files\nCrosses boundary   src/api -> src/billing\nRisk               HIGH",
      },
      {
        id: "connect",
        label: "Connect my AI tool",
        command: "tokencap serve --mcp --init",
        why: "Writes the MCP config for the AI tool it detects, so the agent can query TokenCap directly.",
        output: "✓ claude-code config written to .mcp.json\n  Start the server: tokencap serve --mcp",
      },
    ],
    body:
      "After `tokencap make`, agent pointer files such as `AGENTS.md` and `CLAUDE.md` send your AI tool to `.tokencap/agent/START_HERE.md`. Re-run `tokencap make` after big changes, or use `tokencap make --watch` to rebuild on save.\n\nUpgrading from v2? Run `tokencap make --migrate` once, then `tokencap make`.",
  },
  {
    slug: "how-it-works",
    group: "start",
    title: "How it works",
    summary: "TokenCap parses your code into a graph, then hands agents ranked, budgeted, redacted context.",
    aliases: ["graph", "agent", "execution-contract", "constitution", "incremental-intelligence"],
    steps: [
      {
        label: "Full rebuild",
        command: "tokencap make --full",
        note: "Rebuilds graph, brain, agent files and pointers from scratch.",
      },
      {
        label: "Open the graph",
        command: "tokencap make --open-graph",
        note: "Builds, then opens .tokencap/graph/graph.html.",
      },
    ],
    body:
      "`tokencap make` parses JS, TS, Python, Go, Rust and Java with tree-sitter (WASM) and builds a symbol graph with resolved calls. From that it writes:\n\n- `.tokencap/snapshot.md`, a ranked snapshot inside a token budget\n- `.tokencap/graph/`, the dependency graph\n- `.tokencap/agent/START_HERE.md` and `allowed-context.json` for agents\n- `.tokencap/constitution/`, rules agents should not break\n\nLater builds are incremental: only changed files and their dependents are reprocessed. On 100 tasks across 9 repos, task packs used a median 18.7x fewer tokens and held 88% of needed files.",
    flags: [
      { flag: "--full", text: "Rebuild everything instead of only what changed" },
      { flag: "--watch", text: "Rebuild after files are saved" },
      { flag: "--open-graph", text: "Build and open the interactive graph" },
    ],
  },

  // ── Use ──────────────────────────────────────────────────────────────────
  {
    slug: "context-for-a-task",
    group: "use",
    title: "Context for a task",
    summary: "Describe the task in plain words and get a context pack sized to a token budget.",
    aliases: ["ask", "pack", "brain", "learning"],
    steps: [
      {
        label: "Ask a question",
        command: 'tokencap ask "add rate limiting to the login route"',
        output:
          "Task context: 5 file(s) as code, 21 retrieved of 312; 10,204 / 12,000 file tokens.\nContext: .tokencap/context/login-rate-limiting-context.md\nPrompt:  .tokencap/context/login-rate-limiting-prompt.md",
        outputNote: EXAMPLE,
      },
      {
        label: "Query one area",
        command: "tokencap ask brain auth --risk",
        note: "Shows a cluster's files, risk and dependencies.",
      },
      {
        label: "Record what helped",
        command:
          'tokencap analyze --learning --outcome helped --task "fix auth retry" --files src/auth/retry.js',
        note: "Stored locally in .tokencap/learning/. Nothing is sent anywhere.",
      },
      {
        label: "Use that feedback",
        command: 'tokencap ask "fix auth retry" --adaptive',
        note: "Re-ranks files retrieval already found. It never adds files on its own.",
      },
    ],
    body:
      "Paste the context file into any chat, or let your agent read it. The default budget is 12,000 file tokens.\n\n`ask brain <topic>` takes one of `--architecture`, `--review`, `--timeline`, `--risk`, `--deps` or `--impact` to change the view.",
    flags: [
      { flag: "--budget <n>", text: "Token budget for the pack (default 12000)" },
      { flag: "--mode <mode>", text: "Force review, debug or architecture mode" },
      { flag: "--out <path>", text: "Write the context file somewhere else" },
      { flag: "--json", text: "Print the result as JSON" },
      { flag: "--no-prompt", text: "Skip writing the prompt file" },
      { flag: "--adaptive", text: "Re-rank using feedback you recorded" },
    ],
  },
  {
    slug: "impact-and-refactoring",
    group: "use",
    title: "Impact and refactoring",
    summary: "Check a symbol's callers and risk, then rename or remove it with a dry-run first.",
    aliases: ["guided-change", "deeper-broader"],
    steps: [
      {
        label: "Check impact",
        command: "tokencap ask impact src/auth/token.js:validateToken",
        output:
          "Direct callers      3 symbols, 2 files\nTransitive impact  17 symbols, 9 files\nCrosses boundary   src/api -> src/billing\nRisk               HIGH",
        outputNote: EXAMPLE,
      },
      {
        label: "Preview a rename",
        command: "tokencap analyze refactor rename src/auth/token.js:validateToken checkToken",
        note: "Dry-run by default. Prints every edit it would make.",
      },
      {
        label: "Apply it",
        command: "tokencap analyze refactor rename src/auth/token.js:validateToken checkToken --write",
      },
      {
        label: "Find dead code",
        command: "tokencap ask impact --dead-code",
      },
    ],
    body:
      "Refactors refuse to run when they can't be sure: aliased imports, shadowing, name collisions and computed access all block the plan. Text outside the edited ranges stays byte-for-byte the same.\n\nRemove an unused symbol with `tokencap analyze refactor rm-dead <file>:<symbol>`. See which tests cover a symbol with `tokencap analyze tests`, and add `--gaps` for called but untested symbols.",
    flags: [
      { flag: "--write", text: "Apply the refactor instead of previewing it" },
      { flag: "--json", text: "Print the plan as JSON" },
      { flag: "--dead-code", text: "List uncalled, non-exported functions" },
      { flag: "--clusters", text: "Show functional communities and their coupling" },
    ],
  },
  {
    slug: "review-a-change",
    group: "use",
    title: "Review a change",
    summary: "Turn your working-tree, staged or branch changes into an advisory review packet.",
    aliases: ["diff", "review"],
    steps: [
      {
        label: "Review current changes",
        command: "tokencap analyze review",
        note: "Writes .tokencap/diff/review.md and review.json.",
      },
      {
        label: "Compare against a branch",
        command: "tokencap analyze review --base main",
      },
      {
        label: "Quick change summary",
        command: "tokencap analyze diff --staged",
        note: "Add --pr for a pull request summary or --prompt for an AI review prompt.",
      },
    ],
    body:
      "A review packet lists changed exported symbols, likely callers, related test files and the local rules or ADRs that apply. Findings are hints, not verdicts: dynamic behavior and outside consumers are listed as limits.\n\nFor ownership and churn, run `tokencap analyze ownership --history`. It reads local Git history only.",
    flags: [
      { flag: "--staged", text: "Only staged changes" },
      { flag: "--last", text: "The last commit" },
      { flag: "--base <ref>", text: "Compare <ref>...HEAD" },
      { flag: "--pr", text: "Write a pull request summary (diff)" },
      { flag: "--prompt", text: "Write an AI review prompt (diff)" },
      { flag: "--json", text: "Also write a JSON report" },
    ],
  },
  {
    slug: "project-memory-and-sessions",
    group: "use",
    title: "Project memory and sessions",
    summary: "Keep notes and approved session summaries so the next session starts where you stopped.",
    aliases: ["memory", "loop", "platform"],
    steps: [
      {
        label: "Save a session",
        command:
          'tokencap serve session save --summary "reworked auth" --files src/auth.ts --decision "use JWT" --next "add e2e tests"',
        output: "Staged session cli-1730380000000 (tier high)\nApprove with: tokencap serve session save --approve cli-1730380000000",
        outputNote: EXAMPLE,
      },
      {
        label: "Review staged sessions",
        command: "tokencap serve session save --list",
      },
      {
        label: "List approved sessions",
        command: "tokencap serve session list",
      },
      {
        label: "Hand off",
        command: "tokencap serve session handoff",
        note: "Prints the latest approved session as Markdown.",
      },
    ],
    body:
      "Write free-form notes in `.tokencap-notes.md` at the repo root. Each build merges them into `.tokencap/memory/current.md`.\n\nSaved sessions are staged, scored against the repo graph and redacted. Nothing reaches durable memory until you approve it; approved sessions go to `.tokencap/memory/sessions/`.\n\nFor teams, `tokencap analyze team` keeps rules and decisions as files in `.tokencap/team/`, reviewed through normal Git commits.",
    flags: [
      { flag: "--approve <id>", text: "Promote a staged session to memory" },
      { flag: "--reject <id>", text: "Reject a staged session" },
      { flag: "--note <id> --text <t>", text: "Annotate a staged session" },
      { flag: "--hosts", text: "Show which AI hosts support capture" },
      { flag: "--out <path>", text: "Write the handoff to a file" },
    ],
  },

  // ── Connect ──────────────────────────────────────────────────────────────
  {
    slug: "ai-tools-mcp",
    group: "connect",
    title: "AI tools over MCP",
    summary: "Give Claude Code, Cursor, Codex and other MCP hosts 19 local TokenCap tools.",
    aliases: ["mcp-section", "agent-skill"],
    steps: [
      {
        label: "Write the config",
        command: "tokencap serve --mcp --init",
        note: "Detects your host. Add --client <host> to pick one.",
        output: "✓ cursor config written to .cursor/mcp.json\n  Start the server: tokencap serve --mcp",
        outputNote: EXAMPLE,
      },
      {
        label: "Check it works",
        command: "tokencap serve --mcp --health",
      },
      {
        label: "List the tools",
        command: "tokencap serve --mcp --tools",
      },
    ],
    hosts: [
      { id: "claude-code", label: "Claude Code", command: "tokencap serve --mcp --init --client claude-code", note: "Writes .mcp.json in the project root." },
      { id: "cursor", label: "Cursor", command: "tokencap serve --mcp --init --client cursor", note: "Writes .cursor/mcp.json." },
      { id: "vscode", label: "VS Code", command: "tokencap serve --mcp --init --client vscode", note: "Writes .vscode/mcp.json." },
      { id: "codex", label: "Codex", command: "tokencap serve --mcp --init --client codex", note: "Writes .codex/config.toml. Codex loads it only in trusted repos." },
      { id: "windsurf", label: "Windsurf", command: "tokencap serve --mcp --init --client windsurf", note: "Writes per-user ~/.codeium/windsurf/mcp_config.json with --root set to this repo." },
      { id: "claude-desktop", label: "Claude Desktop", command: "tokencap serve --mcp --init --client claude-desktop", note: "Writes per-user claude_desktop_config.json with --root set to this repo." },
      { id: "cline", label: "Cline", command: "tokencap serve --mcp --init --client cline", note: "Writes .cline/mcp.json." },
      { id: "antigravity", label: "Antigravity", command: "tokencap serve --mcp --init --client antigravity", note: "Writes .agents/mcp_config.json." },
      { id: "zed", label: "Zed", command: "tokencap serve --mcp --init --client zed", note: "Writes .zed/mcp.json." },
      { id: "kiro", label: "Kiro", command: "tokencap serve --mcp --init --client kiro", note: "Writes .kiro/settings/mcp.json." },
    ],
    body:
      "Restart the host after `--init`. The host starts `tokencap serve --mcp` itself, builds intelligence in the background and keeps it fresh with a watcher, so you don't need a separate `tokencap make`.\n\n`--init` merges into an existing config and keeps other servers. An existing `tokencap` entry is kept; pass `--force` to replace it.\n\nThe npm package also ships an Agent Skill in `skills/tokencap/` for hosts that load skills.",
    flags: [
      { flag: "--init", text: "Write the MCP config for a host" },
      { flag: "--client <host>", text: "Choose the host instead of detecting it" },
      { flag: "--force", text: "Replace an existing tokencap entry" },
      { flag: "--health", text: "One-shot health check" },
      { flag: "--test", text: "Call every tool and verify output" },
      { flag: "--tools", text: "List available tools" },
    ],
  },
  {
    slug: "chrome-companion",
    group: "connect",
    title: "Chrome companion",
    summary: "Send a redacted task pack from your repo into ChatGPT, Claude or Gemini in the browser.",
    aliases: ["bridge", "companion"],
    steps: [
      {
        label: "Index the repo",
        command: "tokencap make",
      },
      {
        label: "Start the bridge",
        command: "tokencap serve",
        note: "Opens a pairing page; the companion pairs itself.",
        output:
          "Serving intelligence for: /home/you/project\nLoopback only (127.0.0.1). Ctrl-C to stop.\nOpened the pairing page. The companion will pair automatically.",
        outputNote: EXAMPLE,
      },
      {
        label: "Run it in the background",
        command: "tokencap serve --daemon",
        note: "Stop it later with tokencap serve --stop.",
      },
    ],
    body:
      "The bridge listens on `127.0.0.1` only (port 4545 by default) and needs a pairing token on every request. It never makes outbound requests.\n\nIn the companion, pick a project, describe the task and inject. Your typed draft is kept and the same context is never inserted twice. You can also preview, copy or download a pack. Transfers are capped at 4,000 tokens.\n\nUse **Useful** and **Missed file** in the companion to record feedback for `--adaptive`.",
    flags: [
      { flag: "--port <n>", text: "Bridge port (default 4545)" },
      { flag: "--token <t>", text: "Use a fixed pairing token" },
      { flag: "--no-open", text: "Don't open the pairing page" },
      { flag: "--watch", text: "Rebuild the index when files change" },
      { flag: "--daemon", text: "Run detached from the terminal" },
      { flag: "--status", text: "Check whether the bridge is running" },
    ],
  },
  {
    slug: "vscode-extension",
    group: "connect",
    title: "VS Code extension",
    summary: "Refresh TokenCap from the Command Palette and rebuild automatically when you save.",
    aliases: ["vscode"],
    steps: [
      {
        label: "Install the VSIX",
        command: "code --install-extension tokencap-3.1.0.vsix",
      },
    ],
    body:
      "Open the Command Palette and type **TokenCap** to find:\n\n- **Make Now** and **Refresh Full Intelligence**\n- **Refresh Agent Intelligence**, **Brain Knowledge**, **Project Graph** or **Memory**\n- **Diff Intelligence**, **Create Config**, **Toggle Auto Capture**\n\nWith `tokencap.autoCapture` on (the default), saving a source file refreshes intelligence after `tokencap.debounceMs` (30000 ms by default). Generated TokenCap files don't trigger a rebuild. The extension reads `.tokencap.json`, and `tokencap.profile` sets the default profile.",
  },

  // ── Reference ────────────────────────────────────────────────────────────
  {
    slug: "cli-commands",
    group: "reference",
    title: "CLI commands",
    summary: "Seven commands cover everything; every other capability is a subcommand or flag.",
    aliases: ["cli"],
    steps: [
      {
        label: "Show built-in help",
        command: "tokencap help",
      },
      {
        label: "Check your version",
        command: "tokencap version",
        output: "TokenCap v3.1.0",
        outputNote: EXAMPLE,
      },
    ],
    body:
      "- `make` builds or refreshes intelligence\n- `ask` gets task context, brain views or impact\n- `analyze` runs audits, reviews and reports\n- `serve` starts the bridge, the MCP server or session tools\n- `update` checks for and installs a new version\n- `help` and `version`\n\nOld commands such as `tokencap diff` or `tokencap impact` print their v3 replacement. The full list of subcommands and flags is on the [CLI page](/cli).",
  },
  {
    slug: "configuration",
    group: "reference",
    title: "Configuration",
    summary: "Tune file limits and profiles in .tokencap.json and redaction in tokencap.security.yaml.",
    aliases: ["configuration", "profiles"],
    steps: [
      {
        label: "Build with a profile",
        command: "tokencap make --profile deep",
      },
    ],
    body:
      "Optional `.tokencap.json` in the repo root:\n\n```json\n{\n  \"profile\": \"balanced\",\n  \"maxFiles\": 90,\n  \"maxSourceBytes\": 220000,\n  \"excludePatterns\": [\"dist/**\"]\n}\n```\n\nProfiles: `compact`, `balanced` (default), `deep`, `mcp`, plus model-sized ones such as `gpt-4o`, `claude-3-5-sonnet` and `gemini-1.5-pro`.\n\nRedaction settings live in `tokencap.security.yaml`; see Security and privacy. Local plugins are listed under `tokencapPlugins` in your `package.json`.",
    flags: [
      { flag: "--profile <name>", text: "Pick a profile for this build" },
      { flag: "--max-files <n>", text: "Cap the number of files" },
      { flag: "--max-bytes <n>", text: "Cap total source bytes" },
      { flag: "--package <name>", text: "Build one workspace package" },
      { flag: "--max-memory-mb <n>", text: "Cap graph memory use" },
    ],
  },
  {
    slug: "security-and-privacy",
    group: "reference",
    title: "Security and privacy",
    summary: "Everything runs locally, secrets are redacted before output, and only update uses the network.",
    aliases: ["secret-redaction"],
    steps: [
      {
        label: "Scan output for leaks",
        command: "tokencap analyze security scan",
        note: "Leaking files go to .tokencap/quarantine/ and the command exits non-zero.",
      },
      {
        label: "In CI",
        command: "tokencap analyze security scan --ci",
      },
      {
        label: "See what was redacted",
        command: "tokencap analyze security audit",
      },
    ],
    body:
      "No telemetry, no analytics, no remote calls. Only `tokencap update` reaches the network. The bridge and MCP server talk over loopback or stdio.\n\nEvery file read passes through redaction: API keys, tokens, private keys and high-entropy strings become markers like `[REDACTED:KEY]`.\n\nWhat leaves your machine is only what you send: a pack you inject into a chat, or tool results your AI host passes to its model.\n\nAdd rules in `tokencap.security.yaml` with `customRules`, `whitelistPatterns`, `entropyThreshold` and `redactPaths`.",
  },
];

export const cliReference = [
  {
    name: "make",
    summary: "Build or refresh the repository intelligence in .tokencap/.",
    usage: "tokencap make [--full] [--watch] [--migrate] [--open-graph] [--package <name>]",
    examples: [
      { command: "tokencap make", note: "Incremental build" },
      { command: "tokencap make --full", note: "Rebuild everything" },
      { command: "tokencap make --watch", note: "Rebuild on save" },
      { command: "tokencap make --migrate", note: "Upgrade a v2 workspace once" },
    ],
    flags: [
      { flag: "--full", text: "Full clean rebuild (alias: --rebuild)" },
      { flag: "--watch", text: "Rebuild when files change" },
      { flag: "--migrate", text: "Upgrade a v2 workspace to the v3 layout" },
      { flag: "--open-graph", text: "Build and open the graph HTML" },
      { flag: "--package <name>", text: "Build one workspace package" },
      { flag: "--scope <pattern>", text: "Build one matching workspace package" },
      { flag: "--profile <name>", text: "Context profile for this build" },
      { flag: "--max-memory-mb <n>", text: "Graph memory ceiling" },
    ],
    subcommands: [],
  },
  {
    name: "ask",
    summary: "Get task-scoped context, a brain view of one area, or symbol impact.",
    usage: 'tokencap ask "<question>" [--budget <n>] [--adaptive]',
    examples: [
      { command: 'tokencap ask "Where is authentication handled?"', note: "Task context pack" },
      { command: "tokencap ask brain auth --risk", note: "Risk view of one area" },
      { command: "tokencap ask impact src/auth/token.js:validateToken", note: "Callers and blast radius" },
    ],
    flags: [
      { flag: "--budget <n>", text: "Token budget (default 12000)" },
      { flag: "--mode <mode>", text: "review, debug or architecture" },
      { flag: "--adaptive", text: "Re-rank with recorded feedback" },
      { flag: "--out <path>", text: "Context file location" },
      { flag: "--json", text: "JSON output" },
    ],
    subcommands: [
      { name: "brain <topic>", text: "Cluster view: add --architecture, --review, --timeline, --risk, --deps or --impact" },
      { name: "impact <file>:<symbol>", text: "Direct and transitive callers, boundaries and risk" },
      { name: "impact --dead-code", text: "Uncalled, non-exported functions" },
      { name: "impact --clusters", text: "Functional communities and coupling" },
    ],
  },
  {
    name: "analyze",
    summary: "Audit, inspect and report on the repository.",
    usage: "tokencap analyze <tool> [options]",
    examples: [
      { command: "tokencap analyze review --base main", note: "Review a branch" },
      { command: "tokencap analyze health", note: "0 to 100 build health score" },
      { command: "tokencap analyze security scan", note: "Check output for leaked secrets" },
    ],
    flags: [
      { flag: "--learning", text: "Review or record local feedback" },
      { flag: "--patterns", text: "Show files often selected together" },
      { flag: "--json", text: "JSON output where supported" },
      { flag: "--write", text: "Apply refactor or compress changes" },
    ],
    subcommands: [
      { name: "diff", text: "Change report for working tree, staged, last commit or base" },
      { name: "review", text: "Evidence-backed review packet" },
      { name: "ownership", text: "Local Git ownership and churn (--history)" },
      { name: "team", text: "Shared rules and decisions in .tokencap/team/" },
      { name: "plugins", text: "List or run local plugins" },
      { name: "compress", text: "Safe Markdown compression (preview, --write to apply)" },
      { name: "tests", text: "Map tests to symbols (--gaps, --coverage)" },
      { name: "taint", text: "Static source to sink taint findings" },
      { name: "schema", text: "SQL and GraphQL schema graph" },
      { name: "components", text: "Vue and Svelte component graph" },
      { name: "constitution", text: "Inspect repository rules" },
      { name: "agent", text: "Regenerate agent context files" },
      { name: "simplify", text: "Simplification candidates with evidence" },
      { name: "stats", text: "Token savings history (--share)" },
      { name: "debt", text: "TODO, FIXME, HACK and DEBT ledger" },
      { name: "health", text: "Build health score and fixes" },
      { name: "risk", text: "Risk findings (--ack, --dismiss)" },
      { name: "watch-config", text: "File watcher settings" },
      { name: "security", text: "scan, audit or upgrade" },
      { name: "debug", text: "Debug session notes and report" },
      { name: "refactor", text: "rename or rm-dead, dry-run unless --write" },
      { name: "feedback", text: "record or report context feedback" },
      { name: "verify", text: "Check architecture rules (--architecture)" },
    ],
  },
  {
    name: "serve",
    summary: "Start the Chrome companion bridge, the MCP server, or session tools.",
    usage: "tokencap serve [--mcp] [--port <n>] [--daemon]",
    examples: [
      { command: "tokencap serve", note: "Loopback bridge for the companion" },
      { command: "tokencap serve --mcp --init", note: "Configure your AI tool" },
      { command: 'tokencap serve session save --summary "..."', note: "Stage a session summary" },
    ],
    flags: [
      { flag: "--mcp", text: "Run the MCP server over stdio" },
      { flag: "--init", text: "With --mcp: write host config" },
      { flag: "--client <host>", text: "With --init: choose the host" },
      { flag: "--port <n>", text: "Bridge port (default 4545)" },
      { flag: "--token <t>", text: "Fixed pairing token" },
      { flag: "--daemon", text: "Run the bridge detached" },
      { flag: "--status", text: "Is the bridge running" },
      { flag: "--stop", text: "Stop the running bridge" },
    ],
    subcommands: [
      { name: "session save", text: "Stage, list, approve or reject session summaries" },
      { name: "session list", text: "Approved and staged sessions" },
      { name: "session handoff", text: "Latest approved session as Markdown" },
    ],
  },
  {
    name: "update",
    summary: "Check for a newer TokenCap and upgrade. The only command that uses the network.",
    usage: "tokencap update [--check] [--force]",
    examples: [
      { command: "tokencap update", note: "Upgrade if a new version exists" },
      { command: "tokencap update --check", note: "Only check" },
    ],
    flags: [
      { flag: "--check", text: "Check without installing" },
      { flag: "--force", text: "Upgrade even if already current" },
    ],
    subcommands: [],
  },
  {
    name: "help",
    summary: "Print the built-in command reference.",
    usage: "tokencap help",
    examples: [{ command: "tokencap help", note: "Also --help or -h" }],
    flags: [],
    subcommands: [],
  },
  {
    name: "version",
    summary: "Print the installed version.",
    usage: "tokencap version",
    examples: [{ command: "tokencap version", note: "Also --version or -v" }],
    flags: [],
    subcommands: [],
  },
];

export const mcpTools = [
  { name: "tokencap_overview", text: "Repo summary: stack, clusters with risk, file count and last build time." },
  { name: "tokencap_cluster", text: "Everything about one cluster: files, risk, dependencies and recent changes." },
  { name: "tokencap_files", text: "Most relevant files for a task, ranked." },
  { name: "tokencap_dependencies", text: "Upstream and downstream dependencies of a file, up to 5 hops." },
  { name: "tokencap_constitution", text: "Rules that apply to a scope, file or rule ID." },
  { name: "tokencap_impact", text: "Blast radius of a change: affected clusters, broken rules, risk and dependents." },
  { name: "tokencap_execution", text: "Guidance for the current phase: plan, implement, verify, review or recovery." },
  { name: "tokencap_delta", text: "What changed since the last build." },
  { name: "tokencap_search", text: "Search clusters, files, rules and graph nodes at once." },
  { name: "tokencap_verify", text: "Test, build and lint commands plus a review checklist for a cluster." },
  { name: "tokencap_mcp_status", text: "Server diagnostics: uptime, cache hit rate, call counts and log path." },
  { name: "tokencap_manage_adr", text: "List, read, add or change the status of architecture decision records." },
  { name: "tokencap_get_screen", text: "UI map detail for one screen or state, with its source components." },
  { name: "tokencap_get_diagram", text: "Local architecture, impact or diff diagram as SVG." },
  { name: "tokencap_simplify", text: "Simplification candidates with evidence. Never suggests automatic deletion." },
  { name: "tokencap_refactor_plan", text: "Preview a rename or dead-code removal. Never writes files." },
  { name: "tokencap_test_map", text: "Which tests exercise which symbols, from static evidence. Never runs tests." },
  { name: "tokencap_review", text: "Advisory review of working-tree, staged or base-ref changes." },
  { name: "tokencap_ownership", text: "Opt-in ownership and co-change signals from local Git history." },
];
