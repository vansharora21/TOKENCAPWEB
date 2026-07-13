"use client";

import React, { useState, useEffect, useRef } from "react";
import { CopyButton } from "@/components/shared/CopyButton";

const SESSIONS = [
  {
    cmd: "tokencap brain auth",
    steps: [
      { text: "[BRAIN] Loading .tokencap/brain/knowledge.json...", delay: 400 },
      { text: '[BRAIN] Fuzzy-matched topic "auth" to cluster "Authentication" (100% match)', delay: 500 },
      { text: "[BRAIN] Risk level: \u{1f534} CRITICAL | Files: 6", delay: 400 },
      { text: "[BRAIN] Main File: src/services/authService.ts (8 importers)", delay: 450 },
      { text: "[BRAIN] Recent Changes: June 3 - Session Validation Added", delay: 450 },
      { text: "[BRAIN] Dependencies: Authentication \u2192 API \u2192 Frontend", delay: 500 },
      { text: "[SUCCESS] Rendered terminal intelligence view for topic: auth", delay: 600 },
    ],
  },
  {
    cmd: "tokencap watch .",
    steps: [
      { text: "[SCAN] Indexing project hierarchy...", delay: 400 },
      { text: "[SCAN] Found 142 files in /src", delay: 500 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 400 },
      { text: "WAIT", delay: 1500 },
      { text: "[DIFF] + src/hooks/useToken.ts [L12-15]", delay: 300 },
      { text: "[PUSH] Streaming context to TOKENCAP.md...", delay: 500 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 400 },
      { text: "WAIT", delay: 1500 },
      { text: "[SCAN] Indexing project hierarchy...", delay: 400 },
      { text: "[INIT] TokenCap v1.1.0 active...", delay: 500 },
      { text: "[DIFF] + src/hooks/useToken.ts [L12-15]", delay: 300 },
      { text: "[DIFF] + src/auth/provider.ts [L42-88]", delay: 400 },
      { text: "[PUSH] Streaming context to TOKENCAP_MEMORY.md...", delay: 500 },
      { text: "[SUCCESS] Snapshot compiled successfully. (12,450 tokens)", delay: 600 },
    ],
  },
  {
    cmd: 'tokencap ask "how does auth work?"',
    steps: [
      { text: '[RETRIEVE] Extracting keywords from question... ("auth", "authentication")', delay: 500 },
      { text: "[RETRIEVE] Matching graph clusters... [Authentication] (98% confidence)", delay: 600 },
      { text: "[RETRIEVE] Performing 2-hop BFS import search from matched nodes...", delay: 700 },
      { text: "[RANK] Scored and ranked 24 related codebase files", delay: 500 },
      { text: "[BUDGET] Allocating 12,000 token budget for context pack...", delay: 400 },
      { text: "[BUDGET] Compressing context: 8 full, 6 outlines, 10 reference-only", delay: 600 },
      { text: "[WRITE] Generating prompt-tailored context package...", delay: 500 },
      { text: "[WRITE] Generated context: .tokencap/context/auth-context.md", delay: 400 },
      { text: "[WRITE] Generated prompt: .tokencap/context/auth-prompt.md", delay: 400 },
      { text: "[SUCCESS] Smart context retrieval completed in 1.48s.", delay: 600 },
    ],
  },
  {
    cmd: "tokencap agent --full",
    steps: [
      { text: "[PIPELINE] Initializing 8-phase Agent Intelligence pipeline...", delay: 500 },
      { text: "[PHASE 1/8] Mapping Tech Stack... (React, Next.js, Tailwind, Prisma)", delay: 600 },
      { text: "[PHASE 2/8] Analyzing Codebase Architecture & System Design...", delay: 600 },
      { text: "[PHASE 3/8] Compiling Coding Rules & Repository Conventions...", delay: 500 },
      { text: "[PHASE 4/8] Building Dependency Risk Map & Security Pathways...", delay: 700 },
      { text: "[PHASE 5/8] Identifying Target Component Review Groups...", delay: 500 },
      { text: "[PHASE 6/8] Synthesizing Discrete Agent Action Skills...", delay: 600 },
      { text: "[PHASE 7/8] Generating Agent Skill Pack (agent-pack.md)...", delay: 600 },
      { text: "[PHASE 8/8] Exporting Machine-Readable Agent Config (agent.json)...", delay: 500 },
      { text: "[WRITE] Saved Agent Pack payload to agent-pack.md", delay: 400 },
      { text: "[WRITE] Saved Agent definitions with inject hooks to agent.json", delay: 400 },
      { text: "[SUCCESS] Agent Intelligence Pack generated successfully.", delay: 600 },
    ],
  },
  {
    cmd: "tokencap agent --execution",
    steps: [
      { text: "[PIPELINE] Initializing Execution Contract pipeline...", delay: 400 },
      { text: "[STATE] Compiling current project state tracker (execution-state.md)...", delay: 450 },
      { text: "[ALWAYS] Applying codebase tech-stack principles (engineering-principles.md)...", delay: 400 },
      { text: "[PLAN] Building decision trees & mapping utilities (decision-framework.md)...", delay: 450 },
      { text: "[DISCOVER] Setting up 12-step engineering workflow (execution-ladder.md)...", delay: 450 },
      { text: "[IMPLEMENT] Activating Scope Drift Detection logic (execution-scope.md)...", delay: 500 },
      { text: "[VERIFY] Creating auto-detected test/build criteria (verification-rules.md)...", delay: 400 },
      { text: "[REVIEW] Scaffolding change classifications (change-classification.md)...", delay: 450 },
      { text: "[RECOVERY] Preparing structured recovery protocols (recovery-mode.md)...", delay: 400 },
      { text: "[WRITE] Generated 8 contract files under .tokencap/agent/execution-contract/", delay: 500 },
      { text: "[SUCCESS] Execution Contract v1.1.0 generated successfully.", delay: 600 },
    ],
  },
  {
    cmd: "tokencap constitution",
    steps: [
      { text: "[CONSTITUTION] Building Invariant Analysis Graph...", delay: 400 },
      { text: "[CONSTITUTION] Inferred 14 API stability boundaries", delay: 450 },
      { text: "[CONSTITUTION] Inferred 8 database schema invariants", delay: 400 },
      { text: "[CONSTITUTION] Merged 3 manual rules from tokencap.constitution.yaml", delay: 450 },
      { text: "[CONSTITUTION] Severity Summary: 2 IMMUTABLE, 4 CRITICAL, 8 HIGH, 6 WARNING", delay: 500 },
      { text: "[SCORE] Calculated health score: 92 / 100", delay: 400 },
      { text: "[WRITE] Rendered HTML UI to .tokencap/constitution/constitution-graph.html", delay: 500 },
      { text: "[WRITE] Compiled law sheets under .tokencap/constitution/", delay: 450 },
      { text: "[SUCCESS] Repository Constitution v1.2.0 compiled successfully.", delay: 600 },
    ],
  },
];

