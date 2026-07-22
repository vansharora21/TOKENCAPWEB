"use client";

import React, { useState, useEffect } from "react";
import { CopyButton } from "@/components/shared/CopyButton";

const SESSIONS = [
  {
    tab: "make",
    cmd: "tokencap make --profile balanced",
    logs: [
      "[SCAN] Indexing workspace hierarchy...",
      "[SCAN] Found 142 source files in /src",
      "[CACHE] Loading dependency cache...",
      "[DIFF] Read Git branch state: feature/auth-refactor",
      "[DIFF] Detected 3 changed files (+120 rank score)",
      "[INTELLIGENCE] Walking dependency BFS tree...",
      "[INTELLIGENCE] Rebuilding dirty nodes selectively (74ms)",
      "[WRITE] Exported snapshot -> TOKENCAP.md (12,450 tokens)",
      "[WRITE] Exported outline   -> TOKENCAP_GRAPH.md",
      "[SUCCESS] Snapshot compiled successfully. (Duration: 88ms)"
    ]
  },
  {
    tab: "ask",
    cmd: "tokencap ask \"How does authentication work?\"",
    logs: [
      "[RETRIEVAL] Parsing question: 'How does authentication work?'",
      "[RETRIEVAL] Extracted keywords: [\"authentication\", \"auth\"]",
      "[BRAIN] Matching keyword 'auth' to cluster 'Authentication' (100%)",
      "[GRAPH] Running BFS traversal from matching files (2 hops)...",
      "[RANK] Scoring files by composite relevance (Graph + Memory + Diff)...",
      "[BUDGET] Fitting files into budget (12,000 tokens)...",
      "[WRITE] Saved prompt template -> prompt.md",
      "[SUCCESS] Context retrieved. Ready to hand off to AI agent."
    ]
  },
  {
    tab: "mcp",
    cmd: "tokencap mcp --init",
    logs: [
      "[MCP] Detecting active workspace IDE hosts...",
      "[MCP] Found VS Code settings under .vscode/",
      "[MCP] Found Cursor configurations under .cursor/",
      "[WRITE] Appended TokenCap stdio server to Cursor configs",
      "[WRITE] Appended TokenCap stdio server to VS Code configs",
      "[DAEMON] Spawning background workspace filesystem watcher...",
      "[SUCCESS] Model Context Protocol (MCP) server registered globally."
    ]
  },
  {
    tab: "brain",
    cmd: "tokencap brain auth --impact",
    logs: [
      "[BRAIN] Querying local repository index...",
      "[BRAIN] Fuzzy-matched topic 'auth' to cluster 'Authentication'",
      "[BRAIN] Risk Profile: CRITICAL | Files involved: 6",
      "[BRAIN] Core Module: src/services/authService.ts (8 importers)",
      "[BRAIN] Recent change: 'Session Validation Added' (June 3)",
      "[BRAIN] Dependency mapping: Authentication -> API -> Frontend",
      "[SUCCESS] Codebase intelligence view compiled for topic 'auth'"
    ]
  },
  {
    tab: "graph",
    cmd: "tokencap graph --open",
    logs: [
      "[GRAPH] Parsing relative imports for 142 JS/TS modules...",
      "[GRAPH] Classified 12 component nodes, 6 utility nodes, 4 route nodes",
      "[RISK] Analyzing file risk tiers based on import degree...",
      "[WRITE] Exported Cytoscape data -> .tokencap/graph/graph-data.json",
      "[BROWSER] Spawning Obsidian-style visual graph explorer...",
      "[SUCCESS] Interactive viewer running at http://localhost:4050"
    ]
  },
  {
    tab: "diff",
    cmd: "tokencap diff --staged",
    logs: [
      "[DIFF] Reading git staged file index...",
      "[DIFF] Found edits: src/services/authService.ts, prisma/schema.prisma",
      "[SEMANTIC] Classifying modification layers: [Authentication, Database]",
      "[SCAN] Scanning for breaking changes...",
      "[RISK] Computed risk level: HIGH (Database Schema modified)",
      "[WRITE] Generated review prompt -> review-prompt.md",
      "[SUCCESS] Semantic Change Intelligence report completed."
    ]
  },
  {
    tab: "constitution",
    cmd: "tokencap constitution --diff",
    logs: [
      "[CONSTITUTION] Loading rule invariants...",
      "[CONSTITUTION] Checked 14 API stability rules",
      "[CONSTITUTION] Checked 8 database schema invariants",
      "[CONSTITUTION] Score: 94 / 100",
      "[CONSTITUTION] Checked category limits: 0 IMMUTABLE violations",
      "[WRITE] Saved rules list -> .tokencap/constitution/constitution.md",
      "[SUCCESS] Repository Constitution verification passed."
    ]
  },
  {
    tab: "agent",
    cmd: "tokencap agent --execution",
    logs: [
      "[CONTRACT] Compiling 8-phase execution contract...",
      "[CONTRACT] Wrote state tracker (execution-state.md)",
      "[CONTRACT] Wrote tech-stack rules (engineering-principles.md)",
      "[CONTRACT] Setup scope gate (execution-scope.md)",
      "[CONTRACT] Saved recovery models (recovery-mode.md)",
      "[WRITE] Generated contract files under .tokencap/agent/execution-contract/",
      "[SUCCESS] AI Agent onboarding contract generated successfully."
    ]
  },
  {
    tab: "debug",
    cmd: "tokencap debug --start -- npm test",
    logs: [
      "[DEBUG] Initializing debug memory session...",
      "[EXEC] Running command: 'npm test'...",
      "[EXEC] Intercepted 1 failed test case (Auth Validation)",
      "[PARSE] Extracted stack trace: src/services/authService.ts line 42",
      "[TIMELINE] Logged failure to debug timeline (active.md)",
      "[SUCCESS] Debug session active. Edit files and run 'tokencap debug --end'"
    ]
  }
];

