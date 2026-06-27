import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "CLI Reference",
  description: "Master the TokenCap command-line interface. Powerful options and configurations.",
  path: "/cli",
});

export default function CliPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "/docs" },
    { label: "Core Concepts", icon: "extension", href: "/docs/getting-started" },
    { label: "CLI Reference", icon: "terminal", href: "#install", active: true },
    { label: "VS Code Extension", icon: "extension", href: "/vscode" },
    { label: "Changelog", icon: "auto_awesome", href: "/changelog" },
  ];

  const communityItems = [
    { label: "GitHub", icon: "code", href: "https://github.com/vansharora21/TOKENCAP" },
  ];

  const tableOptions = [
    { flag: "--profile <name>", description: "Select context profile (compact, balanced, deep, gpt-4o, etc.).", defaultVal: "balanced" },
    { flag: "--root <path>", description: "Specify the workspace root directory.", defaultVal: "." },
    { flag: "--out <path>", description: "Snapshot output path (for main snapshot).", defaultVal: "TOKENCAP.md" },
    { flag: "--max-files <n>", description: "Maximum number of files to include in snapshot.", defaultVal: "90" },
    { flag: "--max-bytes <n>", description: "Total source byte budget for files combined.", defaultVal: "220000" },
    { flag: "--max-file-bytes <n>", description: "Per-file content byte limit.", defaultVal: "14000" },
    { flag: "--no-diff", description: "Skip including Git diff snippets in the snapshot.", defaultVal: "false" },
    { flag: "--no-contents", description: "Skip selected source file contents (outline only).", defaultVal: "false" },
    { flag: "--debounce <ms>", description: "Regeneration debounce delay in watch mode.", defaultVal: "3000" },
    { flag: "--mode <name>", description: "Retrieval/pack mode: review | debug | architecture | minimal.", defaultVal: "review" },
    { flag: "--budget <number>", description: "Custom token budget for ask/context/pack commands.", defaultVal: "12000 / 8000 / 20000" },
    { flag: "--staged", description: "Analyze only staged changes (for diff command).", defaultVal: "false" },
    { flag: "--last", description: "Analyze changes in the last commit (for diff command).", defaultVal: "false" },
    { flag: "--pr", description: "Generate PR summary description (for diff command).", defaultVal: "false" },
    { flag: "--prompt", description: "Generate AI prompt/review prompt (for ask/context/diff commands).", defaultVal: "true (ask)" },
    { flag: "--no-prompt", description: "Skip prompt.md generation (for ask command).", defaultVal: "false" },
    { flag: "--json", description: "Output machine-readable JSON (for ask/context/diff/graph/agent commands).", defaultVal: "false" },
    { flag: "--open", description: "Open interactive HTML graph viewer in browser (for graph command).", defaultVal: "false" },
    { flag: "--ai", description: "Generate detailed narrative AI summary (for graph command).", defaultVal: "false" },
    { flag: "--diff", description: "Generate graph structural diff vs last run (for graph command).", defaultVal: "false" },
    { flag: "--full", description: "Run full 8-phase pipeline (for agent command).", defaultVal: "true" },
    { flag: "--export <target>", description: "Export rules directly to Cursor, Windsurf, Cline, or Roo Code formats (for agent command).", defaultVal: "false" },
    { flag: "--execution", description: "Generate the Execution Contract lifecycle suite under .tokencap/agent/execution-contract/ (for agent command).", defaultVal: "false" },
    { flag: "--strict", description: "Strict mode: enables scope drift confirmation and gating rules (for agent command).", defaultVal: "false" },
    { flag: "--architecture", description: "Render dependency chain ASCII view (brain) or architecture mapping (agent).", defaultVal: "false" },
    { flag: "--rules", description: "Focused generation of coding rules (for agent command).", defaultVal: "false" },
    { flag: "--skills", description: "Focused generation of agent skill definitions (for agent command).", defaultVal: "false" },
    { flag: "--impact", description: "Show affected file/feature count and risk summary (for brain command).", defaultVal: "false" },
    { flag: "--review", description: "Show review group files and grouping reasons (for brain command).", defaultVal: "false" },
    { flag: "--timeline", description: "Show git commit history for cluster files (for brain command).", defaultVal: "false" },
    { flag: "--risk", description: "Show risk areas and affected files (for brain command).", defaultVal: "false" },
    { flag: "--deps", description: "Show depends-on and used-by lists (for brain command).", defaultVal: "false" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* SideNavBar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v1.1.0</p>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.active
                  ? "text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-1">
          <p className="font-mono text-[9px] font-semibold text-zinc-500 uppercase tracking-widest px-2.5 pb-2">COMMUNITY</p>
          {communityItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-lg text-sm text-[#ccc3d8] hover:bg-[#2a2a2c]/50 transition-all"
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-3">CLI Reference</h1>
          <p className="text-[#ccc3d8] text-base max-w-2xl leading-relaxed">
            Master the TokenCap command-line interface. A powerful, local-first utility designed to package codebase context for AI tools.
          </p>
        </header>

        {/* Command Section: Install */}
        <section className="mb-16" id="install">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff]">
              <span className="material-symbols-outlined text-sm">download</span>
            </div>
            <h2 className="text-xl font-bold text-white">Install globally</h2>
          </div>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
            Get started by installing the TokenCap CLI globally via npm. This provides the <code className="text-[#d2bbff]">tokencap</code> executable.
          </p>
          <div className="glass-panel rounded-xl overflow-hidden terminal-glow">
            <div className="bg-[#18181b] px-4 py-2 flex justify-between items-center border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
              </div>
              <span className="font-mono text-xs text-zinc-500">bash</span>
            </div>
            <div className="p-4 font-mono text-[13px] leading-relaxed flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[#4edea3] select-none">$</span>
                <span className="text-white whitespace-nowrap">npm install -g tokencap</span>
              </div>
              <CopyButton text="npm install -g tokencap" className="shrink-0" />
            </div>
          </div>
        </section>

        {/* Flagship Command: tokencap brain */}
        <section id="brain" className="mb-12 glass-panel rounded-xl border-[#7c3aed]/20 bg-[#7c3aed]/5 p-6 md:p-8 terminal-glow">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
            <div className="flex flex-col justify-between flex-grow max-w-xl">
              <div>
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">Flagship Command (v0.9)</span>
                <h3 className="text-2xl font-bold text-white mb-2">Project Brain (brain)</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6">
                  Ask about any part of your codebase and get a unified intelligence view: files, risk, architecture, dependencies, review group, recent changes, and git timeline — all from a single command.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs text-[#ccc3d8]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>6 Brain Modes:</strong> Impact, Architecture, Review, Timeline, Risk, and Deps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>Fuzzy matching:</strong> Automatically matches topics even with partial input</span>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden flex-grow flex flex-col min-w-[320px] bg-black">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap brain</span>
                <CopyButton text="tokencap brain auth" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap brain auth</span>
                </div>
                <div className="mt-2 text-red-400">Risk: <span className="font-bold">CRITICAL (🔴)</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Fuzzy matched cluster: Authentication</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Resolved 6 files in cluster</span></div>
                <div className="text-zinc-500">June 3 | Session Validation Added (authService.ts)</div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Central File: authService.ts (8 importers)</span><br />
                  <span className="whitespace-nowrap">Review Group: Auth + Schema</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flagship Command: tokencap agent */}
        <section id="agent" className="mb-12 glass-panel rounded-xl border-white/10 bg-white/5 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
            <div className="flex flex-col justify-between flex-grow max-w-xl">
              <div>
                <span className="bg-[#7c3aed] text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">Flagship Command</span>
                <h3 className="text-2xl font-bold text-white mb-2">Agent intelligence (agent)</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6">
                  Analyze your repository and automatically generate a complete Self-Loading Universal Context Layer (AGENTS.md, START_HERE.md) or Execution Contract (v1.1.0) under <code>.tokencap/agent/</code> to teach AI agents engineering discipline.
                </p>
              </div>
              <div className="space-y-3 font-sans text-xs text-[#ccc3d8]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>Universal Onboarding:</strong> Generates root AGENTS.md, START_HERE.md, context-manifest.json</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#4edea3]">check_circle</span>
                  <span><strong>Execution Contract (v1.1):</strong> 8 lifecycle files covering Scope Drift, Confidence Rating, and Recovery Mode</span>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden flex-grow flex flex-col min-w-[320px] bg-black">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap agent</span>
                <CopyButton text="tokencap agent --execution" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap agent --execution</span>
                </div>
                <div className="mt-2 text-[#4edea3]">✔ <span className="text-white">Initializing Execution Contract pipeline...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Compiling current state & engineering rules...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Activating Scope Drift Detection logic...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Generating 8 contract files...</span></div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Generated: .tokencap/agent/execution-contract/</span><br />
                  <span className="whitespace-nowrap">Includes: execution-state.md, execution-scope.md</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grid for Commands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Smart Context Retrieval (ask) */}
          <section id="ask" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Smart context retrieval (ask)</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Ask a natural language question and TokenCap automatically retrieves only the relevant files.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap ask</span>
                <CopyButton text="tokencap ask &quot;How does authentication work?&quot;" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap ask "How does authentication work?"</span>
                </div>
                <div className="mt-3 text-[#4edea3]">✔ <span className="text-white">Analyzing question keywords...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Matching clusters: Authentication (95%)</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Performing 2-hop BFS import search...</span></div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Generated: .tokencap/context/auth-context.md</span><br />
                  <span className="whitespace-nowrap">Generated: .tokencap/context/auth-prompt.md</span>
                </div>
              </div>
            </div>
          </section>

          {/* Topic Context (context) */}
          <section id="context" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Topic context (context)</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Manually compile prompt-optimized context files for a specific keyword or topic.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap context</span>
                <CopyButton text="tokencap context payments --budget 8000" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap context payments --budget 8000</span>
                </div>
                <div className="mt-3 text-[#4edea3]">✔ <span className="text-white">Compiling payments context...</span></div>
                <div className="text-zinc-500">[14:04:12] Token Budget Allocated: 8,000 tokens</div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Generated: .tokencap/context/payments-context.md</span>
                </div>
              </div>
            </div>
          </section>

          {/* Generate Snapshot */}
          <section id="snapshot" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Generate snapshot (make)</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Generate all three files: main snapshot, project knowledge graph, and developer context memory in one command.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap make</span>
                <CopyButton text="tokencap make --profile balanced" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap make --profile balanced</span>
                </div>
                <div className="mt-3 text-[#4edea3]">✔ <span className="text-white">Scanning files...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Generating TOKENCAP_GRAPH.md...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Generating TOKENCAP_MEMORY.md...</span></div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Generated: TOKENCAP.md</span><br />
                  <span className="whitespace-nowrap">Generated: TOKENCAP_GRAPH.md</span><br />
                  <span className="whitespace-nowrap">Generated: TOKENCAP_MEMORY.md</span>
                </div>
              </div>
            </div>
          </section>

          {/* Watch Mode */}
          <section id="watch" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Watch mode</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Start a background watcher that regenerates all snapshot files automatically whenever a file changes.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap watch</span>
                <CopyButton text="tokencap watch --debounce 3000" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap watch --debounce 3000</span>
                </div>
                <div className="mt-3 text-zinc-500 whitespace-nowrap overflow-x-auto scrollbar-none">[14:02:21] Watching workspace for changes...</div>
                <div className="text-[#00a572] whitespace-nowrap overflow-x-auto scrollbar-none">● <span className="text-white">Change detected in src/app/login/page.tsx</span></div>
                <div className="text-zinc-500 whitespace-nowrap overflow-x-auto scrollbar-none">[14:02:45] Debouncing and regenerating snapshot files...</div>
                <div className="cli-cursor text-white mt-1"></div>
              </div>
            </div>
          </section>

          {/* Context Packing */}
          <section id="pack" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Context packing (pack)</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Pack your project workspace into a token-budgeted, importance-scored context pack for LLMs.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap pack</span>
                <CopyButton text="tokencap pack --mode review --budget 20000" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap pack --mode review --budget 20000</span>
                </div>
                <div className="mt-3 text-[#4edea3]">✔ <span className="text-white">Analyzing file graph centrality...</span></div>
                <div className="text-[#4edea3]">✔ <span className="text-white">Applying representation tiers...</span></div>
                <div className="mt-3 p-3 bg-white/5 rounded border border-white/5 text-[#d2bbff] leading-normal text-xs overflow-x-auto scrollbar-none">
                  <span className="whitespace-nowrap">Generated: .tokencap/packs/review.md (18,450 tokens)</span><br />
                  <span className="whitespace-nowrap">Tiers: 12 full, 8 outlined, 5 AST, 14 reference-only</span>
                </div>
              </div>
            </div>
          </section>

          {/* Change Intelligence */}
          <section id="diff" className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Change intelligence (diff)</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Perform semantic change analysis to determine risk rating, breaking changes, and suggested tests.
            </p>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow flex-grow flex flex-col">
              <div className="bg-[#18181b] px-4 py-2 border-b border-white/5 flex justify-between items-center">
                <span className="font-mono text-xs text-zinc-500">Terminal — tokencap diff</span>
                <CopyButton text="tokencap diff --staged" />
              </div>
              <div className="p-4 font-mono text-[13px] flex-grow bg-black leading-relaxed">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#d2bbff] select-none">&gt;</span>
                  <span className="text-white whitespace-nowrap">tokencap diff --staged</span>
                </div>
                <div className="mt-3 text-zinc-500 whitespace-nowrap">[14:03:01] Analyzing 5 staged files...</div>
                <div className="text-yellow-400 font-bold whitespace-nowrap">Risk Rating: MEDIUM</div>
                <div className="text-white text-xs mt-2 p-3 bg-white/5 rounded border border-white/5 leading-normal overflow-x-auto scrollbar-none">
                  - Modified API: /api/auth/login<br />
                  - Suggested Tests: Session expiry, redirect validation
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Detailed Section: Config */}
        <section className="mb-16" id="config">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-white">Configuration</h2>
            <span className="bg-[#2a2a2c] px-3 py-1 rounded-full font-mono text-[12px] text-[#4edea3] border border-[#4a4455] self-start sm:self-auto">
              .tokencap.json
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                Initialize a local project configuration or print the currently resolved configuration including profile defaults.
              </p>
              <div className="p-4 border border-[#4a4455]/20 rounded-xl bg-[#0e0e10] flex justify-between items-start">
                <div>
                  <p className="font-mono text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">INITIALIZE CONFIG</p>
                  <code className="font-mono text-sm text-[#d2bbff] font-bold">tokencap init</code>
                  <p className="text-xs text-[#ccc3d8] mt-2">Creates a default config file .tokencap.json in your workspace root.</p>
                </div>
                <CopyButton text="tokencap init" className="mt-1" />
              </div>
              <div className="p-4 border border-[#4a4455]/20 rounded-xl bg-[#0e0e10] flex justify-between items-start">
                <div>
                  <p className="font-mono text-[10px] text-zinc-500 mb-1.5 uppercase tracking-wider">RESOLVE CONFIG</p>
                  <code className="font-mono text-sm text-[#d2bbff] font-bold">tokencap config</code>
                  <p className="text-xs text-[#ccc3d8] mt-2">Prints resolved configuration tree combined with CLI overrides.</p>
                </div>
                <CopyButton text="tokencap config" className="mt-1" />
              </div>
            </div>
            <div className="glass-panel rounded-xl overflow-hidden terminal-glow">
              <div className="p-4 font-mono text-[13px] leading-relaxed bg-black/40 relative">
                <div className="absolute top-4 right-4">
                  <CopyButton text={`{\n  "profile": "balanced",\n  "outputPath": "TOKENCAP.md",\n  "maxFiles": 90,\n  "maxSourceBytes": 220000,\n  "maxFileBytes": 14000,\n  "includeGitDiff": true,\n  "includeFileContents": true,\n  "excludePatterns": ["node_modules/**", "dist/**"],\n  "redactSecrets": true\n}`} />
                </div>
                <div className="text-zinc-500">// Resolved Config Output</div>
                <div className="text-white mt-3 leading-normal overflow-x-auto scrollbar-none">
                  {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"profile"</span>: <span className="text-[#adc6ff]">"balanced"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"outputPath"</span>: <span className="text-[#adc6ff]">"TOKENCAP.md"</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"maxFiles"</span>: <span className="text-[#d2bbff]">90</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"maxSourceBytes"</span>: <span className="text-[#d2bbff]">220000</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"includeGitDiff"</span>: <span className="text-[#d2bbff]">true</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-[#4edea3]">"redactSecrets"</span>: <span className="text-[#d2bbff]">true</span>
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Section: CLI Options */}
        <section className="mb-16" id="options">
          <h2 className="text-xl font-bold text-white mb-6">CLI Options</h2>
          <div className="overflow-x-auto border border-[#4a4455]/20 rounded-xl bg-[#0e0e10]/30">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#2a2a2c]/60">
                <tr>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Flag</th>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Description</th>
                  <th className="p-4 font-mono text-[11px] uppercase tracking-wider text-zinc-500 border-b border-[#4a4455]/20">Default</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#4a4455]/10 font-sans text-sm text-[#ccc3d8]">
                {tableOptions.map((opt) => (
                  <tr key={opt.flag} className="hover:bg-[#2a2a2c]/30 transition-colors">
                    <td className="p-4 font-mono text-xs text-[#d2bbff]">{opt.flag}</td>
                    <td className="p-4">{opt.description}</td>
                    <td className="p-4 text-xs font-mono text-zinc-500">{opt.defaultVal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Visual Break / Image */}
        <section className="relative h-64 rounded-xl overflow-hidden">
          <img 
            className="w-full h-full object-cover opacity-40" 
            alt="Terminal lines mockup" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXi8Pwd8DdwTmDNW-bPR4NmXzIYKQdDp_BjxnLS7ir8sJpUJPK1eh8e1mw5GTO3YYLMwJ3jyFyAm-rrqp-GN5oy1y4qGKjMwlfP3FCIUs723Ehq2eNk6Yynckh0Q7RNTFGK1Ag1fWXml6NIy-wGnR7P-D9fOthBOON9DeY6nnjKTPDeTJz_Yje5Wgmy0-wd6S96y8ZCMzeDZKwxd3ZKSrN8bTCS1FFhGUwjKjAyXCZshn1GJm1HLab_2pkE8QIhRyBEgmuWueZnzwi"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131315] to-transparent flex items-end p-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Built for speed.</h4>
              <p className="text-sm text-[#ccc3d8]">Highly optimized JS parser engine ensures execution times in milliseconds.</p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}