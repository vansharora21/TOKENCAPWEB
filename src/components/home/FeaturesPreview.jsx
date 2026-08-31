"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featurePipeline, featureShowcase } from "@/data/features";

function FeaturesPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = featurePipeline[activeTab] || featurePipeline[0];

  const handleCopyCommand = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(current.cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-12 sm:py-16">
      {/* Header section */}
      <div className="max-w-3xl mb-10 space-y-3">
        {featureShowcase.eyebrow && (
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted">
            {featureShowcase.eyebrow}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-sans">
          {featureShowcase.title}
        </h2>
        <p className="text-sm text-muted leading-relaxed max-w-2xl font-sans">
          {featureShowcase.description}
        </p>
      </div>

      {/* Main Terminal & Pipeline Showcase */}
      <div className="border border-card-border bg-card overflow-hidden shadow-2xl">
        {/* Top Command Selector Tabs */}
        <div className="border-b border-card-border bg-pre-bg/80 flex flex-wrap items-stretch overflow-x-auto scrollbar-none">
          {featurePipeline.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                type="button"
                className={`
                  group relative flex items-center gap-3 px-5 py-3.5 text-xs font-mono transition-all cursor-pointer border-r border-card-border
                  ${isActive ? "bg-card text-foreground font-semibold" : "text-muted hover:text-foreground hover:bg-card/50"}
                `}
              >
                {/* Active indicator bar on top */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-foreground"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="text-[10px] text-muted/60">0{idx + 1}</span>
                <span className="truncate">{item.badge}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded border border-card-border bg-pre-bg text-muted/80 hidden sm:inline-block">
                  {item.cmd.split(" ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Console / Terminal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Active Command Bar with Copy Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-card-border">
            <div className="flex items-center gap-3 font-mono text-xs overflow-x-auto scrollbar-none">
              <span className="text-muted/60 select-none">$</span>
              <span className="text-foreground font-bold whitespace-nowrap">{current.cmd}</span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleCopyCommand}
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono border border-card-border bg-pre-bg hover:bg-card-hover text-foreground transition-all active:scale-[0.97] cursor-pointer"
                title="Copy CLI command"
              >
                <span className="material-symbols-outlined text-[13px]">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Animate output buffer changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left description column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold tracking-tight text-foreground font-sans">
                    {current.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    {current.tagline}
                  </p>
                </div>

                {/* Stat pills */}
                <div className="space-y-2 pt-2">
                  {current.stats.map((st) => (
                    <div
                      key={st.label}
                      className="flex items-center justify-between p-2.5 bg-pre-bg border border-card-border font-mono text-[11px]"
                    >
                      <span className="text-muted">{st.label}</span>
                      <span className="text-foreground font-semibold">{st.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Output Log Window */}
              <div className="lg:col-span-8 rounded border border-card-border bg-pre-bg p-5 font-mono text-xs overflow-x-auto leading-relaxed space-y-2 select-text shadow-inner">
                {current.id === "make" && <MakeOutput />}
                {current.id === "impact" && <ImpactOutput />}
                {current.id === "analyze" && <AnalyzeOutput />}
                {current.id === "mcp" && <McpOutput />}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ─── Command Outputs ─────────────────────────────────────────── */

function MakeOutput() {
  return (
    <>
      <div className="text-muted/60">
        [tokencap] Indexing workspace tree (148 files)...
      </div>
      <div className="text-foreground">
        <span className="text-emerald-400">✓</span> Parsed AST graph in <span className="font-bold">82ms</span>
      </div>
      <div className="text-foreground">
        <span className="text-emerald-400">✓</span> Ranked 24 relevant context files (Git staged & diff priority)
      </div>
      <div className="text-foreground">
        <span className="text-emerald-400">✓</span> Scrubbed 4 secrets (OpenAI API key, AWS secret, GitHub PAT)
      </div>
      <div className="pt-2 text-muted border-t border-card-border space-y-1">
        <div className="flex items-center justify-between text-foreground">
          <span>→ Created <span className="font-bold text-foreground">TOKENCAP.md</span></span>
          <span className="text-muted text-[11px]">38.2 KB · 9,450 tokens</span>
        </div>
        <div className="flex items-center justify-between text-foreground">
          <span>→ Created <span className="font-bold text-foreground">TOKENCAP_GRAPH.md</span></span>
          <span className="text-muted text-[11px]">14.1 KB · 3,520 tokens</span>
        </div>
        <div className="flex items-center justify-between text-foreground">
          <span>→ Created <span className="font-bold text-foreground">TOKENCAP_MEMORY.md</span></span>
          <span className="text-muted text-[11px]">6.8 KB · 1,700 tokens</span>
        </div>
      </div>
      <div className="pt-2 text-[11px] text-foreground font-semibold border-t border-card-border flex items-center justify-between">
        <span className="text-muted">Total context packaged:</span>
        <span className="text-emerald-400">14,670 tokens (12.2× reduction from 820K)</span>
      </div>
    </>
  );
}

function ImpactOutput() {
  return (
    <>
      <div className="text-muted/60">
        [tokencap] Resolving symbol AST across workspace...
      </div>
      <div className="text-foreground">
        Target: <span className="font-bold text-foreground">src/api/auth.rs:validate_token</span> [Function, Exported]
      </div>
      <div className="text-muted pt-1 space-y-1">
        <div>Upstream Callers (Direct AST References):</div>
        <div className="pl-3 text-foreground">
          ↳ [direct] <span className="text-muted">src/routes/session.rs:login_handler</span> (L42:15)
        </div>
        <div className="pl-3 text-foreground">
          ↳ [direct] <span className="text-muted">src/middleware/jwt.rs:verify_request</span> (L88:9)
        </div>
        <div className="pl-3 text-foreground">
          ↳ [import] <span className="text-muted">src/server.rs:Router::dispatch</span> (L120:5)
        </div>
      </div>
      <div className="pt-2 text-[11px] border-t border-card-border flex items-center justify-between text-foreground">
        <span className="text-muted">Impact resolution:</span>
        <span>3 files impacted · 18 callers · <span className="text-emerald-400">0 false positives</span></span>
      </div>
    </>
  );
}

function AnalyzeOutput() {
  return (
    <>
      <div className="text-muted/60">
        [tokencap] Intra-procedural taint flow analysis on src/routes/users.js...
      </div>
      <div className="space-y-1.5 pt-1">
        <div className="text-foreground flex items-center gap-2">
          <span className="px-1 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">SOURCE</span>
          <span>req.query.id (L18:12)</span>
          <span className="text-muted">→</span>
          <span className="text-emerald-400 font-bold">escapeSql()</span>
          <span className="text-muted">→</span>
          <span className="text-emerald-400">[CLEARED]</span>
        </div>
        <div className="text-foreground flex items-center gap-2">
          <span className="px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">SANITY</span>
          <span>req.body.payload (L34:10)</span>
          <span className="text-muted">→</span>
          <span className="text-muted">db.execute() (L48:4)</span>
          <span className="text-muted">→</span>
          <span className="text-emerald-400">[VERIFIED SAFE]</span>
        </div>
      </div>
      <div className="pt-2 text-muted border-t border-card-border space-y-1">
        <div>[SCHEMA] Extracted 6 DDL tables from schema.sql:</div>
        <div className="pl-3 text-foreground">
          users, subscriptions, api_keys, team_members, invoices, sessions
        </div>
      </div>
      <div className="pt-2 text-[11px] border-t border-card-border flex items-center justify-between text-foreground">
        <span className="text-muted">Static security audit:</span>
        <span className="text-emerald-400">0 vulnerabilities · 100% offline static scan</span>
      </div>
    </>
  );
}

function McpOutput() {
  return (
    <>
      <div className="text-muted/60">
        [tokencap] Starting local MCP protocol server in stdio mode...
      </div>
      <div className="text-foreground">
        <span className="text-emerald-400">✓</span> Daemon active on stdio (PID 38492) · <span className="font-bold">11 tools registered</span>
      </div>
      <div className="text-muted pt-1 space-y-1">
        <div>Auto-wired agent configurations:</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 pt-1 text-foreground">
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> .cursor/rules/tokencap.mdc
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> CLAUDE.md
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> .windsurf/rules/tokencap.md
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> AGENTS.md
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> .clinerules
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> copilot-instructions.md
          </div>
        </div>
      </div>
      <div className="pt-2 text-[11px] border-t border-card-border flex items-center justify-between text-foreground">
        <span className="text-muted">Watching filesystem:</span>
        <span className="text-foreground">Active watcher on 148 files (debounce 30s)</span>
      </div>
    </>
  );
}

export { FeaturesPreview };
