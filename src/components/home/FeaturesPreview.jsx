function FeaturesPreview() {
  return (
    <section className="py-6 space-y-12">
      {/* Centered Heading */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Built for Terminal Masters
        </h2>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        
        {/* Card 1: Auto-save Snapshots */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-6 flex flex-col justify-between hover:border-white/10 transition duration-300">
          <div>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">Auto-save Snapshots</h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              TokenCap monitors your file system and regenerates TOKENCAP.md as you type, ensuring context is never stale.
            </p>
          </div>
        </div>

        {/* Card 2: Git-Aware Diffs */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-6 flex flex-col justify-between hover:border-white/10 transition duration-300">
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">Git-Aware Diffs</h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Only includes changed files and their relative context. Reduces token usage by 80% compared to full context dumps.
            </p>
          </div>
        </div>

        {/* Card 3: Smart Redaction */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-6 flex flex-col justify-between hover:border-white/10 transition duration-300">
          <div>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">Smart Redaction</h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Automatically detects and redacts API keys and secrets before they ever reach your LLM provider.
            </p>
          </div>
        </div>

        {/* Card 4: CLI First */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-6 flex flex-col justify-between hover:border-white/10 transition duration-300">
          <div>
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">CLI First</h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Works perfectly with your existing terminal, from Zsh to bash, standard apps or custom CLIs.
            </p>
          </div>
        </div>

        {/* Card 5: Visual Git Diffs Card (Center/Bottom Card in mockup) */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-4 hover:border-white/10 transition duration-300 flex items-center justify-center">
          <div className="w-full h-full rounded-xl border border-white/5 bg-[#0a0a0c]/60 px-6 py-6 flex items-center justify-around">
            <div className="text-center">
              <div className="text-emerald-400 font-bold text-2xl sm:text-3xl">+ 51 lines</div>
              <div className="text-zinc-500 text-[10px] sm:text-xs mt-1 uppercase tracking-wider font-semibold">added</div>
            </div>
            <div className="h-10 w-px bg-white/5"></div>
            <div className="text-center">
              <div className="text-rose-500 font-bold text-2xl sm:text-3xl">- 11 lines</div>
              <div className="text-zinc-500 text-[10px] sm:text-xs mt-1 uppercase tracking-wider font-semibold">removed</div>
            </div>
          </div>
        </div>

        {/* Card 6: Multi-model Sync */}
        <div className="rounded-2xl border border-white/5 bg-[#0b0c10]/20 p-6 flex flex-col justify-between hover:border-white/10 transition duration-300">
          <div>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.175 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 10.1c-.773-.564-.374-1.81.588-1.81h4.907a1 1 0 00.95-.69L11.049 2.927z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">Multi-model Sync</h3>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Sync your project state across ChatGPT, Claude, and your local Ollama instance simultaneously.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export { FeaturesPreview };