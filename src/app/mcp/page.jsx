import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "TokenCap MCP Guide (v2.4.0)",
  description: "Model Context Protocol (MCP) Guide for TokenCap. Self-Maintaining Repository Intelligence Service for AI Coding Agents.",
  path: "/mcp",
});

export default function McpPage() {
  const sidebarItems = [
    { label: "Overview", icon: "hub", href: "#overview" },
    { label: "Quick Start", icon: "rocket_launch", href: "#quick-start" },
    { label: "Supported Hosts", icon: "laptop_mac", href: "#supported-hosts" },
    { label: "Startup & Memory", icon: "sync", href: "#startup" },
    { label: "19 MCP Tools", icon: "construction", href: "#tools" },
    { label: "Performance", icon: "speed", href: "#latency" },
    { label: "CLI Reference", icon: "/docs#cli", href: "/docs#cli" },
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
    { name: "tokencap_refactor_plan", desc: "Dry-run preview of safe symbol renames or dead-code removal plans across the AST graph.", input: '{ "action": "rename", "target": "src/token.js:validate", "newName": "check" }' },
    { name: "tokencap_test_map", desc: "Static test associations, called-but-untested symbol gaps, and coverage report lines.", input: '{ "target": "src/token.js:validate", "gaps": true }' },
    { name: "tokencap_review", desc: "Local change review packet with base-ref symbol evidence and caller candidates.", input: '{ "base": "main" }' },
    { name: "tokencap_ownership", desc: "Opt-in Git churn, contributor distributions, and bounded co-change signals.", input: '{ "history": true }' },
    { name: "tokencap_simplify", desc: "Surface high-confidence unreachable statements, duplicate artifacts, and abstractions.", input: "None" },
    { name: "tokencap_execution", desc: "Execution-contract guidance for the current engineering phase.", input: "None" },
    { name: "tokencap_verify", desc: "Test commands, test files, lint rules, and review checklist.", input: '{ "cluster": "Auth" }' },
    { name: "tokencap_delta", desc: "What changed since last build — clusters, files, rules.", input: "None" },
    { name: "tokencap_diagram", desc: "Architecture, impact, and diff SVG visualizer diagrams.", input: '{ "type": "architecture" }' },
    { name: "tokencap_screen", desc: "Frontend visual and layout intelligence for UI components.", input: '{ "component": "Navbar" }' },
    { name: "tokencap_manage_adr", desc: "Read/write Architecture Decision Records that persist across sessions.", input: '{ "action": "add", "title": "Use web-tree-sitter", "decision": "AST parsing" }' },
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
    <PageWrapper className="max-w-7xl mx-auto flex font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-card-border bg-card p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)] shrink-0">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-muted text-base">hub</span>
            <p className="text-xl font-bold text-foreground tracking-tight font-mono">MCP Guide</p>
          </div>
          <p className="font-mono text-[10px] text-muted mt-1 uppercase tracking-wider">v2.4.0 RELEASE</p>
        </div>

        <nav className="space-y-1 flex-grow font-mono text-xs">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 p-2 rounded transition-colors text-muted hover:bg-pre-bg hover:text-foreground"
            >
              <span className="material-symbols-outlined text-sm text-muted/80">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-card-border">
          <a
            href="/docs"
            className="w-full bg-pre-bg border border-card-border text-foreground py-2 rounded font-bold text-xs uppercase tracking-wider hover:bg-card-hover transition-colors block text-center font-mono"
          >
            Full Documentation
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-4xl space-y-16">
          {/* Header */}
          <header id="overview" className="border-b border-card-border pb-8 scroll-mt-24">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-pre-bg border border-card-border text-muted text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              v2.4.0 Local MCP Service
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4 font-display">
              Model Context Protocol (MCP) Guide
            </h1>
            <p className="text-sm leading-relaxed text-muted mb-8">
              TokenCap exposes repository intelligence through the Model Context Protocol (MCP). Your AI host queries focused questions about the repository live, during reasoning, on demand — saving up to 92% of context token budget.
            </p>

            {/* Quick Stat Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded-lg bg-card border border-card-border">
                <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">Stdio Endpoints</span>
                <span className="text-xl font-bold text-foreground">19 MCP Tools</span>
              </div>
              <div className="p-4 rounded-lg bg-card border border-card-border">
                <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">Supported Clients</span>
                <span className="text-xl font-bold text-foreground">7 AI Hosts</span>
              </div>
              <div className="p-4 rounded-lg bg-card border border-card-border">
                <span className="text-[10px] text-muted uppercase tracking-wider block mb-1">In-Memory Latency</span>
                <span className="text-xl font-bold text-foreground">0 – 2 ms</span>
              </div>
            </div>
          </header>

          {/* Quick Start */}
          <section id="quick-start" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted text-base">rocket_launch</span>
              Quick Start (2 Steps)
            </h2>
            <p className="text-xs text-muted">
              Install TokenCap globally and run the single configuration command. TokenCap auto-detects your host IDE and wires configuration automatically.
            </p>
            <div className="bg-card border border-card-border rounded-lg p-6 space-y-4 font-mono text-xs">
              <div>
                <p className="text-[11px] text-muted mb-2">1. Install TokenCap globally:</p>
                <div className="flex items-center justify-between bg-pre-bg px-4 py-3 rounded border border-card-border text-foreground/90">
                  <code>npm install -g tokencap</code>
                  <CopyButton text="npm install -g tokencap" />
                </div>
              </div>
              <div>
                <p className="text-[11px] text-muted mb-2">2. Wire your IDE / MCP Host:</p>
                <div className="flex items-center justify-between bg-pre-bg px-4 py-3 rounded border border-card-border text-foreground/90">
                  <code>tokencap mcp --init</code>
                  <CopyButton text="tokencap mcp --init" />
                </div>
              </div>
            </div>
          </section>

          {/* Supported Hosts */}
          <section id="supported-hosts" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted text-base">laptop_mac</span>
              Supported Hosts & Auto-Init
            </h2>
            <p className="text-xs text-muted">
              When a workspace has multiple supported AI hosts, specify your host explicitly:
            </p>
            <div className="overflow-x-auto border border-card-border rounded-lg bg-card">
              <table className="w-full text-left text-xs text-muted font-mono">
                <thead className="bg-pre-bg text-muted text-[10px] uppercase border-b border-card-border">
                  <tr>
                    <th className="p-3 font-semibold">Host IDE / Tool</th>
                    <th className="p-3 font-semibold">Configuration Written</th>
                    <th className="p-3 font-semibold">Init Command</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-[11px]">
                  {supportedHosts.map((h) => (
                    <tr key={h.host} className="hover:bg-pre-bg/40 transition-colors">
                      <td className="p-3 font-bold text-foreground">{h.host}</td>
                      <td className="p-3 text-[10px] text-muted">{h.config}</td>
                      <td className="p-3 text-[10px] text-foreground/90">{`tokencap mcp --init ${h.flag}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Startup & Memory */}
          <section id="startup" className="scroll-mt-24 space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
                <span className="material-symbols-outlined text-muted text-base">sync</span>
                Self-Maintaining Intelligence, Refactor &amp; Test MCP Tools
              </h2>
              <div className="bg-card border border-card-border rounded-lg p-6 text-xs text-muted space-y-4">
                <p>
                  In <strong>v2.4.0</strong>, TokenCap introduces plan-only safe refactoring (<code>tokencap_refactor_plan</code>) and static test-to-symbol intelligence (<code>tokencap_test_map</code>), alongside local Change Review packets and host-scoped agent pointers.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted">
                  <li><strong className="text-foreground font-mono">Safe Refactor Plans:</strong> Query <code>tokencap_refactor_plan</code> over MCP to preview AST symbol renames and dead-code removal without risking un-reviewed disk modifications.</li>
                  <li><strong className="text-foreground font-mono">Static Test Mapping:</strong> Query <code>tokencap_test_map</code> over MCP to determine test coverage associations, untested symbol gaps, and ingested report coverage.</li>
                  <li><strong className="text-foreground font-mono">Local Change Review:</strong> Query <code>tokencap_review</code> over MCP to get bounded base-ref symbol evidence, caller candidates, and test hints.</li>
                  <li><strong className="text-foreground font-mono">Opt-In Ownership Signals:</strong> Query <code>tokencap_ownership</code> to access local Git churn and collaborator context without pushing to remote APIs.</li>
                  <li><strong className="text-foreground font-mono">Scoped Agent Pointers:</strong> Builds record your selected host client and generate only the necessary pointer file (e.g. <code>AGENTS.md</code>, <code>CLAUDE.md</code>) without overwriting existing files.</li>
                  <li><strong className="text-foreground font-mono">Live File Watcher:</strong> Debounced background watcher monitors source changes and updates sharded indexes (57ms incremental rebuilds).</li>
                </ul>
              </div>
          </section>

          {/* 19 MCP Tools */}
          <section id="tools" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted text-base">construction</span>
              The 19 MCP Tool Endpoints
            </h2>
            <div className="overflow-x-auto border border-card-border rounded-lg bg-card">
              <table className="w-full text-left text-xs text-muted font-mono">
                <thead className="bg-pre-bg text-muted text-[10px] uppercase border-b border-card-border">
                  <tr>
                    <th className="p-3 font-semibold">Tool Name</th>
                    <th className="p-3 font-semibold font-sans">Description</th>
                    <th className="p-3 font-semibold">Example Input</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border text-[11px]">
                  {mcpTools.map((t) => (
                    <tr key={t.name} className="hover:bg-pre-bg/40 transition-colors">
                      <td className="p-3 text-foreground font-bold">{t.name}</td>
                      <td className="p-3 font-sans text-xs text-muted">{t.desc}</td>
                      <td className="p-3 text-muted/80 text-[10px]">{t.input}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Performance */}
          <section id="latency" className="scroll-mt-24 space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 font-mono">
              <span className="material-symbols-outlined text-muted text-base">speed</span>
              Performance & Token Savings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="p-5 rounded-lg bg-card border border-card-border">
                <h3 className="font-bold text-foreground text-sm mb-1">Token Budget Savings</h3>
                <p className="text-[11px] font-sans text-muted mb-4">Comparing traditional cold file loading vs MCP service queries:</p>
                <ul className="space-y-2 text-[10px]">
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">Simple Bug Fix:</span>
                    <span className="text-foreground font-bold">1,500 vs 20,000 (92% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">Feature Addition:</span>
                    <span className="text-foreground font-bold">4,000 vs 20,000 (80% saved)</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">Architecture Qs:</span>
                    <span className="text-foreground font-bold">2,500 vs 20,000 (87% saved)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-lg bg-card border border-card-border">
                <h3 className="font-bold text-foreground text-sm mb-1">Server Handler Latency</h3>
                <p className="text-[11px] font-sans text-muted mb-4">Sub-millisecond local handler processing times:</p>
                <ul className="space-y-2 text-[10px]">
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">tokencap_mcp_status:</span>
                    <span className="text-foreground font-bold">0 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">tokencap_overview:</span>
                    <span className="text-foreground font-bold">1 ms</span>
                  </li>
                  <li className="flex justify-between p-2 rounded bg-pre-bg border border-card-border">
                    <span className="text-muted">tokencap_search:</span>
                    <span className="text-foreground font-bold">2 ms</span>
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
            <a href="/docs#cli" className="flex items-center gap-1.5 text-foreground hover:text-foreground transition-colors font-bold">
              CLI Reference
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
