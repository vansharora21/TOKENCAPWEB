import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description: "Our mission is to make developers augmented, not replaced. Read our local-first philosophy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] font-medium text-[#d2bbff] uppercase tracking-widest block mb-4">
              The Context Problem
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-white mb-6">
              Solving the LLM <br />context gap.
            </h1>
            <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-xl">
              Modern developers spend more time copying and pasting code into AI prompts than actually writing code. TokenCap was born from the frustration of context-switching between your terminal, editor, and the browser just to explain your project to an AI.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-1.5 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-[#353437]/50 border-b border-[#4a4455]">
                <div className="terminal-dot bg-red-500/50"></div>
                <div className="terminal-dot bg-yellow-500/50"></div>
                <div className="terminal-dot bg-green-500/50"></div>
                <span className="ml-2 font-mono text-xs text-zinc-500">mission.json</span>
              </div>
              <div className="p-4 bg-[#0e0e10] font-mono text-[13px]">
                <pre className="text-[#4edea3]">{"{"}</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "mission": <span className="text-[#d2bbff]">"Bridge the gap"</span>,</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "strategy": <span className="text-[#d2bbff]">"Context-aware CLI"</span>,</pre>
                <pre className="pl-4 text-[#ccc3d8]">  "status": <span className="text-[#4edea3]">"Operational"</span></pre>
                <pre className="text-[#4edea3]">{"}"}</pre>
              </div>
            </div>
            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7c3aed]/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI-Native Context */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col justify-between glow-hover transition-all">
            <div>
              <span className="material-symbols-outlined text-[#d2bbff] text-2xl mb-4">auto_awesome</span>
              <h3 className="text-xl font-bold text-white mb-3">AI-Native Context</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-md">
                We don't just dump text. TokenCap intelligently packages your repository structure, dependency graphs, and recent changes into a format that LLMs understand natively.
              </p>
            </div>
            <img 
              className="mt-6 rounded-lg border border-[#4a4455] w-full h-48 object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              alt="Conceptual data visualization"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbJmSuyWngNDPgFSel2eI6S8bAAYJlCKisl2dS0kXP4_OvfRT7U-LoVzWEJ2kf8zB9vP2c1r9CNL9u8naDGUYUWP3Hf1PpPqLMzjeyu2rz6NZ-63tgBjn7Ri90pQ1xcKaepPW4xAVnPD7as7VgHgV9h4pzOvkSBSbn0RWoVwegQZBoLmn4QbrWrdkla9hqZU19S2koFe2Hkmgs8I2JGZZmnJBk10RJ3yUrltkCC5JilFGTatAmiUDsxOZa15OrS9CRPSlDwN8RHXYv"
            />
          </div>

          {/* Card 2: Low Latency */}
          <div className="bg-[#7c3aed] p-8 rounded-xl flex flex-col justify-center text-white relative overflow-hidden">
            <h3 className="text-xl font-bold mb-3 z-10">Low Latency <br />High Precision</h3>
            <p className="text-sm opacity-90 z-10 leading-relaxed">
              Every millisecond spent preparing context is a millisecond lost in flow.
            </p>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[160px] opacity-10 rotate-12 select-none">
              bolt
            </span>
          </div>

          {/* Card 3: Privacy First */}
          <div className="glass-panel p-8 rounded-xl glow-hover transition-all border-[#4a4455]/30">
            <span className="material-symbols-outlined text-[#4edea3] text-2xl mb-4">security</span>
            <h3 className="text-xl font-bold text-white mb-3">Privacy First</h3>
            <p className="text-sm leading-relaxed text-[#ccc3d8]">
              Context is generated locally. Your sensitive code never touches our servers.
            </p>
          </div>

          {/* Card 4: Local-First Philosophy */}
          <div className="md:col-span-2 glass-panel p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-[#4a4455]/30 glow-hover transition-all">
            <div className="flex-1">
              <span className="material-symbols-outlined text-[#d2bbff] text-2xl mb-4">terminal</span>
              <h3 className="text-xl font-bold text-white mb-3">Local-First Philosophy</h3>
              <p className="text-sm leading-relaxed text-[#ccc3d8]">
                We believe developer tools should be fast, offline-capable, and reside in the CLI. TokenCap is a binary, not a heavy SaaS platform.
              </p>
            </div>
            <div className="w-full sm:w-1/3 aspect-square bg-[#2a2a2c] rounded-full border border-[#4a4455] flex items-center justify-center self-center shrink-0">
              <span className="material-symbols-outlined text-zinc-400 text-4xl">dns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement & Founder Profile */}
      <section className="mb-20 py-16 border-t border-[#4a4455]/20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
            Our mission is to make developers <span className="text-[#d2bbff] italic font-serif">augmented</span>, not replaced.
          </h2>
          <div className="flex flex-col gap-4 text-sm text-[#ccc3d8] leading-relaxed">
            <p>
              We see a future where the friction between human intent and machine execution disappears. TokenCap is our first step towards that future—a tool that understands the value of context.
            </p>
            <p>
              By automating the most tedious parts of the AI-collaborative workflow, we free you to focus on high-level architecture and creative problem solving. We're building the infrastructure for the next decade of software development.
            </p>
          </div>
          <a 
            href="https://www.linkedin.com/in/aroravansh2108/" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-8 inline-block group"
          >
            <span className="text-sm font-bold text-white group-hover:text-[#d2bbff] transition-colors">Vansh Arora</span>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-[#1c1b1d] rounded-2xl p-12 border border-[#4a4455]/30 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Ready to bridge the gap?</h2>
          <p className="text-sm text-[#ccc3d8] mb-6 max-w-md">Get started with TokenCap to supercharge your AI workflow.</p>
          <div className="flex gap-4">
            <button className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all active:scale-95">
              Get Started
            </button>
            <button className="bg-transparent border border-[#4a4455] text-white px-6 py-2.5 rounded-lg font-mono text-[11px] uppercase tracking-wider font-bold hover:bg-[#353437]/20 transition-all active:scale-95">
              View Docs
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}