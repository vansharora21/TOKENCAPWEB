"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);
  const command = "npm install -g tokencap";

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(command);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = command;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <section className="py-12 relative">
      <div className="relative w-full max-w-3xl mx-auto rounded-3xl border border-white/5 bg-[#09090b]/40 p-8 sm:p-12 overflow-hidden shadow-[0_0_50px_-10px_rgba(124,58,237,0.1)] text-center group">
        
        {/* Glow backdrop */}
        <div className="absolute -inset-10 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl pointer-events-none opacity-60 group-hover:opacity-80 transition duration-1000"></div>

        {/* Content */}
        <div className="relative z-10 space-y-6 max-w-lg mx-auto">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-wider font-semibold mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
            FAST INTEGRATION
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-vorcas">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 anim-heading-gradient">sync?</span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Stop copy-pasting files. Automate your LLM context packaging in one command and build 10x faster.
          </p>

          {/* Copyable Terminal Input Box */}
          <div className="w-full max-w-md mx-auto rounded-xl border border-white/5 bg-[#050507]/90 overflow-hidden shadow-2xl mt-6 hover:border-purple-500/30 transition-all duration-300 group/terminal">
            {/* Terminal Window Header */}
            <div className="bg-[#0f0f12] px-4 py-2.5 border-b border-white/5 flex items-center justify-between text-[10px] text-zinc-500 select-none">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover/terminal:bg-red-500/40 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover/terminal:bg-yellow-500/40 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover/terminal:bg-green-500/40 transition-colors"></div>
              </div>
              <span className="font-mono text-zinc-600">bash &mdash; install</span>
            </div>
            
            {/* Terminal Input Block */}
            <div className="p-4 font-mono text-xs sm:text-sm flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-none text-left">
                <span className="text-purple-400 select-none font-bold">$</span>
                <span className="text-zinc-200 whitespace-nowrap select-all">{command}</span>
              </div>
              
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 hover:scale-[1.03] text-white px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.2)] focus-visible:outline-2 focus-visible:outline-purple-400 shrink-0"
                aria-label={copied ? "Copied to clipboard" : "Copy install command"}
              >
                <span className="material-symbols-outlined text-[13px]">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Quickstart Guide Link */}
          <div className="pt-4">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-purple-400 transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-purple-500/30 font-medium"
            >
              <span>Or view the Quickstart Guide</span>
              <span className="material-symbols-outlined text-[12px] no-underline">arrow_forward</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export { FinalCTA };
