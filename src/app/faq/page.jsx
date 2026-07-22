import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about TokenCap local-first context generation and security.",
  path: "/faq",
});

export default function FaqPage() {
  const sidebarItems = [
    { label: "Introduction", icon: "info", href: "#" },
    { label: "Core Concepts", icon: "extension", href: "#" },
    { label: "CLI Reference", icon: "terminal", href: "#" },
    { label: "FAQ", icon: "api", href: "#", active: true },
    { label: "Advanced", icon: "auto_awesome", href: "#" },
  ];

  return (
    <PageWrapper className="max-w-7xl mx-auto flex">
      {/* SideNavBar */}
      <aside className="w-64 border-r border-card-border bg-card p-6 hidden md:flex flex-col gap-4 self-stretch min-h-[calc(100vh-64px)]">
        <div className="mb-6 flex items-center gap-2 px-1">
          <div className="w-8 h-8 rounded bg-[#7c3aed]/10 flex items-center justify-center text-[#7c3aed] dark:text-[#d2bbff] shrink-0">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground leading-none">Documentation</h2>
            <span className="font-mono text-[9px] text-muted mt-1 uppercase tracking-wider block">v1.2.0</span>
          </div>
        </div>
        <nav className="space-y-1 flex-grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 p-2.5 rounded-lg font-medium text-sm transition-all ${
                item.active
                  ? "text-[#7c3aed] dark:text-[#d2bbff] bg-[#7c3aed]/10 font-bold"
                  : "text-muted hover:bg-pre-bg hover:text-foreground"
              }`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-card-border space-y-4">
          <button className="w-full bg-pre-bg border border-card-border text-foreground py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-card-hover transition-colors cursor-pointer">
            Read Guide
          </button>
          <div className="flex flex-col gap-2 font-mono text-xs">
            <a href="https://github.com/vansharora21/TOKENCAP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 md:px-12 max-w-4xl min-w-0">
        <header className="mb-12">
          <span className="text-[#7c3aed] dark:text-[#d2bbff] font-mono text-[10px] font-semibold tracking-widest block mb-1 uppercase">SUPPORT CENTER</span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">Frequently Asked Questions</h1>
          <p className="text-muted text-sm leading-relaxed max-w-xl">
            Everything you need to know about the TokenCap CLI, local-first context generation, and how we handle your private source code.
          </p>
        </header>

        {/* Interactive Accordion items are managed in the FAQAccordion component */}
        <FAQAccordion />

        {/* Bento Contact Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1.5">Still have questions?</h3>
              <p className="text-sm text-muted leading-relaxed">Reach out to our team or shoot us an email for direct help.</p>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="px-5 py-2.5 bg-[#7c3aed] text-white font-bold rounded-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all text-xs uppercase tracking-wider cursor-pointer">
                Email Support
              </button>
            </div>
          </div>
          <div className="glass-panel rounded-xl overflow-hidden relative group h-48 md:h-auto">
            <img 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
              alt="Server rack backdrop"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaYlvgyO26KbYmiyNmtfBvzxtxh-0IXlSnlmcD90y7DFw5CezYLGaG84FSr6LJQPW7o5UD-b8yfR9aMaEiBYDs4H8MYkPp0cMYf3EPFEJiQcwlEDSJBDgv3N2pZEboujkEjg7-G-uDR6NV3zE91y0jnofPiANGABYCXOvi7eqhHqqpjs5U9Yv8e6tK3z5f9L8LmZoSdiNFkur7tZ8rUg4-SdizfuMK6Ie6b1HyU2qC-nWj0vV9uvhdyWYWZF0ZhCUQOknzqMB3Zw1a"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              <p className="font-mono text-[9px] font-semibold text-white bg-black/85 px-3 py-1.5 border border-[#7c3aed]/30 backdrop-blur-md uppercase tracking-wider">
                STATUS: OPERATIONAL
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
}