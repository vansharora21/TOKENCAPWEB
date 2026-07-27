import React from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CopyButton } from "@/components/shared/CopyButton";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Download TokenCap · CLI, VS Code Extension & MCP",
  description: "Download TokenCap for your workflow. Install via npm, VS Code Marketplace, Open VSX Registry, or setup MCP servers for Claude & Cursor.",
  path: "/downloads",
});

const availablePlatforms = [
  {
    id: "npm",
    name: "npm",
    label: "CLI Package",
    description: "Install TokenCap globally from npm. The fastest way to get started — one command and you're generating snapshots.",
    command: "npm install -g tokencap",
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-6.18 13.254z" />
      </svg>
    ),
  },
  {
    id: "vsx",
    name: "Open VSX",
    label: "VS Code Extension",
    description: "Install from the open-source VS Code marketplace. Full editor integration with auto-capture, status bar, and command palette.",
    command: null,
    link: "https://open-vsx.org/extension/VanshArora21/tokencap",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M11.4 0L5.4 6 0 11.4l5.4 5.4 6-6L6 5.4zm1.2 0l6 6-6 6 6 6 6-6-6-6zM12.6 6l6 6-6 6-6-6z" />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "VS Code Marketplace",
    label: "VS Code Extension",
    description: "Install from the official Microsoft marketplace. Same full-featured extension with seamless editor integration.",
    command: "code --install-extension VanshArora21.tokencap",
    link: "https://marketplace.visualstudio.com/items?itemName=VanshArora21.tokencap",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.583 2.427L12 8.01l-5.583-5.583H4.5L12 14.5l7.5-7.5zM12 15.99l-5.583-5.583L12 4.824l5.583 5.583z" />
      </svg>
    ),
  },
];

const integrationPlatforms = [
  {
    id: "claude",
    name: "Claude Code & Desktop",
    label: "Supported via MCP",
    description: "Native Model Context Protocol integration for Claude Code & Desktop. Run 'tokencap mcp --init --client claude' for auto setup.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "codex",
    name: "Codex & Antigravity",
    label: "Supported via MCP",
    description: "First-class stdio MCP support for Codex & Antigravity. Auto-discovers workspace intelligence with zero cold-start delay.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6zM14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6z" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "skills",
    name: "Cursor, Windsurf & Cline",
    label: "Supported via MCP",
    description: "One-command host configuration for Cursor, Windsurf, Cline, and Roo Code. Run 'tokencap mcp --init' in any workspace.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" opacity="0.4" />
      </svg>
    ),
  },
];

