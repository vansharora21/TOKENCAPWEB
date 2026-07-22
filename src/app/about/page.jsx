import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Our mission is to make developers augmented, not replaced. Read our local-first philosophy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6 font-sans">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-[10px] font-medium text-muted uppercase tracking-widest block">
              The Context Problem
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground font-display uppercase">
              Solving the LLM context gap.
            </h1>
            <p className="text-sm leading-relaxed text-muted max-w-xl">
              Modern developers spend more time copying and pasting code into AI prompts than actually writing code. TokenCap was born from the frustration of context-switching between your terminal, editor, and the browser just to explain your project to an AI.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-lg border border-card-border bg-card p-1.5 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-pre-bg border-b border-card-border">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-850"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-900"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-950"></div>
                <span className="ml-2 font-mono text-[10px] text-muted">mission.json</span>
              </div>
              <div className="p-4 bg-card/80 font-mono text-xs">
                <pre className="text-muted">{"{"}</pre>
                <pre className="pl-4 text-muted">  "mission": <span className="text-foreground">"Bridge the gap"</span>,</pre>
                <pre className="pl-4 text-muted">  "strategy": <span className="text-foreground">"Context-aware CLI"</span>,</pre>
                <pre className="pl-4 text-muted">  "status": <span className="text-foreground">"Operational"</span></pre>
                <pre className="text-muted">{"}"}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI-Native Context */}
          <div className="md:col-span-2 p-8 rounded-lg border border-card-border bg-card flex flex-col justify-between hover:border-card-hover transition-colors">
            <div>
              <span className="material-symbols-outlined text-muted text-xl mb-4">auto_awesome</span>
              <h3 className="text-base font-bold text-foreground font-mono mb-3">AI-Native Context</h3>
              <p className="text-xs leading-relaxed text-muted max-w-md">
                We don't just dump text. TokenCap intelligently packages your repository structure, dependency graphs, and recent changes into a format that LLMs understand natively.
              </p>
            </div>
            <img 
              className="mt-6 rounded border border-card-border w-full h-48 object-cover grayscale opacity-50 hover:opacity-80 transition-all duration-500" 
              alt="Conceptual data visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJmSuyWngNDPgFSel2eI6S8bAAYJlCKisl2dS0kXP4_OvfRT7U-LoVzWEJ2kf8zB9vP2c1r9CNL9u8naDGUYUWP3Hf1PpPqLMzjeyu2rz6NZ-63tgBjn7Ri90pQ1xcKaepPW4xAVnPD7as7VgHgV9h4pzOvkSBSbn0RWoVwegQZBoLmn4QbrWrdkla9hqZU19S2koFe2Hkmgs8I2JGZZmnJBk10RJ3yUrltkCC5JilFGTatAmiUDsxOZa15OrS9CRPSlDwN8RHXYv"
            />
          </div>

          {/* Card 2: Low Latency */}
          <div className="p-8 rounded-lg border border-card-border bg-card flex flex-col justify-center text-foreground relative overflow-hidden">
            <h3 className="text-base font-bold font-mono mb-3 z-10">Low Latency & High Precision</h3>
            <p className="text-xs text-muted z-10 leading-relaxed">
              Every millisecond spent preparing context is a millisecond lost in flow.
            </p>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-[0.03] rotate-12 select-none pointer-events-none">
              bolt
            </span>
          </div>

          {/* Card 3: Privacy First */}
          <div className="p-8 rounded-lg border border-card-border bg-card hover:border-card-hover transition-colors">
            <span className="material-symbols-outlined text-muted text-xl mb-4">security</span>
            <h3 className="text-base font-bold text-foreground font-mono mb-3">Privacy First</h3>
            <p className="text-xs leading-relaxed text-muted">
              Context is generated locally. Your sensitive code never touches our servers.
            </p>
          </div>

          {/* Card 4: Local-First Philosophy */}
          <div className="md:col-span-2 p-8 rounded-lg border border-card-border bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-card-hover transition-colors">
            <div className="flex-1">
              <span className="material-symbols-outlined text-muted text-xl mb-4">terminal</span>
              <h3 className="text-base font-bold text-foreground font-mono mb-3">Local-First Philosophy</h3>
              <p className="text-xs leading-relaxed text-muted">
                We believe developer tools should be fast, offline-capable, and reside in the CLI. TokenCap is a binary, not a heavy SaaS platform.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-square bg-pre-bg rounded-full border border-card-border flex items-center justify-center self-center shrink-0">
              <span className="material-symbols-outlined text-muted text-4xl">dns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-20 py-16 border-t border-card-border">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground leading-tight font-display">
            Our mission is to make developers augmented, not replaced.
          </h2>
          <div className="flex flex-col gap-4 text-sm text-muted leading-relaxed">
            <p>
              We see a future where the friction between human intent and machine execution disappears. TokenCap is our first step towards that future—a tool that understands the value of context.
            </p>
            <p>
              By automating the most tedious parts of the AI-collaborative workflow, we free you to focus on high-level architecture and creative problem solving. We're building the infrastructure for the next decade of software development.
            </p>
          </div>
          <div className="pt-4">
            <a 
              href="https://www.linkedin.com/in/aroravansh2108/" 
              target="_blank" 
              rel="noreferrer" 
              className="group"
            >
              <span className="text-xs font-bold text-muted group-hover:text-foreground transition-colors font-mono">Vansh Arora &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="rounded-lg p-12 border border-card-border bg-card/40 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2 font-mono">Ready to bridge the gap?</h2>
          <p className="text-xs text-muted mb-6 max-w-md">Get started with TokenCap to supercharge your AI workflow.</p>
          <div className="flex gap-4 font-mono text-xs">
            <a
              href="/docs"
              className="bg-pre-bg border border-card-border hover:bg-card-hover text-foreground px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 cursor-pointer animate-pulse"
            >
              Get Started
            </a>
            <a
              href="/docs#cli"
              className="bg-transparent border border-card-border hover:bg-pre-bg/40 text-muted hover:text-foreground px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 cursor-pointer"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}