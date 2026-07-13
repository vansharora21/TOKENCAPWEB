"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Drift states ──────────────────────────────────────────── */

const DRIFT_STATES = [
  {
    id: "stale",
    top: "-8%",
    right: "-4%",
    label: "Context Drift",
    sub: "auth.js renamed → unaware",
    icon: "warning",
    color: "#ffb4ab",
    bg: "rgba(255,180,171,0.06)",
    border: "rgba(255,180,171,0.15)",
  },
  {
    id: "accuracy",
    top: "15%",
    right: "-6%",
    label: "Context accuracy",
    sub: "34%",
    icon: "psychology",
    color: "#ffb4ab",
    bg: "rgba(255,180,171,0.06)",
    border: "rgba(255,180,171,0.15)",
    showBar: true,
    barPct: 34,
  },
  {
    id: "fix",
    top: "-8%",
    right: "-4%",
    label: "Drift: zero",
    sub: "3 files · 74ms · incremental",
    icon: "check_circle",
    color: "#4edea3",
    bg: "rgba(78,222,163,0.06)",
    border: "rgba(78,222,163,0.15)",
  },
  {
    id: "idle",
    top: "-8%",
    right: "-4%",
    label: "TokenCap · live",
    sub: "Monitoring changes",
    icon: "monitor_heart",
    color: "#4edea3",
    bg: "rgba(78,222,163,0.04)",
    border: "rgba(78,222,163,0.1)",
  },
];

/* ─── Component ─────────────────────────────────────────────── */

function DriftOverlay() {
  const [stateIdx, setStateIdx] = useState(3); // start idle
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const state = DRIFT_STATES[stateIdx];
    const dur = state.id === "idle" ? 4000 : 3000;
    timerRef.current = setTimeout(() => {
      setStateIdx((p) => (p + 1) % DRIFT_STATES.length);
    }, dur);
    return () => clearTimeout(timerRef.current);
  }, [stateIdx]);

  const state = DRIFT_STATES[stateIdx];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
      <AnimatePresence mode="wait">
        <motion.div
          key={state.id}
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
          style={{ top: state.top, right: state.right }}
        >
          <div
            className="rounded-xl backdrop-blur-xl p-3 pr-5 shadow-2xl flex items-center gap-2.5 min-w-[180px]"
            style={{
              background: state.bg,
              border: `1px solid ${state.border}`,
            }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${state.color}15` }}
            >
              <span
                className="material-symbols-outlined text-xs"
                style={{ color: state.color }}
              >
                {state.icon}
              </span>
            </div>
            <div className="min-w-0">
              <div
                className="text-[10px] font-mono font-semibold uppercase tracking-wider"
                style={{ color: state.color }}
              >
                {state.label}
              </div>
              <div className="text-[10px] font-mono text-zinc-500 truncate">
                {state.sub}
              </div>
              {state.showBar && (
                <div className="mt-1.5 w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${state.color}, ${state.color}88)`,
                    }}
                    initial={{ width: "100%" }}
                    animate={{ width: `${state.barPct}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              )}
            </div>
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
              style={{ background: state.color }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export { DriftOverlay };