// Lookup table: tag prefix → [className, color]
const TAG_COLORS = {
  "[BRAIN]": ["text-[#c084fc]", "text-[#c084fc]"],
  "[INIT]": ["text-[#4edea3]", "text-[#4edea3]"],
  "[PUSH]": ["text-[#c084fc]", "text-[#c084fc]"],
  "[SUCCESS]": ["text-[#4edea3]", "text-[#4edea3]"],
  "[DIFF]": ["text-zinc-500", "text-zinc-500"],
  "[SCAN]": ["text-zinc-500", "text-zinc-500"],
  "[RETRIEVE]": ["text-amber-400", "text-amber-400"],
  "[RANK]": ["text-blue-400", "text-blue-400"],
  "[BUDGET]": ["text-indigo-400", "text-indigo-400"],
  "[WRITE]": ["text-fuchsia-400", "text-fuchsia-400"],
  "[PIPELINE]": ["text-sky-400", "text-sky-400"],
  "[STATE]": ["text-cyan-400", "text-cyan-400"],
  "[ALWAYS]": ["text-yellow-400", "text-yellow-400"],
  "[PLAN]": ["text-blue-400", "text-blue-400"],
  "[DISCOVER]": ["text-indigo-400", "text-indigo-400"],
  "[IMPLEMENT]": ["text-fuchsia-400", "text-fuchsia-400"],
  "[VERIFY]": ["text-[#4edea3]", "text-[#4edea3]"],
  "[REVIEW]": ["text-rose-400", "text-rose-400"],
  "[RECOVERY]": ["text-red-400", "text-red-400"],
  "[CONSTITUTION]": ["text-rose-400", "text-rose-400"],
  "[SCORE]": ["text-cyan-400", "text-cyan-400"],
};

