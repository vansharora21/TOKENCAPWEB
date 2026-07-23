"use client";

import React, { useState, useEffect, useRef } from "react";
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
      <div className="relative w-full max-w-3xl mx-auto rounded-xl border border-card-border bg-card/45 p-8 sm:p-12 overflow-hidden text-center group">
        
        {/* Abstract Wave CTA Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-30 mix-blend-luminosity pointer-events-none transition-opacity duration-500 group-hover:opacity-35"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 space-y-6 max-w-lg mx-auto">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-card-border bg-pre-bg text-muted font-mono text-[9px] uppercase tracking-wider mx-auto">
            <span className="w-1 h-1 rounded-full bg-zinc-550 animate-pulse"></span>
            FAST INTEGRATION
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight font-sans">
            Ready to sync?
          </h2>

          {/* Description */}
          <p className="text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Stop copy-pasting directories. Automate your LLM context packaging in one command and build 10x faster.
          </p>

          {/* Copyable Terminal Input Box */}
          <div className="w-full max-w-md mx-auto rounded-lg border border-card-border bg-pre-bg overflow-hidden shadow-xl mt-6 hover:border-card-hover transition-all duration-300 group/terminal">
            {/* Terminal Window Header */}
            <div className="bg-tab-inactive px-4 py-2 border-b border-card-border flex items-center justify-between text-[10px] text-muted select-none">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-card-border"></div>
                <div className="w-2 h-2 rounded-full bg-card-border"></div>
                <div className="w-2 h-2 rounded-full bg-card-border"></div>
              </div>
              <span className="font-mono text-muted/60">bash</span>
            </div>
            
            {/* Terminal Input Block */}
            <div className="p-4 font-mono text-xs flex items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto scrollbar-none text-left">
                <span className="text-muted select-none font-bold">$</span>
                <span className="text-foreground whitespace-nowrap select-all">{command}</span>
              </div>
              
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded bg-card hover:bg-card-hover text-foreground border border-card-border px-3.5 py-1.5 text-[10px] font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-zinc-500 shrink-0"
                aria-label={copied ? "Copied to clipboard" : "Copy install command"}
              >
                <span className="material-symbols-outlined text-[12px]">
                  {copied ? "check" : "content_copy"}
                </span>
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Quickstart Guide Link */}
          <div className="pt-4">
            <Link
              href="/docs#getting-started"
              className="inline-flex items-center gap-1.5 text-[11px] text-muted hover:text-foreground transition-colors underline underline-offset-4 decoration-card-border font-medium"
            >
              <span>View the Quickstart Guide</span>
              <span className="material-symbols-outlined text-[11px] no-underline">arrow_forward</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export { FinalCTA };
