function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Save",
      description: "Hit Ctrl+S. TokenCap detects the file change instantly.",
    },
    {
      num: "02",
      title: "Update",
      description: "A fresh TOKENCAP.md is refreshed with the new context data.",
    },
    {
      num: "03",
      title: "Handoff",
      description: "Paste the TOKENCAP.md content or link into your favorite LLM.",
    },
  ];

  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center py-6">
      {/* Left Column: Workflow steps */}
      <div className="space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          The Workflow of <br />
          the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Future.</span>
        </h2>

        <div className="space-y-6 max-w-lg">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              {/* Number Circle */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-semibold text-zinc-400 font-mono">
                {step.num}
              </div>
              {/* Content */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Terminal Watch Mockup */}
      <div className="relative flex justify-center lg:justify-end">
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="w-full max-w-[460px] rounded-xl border border-white/5 bg-[#0a0a0c] shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0e0f14]/80 text-zinc-500">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            </div>
            <div className="text-[10px] mx-auto">terminal &mdash; zsh</div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 space-y-4 min-h-[220px] select-none text-zinc-300">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-purple-400">&gt;</span>
              <span>tokencap watch</span>
            </div>

            <div className="space-y-1.5 text-zinc-400">
              <div>
                <span className="text-zinc-500">[14:43:00]</span>{" "}
                <span className="text-purple-400 font-semibold">START</span>{" "}
                <span className="text-zinc-400">Recording project structure...</span>
              </div>
              <div>
                <span className="text-zinc-500">[14:43:10]</span>{" "}
                <span className="text-blue-400 font-semibold">SYNC</span>{" "}
                <span className="text-zinc-300">Detected change in src/utils/auth.ts</span>
              </div>
              <div>
                <span className="text-zinc-500">[14:43:11]</span>{" "}
                <span className="text-emerald-400 font-semibold">DONE</span>{" "}
                <span className="text-zinc-300">Updated TOKENCAP.md (+ 22 tokens)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-emerald-400/90 font-medium">
              <span className="animate-pulse">&bull;</span>
              <span>Listening for changes...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HowItWorks };