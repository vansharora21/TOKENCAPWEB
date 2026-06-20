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

      {/* Right Column: Animated Scan Workflow */}
      <div className="relative flex justify-center lg:justify-end w-full max-w-[500px] mx-auto lg:mr-0">
        {/* Glow backdrop */}
        <div className="absolute -inset-10 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none opacity-40"></div>
        
        <div className="w-full relative glass-panel p-2 sm:p-4 rounded-2xl border border-white/5 bg-[#070709]/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.12)] overflow-hidden">
          <WorkflowAnimation />
        </div>
      </div>
    </section>
  );
}

function WorkflowAnimation() {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="purple-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="green-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-y-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float-y-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-y-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes flow-left {
          to { stroke-dashoffset: -36; }
        }
        @keyframes pulse-glow-purple {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(139, 92, 246, 0.4)); opacity: 0.85; }
          50% { filter: drop-shadow(0 0 14px rgba(139, 92, 246, 0.8)); opacity: 1; }
        }
        @keyframes pulse-glow-green {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.4)); opacity: 0.85; }
          50% { filter: drop-shadow(0 0 16px rgba(16, 185, 129, 0.8)); opacity: 1; }
        }
        @keyframes write-line {
          0%, 100% { stroke-dashoffset: 40; opacity: 0.3; }
          50% { stroke-dashoffset: 0; opacity: 0.85; }
        }

        .anim-spin-dashed {
          animation: spin-clockwise 25s linear infinite;
          transform-origin: 250px 150px;
        }
        .anim-spin-dashed:hover {
          animation-duration: 8s;
        }
        .anim-float-1 {
          animation: float-y-1 4.5s ease-in-out infinite;
        }
        .anim-float-2 {
          animation: float-y-2 5.5s ease-in-out infinite;
        }
        .anim-float-3 {
          animation: float-y-3 5s ease-in-out infinite;
        }
        .anim-flow-purple {
          stroke-dasharray: 6, 12;
          animation: flow-left 1.5s linear infinite;
        }
        .anim-flow-green {
          stroke-dasharray: 6, 12;
          animation: flow-left 1.2s linear infinite;
        }
        .anim-pulse-scan {
          animation: pulse-glow-purple 4s ease-in-out infinite;
        }
        .anim-pulse-doc {
          animation: pulse-glow-green 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        .anim-doc-line {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
          animation: write-line 3s ease-in-out infinite;
        }
        .anim-doc-line-1 { animation-delay: 0.2s; }
        .anim-doc-line-2 { animation-delay: 0.5s; }
        .anim-doc-line-3 { animation-delay: 0.8s; }

        .hover-scale {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
          cursor: pointer;
        }
        .hover-scale:hover {
          transform: scale(1.08);
          filter: brightness(1.2) drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }
        .hover-scale-green {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
          cursor: pointer;
        }
        .hover-scale-green:hover {
          transform: scale(1.05);
          filter: brightness(1.2) drop-shadow(0 0 10px rgba(16, 185, 129, 0.6));
        }
      `}</style>

      {/* BACKGROUND LINES & CONNECTORS */}
      {/* Left Side: Source file paths merging into one horizontal line */}
      <path d="M 82 70 C 130 70, 160 150, 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 42 150 L 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 82 230 C 130 230, 160 150, 210 150" stroke="#2e1a4f" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Animated flow lines */}
      <path d="M 82 70 C 130 70, 160 150, 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />
      <path d="M 42 150 L 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />
      <path d="M 82 230 C 130 230, 160 150, 210 150" stroke="#8b5cf6" strokeWidth="2" fill="none" className="anim-flow-purple" />

      {/* Right Side: SCAN to TOKENCAP.md path */}
      <line x1="290" y1="150" x2="390" y2="150" stroke="#064e3b" strokeWidth="2" opacity="0.4" />
      <line x1="290" y1="150" x2="390" y2="150" stroke="#10b981" strokeWidth="2" className="anim-flow-green" />

      {/* SOURCE NODES (Left Column) */}
      {/* PY Node */}
      <g className="anim-float-1 hover-scale">
        <rect x="60" y="50" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="82" y="74" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PY</text>
      </g>

      {/* TS Node */}
      <g className="anim-float-2 hover-scale">
        <rect x="20" y="130" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="42" y="154" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">TS</text>
      </g>

      {/* GO Node */}
      <g className="anim-float-3 hover-scale">
        <rect x="60" y="210" width="44" height="40" rx="8" fill="#0d081b" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="82" y="234" fill="#c084fc" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">GO</text>
      </g>

      {/* CENTER NODE (SCAN) */}
      <g className="anim-pulse-scan">
        <circle cx="250" cy="150" r="42" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6,4" className="anim-spin-dashed" cursor="pointer" />
        <circle cx="250" cy="150" r="35" stroke="#7c3aed" strokeWidth="1" fill="#0f0b21" />
        <circle cx="250" cy="150" r="28" fill="#180f33" />
        <text x="250" y="154" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5" textAnchor="middle">SCAN</text>
      </g>

      {/* RIGHT NODE (TOKENCAP.md) */}
      <g className="anim-pulse-doc hover-scale-green">
        <rect x="390" y="100" width="72" height="100" rx="10" fill="#03120c" stroke="#10b981" strokeWidth="2" />
        <line x1="405" y1="125" x2="447" y2="125" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-1" strokeLinecap="round" />
        <line x1="405" y1="142" x2="447" y2="142" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-2" strokeLinecap="round" />
        <line x1="405" y1="159" x2="430" y2="159" stroke="#10b981" strokeWidth="2" className="anim-doc-line anim-doc-line-3" strokeLinecap="round" />
        <text x="426" y="186" fill="#10b981" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="0.2">TOKENCAP.md</text>
      </g>
    </svg>
  );
}

export { HowItWorks };