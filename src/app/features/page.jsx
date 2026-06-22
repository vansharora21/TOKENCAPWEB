import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "Features",
  description: "Precision engineered features for TokenCap. Built for local-first speed and developer ergonomics.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <header className="mb-20 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#d2bbff]/10 border border-[#d2bbff]/20 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
          <span className="text-[11px] font-mono font-medium text-[#d2bbff] uppercase tracking-wider">
            v0.9.0 Engine
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
          Precision engineered features.
        </h1>
        <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-xl">
          TokenCap transforms how you capture, snapshot, and optimize code for LLMs. Built for local-first speed and developer ergonomics.
        </p>
      </header>

      {/* Version History / What's New */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff]">
            <span className="material-symbols-outlined text-base">history</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white leading-tight">Version Release Highlights</h2>
            <p className="text-xs text-[#ccc3d8]/60 mt-1">Full evolutionary path and changelog items for TokenCap CLI.</p>
          </div>
        </div>
        <div className="space-y-6">
          {/* v0.9.0 */}
          <div className="glass-card p-8 rounded-xl border-[#7c3aed]/20 bg-[#7c3aed]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/10 rounded-full blur-xl"></div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.9.0</span>
                <h3 className="text-xl font-bold text-white">Project Brain</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 22, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Project Brain</strong> — TokenCap now thinks in clusters, not just files, providing a unified project intelligence view.</li>
              <li><strong>Flagship Brain Command (<code>tokencap brain &lt;topic&gt;</code>)</strong> — Ask about any part of your codebase and get a unified view: files, risk, architecture, dependencies, review groups, recent changes, and git timeline — all from a single command.</li>
              <li><strong>Unified Knowledge Base</strong> — <code>tokencap make</code> builds <code>.tokencap/brain/knowledge.json</code>, aggregating all engines into a single queryable index.</li>
              <li><strong>6 Brain Modes</strong> — Focus your analysis with <code>--impact</code>, <code>--architecture</code>, <code>--review</code>, <code>--timeline</code>, <code>--risk</code>, and <code>--deps</code> flags.</li>
              <li><strong>Fuzzy Cluster Matching</strong> — Automatically matches topics (like Authentication) even if you enter partial names (like "auth").</li>
              <li><strong>Overview Dashboard</strong> — Run without a topic to see an overview of all clusters with risk levels at a glance.</li>
              <li><strong>Zero Extra Dependencies</strong> — Built cleanly on top of existing engines with no new package installations required.</li>
              <li><strong>10-Command CLI</strong> — Added <code>brain</code> command to the suite, expanding TokenCap to 10 commands.</li>
            </ul>
          </div>

          {/* v0.8.0 */}
          <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/10 rounded-full blur-xl"></div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.8.0</span>
                <h3 className="text-xl font-bold text-white">Agent Intelligence Engine</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 20, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Agent Intelligence Engine</strong> — TokenCap evolves from a context generator to an AI Project Intelligence Platform by analyzing your repository and automatically generating a complete Agent Skill Pack.</li>
              <li><strong>Flagship Agent Command (<code>tokencap agent</code>)</strong> — Scans your repository and automatically builds detailed instructions teaching an AI agent your architecture, conventions, risk maps, and rules.</li>
              <li><strong>8-Phase Pipeline</strong> — Sequences analysis from Tech Stack → Architecture → Project Rules → Risk Map → Review Groups → Agent Skills → Agent Pack → Machine-readable JSON.</li>
              <li><strong>agent-pack.md Payload</strong> — Generates a single, paste-ready markdown file optimized for ChatGPT, Claude, Gemini, Cursor, Windsurf, Cline, Roo Code, and OpenHands.</li>
              <li><strong>agent.json Export</strong> — Structured machine-readable format containing system definitions and agentInjectHooks for future automated injection integrations (v0.9+).</li>
              <li><strong>Focused Mode Flags</strong> — Added --full (default), --architecture, --rules, and --skills to generate focused sub-sections of the intelligence pack.</li>
              <li><strong>Zero New Dependencies</strong> — Built entirely on top of the existing Graph, Diff, Memory, and Pack engines with no new dependencies.</li>
              <li><strong>9-Command CLI suite</strong> — Added 'agent' command to the command-line CLI suite, expanding from 8 to 9 commands.</li>
            </ul>
          </div>

          {/* v0.7.0 */}
          <div className="glass-card p-8 rounded-xl border-[#d2bbff]/10 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.7.0</span>
                <h3 className="text-xl font-bold text-white">Smart Retrieval Engine</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 17, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Smart Retrieval Engine</strong> — TokenCap moves from generic snapshots to smart question-based context retrieval, returning only relevant files instead of entire repositories.</li>
              <li><strong>Flagship Ask Command (<code>tokencap ask "question"</code>)</strong> — Ask natural language questions; TokenCap auto-detects mode (architecture/review/debug), scores files, performs BFS, and generates a context snapshot.</li>
              <li><strong>Keyword Topic Context (<code>tokencap context &lt;topic&gt;</code>)</strong> — Manually generate context packages based on a topic keyword like auth, payments, dashboard, or database.</li>
              <li><strong>Multi-Source Relevance Scoring</strong> — Automatically ranks workspace files by combining dependency graph topology, context memory layers, git history status, and risk impact scores.</li>
              <li><strong>Graph BFS Traversal</strong> — Follows file imports and exports up to 2 hops to capture all direct dependencies and dependents of matching files.</li>
              <li><strong>Token-Budgeted Outputs</strong> — Fit retrieved files under a custom budget (default 12k tokens) by automatically applying representation tiers (full code, AST outline, summary, reference).</li>
              <li><strong>AI Prompt Generation</strong> — Generates an optimized AI prompt file (<code>&lt;topic&gt;-prompt.md</code>) tailored to your topic alongside the context package.</li>
              <li><strong>8-Command CLI Expansion</strong> — Added <code>ask</code> and <code>context</code> commands to the CLI suite, expanding from 6 to 8 commands.</li>
            </ul>
          </div>

          {/* v0.6.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono">v0.6.0</span>
                <h3 className="text-xl font-bold text-white">Graph Intelligence & Unified CLI</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 14, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Graph Intelligence Upgrade</strong> — TokenCap Graph is now a comprehensive code intelligence graph with an Obsidian-style three-panel viewer, hover highlights, local graph mode, cluster filtering, and node inspector.</li>
              <li><strong>13 Node Classifications</strong> — File nodes categorized into route, api, component, controller, service, database, middleware, config, utility, hook, package, test, and unknown.</li>
              <li><strong>4-Tier Risk Scoring</strong> — Dynamic risk tiers (CRITICAL, HIGH, MEDIUM, LOW) computed per node based on connectivity, type, and git change status.</li>
              <li><strong>Graph Presets</strong> — Predefined presets: <code>--full</code> (diff + AI + HTML viewer), <code>--minimal</code> (JSON export only), and <code>--quiet</code> (suppress verbose logs).</li>
              <li><strong>Automatic Cluster Detection</strong> — Groups files into 9 logical domains (Authentication, Payments, Dashboard, Database, API, Frontend, Config, Testing, Utilities).</li>
              <li><strong>TOKENCAP.md Graph Summary</strong> — Injects a dynamic <code>## Project Graph Summary</code> section into your main workspace snapshot file after every graph run.</li>
              <li><strong>Simplified 6-Command CLI</strong> — Streamlined the CLI interface from 14 to 6 core commands: <code>make</code>, <code>graph</code>, <code>diff</code>, <code>debug</code>, <code>pack</code>, and <code>watch</code>.</li>
              <li><strong>Unified Debug Session</strong> — Unified all debugging sub-commands into flags under a single command: <code>tokencap debug --start / --end / --log</code>.</li>
            </ul>
          </div>

          {/* v0.5.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.5.0</span>
                <h3 className="text-xl font-bold text-white">AI Context Packing & Graph Features</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 8, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>AI Context Packing (<code>tokencap pack</code>)</strong> — A token-budgeted, importance-scored context compressor. AST-analysis and git history prioritizes files under a strict token budget using smart truncation.</li>
              <li><strong>Multiple Pack Modes</strong> — Optimize packs for specific tasks: <code>--mode review</code>, <code>--mode debug</code>, <code>--mode architecture</code>, or <code>--mode minimal</code>.</li>
              <li><strong>Interactive Knowledge Graph Viewer</strong> — Run <code>tokencap graph --open</code> to open an HTML graph visualization powered by Cytoscape.js.</li>
              <li><strong>Narrative AI Architecture Summary</strong> — Run <code>tokencap graph --ai</code> to generate a subsystem and module summary (<code>ai-graph-summary.md</code>).</li>
              <li><strong>Graph Structural Diffing</strong> — Run <code>tokencap graph --diff</code> to see structural changes vs previous graph runs.</li>
              <li><strong>JSON Export</strong> — Run <code>tokencap graph --json</code> to export raw node/edge details to JSON.</li>
            </ul>
          </div>

          {/* v0.4.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#2a2a2c] text-[#d2bbff] border border-[#d2bbff]/20 px-2.5 py-1 rounded-md text-xs font-mono font-bold">v0.4.0</span>
                <h3 className="text-xl font-bold text-white">AI Change Intelligence Engine</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 7, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>AI Change Intelligence Engine (<code>tokencap diff</code>)</strong> — Transforms raw changes into semantic insights (what changed, risk analysis, what can break, what to test).</li>
              <li><strong>Smart Semantic Classification</strong> — Groups changed files into functional layers (Authentication, API, Database, Frontend) to calculate risk levels.</li>
              <li><strong>Breaking Change Detection</strong> — Scans diffs for deleted exports, changed signatures, database schema edits, or major dependency bumps.</li>
              <li><strong>API Endpoint Mapping</strong> — Extracts added/modified API routes and generates suggested test scenarios.</li>
              <li><strong>PR Summaries & Review Prompts</strong> — Generates GitHub PR descriptions and AI code review prompts via <code>--pr</code> and <code>--prompt</code>.</li>
            </ul>
          </div>

          {/* v0.3.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono">v0.3.0</span>
                <h3 className="text-xl font-bold text-white">AI Debug Handoff Mode</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 7, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>AI Debug Handoff Mode</strong> — Preserves debugging context (command logs, stack traces, failed tests, uncommitted diffs) in <code>active.md</code>.</li>
              <li><strong>Automated CLI Capture</strong> — Run <code>tokencap debug:start -- npm test</code> to auto-capture failed tests and stack traces.</li>
              <li><strong>Investigation Order</strong> — Ranks suspected files using stack traces, git changed files, and dependency graph neighbors.</li>
              <li><strong>Session Timeline & History</strong> — Log custom events manually; ended sessions are archived under history folder.</li>
            </ul>
          </div>

          {/* v0.2.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono">v0.2.0</span>
                <h3 className="text-xl font-bold text-white">Intelligence Layer</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">June 1, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Project Knowledge Graph</strong> — Generates <code>TOKENCAP_GRAPH.md</code> mapping file dependencies across JS/TS source files.</li>
              <li><strong>Context Memory Layer</strong> — Generates <code>TOKENCAP_MEMORY.md</code> merging developer intent notes with automated Git context.</li>
              <li><strong>Node Classification</strong> — Groups workspace files into route, api, component, service, database, or config.</li>
            </ul>
          </div>

          {/* v0.1.0 */}
          <div className="glass-card p-8 rounded-xl border-white/5 bg-white/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md text-xs font-mono">v0.1.0</span>
                <h3 className="text-xl font-bold text-white">Initial Release</h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">May 1, 2026</span>
            </div>
            <ul className="space-y-3 text-sm text-[#ccc3d8] list-disc list-inside">
              <li><strong>Core Snapshots</strong> — Generates <code>TOKENCAP.md</code> with file contents, git branch, diffs, TODOs, and estimated token counts.</li>
              <li><strong>VS Code Extension</strong> — Debounced auto capture on save, status bar indicators, and a one-click command palette.</li>
              <li><strong>Context Profiles</strong> — 8 profiles (compact, balanced, deep, gpt-4o, claude-3-5-sonnet, gemini-1.5-pro, etc.).</li>
              <li><strong>Secret Redaction</strong> — Automatically filters api keys, credentials, and passwords from files.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* 1: Auto Capture on Save */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">save</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Auto Capture on Save</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Sync your context instantly. TokenCap monitors file saves and automatically updates snapshot files in the background.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 overflow-hidden font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex gap-1.5 mb-1.5 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
            </div>
            <code className="block whitespace-pre text-[#4edea3] leading-snug">
              [10:42:01] <span className="text-[#ccc3d8]">Saved:</span> page.tsx{"\n"}
              [10:42:04] <span className="text-[#ccc3d8]">Regenerating files...</span>
            </code>
          </div>
        </div>

        {/* 2: Git-Aware Snapshots */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">history</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Git-Aware Snapshots</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Prioritize active edits. Surfaces unstaged/staged diffs and ranks recently changed files higher in LLM snapshots.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-4 flex flex-col justify-between h-[84px]">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono font-medium text-[#ccc3d8] opacity-60 uppercase tracking-wider">BRANCH</span>
              <span className="text-[11px] font-mono font-medium text-[#4edea3]">feature/auth</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-[#2a2a2c] rounded-full overflow-hidden">
                <div className="h-full bg-[#4edea3] w-2/3"></div>
              </div>
              <span className="text-[10px] text-[#ccc3d8] font-mono block">Prioritizing changed files...</span>
            </div>
          </div>
        </div>

        {/* 3: Secret Redaction */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">encrypted</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Secret Redaction</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            LLM safety first. Automatically detects and redacts OpenAI keys, GitHub PATs, AWS credentials, and environment variables.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div>
              <span className="text-[#ccc3d8]">OPENAI_KEY=</span>
              <span className="bg-[#d2bbff]/30 text-[#d2bbff] px-1 rounded text-xs ml-1">REDACTED_OPENAI_KEY</span>
            </div>
            <div className="mt-1">
              <span className="text-[#ccc3d8]">DB_PASSWORD=</span>
              <span className="bg-[#d2bbff]/30 text-[#d2bbff] px-1 rounded text-xs ml-1">REDACTED</span>
            </div>
          </div>
        </div>

        {/* 4: Structural Outlines */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">account_tree</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Structural Outlines</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Save valuable tokens. Large files get truncated, but their functions, classes, and method signatures remain as outlines.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 h-[84px] flex flex-col justify-center font-mono text-[13px]">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm opacity-40">expand_more</span>
                <span className="text-white">class Parser {"{"} ... {"}"}</span>
              </div>
              <div className="pl-6 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
                <span className="text-[#ccc3d8]">resolveImports()</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5: Context Profiles */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 h-full">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#d2bbff]">settings_input_component</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Context Profiles</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 max-w-sm">
                  Select from profiles tuned for specific models like `gpt-4o`, `claude-3-5-sonnet`, `gemini-1.5-pro`, or `compact`/`balanced`/`deep` presets.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-48 h-24 sm:h-auto bg-[#2a2a2c] rounded-xl border border-[#4a4455] p-3 relative overflow-hidden self-center sm:self-stretch flex flex-col justify-center min-h-[96px]">
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-[#7c3aed]/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
                <span className="font-mono text-[13px] text-white">Active: balanced</span>
              </div>
              <div className="space-y-1.5 opacity-50 relative z-10">
                <div className="h-1.5 w-full bg-[#4a4455] rounded"></div>
                <div className="h-1.5 w-3/4 bg-[#4a4455] rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 6: CLI + VS Code Support */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 h-full">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#d2bbff]">terminal</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CLI + VS Code Support</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 max-w-sm">
                  Run from your terminal or use the integrated VS Code Extension. Seamless integration into your existing codebase workflow.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-56 bg-[#0e0e10] rounded-lg border border-[#4a4455] overflow-hidden self-center sm:self-stretch flex flex-col justify-between min-h-[96px]">
              <div className="bg-[#2a2a2c] px-2 py-1 border-b border-[#4a4455] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-[9px] text-[#ccc3d8] font-mono">zsh — tokencap</span>
              </div>
              <div className="p-3 font-mono text-[13px] flex-grow flex flex-col justify-center">
                <div>
                  <span className="text-[#d2bbff] mr-1.5">&gt;</span>
                  <span className="text-white">tokencap make</span>
                </div>
                <div className="text-[#4edea3] mt-1">
                  ✓ <span className="text-[#ccc3d8]">Generated snapshots</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7: Local-first Privacy */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">verified_user</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Local-first Privacy</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Your code never leaves your machine. Processing happens entirely on-device for maximum security.
          </p>
          <div className="h-[84px] flex items-center gap-3 border border-[#4a4455] rounded-lg bg-[#0e0e10] p-3 justify-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#2a2a2c] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-zinc-400">home</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7c3aed] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">lock</span>
              </div>
            </div>
            <span className="font-mono text-[13px] text-[#4edea3]">No Cloud Sync</span>
          </div>
        </div>

        {/* 8: Project Knowledge Graph & Interactive Viewer */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">account_tree</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Interactive Graph Viewer</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Map out dependencies with Cytoscape.js (`--open`), generate narrative architecture summaries (`--ai`), and track structural changes (`--diff`).
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="text-[10px] text-[#ccc3d8] mb-1.5 opacity-60">BUILDING GRAPH...</div>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-4 bg-[#7c3aed]/40 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#4edea3]/60 rounded-sm"></div>
              <div className="h-4 bg-[#7c3aed]/60 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#4edea3]/30 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* 9: AI Context Packing */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">package_2</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Context Packing</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Token-budgeted, importance-scored context compression. Prioritizes critical files and truncates others using AST analysis.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#ccc3d8]">Token Budget:</span>
              <span className="text-[#4edea3]">20,000</span>
            </div>
            <div className="w-full bg-[#2a2a2c] h-2 rounded-full overflow-hidden">
              <div className="bg-[#4edea3] h-full" style={{ width: "65%" }}></div>
            </div>
            <span className="text-[10px] text-zinc-500 mt-1.5 block">AST compression & git ranking</span>
          </div>
        </div>

        {/* 10: AI Change Intelligence */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">difference</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Change Intelligence</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Deterministic risk rating and semantic layering. Scans for breaking changes and maps endpoint additions or modifications.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#ccc3d8]">Risk Level:</span>
              <span className="text-red-400 font-bold">HIGH</span>
            </div>
            <div className="text-[11px] text-[#ccc3d8] mt-1">
              API routes modified: 3<br />
              Breaking changes: Yes
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="glass-card p-12 relative overflow-hidden rounded-xl border-[#7c3aed]/20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#7c3aed]/5 blur-[120px] rounded-full"></div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 relative z-10">Start capturing context.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a
              href="/docs"
              className="bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.15)]"
            >
              Get Started Free
            </a>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2c] rounded-xl border border-[#4a4455] font-mono text-[13px]">
              <span className="text-[#ccc3d8]">npm install -g tokencap</span>
              <CopyButton text="npm install -g tokencap" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}