import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "Documentation",
  description: "Learn how to use TokenCap CLI and integration tools. Local-first snapshot generation guide.",
  path: "/docs",
});

export default function DocsPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "#introduction", active: true },
    { label: "Installation", icon: "download", href: "#installation" },
    { label: "Getting Started", icon: "rocket_launch", href: "#getting-started" },
    { label: "CLI Reference", icon: "terminal", href: "#cli-usage" },
    { label: "Configuration", icon: "settings", href: "#configuration" },
    { label: "Secret Redaction", icon: "enhanced_encryption", href: "#secret-redaction" },
    { label: "Troubleshooting", icon: "build", href: "#troubleshooting" },
  ];

  const tocItems = [
    { label: "Introduction", href: "#introduction" },
    { label: "Installation", href: "#installation" },
    { label: "Getting Started", href: "#getting-started" },
    { label: "CLI Usage", href: "#cli-usage" },
    { label: "Configuration", href: "#configuration" },
    { label: "Secret Redaction", href: "#secret-redaction" },
    { label: "Troubleshooting", href: "#troubleshooting" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v0.2.0</p>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all text-[#ccc3d8] hover:bg-[#2a2a2c]/50`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-4">
          <a
            href="/docs/getting-started"
            className="w-full bg-[#00a572] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity block text-center"
          >
            Read Guide
          </a>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
            <a href="https://discord.gg" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-base">forum</span>
              Discord
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-3xl">
          {/* Section: Introduction */}
          <section className="mb-16 scroll-mt-24" id="introduction">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-6">
              Codebase Context Packaging for AI Workflows
            </h1>
            <p className="text-base leading-relaxed text-[#ccc3d8] mb-8">
              TokenCap is a production-ready, highly compressed codebase snapshotting tool. It packages files, Git status, staged and unstaged diffs, local imports dependency map, and developer notes into a single prompt-optimized file — allowing you to easily hand off context to AI tools and developers.
            </p>
            <div className="bg-[#1c1b1d] border border-white/5 rounded-xl p-6 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff] shrink-0">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Local-First and Secure</h4>
                <p className="text-xs text-[#ccc3d8] leading-relaxed">TokenCap runs entirely on your local machine, redacting secrets automatically and ensuring zero code is uploaded to the cloud.</p>
              </div>
            </div>
          </section>

          {/* Section: Installation */}
          <section className="mb-16 scroll-mt-24" id="installation">
            <h2 className="text-2xl font-bold text-white mb-3">Installation</h2>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Install the global CLI tool via npm to start generating snapshots.
            </p>
            <div className="rounded-lg overflow-hidden border border-[#4a4455]/30 bg-[#0e0e10]">
              <div className="terminal-header h-8 flex items-center px-4 gap-1.5 justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#353437]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#353437]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#353437]"></div>
                </div>
                <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">Terminal</span>
                <CopyButton text="npm install -g tokencap" />
              </div>
              <div className="p-4 font-mono text-[13px]">
                <div className="flex gap-2 overflow-x-auto scrollbar-none">
                  <span className="text-[#7c3aed] select-none">&gt;</span>
                  <span className="text-[#4edea3] whitespace-nowrap">npm install -g tokencap</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Getting Started */}
          <section className="mb-16 scroll-mt-24" id="getting-started">
            <h2 className="text-2xl font-bold text-white mb-3">Getting Started</h2>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6">
              Generate snapshots of your current workspace instantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-[#1c1b1d] border border-[#4a4455]/20 rounded-xl group hover:border-[#7c3aed]/50 transition-colors flex flex-col justify-between h-[130px]">
                <div>
                  <div className="flex items-center gap-2 text-white mb-1.5">
                    <span className="material-symbols-outlined text-[#7c3aed] text-lg">settings</span>
                    <h3 className="font-bold text-sm">Step 1: Init</h3>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">Create a local configuration scaffold `.tokencap.json` in your project root.</p>
                </div>
                <code className="text-xs bg-black p-2 rounded block text-[#4edea3] font-mono">tokencap init</code>
              </div>
              <div className="p-4 bg-[#1c1b1d] border border-[#4a4455]/20 rounded-xl group hover:border-[#7c3aed]/50 transition-colors flex flex-col justify-between h-[130px]">
                <div>
                  <div className="flex items-center gap-2 text-white mb-1.5">
                    <span className="material-symbols-outlined text-[#7c3aed] text-lg">inventory_2</span>
                    <h3 className="font-bold text-sm">Step 2: Make</h3>
                  </div>
                  <p className="text-xs text-[#ccc3d8]">Compile the codebase snapshot, dependency graph, and context memory layer.</p>
                </div>
                <code className="text-xs bg-black p-2 rounded block text-[#4edea3] font-mono">tokencap make</code>
              </div>
            </div>
          </section>

          {/* Section: CLI Usage */}
          <section className="mb-16 scroll-mt-24" id="cli-usage">
            <h2 className="text-2xl font-bold text-white mb-3">CLI Usage</h2>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Watch directories and regenerate files automatically on file save.
            </p>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-[#4a4455]/30 bg-[#0e0e10]">
                <div className="terminal-header h-8 flex items-center justify-between px-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#353437]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#353437]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#353437]"></div>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">Watching filesystem...</span>
                  <CopyButton text="tokencap watch --debounce 3000" />
                </div>
                <div className="p-4 font-mono text-[13px] bg-[#09090b]">
                  <div className="flex gap-2 text-white overflow-x-auto scrollbar-none">
                    <span className="text-[#7c3aed]">&gt;</span>
                    <span className="whitespace-nowrap">tokencap watch --debounce 3000</span>
                  </div>
                  <div className="mt-3 text-zinc-500 leading-relaxed whitespace-nowrap overflow-x-auto scrollbar-none">
                    [14:02:11] Watching workspace for changes...<br />
                    [14:02:45] Found change in src/app/login/page.tsx<br />
                    [14:02:45] <span className="text-[#00a572] font-semibold">SUCCESS</span> Regenerated all 3 snapshot files.
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#4a4455]/30 bg-[#0e0e10] p-4 flex items-center justify-between gap-4">
                <div className="font-mono text-[13px] min-w-0">
                  <div className="flex gap-2 overflow-x-auto scrollbar-none">
                    <span className="text-[#7c3aed] select-none">&gt;</span>
                    <span className="text-[#4edea3] whitespace-nowrap">tokencap config</span>
                  </div>
                  <p className="mt-1 text-zinc-500 italic text-xs">Print fully resolved settings tree, combining configs and profiles.</p>
                </div>
                <CopyButton text="tokencap config" className="shrink-0" />
              </div>
            </div>
          </section>

          {/* Section: Configuration */}
          <section className="mb-16 scroll-mt-24" id="configuration">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-white">Configuration</h2>
              <CopyButton text={`{\n  "profile": "balanced",\n  "outputPath": "TOKENCAP.md",\n  "maxFiles": 90,\n  "maxSourceBytes": 220000,\n  "maxFileBytes": 14000,\n  "includeGitDiff": true,\n  "includeFileContents": true,\n  "excludePatterns": ["node_modules/**", "dist/**"],\n  "redactSecrets": true\n}`} />
            </div>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Configure file counts, budgets, and glob exclusions using a local <code className="text-[#7c3aed]">.tokencap.json</code> file.
            </p>
            <div className="rounded-lg overflow-hidden border border-[#4a4455]/30 bg-[#09090b] relative">
              <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600">JSON</div>
              <pre className="p-4 font-mono text-[13px] text-[#4edea3] leading-relaxed overflow-x-auto">
{`{
  "profile": "balanced",
  "outputPath": "TOKENCAP.md",
  "maxFiles": 90,
  "maxSourceBytes": 220000,
  "maxFileBytes": 14000,
  "includeGitDiff": true,
  "includeFileContents": true,
  "excludePatterns": ["node_modules/**", "dist/**", "build/**"],
  "redactSecrets": true
}`}
              </pre>
            </div>
          </section>

          {/* Section: Secret Redaction */}
          <section className="mb-16 scroll-mt-24" id="secret-redaction">
            <h2 className="text-2xl font-bold text-white mb-3">Secret Redaction</h2>
            <p className="text-sm leading-relaxed text-[#ccc3d8] mb-4">
              Built-in credential scanners strip API tokens, keys, and passwords, replacing them before writing to disk.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="p-4 bg-[#1c1b1d] rounded border border-[#4a4455]/30 text-center">
                <div className="text-white font-bold text-xs font-mono mb-1">RAW SOURCE FILE</div>
                <div className="text-xs font-mono text-red-400">sk-proj-42d9...A1Z3</div>
              </div>
              <div className="flex items-center justify-center">
                <span className="material-symbols-outlined text-[#7c3aed] text-xl">arrow_forward</span>
              </div>
              <div className="p-4 bg-[#1c1b1d] rounded border border-[#4a4455]/30 text-center">
                <div className="text-white font-bold text-xs font-mono mb-1">REDACTED SNAPSHOT</div>
                <div className="text-xs font-mono text-[#4edea3]">[REDACTED_OPENAI_KEY]</div>
              </div>
            </div>
          </section>

          {/* Section: Troubleshooting */}
          <section className="mb-16 scroll-mt-24" id="troubleshooting">
            <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <details className="group bg-[#1c1b1d] border border-[#4a4455]/30 rounded-lg">
                <summary className="p-4 cursor-pointer font-bold text-white list-none flex justify-between items-center group-open:border-b border-[#4a4455]/30">
                  <span className="text-sm">Command 'tokencap' not found</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-zinc-500">expand_more</span>
                </summary>
                <div className="p-4 text-xs text-[#ccc3d8] leading-relaxed">
                  Ensure your global npm bin directory is in your system PATH environment variable so the executable can be resolved globally.
                </div>
              </details>
              <details className="group bg-[#1c1b1d] border border-[#4a4455]/30 rounded-lg">
                <summary className="p-4 cursor-pointer font-bold text-white list-none flex justify-between items-center group-open:border-b border-[#4a4455]/30">
                  <span className="text-sm">Knowledge graph has missing relationships</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-zinc-500">expand_more</span>
                </summary>
                <div className="p-4 text-xs text-[#ccc3d8] leading-relaxed">
                  Note that `TOKENCAP_GRAPH.md` resolves imports and require syntax for JS/TS projects only. Files in other languages (such as Rust or Python) will appear in the graph as isolated nodes.
                </div>
              </details>
            </div>
          </section>

          {/* Navigation buttons */}
          <div className="mt-16 flex justify-between items-center pt-8 border-t border-[#4a4455]/20">
            <a href="/pricing" className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
              Pricing Overview
            </a>
            <a href="/cli" className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d2bbff] transition-colors">
              CLI Reference
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-64 p-6 sticky top-16 h-fit shrink-0">
        <h5 className="text-[10px] font-mono font-bold text-zinc-500 mb-4 uppercase tracking-widest">On this page</h5>
        <nav className="flex flex-col gap-2.5 border-l border-[#4a4455]/20 pl-4 text-xs">
          {tocItems.map((item) => (
            <a
              key={item.href}
              className="text-zinc-400 hover:text-white transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 p-4 bg-[#7c3aed]/10 border border-[#7c3aed]/20 rounded-xl relative overflow-hidden">
          <div className="relative z-10">
            <h6 className="font-bold text-white text-xs mb-1">New Release</h6>
            <p className="text-[11px] leading-relaxed text-[#ccc3d8] mb-4">V0.2.0 adds Project Knowledge Graph and Context Memory Layer.</p>
            <a className="text-[11px] text-[#d2bbff] font-bold underline hover:text-[#7c3aed] transition-colors" href="/changelog">
              Check changelog
            </a>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10 text-[#7c3aed] pointer-events-none select-none">
            <span className="material-symbols-outlined text-6xl">upgrade</span>
          </div>
        </div>
      </aside>
    </PageWrapper>
  );
}