import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About TokenCap | Local-First Context Engineering",
  description: "Learn why we built TokenCap: an open-source, local-first context layer that makes project intelligence self-discoverable for AI coding agents.",
  path: "/about",
});

const principles = [
  {
    num: "01",
    tag: "PRIVACY",
    title: "100% Local-First Execution",
    desc: "Your code never leaves your workstation. TokenCap runs entirely offline as a fast native CLI and local stdio MCP daemon with CI-enforced zero network egress.",
  },
  {
    num: "02",
    tag: "PRECISION",
    title: "AST-Aware Code Intelligence",
    desc: "Rather than dumping raw text, TokenCap parses the abstract syntax tree, tracks cross-file callers, extracts DDL schemas, and resolves symbol dependencies.",
  },
  {
    num: "03",
    tag: "EFFICIENCY",
    title: "12.2× Token Compression",
    desc: "Fits deep repository knowledge into constrained LLM context windows, reducing token consumption by 94.3% while preserving architectural invariants.",
  },
  {
    num: "04",
    tag: "INTEROPERABILITY",
    title: "Multi-Host Autonomy",
    desc: "Single source of truth auto-wiring AGENTS.md, CLAUDE.md, Cursor, Windsurf, Cline, and Codex without overwriting existing workspace configs.",
  },
];

const invariants = [
  { label: "Execution Model", value: "Local Stdio Daemon & CLI" },
  { label: "Data Egress", value: "0 bytes sent externally" },
  { label: "AST Parse Latency", value: "< 82ms incremental" },
  { label: "Host Support", value: "7 AI IDEs & Agents" },
  { label: "License", value: "Open Source" },
];

export default function AboutPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Mission Context */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted">
              THE CONTEXT PROBLEM
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-sans leading-[1.1]">
              Solving the LLM context gap.
            </h1>
            
            <p className="text-sm leading-relaxed text-muted max-w-xl font-sans">
              Modern software development shifted from manual typing to AI orchestration. Yet developers still spend hours copying files, writing manual prompts, and fighting context drift. TokenCap eliminates this friction by packaging codebase intelligence into a deterministic, high-density format sized for any LLM.
            </p>
          </div>

          {/* Right Column: Architectural Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-card-border bg-card p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-card-border pb-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-foreground font-bold">
                  <span className="w-2 h-2 rounded-full bg-foreground"></span>
                  <span>tokencap :: manifesto</span>
                </div>
                <span className="text-[10px] text-muted">INVARIANTS</span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {invariants.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl border border-card-border bg-pre-bg"
                  >
                    <span className="text-muted text-[11px]">{item.label}</span>
                    <span className="text-foreground font-semibold text-[11px]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Engineering Principles Grid */}
      <section className="mb-24 space-y-8">
        <div className="flex items-center justify-between border-b border-card-border pb-4">
          <h2 className="text-xl font-bold text-foreground font-sans">
            Core Engineering Principles
          </h2>
          <span className="text-xs font-mono text-muted">
            04 Foundational Pillars
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => (
            <div
              key={item.num}
              className="p-8 rounded-2xl border border-card-border bg-card hover:border-card-hover transition-colors flex flex-col justify-between space-y-6 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-card-border pb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest text-muted">
                  {item.tag}
                </span>
                <span className="text-xs font-mono font-bold text-muted/60">
                  {item.num}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-foreground font-sans">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement & Founder Note */}
      <section className="mb-24 p-8 sm:p-12 rounded-2xl border border-card-border bg-card/60 shadow-xl space-y-8">
        <div className="max-w-3xl space-y-6">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
            FOUNDER PHILOSOPHY
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-sans leading-tight">
            Our mission is to make developers augmented, not replaced.
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-sans">
            <p>
              We see a future where the friction between human intent and machine execution disappears. TokenCap is our first step towards that future—a tool built on the conviction that context is the most valuable commodity in modern software engineering.
            </p>
            <p>
              By automating repository indexing, call-graph extraction, and context packaging, we free engineers to focus on high-level architecture and creative problem solving.
            </p>
          </div>

          {/* Founder Signature Block */}
          <div className="pt-4 border-t border-card-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div>
              <div className="font-bold text-foreground">Vansh Arora</div>
              <div className="text-[11px] text-muted">Creator & Maintainer of TokenCap</div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aroravansh2108/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-muted hover:text-foreground transition-colors font-bold"
              >
                <span>LinkedIn</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
              <a
                href="https://github.com/vansharora21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-muted hover:text-foreground transition-colors font-bold"
              >
                <span>GitHub</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Bottom CTA */}
      <section>
        <div className="rounded-2xl p-10 border border-card-border bg-card flex flex-col items-center text-center space-y-6">
          <div className="space-y-2 max-w-md">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-sans">
              Ready to automate your context?
            </h2>
            <p className="text-xs text-muted leading-relaxed">
              Install TokenCap via npm or configure MCP in under 60 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <Link
              href="/downloads"
              className="bg-foreground text-background font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-all active:scale-[0.97]"
            >
              Get Started →
            </Link>
            <Link
              href="/docs"
              className="bg-pre-bg border border-card-border text-foreground font-semibold px-6 py-2.5 rounded-full hover:bg-card-hover transition-all active:scale-[0.97]"
            >
              Read Docs
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}