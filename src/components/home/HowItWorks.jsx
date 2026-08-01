"use client";

import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Local Save",
    desc: "Hit Ctrl+S in your editor. TokenCap's background watcher intercepts the file change instantly."
  },
  {
    num: "02",
    title: "Compile delta",
    desc: "The incremental parser dirty-checks workspace trees and compiles a fresh TOKENCAP.md in under 80ms."
  },
  {
    num: "03",
    title: "AI Handoff",
    desc: "Copy the output markdown path or feed the local stdio MCP server endpoint directly to your IDE agent."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

function HowItWorks() {
  return (
    <section className="py-8 space-y-12">
      {/* Title */}
      <div className="flex flex-col gap-2 pb-6 border-b border-card-border">
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Workflow</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Three simple steps. No cloud required.
        </h2>
      </div>

      {/* Grid of Steps */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {STEPS.map((step) => (
          <motion.div 
            key={step.num}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="space-y-4 border border-card-border bg-card p-5 rounded-lg hover:border-card-hover transition-colors"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-card-border pb-2">
              <span className="font-mono text-[10px] text-muted font-bold uppercase">{step.title}</span>
              <span className="font-mono text-[10px] text-muted/70 font-bold">{step.num}</span>
            </div>

            {/* Description */}
            <p className="text-xs text-muted leading-relaxed font-sans">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export { HowItWorks };