"use client";

import React, { useState, useEffect, useRef } from "react";
import { CopyButton } from "@/components/shared/CopyButton";

const SESSIONS = [
  {
    cmd: "tokencap brain auth",
    steps: [
      { text: "[BRAIN] Loading .tokencap/brain/knowledge.json...", delay: 400 },
      { text: "[BRAIN] Fuzzy-matched topic \"auth\" to cluster \"Authentication\" (100% match)", delay: 500 },
      { text: "[BRAIN] Risk level: 🔴 CRITICAL | Files: 6", delay: 400 },
      { text: "[BRAIN] Main File: src/services/authService.ts (8 importers)", delay: 450 },
      { text: "[BRAIN] Recent Changes: June 3 - Session Validation Added", delay: 450 },
      { text: "[BRAIN] Dependencies: Authentication → API → Frontend", delay: 500 },
      { text: "[SUCCESS] Rendered terminal intelligence view for topic: auth", delay: 600 }
    ]
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
      { text: "[SUCCESS] Snapshot compiled successfully. (12,450 tokens)", delay: 600 }
    ]
  },
  {
    cmd: "tokencap ask \"how does auth work?\"",
    steps: [
      { text: "[RETRIEVE] Extracting keywords from question... (\"auth\", \"authentication\")", delay: 500 },
      { text: "[RETRIEVE] Matching graph clusters... [Authentication] (98% confidence)", delay: 600 },
      { text: "[RETRIEVE] Performing 2-hop BFS import search from matched nodes...", delay: 700 },
      { text: "[RANK] Scored and ranked 24 related codebase files", delay: 500 },
      { text: "[BUDGET] Allocating 12,000 token budget for context pack...", delay: 400 },
      { text: "[BUDGET] Compressing context: 8 full, 6 outlines, 10 reference-only", delay: 600 },
      { text: "[WRITE] Generating prompt-tailored context package...", delay: 500 },
      { text: "[WRITE] Generated context: .tokencap/context/auth-context.md", delay: 400 },
      { text: "[WRITE] Generated prompt: .tokencap/context/auth-prompt.md", delay: 400 },
      { text: "[SUCCESS] Smart context retrieval completed in 1.48s.", delay: 600 }
    ]
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
      { text: "[SUCCESS] Agent Intelligence Pack generated successfully.", delay: 600 }
    ]
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
      { text: "[SUCCESS] Execution Contract v1.1.0 generated successfully.", delay: 600 }
    ]
  }
];

const parseTerminalLine = (text) => {
  if (text.startsWith("[BRAIN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-[#c084fc] font-bold">[BRAIN]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[INIT]")) {
    return (
      <span className="text-[#4edea3]">
        <span className="font-bold">[INIT]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[PUSH]")) {
    return (
      <span className="text-[#c084fc]">
        <span className="font-bold">[PUSH]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[SUCCESS]")) {
    return (
      <span className="text-[#4edea3]">
        <span className="font-bold">[SUCCESS]</span> {text.substring(9)}
      </span>
    );
  }
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
    return (
      <span className="text-zinc-300">
        <span className="text-zinc-500 font-bold">[DIFF]</span> {content}
      </span>
    );
  }
  if (text.startsWith("[SCAN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-zinc-500 font-bold">[SCAN]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[RETRIEVE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-amber-400 font-bold">[RETRIEVE]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[RANK]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-blue-400 font-bold">[RANK]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[BUDGET]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-indigo-400 font-bold">[BUDGET]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[WRITE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-fuchsia-400 font-bold">[WRITE]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[PIPELINE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-sky-400 font-bold">[PIPELINE]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[STATE]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-cyan-400 font-bold">[STATE]</span> {text.substring(7)}
      </span>
    );
  }
  if (text.startsWith("[ALWAYS]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-yellow-400 font-bold">[ALWAYS]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[PLAN]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-blue-400 font-bold">[PLAN]</span> {text.substring(6)}
      </span>
    );
  }
  if (text.startsWith("[DISCOVER]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-indigo-400 font-bold">[DISCOVER]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[IMPLEMENT]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-fuchsia-400 font-bold">[IMPLEMENT]</span> {text.substring(11)}
      </span>
    );
  }
  if (text.startsWith("[VERIFY]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-[#4edea3] font-bold">[VERIFY]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[REVIEW]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-rose-400 font-bold">[REVIEW]</span> {text.substring(8)}
      </span>
    );
  }
  if (text.startsWith("[RECOVERY]")) {
    return (
      <span className="text-zinc-300">
        <span className="text-red-400 font-bold">[RECOVERY]</span> {text.substring(10)}
      </span>
    );
  }
  if (text.startsWith("[PHASE")) {
    const closeBracketIndex = text.indexOf("]");
    if (closeBracketIndex !== -1) {
      const phase = text.substring(0, closeBracketIndex + 1);
      const rest = text.substring(closeBracketIndex + 1);
      return (
        <span className="text-zinc-300">
          <span className="text-rose-400 font-bold">{phase}</span> {rest}
        </span>
      );
    }
  }
  return <span className="text-zinc-300">{text}</span>;
};

function ProductPreview() {
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1); // -1 = typing command
  const [typedCommand, setTypedCommand] = useState("");
  const [lines, setLines] = useState([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalContainerRef = useRef(null);

  const activeSession = SESSIONS[currentSessionIndex];

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

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
      // Typing command
      const targetCmd = activeSession.cmd;
      if (typedCommand.length < targetCmd.length) {
        const nextChar = targetCmd[typedCommand.length];
        timeoutId = setTimeout(() => {
          setTypedCommand((prev) => prev + nextChar);
        }, Math.random() * 50 + 40); // typing speed
      } else {
        // Command typing finished, wait a bit before executing
        timeoutId = setTimeout(() => {
          setCurrentStepIndex(0);
        }, 600);
      }
    } else if (currentStepIndex < activeSession.steps.length) {
      // Executing log steps
      const currentStep = activeSession.steps[currentStepIndex];

      timeoutId = setTimeout(() => {
        if (currentStep.text !== "WAIT") {
          setLines((prev) => [...prev, currentStep.text]);
        }
        setCurrentStepIndex((prev) => prev + 1);
      }, currentStep.delay);
    } else {
      // Session finished, show results for 4 seconds, then transition to next command
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
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-xl shadow-2xl overflow-hidden relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-emerald-600/10 blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

      {/* Terminal Title Bar */}
      <div className="relative z-10 flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-[#141416] select-none">
        {/* Subtle Dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10"></div>
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10"></div>
          <div className="w-3 h-3 rounded-full bg-white/5 border border-white/10"></div>
        </div>
        {/* Command title */}
        <div className="text-[11px] font-mono text-zinc-500">
          tokencap terminal &mdash; {activeSession.cmd.split(" ")[1]}
        </div>
        {/* Action Button (Copy active command) */}
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
              <span className={`w-2 h-4 bg-[#d2bbff] inline-block ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
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
              <span className="animate-pulse">●</span>
              <span>Running...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export { ProductPreview };