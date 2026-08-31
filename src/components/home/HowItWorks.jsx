"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    phase: "TRIGGER",
    title: "Intercept on save",
    desc: "Hit Ctrl+S in your editor. TokenCap's background daemon instantly dirty-checks changed files in memory without scanning disk.",
    snippet: "tokencap watch --debounce=30ms",
    metric: "< 1ms trigger",
  },
  {
    num: "02",
    phase: "PROCESS",
    title: "Compile AST delta",
    desc: "The incremental parser resolves AST call-graphs, filters out dead code, redacts secrets, and compiles a fresh TOKENCAP.md.",
    snippet: "→ TOKENCAP.md (38.2 KB)",
    metric: "82ms compile",
  },
  {
    num: "03",
    phase: "HANDOFF",
    title: "Auto-wire AI host",
    desc: "The local stdio MCP server exposes 11 tools directly to Claude, Cursor, Windsurf, or Cline with zero network egress.",
    snippet: "stdio://127.0.0.1 (11 tools)",
    metric: "0 cloud uploads",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
          Three simple steps. No cloud required.
        </h2>
        <p className="text-sm text-muted leading-relaxed font-sans">
          From editor keystroke to structured AI context in sub-80ms — running 100% locally on your machine.
        </p>
      </div>

      {/* Unified Pipeline Grid (No generic floating cards) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 border border-card-border bg-card divide-y md:divide-y-0 md:divide-x divide-card-border overflow-hidden shadow-2xl"
      >
        {STEPS.map((step) => (
          <motion.div
            key={step.num}
            variants={itemVariants}
            className="group relative p-6 sm:p-8 flex flex-col justify-between space-y-8 hover:bg-pre-bg/40 transition-colors"
          >
            {/* Top row: Phase label & Large Monospace Step Number */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold tracking-[0.18em] text-muted/70 group-hover:text-foreground transition-colors">
                {step.phase}
              </span>
              <span className="font-mono text-xl font-bold text-muted/40 group-hover:text-foreground transition-colors">
                {step.num}
              </span>
            </div>

            {/* Middle: Title & Technical Description */}
            <div className="space-y-2.5">
              <h3 className="text-base font-bold tracking-tight text-foreground font-sans">
                {step.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                {step.desc}
              </p>
            </div>

            {/* Bottom: Simulated Code Snippet & Performance Metric */}
            <div className="pt-4 border-t border-card-border space-y-2">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-muted/60 truncate">{step.snippet}</span>
                <span className="text-foreground font-semibold shrink-0 pl-2">{step.metric}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export { HowItWorks };