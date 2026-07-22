"use client";

import React from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step) => (
          <div 
            key={step.num}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export { HowItWorks };