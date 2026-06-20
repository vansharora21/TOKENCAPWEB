"use client";

import { useState } from "react";

function FeaturesPreview() {
  const [expanded, setExpanded] = useState({
    capture: false,
    redact: false,
    git: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="py-12 space-y-16">
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Engineered for the Infinite
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Power features designed to make your codebase perfectly legible to any LLM or developer.
        </p>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto px-4 sm:px-0">
        
        {/* Card 1: Auto Capture */}
        <div 
          className={`group rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-6 flex flex-col justify-between hover:border-[#7c3aed]/40 hover:bg-[#0c0c0e] transition-all duration-300 relative overflow-hidden cursor-pointer ${expanded.capture ? 'ring-1 ring-[#7c3aed]/30 border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.06)]' : ''}`}
          onClick={() => toggleExpand("capture")}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/3 rounded-full blur-2xl pointer-events-none group-hover:bg-[#7c3aed]/5 transition-colors"></div>
          
          <div className="space-y-6">
            {/* Icon Wrapper */}
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  Auto Capture
                </h3>
                <span className={`material-symbols-outlined text-zinc-500 text-sm transition-transform duration-300 ${expanded.capture ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Instantly snapshot your entire file tree, imports, and interface definitions into a single, LLM-optimized TOKENCAP.md file.
              </p>
            </div>

            {/* Accordion content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded.capture ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-white/5 mt-2 space-y-3 text-[11px] sm:text-xs text-zinc-400">
                  <div className="flex items-center gap-2 text-purple-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Debounced Save Listener</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Monitors your workspace and updates context files only when you stop typing, avoiding rebuild loops.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    <span>Universal Language Support</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Auto-detects and parses exports, imports, and dependencies across JS/TS, Python, Go, and 40+ other languages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-visualization */}
          <div className="mt-8 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
              <span>SCANNING WORKSPACE</span>
              <span className="text-purple-400 font-bold">ACTIVE</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
              <div className="h-full bg-purple-500 rounded-full anim-progress-bar w-[65%]"></div>
              <style>{`
                .anim-progress-bar {
                  animation: progress-loop 2.5s ease-in-out infinite;
                }
                @keyframes progress-loop {
                  0% { width: 0%; opacity: 0.8; }
                  50% { width: 85%; opacity: 1; }
                  100% { width: 100%; opacity: 0.8; }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Card 2: Secret Redaction */}
        <div 
          className={`group rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-6 flex flex-col justify-between hover:border-[#7c3aed]/40 hover:bg-[#0c0c0e] transition-all duration-300 relative overflow-hidden cursor-pointer ${expanded.redact ? 'ring-1 ring-[#7c3aed]/30 border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.06)]' : ''}`}
          onClick={() => toggleExpand("redact")}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/3 rounded-full blur-2xl pointer-events-none group-hover:bg-[#7c3aed]/5 transition-colors"></div>
          
          <div className="space-y-6">
            {/* Icon Wrapper */}
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="material-symbols-outlined text-lg">lock</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                  Secret Redaction
                </h3>
                <span className={`material-symbols-outlined text-zinc-500 text-sm transition-transform duration-300 ${expanded.redact ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Built-in PII and secret scanner automatically redacts tokens, passwords, and sensitive keys before they reach the LLM.
              </p>
            </div>

            {/* Accordion content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded.redact ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-white/5 mt-2 space-y-3 text-[11px] sm:text-xs text-zinc-400">
                  <div className="flex items-center gap-2 text-emerald-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Multi-Provider Scans</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Instantly detects OpenAI API keys, GitHub PATs, AWS access tokens, Slack webhooks, and private configs.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>100% Local Processing</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Entropy scanners process files entirely on-device, redacting keys in memory before snapshot export.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-visualization */}
          <div className="mt-8 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
              <span>SCANNER STATUS</span>
              <span className="text-emerald-400 font-bold">SECURE</span>
            </div>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 bg-emerald-500 rounded-full anim-blink-1"></div>
              <div className="h-1.5 w-6 bg-emerald-500 rounded-full anim-blink-2"></div>
              <div className="h-1.5 w-6 bg-white/10 rounded-full"></div>
              <style>{`
                .anim-blink-1 {
                  animation: blink-fade 1.6s ease-in-out infinite;
                }
                .anim-blink-2 {
                  animation: blink-fade 1.6s ease-in-out infinite;
                  animation-delay: 0.4s;
                }
                @keyframes blink-fade {
                  0%, 100% { opacity: 0.4; filter: brightness(0.6); }
                  50% { opacity: 1; filter: brightness(1.2) drop-shadow(0 0 4px #10b981); }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Card 3: Git-Aware Context */}
        <div 
          className={`group rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-6 flex flex-col justify-between hover:border-[#7c3aed]/40 hover:bg-[#0c0c0e] transition-all duration-300 relative overflow-hidden cursor-pointer ${expanded.git ? 'ring-1 ring-[#7c3aed]/30 border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.06)]' : ''}`}
          onClick={() => toggleExpand("git")}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/3 rounded-full blur-2xl pointer-events-none group-hover:bg-[#7c3aed]/5 transition-colors"></div>
          
          <div className="space-y-6">
            {/* Icon Wrapper */}
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
              <span className="material-symbols-outlined text-lg">fork_right</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                  Git-Aware Context
                </h3>
                <span className={`material-symbols-outlined text-zinc-500 text-sm transition-transform duration-300 ${expanded.git ? 'rotate-180' : ''}`}>
                  keyboard_arrow_down
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                TokenCap understands your branch history, diffs, and staging area, providing chronological context that LLMs crave.
              </p>
            </div>

            {/* Accordion content */}
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded.git ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="pt-4 border-t border-white/5 mt-2 space-y-3 text-[11px] sm:text-xs text-zinc-400">
                  <div className="flex items-center gap-2 text-indigo-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Delta Priorities</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Automatically ranks modified, newly created, and staging-indexed files higher in context packages.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>Compact Diff Layouts</span>
                  </div>
                  <p className="pl-3 leading-relaxed">
                    Strips verbose commit metadata, outputting clean, token-efficient source diff representations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro-visualization */}
          <div className="mt-8 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
              <span>ACTIVE BRANCH</span>
              <span className="text-indigo-400 font-bold anim-pulse-dot">SYNCED</span>
            </div>
            <div className="font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
              <span className="text-indigo-500 font-bold">&gt;</span>
              <span>HEAD</span>
              <span className="text-zinc-600">&mdash;&gt;</span>
              <span className="text-white bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded text-[10px]">main</span>
              <style>{`
                .anim-pulse-dot {
                  animation: pulse-op 2s ease-in-out infinite;
                }
                @keyframes pulse-op {
                  0%, 100% { opacity: 0.6; }
                  50% { opacity: 1; }
                }
              `}</style>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export { FeaturesPreview };