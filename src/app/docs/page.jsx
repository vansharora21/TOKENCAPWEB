import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";
import { docsSections } from "@/data/docs";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import { DocsSearch } from "@/components/docs/DocsSearch";

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
    default: return "info";
  }
}

export default function DocsPage() {
  const sidebarItems = docsSections.map((section) => ({
    label: section.title,
    icon: getIconForSlug(section.slug),
    href: `#${section.slug}`,
  }));

  const tocItems = docsSections.map((section) => ({
    label: section.title,
    href: `#${section.slug}`,
  }));

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-4">
          <p className="text-xl font-bold text-white tracking-tight">Documentation</p>
          <p className="font-mono text-[10px] text-zinc-500 mt-1 uppercase tracking-wider">v1.3.0</p>
        </div>
        <div className="mb-4">
          <DocsSearch />
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
            href="#getting-started"
            className="w-full bg-[#00a572] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity block text-center"
          >
            Getting Started
          </a>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
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
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3 font-nerdropol">
              TokenCap Documentation
            </h1>
            <p className="text-base leading-relaxed text-[#ccc3d8]">
              Learn how to use TokenCap CLI and VS Code Extension to package codebase context for AI tools.
            </p>
          </header>

          {docsSections.map((section) => (
            <section key={section.slug} className="mb-16 scroll-mt-24" id={section.slug}>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6 border-b border-[#4a4455]/20 pb-3 font-vorcas">
                {section.title}
              </h2>
              <article className="prose prose-invert max-w-none">
                <MarkdownRenderer content={section.content} />
              </article>
            </section>
          ))}

          {/* Navigation buttons */}
          <div className="mt-16 flex justify-between items-center pt-8 border-t border-[#4a4455]/20">
            <a href="/" className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
              Back Home
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
            <p className="text-[11px] leading-relaxed text-[#ccc3d8] mb-4">v1.3.0 adds the Incremental Intelligence Engine — only rebuilds what changed. Sub-100ms for single-file edits.</p>
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