"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function ProblemSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  /* parallax offsets */
  const bgY = useTransform(smoothProgress, [0, 1], [60, -60]);
  const midY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const fgY = useTransform(smoothProgress, [0, 1], [10, -10]);
  const textY = useTransform(smoothProgress, [0, 1], [20, -10]);

  return (
    <section ref={ref} className="relative py-10 lg:py-14 overflow-hidden">
      {/* ── Ambient background glow ──────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
      >
        <div className="absolute inset-0 bg-[#7c3aed]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#ffb4ab]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-[#4edea3]/[0.02] rounded-full blur-[80px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          style={{ y: textY }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-[1.15] font-vorcas anim-heading-reveal">
            Stop Fighting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb4ab] to-red-400 anim-heading-gradient">
              Context Drift.
            </span>
          </h2>
          <p className="text-zinc-500 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Your LLM doesn&apos;t know you just renamed that function. Every session starts from zero.
          </p>
        </motion.div>

        {/* ── 3D Scene ────────────────────────────────────────── */}
        <div className="relative max-w-4xl mx-auto">
          {/* ── Layer 1: Background — Stale Session (deepest) ── */}
          <motion.div
            style={{ y: bgY }}
            className="relative z-[1] mt-0 mx-auto max-w-md"
          >
            <div className="rounded-2xl border border-white/[0.03] bg-[#08080a]/90 backdrop-blur-sm p-5 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.02)]">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                </div>
                <span className="text-[10px] font-mono text-zinc-700 ml-1">cold-session.ts</span>
              </div>
              {/* Terminal content */}
              <div className="space-y-2 font-mono text-[12px] leading-relaxed">
                <div className="text-zinc-600">
                  <span className="text-zinc-700">$</span> tokencap make
                </div>
                <div className="text-zinc-700">Scanning 247 files...</div>
                <div className="text-zinc-700">Building dependency graph...</div>
                <div className="text-zinc-700">Infering architecture...</div>
                <div className="text-zinc-700">Generating agent files...</div>
                <div className="text-zinc-700">Classifying risk tiers...</div>
                <div className="text-zinc-700">Building constitution...</div>
                <div className="flex items-center gap-2 text-zinc-600 pt-2 border-t border-white/[0.03] mt-2">
                  <span className="text-zinc-700">→</span>
                  <span className="line-through text-zinc-700">auth.js renamed</span>
                  <span className="text-[10px] text-zinc-700 ml-auto">unaware</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-zinc-700">→</span>
                  <span className="text-[10px] text-zinc-600">12,400 tokens · 8.2s · full rebuild</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Layer 2: Midground — Context Drift Alert (center) ── */}
          <motion.div
            style={{ y: midY }}
            className="relative z-[2] -mt-20 sm:-mt-24 mx-auto max-w-sm"
          >
            <div className="rounded-2xl border border-[#ffb4ab]/20 bg-[#0d0909]/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_35px_90px_-15px_rgba(147,0,10,0.3),0_0_0_1px_rgba(255,180,171,0.03),inset_0_1px_0_rgba(255,255,255,0.03)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#ffb4ab]/40 to-transparent" />

              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-lg bg-[#ffb4ab]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#ffb4ab] text-sm">warning</span>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#ffb4ab] uppercase tracking-wider font-semibold">Context Drift</div>
                  <div className="text-[10px] font-mono text-zinc-600">detected · real-time</div>
                </div>
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ffb4ab] animate-pulse" />
              </div>

              {/* Code vs Context comparison */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-7 h-7 rounded-md bg-[#4edea3]/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[#4edea3] text-xs">code</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-zinc-500">Your code</div>
                    <div className="text-[12px] text-white font-mono truncate">feature/auth-refactor</div>
                  </div>
                  <span className="text-[10px] font-mono text-[#4edea3] font-medium px-1.5 py-0.5 bg-[#4edea3]/10 rounded">LIVE</span>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-3 bg-gradient-to-b from-white/10 to-transparent" />
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] border border-[#ffb4ab]/10">
                  <div className="w-7 h-7 rounded-md bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-zinc-500 text-xs">psychology</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] text-zinc-500">LLM sees</div>
                    <div className="text-[12px] text-zinc-400 font-mono truncate line-through decoration-[#ffb4ab]/40">feature/auth</div>
                  </div>
                  <span className="text-[10px] font-mono text-[#ffb4ab] font-medium px-1.5 py-0.5 bg-[#ffb4ab]/10 rounded">STALE</span>
                </div>

                {/* Accuracy bar */}
                <div className="p-2.5 rounded-lg bg-white/[0.015] border border-white/[0.03] mt-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-mono text-zinc-500">Context accuracy</span>
                    <span className="text-[11px] font-mono text-[#ffb4ab] font-bold">34%</span>
                  </div>
                  <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ffb4ab] to-red-500 rounded-full transition-all" style={{ width: "34%" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Layer 3: Foreground — TokenCap Fix (closest) ────── */}
          <motion.div
            style={{ y: fgY }}
            className="relative z-[3] -mt-14 sm:-mt-16 mx-auto max-w-xs"
          >
            <div className="rounded-2xl border border-[#4edea3]/20 bg-[#090c0b]/95 backdrop-blur-xl p-5 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(78,222,163,0.03),inset_0_1px_0_rgba(255,255,255,0.03)]">
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#4edea3]/40 to-transparent" />

              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded-md bg-[#4edea3]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#4edea3] text-xs">check_circle</span>
                </div>
                <span className="text-[10px] font-mono text-[#4edea3]/80 uppercase tracking-wider font-medium">TokenCap · live</span>
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
              </div>

              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex items-center gap-2 text-[#4edea3]/70">
                  <span className="text-[#4edea3]/40">$</span>
                  <span>tokencap make</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-[#4edea3]/40">✓</span>
                  <span>3 files · 74ms · incremental</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-[#4edea3]/40">✓</span>
                  <span>Context auto-updated</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-600">Drift: zero</span>
                <span className="text-[10px] font-mono text-[#4edea3]/60">0 tokens wasted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ProblemSection };
