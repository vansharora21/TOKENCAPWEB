import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { docsSections } from "@/data/docs";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";

export const metadata = buildMetadata({
  title: "Documentation",
  description: "Learn how to use TokenCap CLI and integration tools. Local-first snapshot generation guide.",
  path: "/docs",
});

function getIconForSlug(slug) {
  switch (slug) {
    case "getting-started": return "rocket_launch";
    case "configuration": return "settings";
    case "profiles": return "settings_input_component";
    case "graph": return "account_tree";
    case "memory": return "inventory_2";
    case "pack": return "package_2";
    case "diff": return "difference";
    case "agent": return "support_agent";
    case "secret-redaction": return "enhanced_encryption";
    case "cli": return "terminal";
    case "vscode": return "extension";
    case "ask": return "chat";
    case "brain": return "psychology";
    case "execution-contract": return "gavel";
    case "constitution": return "menu_book";
    case "mcp": return "hub";
    default: return "info";
  }
}

export default function DocsPage() {
  const sidebarItems = docsSections.map((section) => ({
    label: section.title,
    icon: getIconForSlug(section.slug),
    href: section.slug === "mcp" ? "/mcp" : `#${section.slug}`,
  }));

  const tocItems = docsSections.map((section) => ({
    label: section.title,
    href: section.slug === "mcp" ? "/mcp" : `#${section.slug}`,
  }));

  return (
    <PageWrapper className="max-w-7xl mx-auto flex font-sans">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-card-border bg-card p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-4">
          <p className="text-xl font-bold text-foreground tracking-tight font-mono">Documentation</p>
          <p className="font-mono text-[10px] text-muted mt-1 uppercase tracking-wider">v1.6.0 RELEASE</p>
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
        <div className="mt-auto pt-6 border-t border-card-border space-y-4">
          <a
            href="/mcp"
            className="w-full bg-pre-bg border border-card-border text-foreground py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-card-hover transition-colors block text-center flex items-center justify-center gap-1.5 font-mono"
          >
            <span className="material-symbols-outlined text-sm">hub</span>
            MCP Guide v1.6.0
          </a>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 min-w-0">
        <div className="max-w-3xl">
          {/* Header */}
          <header className="mb-8 border-b border-card-border pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pre-bg border border-card-border text-muted text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-zinc-550 animate-pulse"></span>
              Current Release: v1.6.0
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-3 font-display uppercase">
              TokenCap Documentation
            </h1>
            <p className="text-sm leading-relaxed text-muted">
              Learn how to use TokenCap CLI, VS Code Extension, and Model Context Protocol (MCP) Service.
            </p>
          </header>

          {/* MCP Feature Banner Card */}
          <div className="mb-12 p-6 rounded-lg border border-card-border bg-card relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[9px] font-mono font-bold tracking-widest text-muted uppercase bg-pre-bg border border-card-border px-2 py-0.5 rounded">NEW IN V1.6.0</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-1 flex items-center gap-2 font-mono">
                  <span className="material-symbols-outlined text-muted text-base">hub</span>
                  Token Savings Engine & Multi-Host Pointers
                </h3>
                <p className="text-xs text-muted leading-relaxed max-w-lg">
                  TokenCap v1.6.0 introduces real-time savings reporting (12.2× average token reduction), 7 multi-host agent pointers, and CI-enforced zero-network egress security.
                </p>
              </div>
              <a
                href="/mcp"
                className="shrink-0 px-4 py-2.5 rounded border border-card-border bg-pre-bg hover:bg-card-hover text-foreground/80 hover:text-foreground text-xs font-bold transition-colors flex items-center gap-1.5 font-mono cursor-pointer"
              >
                Read MCP Guide
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

          {docsSections.map((section) => (
            <section key={section.slug} className="mb-16 scroll-mt-24" id={section.slug}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 border-b border-card-border pb-3 font-mono">
                {section.title}
              </h2>
              <article className="prose prose-zinc dark:prose-invert max-w-none text-sm text-muted leading-relaxed">
                <MarkdownRenderer content={section.content} />
              </article>
            </section>
          ))}

          {/* Navigation buttons */}
          <div className="mt-16 flex justify-between items-center pt-8 border-t border-card-border font-mono text-xs">
            <a href="/" className="flex items-center gap-1.5 text-muted hover:text-foreground transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
              Back Home
            </a>
            <a href="/mcp" className="flex items-center gap-1.5 text-foreground/90 hover:text-foreground transition-colors">
              MCP Guide (v1.6.0)
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </a>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:block w-64 p-6 sticky top-16 h-fit shrink-0">
        <h5 className="text-[10px] font-mono font-bold text-muted mb-4 uppercase tracking-widest">On this page</h5>
        <nav className="flex flex-col gap-2.5 border-l border-card-border pl-4 text-xs">
          {tocItems.map((item) => (
            <a
              key={item.href}
              className="text-muted hover:text-foreground transition-colors font-mono"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 p-4 bg-card border border-card-border rounded-lg relative overflow-hidden">
          <div className="relative z-10 space-y-2">
            <h6 className="font-bold text-foreground text-xs font-mono">New Release v1.6.0</h6>
            <p className="text-[11px] leading-relaxed text-muted">v1.6.0 introduces Token & Dollar Savings Engine, 7 Multi-Host Agent Pointers, and CI-Enforced Zero Egress.</p>
            <a className="text-[11px] text-foreground/90 font-bold underline hover:text-foreground transition-colors font-mono block" href="/mcp">
              View MCP Guide
            </a>
          </div>
        </div>
      </aside>
    </PageWrapper>
  );
}