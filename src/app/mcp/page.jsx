import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "TokenCap MCP Guide (v1.5.0)",
  description: "Model Context Protocol (MCP) Guide for TokenCap. Self-Maintaining Repository Intelligence Service for AI Coding Agents.",
  path: "/mcp",
});

export default function McpPage() {
  const sidebarItems = [
    { label: "Overview", icon: "hub", href: "#overview" },
    { label: "Quick Start", icon: "rocket_launch", href: "#quick-start" },
    { label: "Supported Hosts", icon: "laptop_mac", href: "#supported-hosts" },
    { label: "Startup & Memory", icon: "sync", href: "#startup" },
    { label: "11 MCP Tools", icon: "construction", href: "#tools" },
    { label: "Performance", icon: "speed", href: "#latency" },
    { label: "CLI Reference", icon: "terminal", href: "/cli" },
    { label: "Documentation", icon: "description", href: "/docs" },
  ];

  const mcpTools = [
    { name: "tokencap_overview", desc: "Tech stack, cluster list, risk summary, last build time.", input: "None" },
    { name: "tokencap_files", desc: "Most relevant files for a task, ranked by graph + recency + risk.", input: '{ "query": "login bug" }' },
    { name: "tokencap_search", desc: "Cross-layer search across brain, graph, constitution, and files.", input: '{ "query": "JWT token" }' },
    { name: "tokencap_cluster", desc: "Full intelligence for one cluster: files, deps, risk, changes.", input: '{ "cluster": "Auth" }' },
    { name: "tokencap_dependencies", desc: "Upstream providers + downstream consumers up to N hops.", input: '{ "target": "src/jwt.js" }' },
    { name: "tokencap_constitution", desc: "Constitution rules scoped to a cluster, file, or rule ID.", input: '{ "file": "src/jwt.js" }' },
    { name: "tokencap_impact", desc: "Blast radius of proposed changes: affected clusters & broken rules.", input: '{ "files": ["src/jwt.js"] }' },
    { name: "tokencap_execution", desc: "Execution-contract guidance for the current engineering phase.", input: "None" },
    { name: "tokencap_verify", desc: "Test commands, test files, lint rules, and review checklist.", input: '{ "cluster": "Auth" }' },
    { name: "tokencap_delta", desc: "What changed since last build — clusters, files, rules.", input: "None" },
    { name: "tokencap_mcp_status", desc: "Server uptime, cache hit rate, and per-endpoint call counts.", input: "None" },
  ];

  const supportedHosts = [
    { host: "Claude Code", config: ".claude/mcp.json", flag: "--client claude" },
    { host: "Cursor", config: ".cursor/mcp.json", flag: "--client cursor" },
    { host: "Windsurf", config: ".windsurf/mcp.json", flag: "--client windsurf" },
    { host: "Cline / Roo Code", config: ".cline/mcp.json", flag: "--client cline" },
    { host: "VS Code", config: ".vscode/mcp.json", flag: "--client vscode" },
    { host: "Antigravity", config: ".agents/mcp_config.json", flag: "--client antigravity" },
    { host: "Codex", config: ".codex/config.toml", flag: "--client codex" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7c3aed]">hub</span>
            <p className="text-xl font-bold text-white tracking-tight">MCP Guide</p>
          </div>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v1.5.0 RELEASE</p>
        </div>

        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-3">
          <a
            href="/docs"
            className="w-full bg-[#7c3aed] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity block text-center"
          >
            Full Documentation
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-4xl space-y-16">
          {/* Header */}
          <header className="border-b border-[#4a4455]/20 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/30 text-[#d2bbff] text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00a572] animate-pulse"></span>
              v1.5.0 Self-Maintaining MCP Service
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-4 font-nerdropol">
              Model Context Protocol (MCP) Guide
            </h1>
            <p className="text-base leading-relaxed text-[#ccc3d8]">
              TokenCap exposes repository intelligence through the Model Context Protocol (MCP). Your AI host queries focused questions about the repository live, during reasoning, on demand — saving up to 92% of context token budget.
            </p>
          </header>

          {/* Quick Start */}
          <section id="quick-start" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">rocket_launch</span>
              Quick Start (2 Steps)
            </h2>
            <p className="text-sm text-[#ccc3d8] mb-6">
              Install TokenCap globally and run the single configuration command. TokenCap auto-detects your host IDE and wires configuration automatically.
            </p>
            <div className="bg-[#121215] border border-[#4a4455]/30 rounded-xl p-6 space-y-4">
              <div>
                <p className="text-xs font-mono text-zinc-400 mb-2">1. Install TokenCap globally:</p>
                <div className="flex items-center justify-between bg-[#0a0a0c] px-4 py-3 rounded-lg border border-[#4a4455]/20 font-mono text-sm text-[#00a572]">
                  <code>npm install -g tokencap</code>
                  <CopyButton text="npm install -g tokencap" />
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-400 mb-2">2. Wire your IDE / MCP Host:</p>
                <div className="flex items-center justify-between bg-[#0a0a0c] px-4 py-3 rounded-lg border border-[#4a4455]/20 font-mono text-sm text-[#00a572]">
                  <code>tokencap mcp --init</code>
                  <CopyButton text="tokencap mcp --init" />
                </div>
              </div>
            </div>
          </section>

          {/* Supported Hosts */}
          <section id="supported-hosts" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">laptop_mac</span>
              Supported Hosts & Auto-Init
            </h2>
            <p className="text-sm text-[#ccc3d8] mb-6">
              When a workspace has multiple supported AI hosts, specify your host explicitly:
            </p>
            <div className="overflow-x-auto border border-[#4a4455]/20 rounded-xl bg-[#0e0e10]/40">
              <table className="w-full text-left text-sm text-[#ccc3d8]">
                <thead className="bg-[#18181b] text-white font-mono text-xs uppercase border-b border-[#4a4455]/20">
                  <tr>
                    <th className="p-3">Host IDE / Tool</th>
                    <th className="p-3">Configuration Written</th>
                    <th className="p-3">Init Command</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4a4455]/10">
                  {supportedHosts.map((h) => (
                    <tr key={h.host} className="hover:bg-[#18181b]/30">
                      <td className="p-3 font-semibold text-white">{h.host}</td>
                      <td className="p-3 font-mono text-xs text-zinc-400">{h.config}</td>
                      <td className="p-3 font-mono text-xs text-[#00a572]">{`tokencap mcp --init ${h.flag}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Startup & Memory */}
          <section id="startup" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">sync</span>
              Self-Maintaining Intelligence & Live Watcher
            </h2>
            <div className="bg-[#121215] border border-[#7c3aed]/20 rounded-xl p-6 text-sm text-[#ccc3d8] space-y-4">
              <p>
                In <strong>v1.5.0</strong>, users no longer need to run a manual <code className="text-[#00a572]">tokencap make</code> or <code className="text-[#00a572]">tokencap watch</code> process before using MCP.
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-300">
                <li><strong className="text-white">Auto Build on Startup:</strong> When the MCP process starts, it automatically builds repository intelligence before serving tools.</li>
                <li><strong className="text-white">Live File Watcher:</strong> Keeps an active background watcher for source edits and <code className="text-[#d2bbff]">.tokencap-notes.md</code> updates.</li>
                <li><strong className="text-white">In-Memory Zero-Latency Cache:</strong> Subsequent tool queries resolve from memory cache in 0-2 ms handler time.</li>
              </ul>
            </div>
          </section>

          {/* 11 MCP Tools */}
          <section id="tools" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">construction</span>
              The 11 MCP Tool Endpoints
            </h2>
            <div className="overflow-x-auto border border-[#4a4455]/20 rounded-xl bg-[#0e0e10]/40">
              <table className="w-full text-left text-sm text-[#ccc3d8]">
                <thead className="bg-[#18181b] text-white font-mono text-xs uppercase border-b border-[#4a4455]/20">
                  <tr>
                    <th className="p-3">Tool Name</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Example Input</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4a4455]/10 font-mono text-xs">
                  {mcpTools.map((t) => (
                    <tr key={t.name} className="hover:bg-[#18181b]/30">
                      <td className="p-3 text-[#d2bbff] font-bold">{t.name}</td>
                      <td className="p-3 font-sans text-sm text-zinc-300">{t.desc}</td>
                      <td className="p-3 text-zinc-400">{t.input}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Performance */}
          <section id="latency" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">speed</span>
              Performance & Token Savings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-[#121215] border border-[#4a4455]/20">
                <h3 className="font-bold text-white text-base mb-2">Token Budget Savings</h3>
                <p className="text-xs text-zinc-400 mb-4">Comparing traditional cold file loading vs v1.5 MCP service:</p>
                <ul className="space-y-2 text-xs font-mono">
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>Simple Bug Fix:</span>
                    <span className="text-[#00a572] font-bold">1,500 vs 20,000 (92% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>Feature Addition:</span>
                    <span className="text-[#00a572] font-bold">4,000 vs 20,000 (80% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>Architecture Qs:</span>
                    <span className="text-[#00a572] font-bold">2,500 vs 20,000 (87% saved)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#121215] border border-[#4a4455]/20">
                <h3 className="font-bold text-white text-base mb-2">Server Handler Latency</h3>
                <p className="text-xs text-zinc-400 mb-4">Sub-millisecond local handler processing times:</p>
                <ul className="space-y-2 text-xs font-mono">
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>tokencap_mcp_status:</span>
                    <span className="text-[#d2bbff] font-bold">0 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>tokencap_overview:</span>
                    <span className="text-[#d2bbff] font-bold">1 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-[#0a0a0c]">
                    <span>tokencap_search:</span>
                    <span className="text-[#d2bbff] font-bold">2 ms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-[#4a4455]/20">
            <a href="/docs" className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
              Back to Full Docs
            </a>
            <a href="/cli" className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d2bbff] transition-colors">
              CLI Reference
              <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
