import { PageWrapper } from "@/components/layout/PageWrapper";
import { buildMetadata } from "@/lib/seo";
import { CopyButton } from "@/components/shared/CopyButton";

export const metadata = buildMetadata({
  title: "Features",
  description: "Precision engineered features for TokenCap. Built for local-first speed and developer ergonomics.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <PageWrapper className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <header className="mb-20 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#d2bbff]/10 border border-[#d2bbff]/20 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#d2bbff] animate-pulse"></span>
          <span className="text-[11px] font-mono font-medium text-[#d2bbff] uppercase tracking-wider">
            v2.4.0 Engine
          </span>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
          Precision engineered features.
        </h1>
        <p className="text-sm leading-relaxed text-[#ccc3d8] max-w-xl">
          TokenCap transforms how you capture, snapshot, and optimize code for LLMs. Built for local-first speed and developer ergonomics.
        </p>
      </header>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1: Auto Capture on Save */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">save</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Auto Capture on Save</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Sync your context instantly. TokenCap monitors file changes and updates your active context buffer in real-time.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 overflow-hidden font-mono text-[13px]">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <code className="block whitespace-pre text-[#4edea3]">
              [10:42:01] <span className="text-[#ccc3d8]">Captured:</span> main.ts{"\n"}
              [10:42:04] <span className="text-[#ccc3d8]">Syncing context...</span>
            </code>
          </div>
        </div>

        {/* 2: Git-Aware Snapshots */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">history</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Git-Aware Snapshots</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Version control your context. Automatically exclude .gitignore files and tag snapshots by branch or commit.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-4 flex flex-col justify-between h-[84px]">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono font-medium text-[#ccc3d8] opacity-60 uppercase tracking-wider">BRANCH</span>
              <span className="text-[11px] font-mono font-medium text-[#4edea3]">main</span>
            </div>
            <div className="space-y-1">
              <div className="h-1 w-full bg-[#2a2a2c] rounded-full overflow-hidden">
                <div className="h-full bg-[#4edea3] w-2/3"></div>
              </div>
              <span className="text-[10px] text-[#ccc3d8] font-mono block">Processing diff...</span>
            </div>
          </div>
        </div>

        {/* 3: Secret Redaction */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">encrypted</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Secret Redaction</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            LLM safety first. Automatically detects and hides API keys, tokens, and sensitive env variables.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px] h-[84px] flex flex-col justify-center">
            <div>
              <span className="text-[#ccc3d8]">STRIPE_KEY=</span>
              <span className="bg-[#d2bbff]/30 text-[#d2bbff] px-1 rounded text-xs ml-1">HIDDEN:STRIPE_PK</span>
            </div>
            <div className="mt-1">
              <span className="text-[#ccc3d8]">DB_PASS=</span>
              <span className="bg-[#d2bbff]/30 text-[#d2bbff] px-1 rounded text-xs ml-1">HIDDEN:PASSWORD</span>
            </div>
          </div>
        </div>

        {/* 4: Structural Outlines */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">account_tree</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Structural Outlines</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Tokens are expensive. Only send function signatures and class definitions to keep prompts lean.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 h-[84px] flex flex-col justify-center font-mono text-[13px]">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm opacity-40">expand_more</span>
                <span className="text-white">class Engine {"{"} ... {"}"}</span>
              </div>
              <div className="pl-6 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm opacity-40">chevron_right</span>
                <span className="text-[#ccc3d8]">public init()</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5: Context Profiles */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 h-full">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#d2bbff]">settings_input_component</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Context Profiles</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 max-w-sm">
                  Switch between "Frontend Fix", "Backend Review", or "Security Audit" presets with a single CLI command.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-48 h-24 sm:h-auto bg-[#2a2a2c] rounded-xl border border-[#4a4455] p-3 relative overflow-hidden self-center sm:self-stretch flex flex-col justify-center min-h-[96px]">
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-[#7c3aed]/10 rounded-full blur-2xl"></div>
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
                <span className="font-mono text-[13px] text-white">Active: Security</span>
              </div>
              <div className="space-y-1.5 opacity-50 relative z-10">
                <div className="h-1.5 w-full bg-[#4a4455] rounded"></div>
                <div className="h-1.5 w-3/4 bg-[#4a4455] rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 6: CLI + VS Code Support */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full lg:col-span-2 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-stretch justify-between gap-6 h-full">
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#d2bbff]">terminal</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">CLI + VS Code Support</h3>
                <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 max-w-sm">
                  Run from your terminal or use the integrated VS Code Extension. Seamless integration into your existing workflow.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-56 bg-[#0e0e10] rounded-lg border border-[#4a4455] overflow-hidden self-center sm:self-stretch flex flex-col justify-between min-h-[96px]">
              <div className="bg-[#2a2a2c] px-2 py-1 border-b border-[#4a4455] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-[9px] text-[#ccc3d8] font-mono">zsh — tokencap</span>
              </div>
              <div className="p-3 font-mono text-[13px] flex-grow flex flex-col justify-center">
                <div>
                  <span className="text-[#d2bbff] mr-1.5">&gt;</span>
                  <span className="text-white">tcap capture</span>
                </div>
                <div className="text-[#4edea3] mt-1">
                  ✓ <span className="text-[#ccc3d8]">Bundle created (12KB)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7: Local-first Privacy */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">verified_user</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Local-first Privacy</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Your code never leaves your machine. Processing happens entirely on-device for maximum security.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#2a2a2c] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-zinc-400">home</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#7c3aed] border-2 border-[#131315] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">lock</span>
              </div>
            </div>
            <span className="font-mono text-[13px] text-[#4edea3]">No Cloud Sync</span>
          </div>
        </div>

        {/* 8: Large Project Optimization */}
        <div className="glass-card p-6 group hover:border-[#d2bbff]/40 transition-all duration-300 flex flex-col h-full rounded-lg">
          <div className="w-10 h-10 rounded-lg bg-[#353437] flex items-center justify-center mb-6 group-hover:bg-[#d2bbff]/20 transition-colors">
            <span className="material-symbols-outlined text-[#d2bbff]">speed</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Large Project Optimization</h3>
          <p className="text-sm leading-relaxed text-[#ccc3d8] mb-6 flex-grow">
            Engineered for monorepos. Multi-threaded scanning ensures instant snapshots even in 1M+ line projects.
          </p>
          <div className="bg-[#0e0e10] rounded-lg border border-[#4a4455] p-3 font-mono text-[13px]">
            <div className="text-[10px] text-[#ccc3d8] mb-1.5 opacity-60">INDEXING...</div>
            <div className="grid grid-cols-4 gap-1">
              <div className="h-4 bg-[#7c3aed]/40 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#7c3aed]/20 rounded-sm"></div>
              <div className="h-4 bg-[#7c3aed]/60 rounded-sm animate-pulse"></div>
              <div className="h-4 bg-[#7c3aed]/30 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-20">
        <div className="glass-card p-12 relative overflow-hidden rounded-xl border-[#7c3aed]/20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#7c3aed]/5 blur-[120px] rounded-full"></div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6 relative z-10">Start capturing context.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="bg-[#7c3aed] text-white px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              Get Started Free
            </button>
            <div className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2c] rounded-xl border border-[#4a4455] font-mono text-[13px]">
              <span className="text-[#ccc3d8]">curl -sL tokencap.sh | sh</span>
              <CopyButton text="curl -sL tokencap.sh | sh" />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}