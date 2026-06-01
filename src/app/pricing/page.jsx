import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "Pricing",
  description: "Stop uploading code to the cloud. Local-first, private-by-default plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <header className="text-center mb-20">
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
          Built for builders, <span className="text-[#d2bbff]">priced for humans.</span>
        </h1>
        <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-2xl mx-auto">
          Stop uploading your source code to third-party clouds. TokenCap is a local-first engine designed to run 
          entirely on your machine. Private by default, open by design.
        </p>
      </header>

      {/* Main Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-20">
        {/* Free / Local-First Card */}
        <section className="flex flex-col glass-panel rounded-xl overflow-hidden glow-primary relative group">
          <div className="terminal-header px-6 py-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
            </div>
            <span className="font-mono text-xs text-zinc-500">config/pricing.yml</span>
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Free (Local-first)</h2>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-sm text-zinc-500 font-medium">/forever</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] mt-0.5">check_circle</span>
                  <div>
                    <p className="text-sm font-bold text-white">100% Local Execution</p>
                    <p className="font-mono text-xs text-[#ccc3d8] mt-0.5">Your code never leaves your filesystem.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] mt-0.5">check_circle</span>
                  <div>
                    <p className="text-sm font-bold text-white">CLI Tooling</p>
                    <p className="font-mono text-xs text-[#ccc3d8] mt-0.5">Full-featured binary for macOS, Linux, and Windows.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] mt-0.5">check_circle</span>
                  <div>
                    <p className="text-sm font-bold text-white">VS Code Extension</p>
                    <p className="font-mono text-xs text-[#ccc3d8] mt-0.5">Integrated terminal and diff-viewing inside your editor.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4edea3] mt-0.5">check_circle</span>
                  <div>
                    <p className="text-sm font-bold text-white">Auto-snapshots & Git Diffs</p>
                    <p className="font-mono text-xs text-[#ccc3d8] mt-0.5">Instant versioning of local project states.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <button className="w-full py-3 bg-[#7c3aed] text-white font-bold rounded-lg hover:scale-[1.02] active:scale-95 transition-all inner-glow shadow-[0_0_20px_rgba(124,58,237,0.15)] mb-4">
                Get Started Free
              </button>
              <div className="flex items-center justify-center gap-2 p-2 bg-[#0e0e10] border border-[#4a4455]/40 rounded-lg text-center font-mono text-[12px] text-zinc-400">
                <span>$ curl -sSL tokencap.sh | sh</span>
                <CopyButton text="curl -sSL tokencap.sh | sh" />
              </div>
            </div>
          </div>
        </section>

        {/* Pro Teaser Card */}
        <section className="flex flex-col glass-panel rounded-xl overflow-hidden relative opacity-90 border-dashed border-[#4a4455]/60">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#7c3aed]/5 to-transparent"></div>
          <div className="terminal-header px-6 py-3 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4455]/30"></div>
            </div>
            <span className="font-mono text-xs text-zinc-500">future/pro_teaser.json</span>
          </div>
          <div className="p-8 flex-grow flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
                  <span className="px-1.5 py-0.5 bg-[#353437] text-[#d2bbff] font-mono text-[10px] font-semibold rounded uppercase">PRO</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold text-white">TBA</span>
                  <span className="text-sm text-zinc-500 font-medium">/mo</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-[#1c1b1d] border border-[#4a4455]/20">
                  <h3 className="text-sm font-bold text-white mb-1">Team Synchronization</h3>
                  <p className="font-mono text-[11px] text-[#ccc3d8] leading-normal">Secure, E2E encrypted snapshot sharing for distributed dev teams.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1c1b1d] border border-[#4a4455]/20">
                  <h3 className="text-sm font-bold text-white mb-1">Advanced Insights</h3>
                  <p className="font-mono text-[11px] text-[#ccc3d8] leading-normal">Deeper analysis of token utilization and performance profiling.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#1c1b1d] border border-[#4a4455]/20">
                  <h3 className="text-sm font-bold text-white mb-1">Priority Support</h3>
                  <p className="font-mono text-[11px] text-[#ccc3d8] leading-normal">Direct access to the core engineering team via Discord/Slack.</p>
                </div>
              </div>
            </div>
            <button className="w-full py-3 border border-[#4a4455] text-zinc-400 font-bold rounded-lg cursor-not-allowed opacity-60">
              Notify Me
            </button>
          </div>
        </section>
      </div>

      {/* Local-First Highlight Banner */}
      <section className="p-8 rounded-xl glass-panel flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden mb-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-1.5 text-[#4edea3] mb-4">
            <span className="material-symbols-outlined text-lg">shield_person</span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest">Privacy Manifesto</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No code upload. Everything runs locally.</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8]">
            TokenCap is not a SaaS. It's a binary. We don't have servers that store your code because we don't need them. 
            Your intelligence stays on your hardware. It's that simple.
          </p>
        </div>
        <div className="w-full md:w-1/3 aspect-video rounded-lg border border-[#4a4455]/30 relative overflow-hidden bg-[#0e0e10]">
          <img 
            alt="Clean Code Display" 
            className="absolute inset-0 w-full h-full object-cover opacity-40" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP0yQChlwnvCCCwotbT4nvcTNn7i5bVEV9mVLBFicCFAHt-EYgYfZWGsKEsLEQzMlu_FwivRgNObHPFJACtWqdSF6pbrQnJldNn_Ck_2bPpoNDfbM9obeQzKAxi5z-Wm3wHzvZB9w2HdHbhm8JUFHNzzTf7DoASq07yXHKpDPmcARuLhu0mwC9TgZiGnmnnqQaXp5Kh-_DY02qYRK0MVKmNKPJdjIMhSBCMpbYTfJC9EzTEtaMt1QTR6_9qZ-kvA6LW1mu6Q0bkvII"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-[#7c3aed] text-3xl">dns</span>
              <span className="font-mono text-xs text-[#7c3aed] font-semibold">localhost:8080</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section>
        <h4 className="text-2xl font-bold text-white text-center mb-10">Common Questions</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0e0e10] rounded-lg border border-[#4a4455]/20">
            <p className="text-base font-bold text-white mb-2">Is it open source?</p>
            <p className="font-mono text-xs text-[#ccc3d8] leading-relaxed">Yes, the core CLI and VS Code extension are available under the MIT license on GitHub.</p>
          </div>
          <div className="p-6 bg-[#0e0e10] rounded-lg border border-[#4a4455]/20">
            <p className="text-base font-bold text-white mb-2">What about large files?</p>
            <p className="font-mono text-xs text-[#ccc3d8] leading-relaxed">We use high-performance Rust-based indexers that can handle millions of lines in milliseconds.</p>
          </div>
          <div className="p-6 bg-[#0e0e10] rounded-lg border border-[#4a4455]/20">
            <p className="text-base font-bold text-white mb-2">How do I update?</p>
            <p className="font-mono text-xs text-[#ccc3d8] leading-relaxed">Run <code className="text-[#d2bbff]">tokencap upgrade</code> to pull the latest optimized binary automatically.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}