export default function DownloadsPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Header */}
      <header className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-pre-bg border border-card-border rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[10px] font-mono font-medium text-muted uppercase tracking-wider">
            Downloads & Extensions
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-display uppercase">
          Install TokenCap
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          Install via npm for CLI access, or grab the VS Code extension from Open VSX or the Microsoft Marketplace. MCP integrations are fully active.
        </p>
      </header>

      {/* Available Platforms Section */}
      <section className="mb-20 space-y-8">
        <div className="flex items-center gap-2.5 border-b border-card-border pb-3">
          <span className="material-symbols-outlined text-muted text-sm">check_circle</span>
          <h2 className="text-lg font-bold text-foreground font-mono">Available Platforms</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {availablePlatforms.map((p) => (
            <div
              key={p.id}
              className="p-6 bg-card border border-card-border rounded-lg hover:border-card-hover transition-colors flex flex-col justify-between h-full group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-card-border">
                  <div className="text-muted group-hover:text-foreground transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[9px] font-mono text-muted px-1.5 py-0.5 rounded bg-pre-bg border border-card-border">
                    {p.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground font-mono">{p.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{p.description}</p>
              </div>

              <div className="mt-8 space-y-3">
                {p.command && (
                  <div className="bg-pre-bg border border-card-border rounded px-3 py-2 flex items-center justify-between gap-3 font-mono text-[11px] text-foreground/90">
                    <span className="truncate select-all">{p.command}</span>
                    <CopyButton text={p.command} />
                  </div>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-card-border bg-pre-bg hover:bg-card-hover text-foreground/80 hover:text-foreground rounded text-xs font-bold font-mono transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                    <span>Install Extension</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planned MCP Integrations */}
      <section className="space-y-8 mb-20">
        <div className="flex items-center gap-2.5 border-b border-card-border pb-3">
          <span className="material-symbols-outlined text-muted text-sm">hub</span>
          <h2 className="text-lg font-bold text-foreground font-mono">MCP Integrations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrationPlatforms.map((p) => (
            <div
              key={p.id}
              className="p-6 bg-card border border-card-border rounded-lg flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-card-border">
                  <div className="text-muted/80">{p.icon}</div>
                  <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-pre-bg border border-emerald-500/30">
                    {p.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground font-mono">{p.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{p.description}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
                <span className="material-symbols-outlined text-[12px]">check_circle</span>
                <span>Active Endpoint</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Claude Plugin Section */}
      <section className="p-8 rounded-lg border border-card-border bg-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-card-border pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-muted uppercase tracking-wider bg-pre-bg border border-card-border px-2 py-0.5 rounded">
                Claude & Codex Plugins · v1.7.0
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground font-mono">
              Claude Code & OpenAI Codex Host Plugins
            </h2>
            <p className="text-xs text-muted mt-1">
              Official host plugins managed in the standalone <a href="https://github.com/vansharora21/tokencap-plugin.git" target="_blank" rel="noreferrer" className="text-foreground underline">tokencap-plugin repository</a>.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <a
              href="https://github.com/vansharora21/tokencap-plugin.git"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded border border-card-border bg-pre-bg hover:bg-card-hover text-foreground font-bold transition-colors block text-center"
            >
              Plugin Repo →
            </a>
            <a
              href="/mcp"
              className="px-3 py-1.5 rounded border border-card-border bg-pre-bg hover:bg-card-hover text-foreground/80 hover:text-foreground font-bold transition-colors block text-center"
            >
              MCP Guide →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
          {/* Option A: One-Command Auto Init */}
          <div className="p-5 rounded border border-card-border bg-pre-bg/40 space-y-3">
            <div className="flex justify-between items-center text-[10px] text-muted">
              <span className="uppercase tracking-wider">Automated Setup</span>
              <span className="text-foreground">Recommended</span>
            </div>
            <h3 className="font-bold text-foreground text-sm">One-Command Host Init</h3>
            <p className="text-[11px] font-sans text-muted leading-relaxed">
              Auto-detects Claude in your workspace and safely merges TokenCap definition into <code className="font-mono text-foreground">.claude/mcp.json</code> while generating a non-overwriting <code className="font-mono text-foreground">CLAUDE.md</code> pointer.
            </p>
            <div className="bg-pre-bg border border-card-border rounded p-2.5 flex items-center justify-between gap-2 text-[11px]">
              <code className="text-foreground/90 truncate">tokencap mcp --init --client claude</code>
              <CopyButton text="tokencap mcp --init --client claude" />
            </div>
          </div>

          {/* Option B: Manual Config snippet */}
          <div className="p-5 rounded border border-card-border bg-pre-bg/40 space-y-3">
            <div className="flex justify-between items-center text-[10px] text-muted">
              <span className="uppercase tracking-wider">Manual Configuration</span>
              <span>.claude/mcp.json</span>
            </div>
            <h3 className="font-bold text-foreground text-sm">Claude Desktop MCP JSON</h3>
            <p className="text-[11px] font-sans text-muted leading-relaxed">
              Add TokenCap as a stdio server plugin in your global or project-level Claude configuration.
            </p>
            <div className="bg-pre-bg border border-card-border rounded p-2.5 font-mono text-[10px] text-muted overflow-x-auto leading-relaxed">
              {`{
  "mcpServers": {
    "tokencap": {
      "command": "npx",
      "args": ["-y", "tokencap", "mcp"]
    }
  }
}`}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
