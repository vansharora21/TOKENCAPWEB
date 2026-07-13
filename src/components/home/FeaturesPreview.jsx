"use client";

import { useState } from "react";

const CARDS = [
  {
    key: "capture",
    icon: "auto_awesome",
    iconColor: "purple",
    title: "Auto Capture",
    description:
      "Instantly snapshot your entire file tree, imports, and interface definitions into a single, LLM-optimized TOKENCAP.md file.",
    expandedContent: [
      {
        label: "Debounced Save Listener",
        detail:
          "Monitors your workspace and updates context files only when you stop typing, avoiding rebuild loops.",
      },
      {
        label: "Universal Language Support",
        detail:
          "Auto-detects and parses exports, imports, and dependencies across JS/TS, Python, Go, and 40+ other languages.",
      },
    ],
    microViz: (
      <div className="mt-8 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
          <span>SCANNING WORKSPACE</span>
          <span className="text-purple-400 font-bold">ACTIVE</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
          <div className="h-full bg-purple-500 rounded-full anim-progress-bar w-[65%]" />
        </div>
      </div>
    ),
  },
  {
    key: "redact",
    icon: "lock",
    iconColor: "emerald",
    title: "Secret Redaction",
    description:
      "Built-in PII and secret scanner automatically redacts tokens, passwords, and sensitive keys before they reach the LLM.",
    expandedContent: [
      {
        label: "Multi-Provider Scans",
        detail:
          "Instantly detects OpenAI API keys, GitHub PATs, AWS access tokens, Slack webhooks, and private configs.",
      },
      {
        label: "100% Local Processing",
        detail:
          "Entropy scanners process files entirely on-device, redacting keys in memory before snapshot export.",
      },
    ],
    microViz: (
      <div className="mt-8 pt-4 border-t border-white/5">
        <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
          <span>SCANNER STATUS</span>
          <span className="text-emerald-400 font-bold">SECURE</span>
        </div>
        <div className="flex gap-1.5">
          <div className="h-1.5 w-6 bg-emerald-500 rounded-full anim-blink-1" />
          <div className="h-1.5 w-6 bg-emerald-500 rounded-full anim-blink-2" />
          <div className="h-1.5 w-6 bg-white/10 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    key: "git",
    icon: "fork_right",
    iconColor: "indigo",
    title: "Git-Aware Context",
    description:
      "TokenCap understands your branch history, diffs, and staging area, providing chronological context that LLMs crave.",
    expandedContent: [
      {
        label: "Delta Priorities",
        detail:
          "Automatically ranks modified, newly created, and staging-indexed files higher in context packages.",
      },
      {
        label: "Compact Diff Layouts",
        detail:
          "Strips verbose commit metadata, outputting clean, token-efficient source diff representations.",
      },
    ],
    microViz: (
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
        </div>
      </div>
    ),
  },
];

const COLOR_MAP = {
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hoverText: "group-hover:text-purple-300",
    dot: "bg-purple-400",
    shadow: "shadow-[0_0_15px_rgba(168,85,247,0.1)]",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    hoverText: "group-hover:text-emerald-300",
    dot: "bg-emerald-400",
    shadow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
    hoverText: "group-hover:text-indigo-300",
    dot: "bg-indigo-400",
    shadow: "shadow-[0_0_15px_rgba(99,102,241,0.1)]",
  },
};

function FeaturesPreview() {
  const [expanded, setExpanded] = useState({
    capture: false,
    redact: false,
    git: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="py-12 space-y-16">
      {/* Centered Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-vorcas anim-heading-reveal">
          Engineered for the Infinite
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Power features designed to make your codebase perfectly legible to any LLM or developer.
        </p>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto px-4 sm:px-0">
        {CARDS.map((card) => {
          const isExpanded = expanded[card.key];
          const colors = COLOR_MAP[card.iconColor];
          return (
            <button
              key={card.key}
              type="button"
              onClick={() => toggleExpand(card.key)}
              className={`group rounded-2xl border border-white/5 bg-[#0a0a0c]/60 p-6 flex flex-col justify-between hover:border-[#7c3aed]/40 hover:bg-[#0c0c0e] transition-all duration-300 relative overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2 ${
                isExpanded
                  ? "ring-1 ring-[#7c3aed]/30 border-[#7c3aed]/30 shadow-[0_0_30px_rgba(124,58,237,0.06)]"
                  : ""
              }`}
              aria-expanded={isExpanded}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c3aed]/[0.03] rounded-full blur-2xl pointer-events-none group-hover:bg-[#7c3aed]/5 transition-colors" />

              <div className="space-y-6">
                {/* Icon Wrapper */}
                <div className={`w-10 h-10 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center ${colors.text} group-hover:scale-105 transition-transform duration-300 ${colors.shadow}`}>
                  <span className="material-symbols-outlined text-lg">{card.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold text-white tracking-tight ${colors.hoverText} transition-colors`}>
                      {card.title}
                    </h3>
                    <span className={`material-symbols-outlined text-zinc-500 text-sm transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true">
                      keyboard_arrow_down
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Accordion content */}
                <div className="overflow-hidden transition-[grid-template-rows] duration-300 ease-out" style={{ display: "grid", gridTemplateRows: isExpanded ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-white/5 mt-2 space-y-3 text-[11px] sm:text-xs text-zinc-400">
                      {card.expandedContent.map((item, idx) => (
                        <div key={idx}>
                          <div className={`flex items-center gap-2 ${colors.text}/90 font-mono`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            <span>{item.label}</span>
                          </div>
                          <p className="pl-3 leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Micro-visualization */}
              {card.microViz}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export { FeaturesPreview };