// Special case: [PHASE ...] tags that have variable content inside brackets
function parseTerminalLine(text) {
  // Handle [PHASE X/Y] dynamically
  if (text.startsWith("[PHASE")) {
    const closeIdx = text.indexOf("]");
    if (closeIdx !== -1) {
      const phase = text.substring(0, closeIdx + 1);
      const rest = text.substring(closeIdx + 1);
      return (
        <span className="text-zinc-300">
          <span className="text-rose-400 font-bold">{phase}</span> {rest}
        </span>
      );
    }
  }

  // Handle [DIFF] + special formatting
  if (text.startsWith("[DIFF]")) {
    const content = text.substring(6);
    if (content.trim().startsWith("+")) {
      const rest = content.trim().substring(1).trim();
      const parts = rest.split(" ");
      const filePath = parts[0];
      const lineRange = parts.slice(1).join(" ");
      return (
        <span className="text-zinc-300">
          <span className="text-zinc-500 font-bold">[DIFF]</span>{" "}
          <span className="text-[#4edea3] font-bold">+</span>{" "}
          <span className="text-zinc-200">{filePath}</span>{" "}
          <span className="text-zinc-500">{lineRange}</span>
        </span>
      );
    }
  }

  // Generic tag lookup
  for (const [tag, [tagClass]] of Object.entries(TAG_COLORS)) {
    if (text.startsWith(tag)) {
      return (
        <span className="text-zinc-300">
          <span className={`${tagClass} font-bold`}>{tag}</span> {text.substring(tag.length)}
        </span>
      );
    }
  }

  return <span className="text-zinc-300">{text}</span>;
}

function ProductPreview() {
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [typedCommand, setTypedCommand] = useState("");
  const [lines, setLines] = useState([]);
  const terminalContainerRef = useRef(null);
  const cursorRef = useRef(null);

  const activeSession = SESSIONS[currentSessionIndex];

  // Scroll to bottom of the terminal container only
  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [lines, typedCommand]);

  // Terminal state machine loop
  useEffect(() => {
    let timeoutId;

    if (currentStepIndex === -1) {
      const targetCmd = activeSession.cmd;
      if (typedCommand.length < targetCmd.length) {
        const nextChar = targetCmd[typedCommand.length];
        timeoutId = setTimeout(() => {
          setTypedCommand((prev) => prev + nextChar);
        }, Math.random() * 50 + 40);
      } else {
        timeoutId = setTimeout(() => {
          setCurrentStepIndex(0);
        }, 600);
      }
    } else if (currentStepIndex < activeSession.steps.length) {
      const currentStep = activeSession.steps[currentStepIndex];
      timeoutId = setTimeout(() => {
        if (currentStep.text !== "WAIT") {
          setLines((prev) => [...prev, currentStep.text]);
        }
        setCurrentStepIndex((prev) => prev + 1);
      }, currentStep.delay);
    } else {
      timeoutId = setTimeout(() => {
        setTypedCommand("");
        setLines([]);
        setCurrentStepIndex(-1);
        setCurrentSessionIndex((prev) => (prev + 1) % SESSIONS.length);
      }, 4000);
    }

    return () => clearTimeout(timeoutId);
  }, [currentSessionIndex, currentStepIndex, typedCommand, activeSession]);

  return (
    <div
      className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-xl shadow-2xl overflow-hidden relative group"
      role="log"
      aria-live="polite"
      aria-label="TokenCap terminal demo"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-emerald-600/10 blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-[#141416] select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10" />
        </div>
        <div className="text-[11px] font-mono text-zinc-500">
          tokencap terminal &mdash; {activeSession.cmd.split(" ")[1]}
        </div>
        <div className="shrink-0">
          <CopyButton text={activeSession.cmd} />
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div ref={terminalContainerRef} className="relative z-10 bg-black/45 p-6 h-[380px] overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        <div className="space-y-2">
          {/* Prompt + Typed Command */}
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="text-purple-400 font-bold select-none">$</span>
            <span className="text-white font-medium">{typedCommand}</span>
            {currentStepIndex === -1 && (
              <span ref={cursorRef} className="w-2 h-4 bg-[#d2bbff] inline-block animate-[blink_1s_step-end_infinite]" />
            )}
          </div>

          {/* Executed Logs */}
          {lines.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap animate-fade-in">
              {parseTerminalLine(line)}
            </div>
          ))}

          {/* Running/End Prompt */}
          {currentStepIndex >= 0 && currentStepIndex < activeSession.steps.length && (
            <div className="flex items-center gap-1 mt-1 text-zinc-600 text-xs">
              <span className="animate-pulse">&#x25CF;</span>
              <span>Running...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProductPreview };
