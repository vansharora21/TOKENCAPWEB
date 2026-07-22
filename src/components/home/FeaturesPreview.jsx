"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { features, featureShowcase } from "@/data/features";

function FeaturesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSelectTab = (idx) => {
    setActiveIndex(idx);
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <section className="py-8 space-y-12">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-card-border">
        <div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
            {featureShowcase.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
            {featureShowcase.title}
          </h2>
        </div>
        {/* <p className="text-muted text-xs font-mono max-w-xs md:text-right">
          The site now reflects the actual product: snapshot generation, memory capture, Git context, and privacy-first workflows.
        </p> */}
      </div>

      {/* Grid: Left Column Tabs vs Right Column Live Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Tab Selectors */}
        <div className="lg:col-span-5 flex flex-col justify-start divide-y divide-card-border border-t border-b border-card-border">
          {features.map((cap, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={cap.title}
                onClick={() => handleSelectTab(idx)}
                className={`w-full text-left py-5 transition-all flex items-start gap-4 focus:outline-none cursor-pointer group relative ${isActive ? "text-foreground font-bold" : "text-muted hover:text-foreground"}`}
                type="button"
              >
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground rounded-full" />
                )}
                <span className={`font-mono text-[10px] pl-2 ${isActive ? "text-foreground font-bold" : "text-muted/60"}`}>
                  0{idx + 1}
                </span>
                <div className="space-y-1.5 pr-2">
                  <h3 className="text-sm font-bold font-mono tracking-tight flex items-center gap-2">
                    {cap.title}
                    <span className="text-[9px] font-normal text-muted font-mono px-1.5 py-0.5 rounded bg-pre-bg border border-card-border">
                      {cap.accent}
                    </span>
                  </h3>
                  {isActive && (
                    <p className="text-xs text-muted leading-relaxed font-sans mt-1.5 transition-all">
                      {cap.description}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Live Visualizer Shell */}
        <div className="lg:col-span-7 flex flex-col justify-between rounded-lg border border-card-border bg-card p-6 min-h-[340px] relative overflow-hidden">
          {/* Visualizer header */}
          <div className="flex items-center justify-between border-b border-card-border pb-3 mb-4 select-none">
            <span className="text-[10px] font-mono text-muted tracking-wider">
              interactive_console_output
            </span>
            <span className="text-[10px] font-mono text-muted/60">
              features[{activeIndex}]
            </span>
          </div>

          {/* Render the specific visualizer depending on activeIndex */}
          <div className="flex-grow flex items-center justify-center p-2">
            <ActiveVisualizer index={activeIndex} />
          </div>
        </div>

      </div>
    </section>
  );
}

function ActiveVisualizer({ index }) {
  return <VisualizerContent key={index} index={index} />;
}

function VisualizerContent({ index }) {
  // 0. Local MCP Service View (SVG style)
  if (index === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center font-mono">
        <svg viewBox="0 0 300 160" className="w-full max-w-[340px] h-auto" fill="none">
          {/* AI Host Node */}
          <g transform="translate(20, 50)">
            <rect width="65" height="45" rx="5" className="fill-pre-bg stroke-card-border" strokeWidth="1.5" />
            <text x="32.5" y="27" className="fill-foreground font-bold" fontSize="8.5" textAnchor="middle">AI Host</text>
          </g>

          {/* Stdio Connection Channels */}
          <line x1="85" y1="65" x2="215" y2="65" stroke="currentColor" className="text-card-border" strokeWidth="1.5" strokeDasharray="3,3" />
          <line x1="85" y1="80" x2="215" y2="80" stroke="currentColor" className="text-card-border" strokeWidth="1.5" strokeDasharray="3,3" />

          {/* Request packet (Host -> Server) */}
          <motion.circle
            cy="65"
            r="3.5"
            className="fill-emerald-400"
            animate={{ cx: [85, 215], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Response packet (Server -> Host) */}
          <motion.circle
            cy="80"
            r="3.5"
            className="fill-cyan-400"
            animate={{ cx: [215, 85], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* MCP Server Node */}
          <motion.g
            transform="translate(215, 50)"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{ transformOrigin: "247px 72px" }}
          >
            <rect width="65" height="45" rx="5" className="fill-pre-bg stroke-card-border" strokeWidth="1.5" />
            <text x="32.5" y="27" className="fill-foreground font-bold" fontSize="8.5" textAnchor="middle">MCP Server</text>
          </motion.g>

          {/* Labels */}
          <text x="150" y="58" className="fill-muted font-mono" fontSize="7" textAnchor="middle">stdio.stdin</text>
          <text x="150" y="93" className="fill-muted font-mono" fontSize="7" textAnchor="middle">stdio.stdout</text>

          {/* Status text */}
          <text x="150" y="135" className="fill-muted font-bold font-mono" fontSize="8" textAnchor="middle">
            11 tools active · 0-2ms latency
          </text>
        </svg>
      </div>
    );
  }

  // 1. Local-first Privacy View (SVG style)
  if (index === 1) {
    return (
      <div className="w-full flex flex-col items-center justify-center font-mono">
        <svg viewBox="0 0 300 160" className="w-full max-w-[340px] h-auto" fill="none">
          {/* My Machine Node */}
          <g transform="translate(20, 50)">
            <rect width="70" height="48" rx="6" className="fill-pre-bg stroke-emerald-500/50" strokeWidth="1.5" />
            <text x="35" y="28" className="fill-foreground font-bold" fontSize="8.5" textAnchor="middle">My Machine</text>
            <text x="35" y="39" className="fill-emerald-400 font-mono font-bold" fontSize="6.5" textAnchor="middle">● LOCAL DATA</text>

            {/* Local Ring Pulse */}
            <motion.rect
              x="0"
              y="0"
              width="70"
              height="48"
              rx="6"
              stroke="#10b981"
              strokeWidth="1.5"
              fill="none"
              animate={{ scale: [1, 1.12, 1.2], opacity: [0.6, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              style={{ transformOrigin: "35px 24px" }}
            />
          </g>

          {/* Connection line to Cloud */}
          <line x1="90" y1="74" x2="210" y2="74" stroke="currentColor" className="text-card-border" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Firewall Shield Gate */}
          <g transform="translate(150, 74)">
            <circle r="10" className="fill-card stroke-red-500/80" strokeWidth="1.5" />
            <path d="M -4 -4 L 4 4 M 4 -4 L -4 4" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* BLOCKED Label cleanly below Firewall Gate */}
          <text x="150" y="100" className="fill-red-500 font-bold font-mono" fontSize="7.5" textAnchor="middle">
            BLOCKED
          </text>

          {/* Leak particle traveling right, blocked at x=150 */}
          <motion.circle
            cy="74"
            r="3"
            className="fill-red-400"
            animate={{ cx: [90, 145, 145], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cloud Node */}
          <g transform="translate(210, 50)">
            <rect width="70" height="48" rx="6" className="fill-pre-bg/40 stroke-card-border" strokeWidth="1.2" />
            <text x="35" y="28" className="fill-muted font-bold" fontSize="8.5" textAnchor="middle">Cloud</text>
            <text x="35" y="39" className="fill-muted/70 font-mono" fontSize="7" textAnchor="middle">0 Uploads</text>
          </g>

          {/* Status text */}
          <text x="150" y="135" className="fill-muted font-bold font-mono" fontSize="8" textAnchor="middle">
            Data never leaves your machine.
          </text>
        </svg>
      </div>
    );
  }

  // 2. AI-ready Output View
  if (index === 2) {
    return (
      <div className="w-full max-w-sm font-mono text-xs space-y-4">
        <div className="flex justify-between text-[10px] text-muted">
          <span>CLAUDE-3.5-SONNET PROFILE</span>
          <span>BUDGET: 250,000 TOKENS</span>
        </div>

        {/* Filling gauge bar */}
        <div className="w-full bg-pre-bg h-3.5 rounded-full overflow-hidden border border-card-border p-0.5">
          <motion.div
            className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-400 h-full rounded-full"
            animate={{ width: ["15%", "85%"] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>

        <div className="flex justify-between text-xs pt-1">
          <span className="text-muted">SNAPSHOT PACKSIZE:</span>
          <span className="text-foreground font-bold font-mono">94,250 tokens</span>
        </div>
      </div>
    );
  }

  // 3. Git-aware View
  if (index === 3) {
    return (
      <div className="w-full max-w-sm font-mono text-xs space-y-3">
        <motion.div
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center justify-between border border-emerald-500/40 bg-pre-bg p-3 rounded-lg shadow-sm"
        >
          <span className="text-foreground font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            jwtService.ts
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
            STAGED (Rank 1)
          </span>
        </motion.div>

        <div className="flex items-center justify-between border border-card-border bg-pre-bg p-3 rounded-lg shadow-sm">
          <span className="text-foreground/90">stripe.go</span>
          <span className="text-[9px] px-2 py-0.5 rounded bg-card text-muted border border-card-border">
            CHANGED (Rank 2)
          </span>
        </div>

        <div className="flex items-center justify-between border border-card-border bg-pre-bg/40 p-3 rounded-lg opacity-60">
          <span className="text-muted">package.json</span>
          <span className="text-[9px] text-muted">UNCHANGED</span>
        </div>
      </div>
    );
  }

  // 4. Secret Redaction View
  if (index === 4) {
    return (
      <div className="w-full max-w-sm font-mono text-left text-xs bg-pre-bg border border-card-border rounded-lg p-5 relative min-h-[140px] flex flex-col justify-center overflow-hidden shadow-inner">
        {/* Redacting scanner line */}
        <motion.div
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-20"
          animate={{ top: ["15%", "85%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        
        <div className="space-y-2 text-muted select-none">
          <div>const dbConfig = &#123;</div>
          <div className="pl-4">host: &quot;localhost&quot;,</div>
          <div className="pl-4 relative flex items-center gap-1">
            <span>apiKey: &quot;</span>
            <span className="relative inline-block overflow-hidden rounded px-0.5 py-0.5">
              {/* Raw sensitive key text */}
              <span className="text-foreground/80 font-bold font-mono tracking-tight">AKIAIOSFODNN7EXAMPLE</span>
              
              {/* 100% Opaque solid blackout redaction strip */}
              <motion.span
                className="absolute inset-y-0.5 inset-x-0 bg-zinc-950 dark:bg-black border border-red-500/60 rounded z-10 shadow-sm"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
            <span>&quot;</span>
          </div>
          <div>&#125;;</div>
        </div>
      </div>
    );
  }

  return null;
}

export { FeaturesPreview };
