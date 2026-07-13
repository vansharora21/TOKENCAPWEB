"use client";

import { motion } from "framer-motion";

function DriftScene() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[#7c3aed]/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-[10%] left-[5%] w-[200px] h-[200px] bg-[#ffb4ab]/[0.04] rounded-full blur-[80px]" />
        <div className="absolute bottom-[15%] right-[10%] w-[180px] h-[180px] bg-[#4edea3]/[0.03] rounded-full blur-[70px]" />
      </div>

      {/* ── Back layer: Stale Session ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-[1] mx-auto max-w-sm"
      >
        <div className="rounded-2xl border border-white/[0.03] bg-[#08080a]/90 backdrop-blur-sm p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.02)]">
          <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-white/[0.04]">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-zinc-700/50" />
              <div className="w-2 h-2 rounded-full bg-zinc-700/50" />
              <div className="w-2 h-2 rounded-full bg-zinc-700/50" />
            </div>
            <span className="text-[9px] font-mono text-zinc-700 ml-1">cold-session.ts</span>
          </div>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
            <div className="text-zinc-600"><span className="text-zinc-700">$</span> tokencap make</div>
            <div className="text-zinc-700">Scanning 247 files...</div>
            <div className="text-zinc-700">Building dependency graph...</div>
            <div className="text-zinc-700">Infering architecture...</div>
            <div className="text-zinc-700">Generating agent files...</div>
            <div className="text-zinc-700">Classifying risk tiers...</div>
            <div className="text-zinc-700">Building constitution...</div>
            <div className="flex items-center gap-2 text-zinc-600 pt-2 border-t border-white/[0.03] mt-1">
              <span className="text-zinc-700">→</span>
              <span className="line-through text-zinc-700">auth.js renamed</span>
              <span className="text-[9px] text-zinc-700 ml-auto">unaware</span>
            </div>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="text-zinc-700">→</span>
              <span className="text-[9px] text-zinc-600">12,400 tokens · 8.2s · full rebuild</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Center layer: Drift Alert ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-[2] -mt-14 mx-auto max-w-[280px]"
      >
        <div className="rounded-2xl border border-[#ffb4ab]/20 bg-[#0d0909]/95 backdrop-blur-xl p-5 shadow-[0_35px_90px_-15px_rgba(147,0,10,0.3),0_0_0_1px_rgba(255,180,171,0.03),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#ffb4ab]/40 to-transparent" />

          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-[#ffb4ab]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#ffb4ab] text-xs">warning</span>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#ffb4ab] uppercase tracking-wider font-semibold">Context Drift</div>
              <div className="text-[9px] font-mono text-zinc-600">detected · real-time</div>
            </div>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="w-6 h-6 rounded-md bg-[#4edea3]/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[#4edea3] text-[10px]">code</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-zinc-500">Your code</div>
                <div className="text-[11px] text-white font-mono truncate">feature/auth-refactor</div>
              </div>
              <span className="text-[9px] font-mono text-[#4edea3] font-medium px-1.5 py-0.5 bg-[#4edea3]/10 rounded">LIVE</span>
            </div>

            <div className="flex justify-center"><div className="w-px h-2 bg-gradient-to-b from-white/10 to-transparent" /></div>

            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-[#ffb4ab]/10">
              <div className="w-6 h-6 rounded-md bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-zinc-500 text-[10px]">psychology</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] text-zinc-500">LLM sees</div>
                <div className="text-[11px] text-zinc-400 font-mono truncate line-through decoration-[#ffb4ab]/40">feature/auth</div>
              </div>
              <span className="text-[9px] font-mono text-[#ffb4ab] font-medium px-1.5 py-0.5 bg-[#ffb4ab]/10 rounded">STALE</span>
            </div>

            <div className="p-2 rounded-lg bg-white/[0.015] border border-white/[0.03]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-mono text-zinc-500">Context accuracy</span>
                <span className="text-[10px] font-mono text-[#ffb4ab] font-bold">34%</span>
              </div>
              <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#ffb4ab] to-red-500 rounded-full" style={{ width: "34%" }} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Front layer: TokenCap Fix ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-[3] -mt-12 mx-auto max-w-[240px]"
      >
        <div className="rounded-2xl border border-[#4edea3]/20 bg-[#090c0b]/95 backdrop-blur-xl p-4 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(78,222,163,0.03),inset_0_1px_0_rgba(255,255,255,0.03)]">
          <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#4edea3]/40 to-transparent" />

          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-md bg-[#4edea3]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#4edea3] text-[10px]">check_circle</span>
            </div>
            <span className="text-[9px] font-mono text-[#4edea3]/80 uppercase tracking-wider font-medium">TokenCap · live</span>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
          </div>

          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="flex items-center gap-1.5 text-[#4edea3]/70">
              <span className="text-[#4edea3]/40">$</span>
              <span>tokencap make</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span className="text-[#4edea3]/40">✓</span>
              <span>3 files · 74ms · incremental</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500">
              <span className="text-[#4edea3]/40">✓</span>
              <span>Context auto-updated</span>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center justify-between">
            <span className="text-[9px] font-mono text-zinc-600">Drift: zero</span>
            <span className="text-[9px] font-mono text-[#4edea3]/60">0 tokens wasted</span>
          </div>
        </div>
      </motion.div>

      {/* Floating accent dots */}
      <div className="absolute top-16 left-[15%] w-1 h-1 rounded-full bg-[#ffb4ab]/40 animate-pulse pointer-events-none" />
      <div className="absolute top-28 right-[18%] w-1.5 h-1.5 rounded-full bg-[#7c3aed]/30 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-[25%] w-1 h-1 rounded-full bg-[#4edea3]/30 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export { DriftScene };
