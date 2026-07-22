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
    { label: "CLI Reference", icon: "/cli" },
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
  ];  return (
    <PageWrapper className="max-w-7xl mx-auto flex font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-card-border bg-card p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-muted">hub</span>
            <p className="text-xl font-bold text-foreground tracking-tight font-mono">MCP Guide</p>
          </div>
          <p className="font-mono text-[10px] text-muted mt-1 uppercase tracking-wider">v1.5.0 RELEASE</p>
        </div>

        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all text-muted hover:bg-pre-bg hover:text-foreground"
            >
              <span className="material-symbols-outlined text-base text-muted/80">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-card-border space-y-3">
          <a
            href="/docs"
            className="w-full bg-pre-bg border border-card-border text-foreground py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-card-hover transition-colors block text-center font-mono"
          >
            Full Documentation
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-4xl space-y-16">
          {/* Header */}
          <header className="border-b border-card-border pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pre-bg border border-card-border text-muted text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-zinc-550 animate-pulse"></span>
              v1.5.0 Self-Maintaining MCP Service
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4 font-display">
              Model Context Protocol (MCP) Guide
            </h1>
            <p className="text-sm leading-relaxed text-muted">
              TokenCap exposes repository intelligence through the Model Context Protocol (MCP). Your AI host queries focused questions about the repository live, during reasoning, on demand — saving up to 92% of context token budget.
            </p>
          </header>

          {/* Quick Start */}
          <section id="quick-start" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted">rocket_launch</span>
              Quick Start (2 Steps)
            </h2>
            <p className="text-xs text-muted mb-6">
              Install TokenCap globally and run the single configuration command. TokenCap auto-detects your host IDE and wires configuration automatically.
            </p>
            <div className="bg-card border border-card-border rounded-lg p-6 space-y-4">
              <div>
                <p className="text-xs font-mono text-muted mb-2">1. Install TokenCap globally:</p>
                <div className="flex items-center justify-between bg-pre-bg px-4 py-3 rounded-lg border border-card-border font-mono text-xs text-foreground/90">
                  <code>npm install -g tokencap</code>
                  <CopyButton text="npm install -g tokencap" />
                </div>
              </div>
              <div>
                <p className="text-xs font-mono text-muted mb-2">2. Wire your IDE / MCP Host:</p>
                <div className="flex items-center justify-between bg-pre-bg px-4 py-3 rounded-lg border border-card-border font-mono text-xs text-foreground/90">
                  <code>tokencap mcp --init</code>
                  <CopyButton text="tokencap mcp --init" />
                </div>
              </div>
            </div>
          </section>

          {/* Supported Hosts */}
          <section id="supported-hosts" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted">laptop_mac</span>
              Supported Hosts & Auto-Init
            </h2>
            <p className="text-xs text-muted mb-6">
              When a workspace has multiple supported AI hosts, specify your host explicitly:
            </p>
            <div className="overflow-x-auto border border-card-border rounded-lg bg-card">
              <table className="w-full text-left text-xs text-muted">
                <thead className="bg-tab-inactive text-foreground/95 font-mono text-[10px] uppercase border-b border-card-border">
                  <tr>
                    <th className="p-3">Host IDE / Tool</th>
                    <th className="p-3">Configuration Written</th>
                    <th className="p-3">Init Command</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {supportedHosts.map((h) => (
                    <tr key={h.host} className="hover:bg-pre-bg/40">
                      <td className="p-3 font-semibold text-foreground font-mono">{h.host}</td>
                      <td className="p-3 font-mono text-[10px] text-muted">{h.config}</td>
                      <td className="p-3 font-mono text-[10px] text-foreground/90">{`tokencap mcp --init ${h.flag}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Startup & Memory */}
          <section id="startup" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted">sync</span>
              Self-Maintaining Intelligence & Live Watcher
            </h2>
            <div className="bg-card border border-card-border rounded-lg p-6 text-xs text-muted space-y-4">
              <p>
                In <strong>v1.5.0</strong>, users no longer need to run a manual <code className="text-foreground/90 bg-pre-bg px-1 rounded">tokencap make</code> or <code className="text-foreground/90 bg-pre-bg px-1 rounded">tokencap watch</code> process before using MCP.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li><strong className="text-foreground font-mono">Auto Build on Startup:</strong> When the MCP process starts, it automatically builds repository intelligence before serving tools.</li>
                <li><strong className="text-foreground font-mono">Live File Watcher:</strong> Keeps an active background watcher for source edits and <code className="text-foreground/90 bg-pre-bg px-1 rounded">.tokencap-notes.md</code> updates.</li>
                <li><strong className="text-foreground font-mono">In-Memory Zero-Latency Cache:</strong> Subsequent tool queries resolve from memory cache in 0-2 ms handler time.</li>
              </ul>
            </div>
          </section>

          {/* 11 MCP Tools */}
          <section id="tools" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted">construction</span>
              The 11 MCP Tool Endpoints
            </h2>
            <div className="overflow-x-auto border border-card-border rounded-lg bg-card">
              <table className="w-full text-left text-xs text-muted">
                <thead className="bg-tab-inactive text-foreground/95 font-mono text-[10px] uppercase border-b border-card-border">
                  <tr>
                    <th className="p-3">Tool Name</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Example Input</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border font-mono text-[11px]">
                  {mcpTools.map((t) => (
                    <tr key={t.name} className="hover:bg-pre-bg/40">
                      <td className="p-3 text-foreground font-bold">{t.name}</td>
                      <td className="p-3 font-sans text-xs text-muted">{t.desc}</td>
                      <td className="p-3 text-muted">{t.input}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Performance */}
          <section id="latency" className="scroll-mt-24">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted">speed</span>
              Performance & Token Savings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-card border border-card-border">
                <h3 className="font-bold text-foreground font-mono text-sm mb-2">Token Budget Savings</h3>
                <p className="text-[11px] text-muted mb-4">Comparing traditional cold file loading vs v1.5 MCP service:</p>
                <ul className="space-y-2 text-[10px] font-mono">
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>Simple Bug Fix:</span>
                    <span className="text-foreground/90 font-bold">1,500 vs 20,000 (92% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>Feature Addition:</span>
                    <span className="text-foreground/90 font-bold">4,000 vs 20,000 (80% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>Architecture Qs:</span>
                    <span className="text-foreground/90 font-bold">2,500 vs 20,000 (87% saved)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-lg bg-card border border-card-border">
                <h3 className="font-bold text-foreground font-mono text-sm mb-2">Server Handler Latency</h3>
                <p className="text-[11px] text-muted mb-4">Sub-millisecond local handler processing times:</p>
                <ul className="space-y-2 text-[10px] font-mono">
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>tokencap_mcp_status:</span>
                    <span className="text-foreground/90 font-bold">0 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>tokencap_overview:</span>
                    <span className="text-foreground/90 font-bold">1 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span>tokencap_search:</span>
                    <span className="text-foreground/90 font-bold">2 ms</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-card-border font-mono text-xs">
            <a href="/docs" className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
              Back to Full Docs
            </a>
            <a href="/cli" className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors">
              CLI Reference
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