function ProductPreview() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const activeSession = SESSIONS[activeTabIdx];

  // Automatic cycling loop
  useEffect(() => {
    if (isManual) return;

    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % SESSIONS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isManual]);

  const selectTabManually = (idx) => {
    setActiveTabIdx(idx);
    setIsManual(true);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl border border-card-border bg-card shadow-xl overflow-hidden relative select-none">
      {/* Tab Selectors (Top Bar) */}
      <div className="flex border-b border-card-border bg-tab-inactive overflow-x-auto scrollbar-none">
        <div className="flex px-4 py-1.5 gap-1 overflow-x-auto scrollbar-none">
          {SESSIONS.map((session, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={session.tab}
                onClick={() => selectTabManually(idx)}
                className={`px-3 py-1.5 rounded-md font-mono text-[10px] tracking-tight transition-all active:scale-[0.98] border ${isActive ? "bg-tab-active border-card-border text-foreground font-bold" : "bg-transparent border-transparent text-muted hover:text-foreground"}`}
                type="button"
              >
                {session.tab}
              </button>
            );
          })}
        </div>
        <div className="ml-auto flex items-center pr-4 shrink-0">
          <CopyButton text={activeSession.cmd} />
        </div>
      </div>

      {/* Screen Frame */}
      <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-muted bg-pre-bg/40 h-[280px] overflow-y-auto scrollbar-none text-left">
        <div className="space-y-1.5">
          {/* Prompt */}
          <div className="flex items-center gap-1.5 text-muted pb-1.5 border-b border-card-border/60 mb-3">
            <span className="text-muted font-bold select-none">$</span>
            <span className="text-foreground font-bold">{activeSession.cmd}</span>
          </div>

          {/* Log Output Lines */}
          {activeSession.logs.map((log, idx) => {
            let logColor = "text-muted";
            if (log.startsWith("[SUCCESS]")) logColor = "text-emerald-600 dark:text-emerald-400 font-bold";
            else if (log.startsWith("[WRITE]")) logColor = "text-foreground/80";
            else if (log.startsWith("[DIFF]")) logColor = "text-cyan-600 dark:text-cyan-400";
            else if (log.startsWith("[SCAN]")) logColor = "text-muted/80";
            else if (log.startsWith("[CACHE]")) logColor = "text-muted/80";
            else if (log.startsWith("[RETRIEVAL]")) logColor = "text-muted/90";
            else if (log.startsWith("[SEMANTIC]")) logColor = "text-muted/90";
            else if (log.startsWith("[EXEC]")) logColor = "text-muted/90";

            return (
              <div 
                key={idx} 
                className={`whitespace-pre-wrap font-mono ${logColor}`}
              >
                {log}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { ProductPreview };
