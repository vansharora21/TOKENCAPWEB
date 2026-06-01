function ProblemSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center py-6">
      {/* Left Column: Text Content */}
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          Stop Fighting <br />
          <span className="text-[#ffb4ab]">
            Context Drift.
          </span>
        </h2>
        
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg">
          Your LLM doesn't know you just renamed that function. Context windows are huge, but they are frozen in time. Stop copy-pasting your entire codebase and start sending delta snapshots.
        </p>

        {/* Warning Alert Panel */}
        <div className="flex items-center gap-3 p-3 bg-[#93000a]/20 border border-[#ffb4ab]/20 rounded-lg text-xs sm:text-sm max-w-md">
          <span className="material-symbols-outlined text-[#ffb4ab]">warning</span>
          <span className="text-[#ffb4ab] font-mono font-medium">High latency detected in manual handoffs.</span>
        </div>
      </div>

      {/* Right Column: Code Image Visual */}
      <div className="relative group">
        <div className="absolute inset-0 bg-[#7c3aed]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJFPtwIFfi3DiXQZnc1G50ERtvwhzUjiPdWfb3Wey9VWMjMp1llMMi0sw5Lsxwdmd6Gn4O2Shq001aUkX-y2BH7J4o-TetbvjnQn0SYIkWPmwyVnofRm8ByaecdLJ9zM4THBxrEBr8VMxfiJd6jBlMPv0a5vLV1bUJNM0RVLYOjM-E-bsRO-2sS17aCL8Ut_yRwCcHL8Hvr2DXV0EWJcZosTZ5AOKhVmCJqi2Cggap1NUVHTePZYWB4QFa9gBuNcT2lLMcCZXJGKEM" 
          alt="Context window drift visual" 
          className="w-full rounded-xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700" 
        />
      </div>
    </section>
  );
}

export { ProblemSection };