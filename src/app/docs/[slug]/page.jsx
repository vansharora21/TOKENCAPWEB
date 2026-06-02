import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { docsSections } from "@/data/docs";
import { buildMetadata } from "@/lib/seo";
import { MarkdownRenderer } from "@/components/docs/MarkdownRenderer";
import Link from "next/link";

export function generateStaticParams() {
  return docsSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const section = docsSections.find((item) => item.slug === resolvedParams.slug);

  if (!section) {
    return buildMetadata({ title: "Docs", description: "TokenCap documentation.", path: "/docs" });
  }

  return buildMetadata({
    title: section.title,
    description: section.content.slice(0, 160),
    path: `/docs/${section.slug}`,
  });
}

export default async function DocsSlugPage({ params }) {
  const resolvedParams = await params;
  const section = docsSections.find((item) => item.slug === resolvedParams.slug);

  if (!section) {
    notFound();
  }

  const sidebarItems = [
    { label: "Getting Started", icon: "rocket_launch", slug: "getting-started" },
    { label: "Configuration", icon: "settings", slug: "configuration" },
    { label: "Context Profiles", icon: "settings_input_component", slug: "profiles" },
    { label: "Knowledge Graph", icon: "account_tree", slug: "graph" },
    { label: "Memory Layer", icon: "inventory_2", slug: "memory" },
    { label: "Secret Redaction", icon: "enhanced_encryption", slug: "secret-redaction" },
    { label: "CLI Reference", icon: "terminal", slug: "cli" },
    { label: "VS Code Extension", icon: "extension", slug: "vscode" },
  ];

  // Dynamically extract headings from content for the table of contents on the right
  const headings = section.content
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line) => {
      const isSub = line.startsWith("### ");
      const text = line.replace(/^#{2,3}\s+/, "");
      return {
        label: text,
        isSub,
        href: `#${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      };
    });

  return (
    <PageWrapper className="max-w-7xl mx-auto flex" container={false}>
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-[#4a4455]/20 bg-[#0e0e10]/40 p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#d2bbff] shrink-0">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-none">Documentation</h2>
            <span className="font-mono text-[9px] text-zinc-500 mt-1 uppercase tracking-wider block">v0.2.0</span>
          </div>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/${item.slug}`}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.slug === resolvedParams.slug
                  ? "text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-[#ccc3d8] hover:bg-[#2a2a2c]/50"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-[#4a4455]/20 space-y-4">
          <button className="w-full bg-[#00a572] text-white py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity">
            Read Guide
          </button>
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
          <header className="mb-8">
            <span className="text-[#d2bbff] font-mono text-[10px] font-semibold tracking-widest block mb-1 uppercase">
              DOCUMENTATION
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
              {section.title}
            </h1>
          </header>

          <article className="prose prose-invert max-w-none">
            <MarkdownRenderer content={section.content} />
          </article>

          {/* Navigation buttons */}
          <div className="mt-16 flex justify-between items-center pt-8 border-t border-[#4a4455]/20">
            <Link
              href="/docs"
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
              Docs Overview
            </Link>
            <Link
              href="/cli"
              className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#d2bbff] transition-colors"
            >
              CLI Reference
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Right Sidebar (Table of Contents) */}
      {headings.length > 0 && (
        <aside className="hidden xl:block w-64 p-6 sticky top-16 h-fit shrink-0">
          <h5 className="text-[10px] font-mono font-bold text-zinc-500 mb-4 uppercase tracking-widest">On this page</h5>
          <nav className="flex flex-col gap-2.5 border-l border-[#4a4455]/20 pl-4 text-xs">
            {headings.map((item, idx) => (
              <a
                key={idx}
                className={`text-zinc-400 hover:text-white transition-colors ${item.isSub ? "pl-3 text-[11px]" : ""}`}
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
      )}
    </PageWrapper>
  );
}