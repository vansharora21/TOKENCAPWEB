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
      {/* Wide Landscape Rectangular Container */}
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl border border-zinc-800 bg-black p-8 sm:p-14 overflow-hidden text-center group shadow-2xl">
        
        {/* Abstract Wave Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none transition-opacity duration-500 group-hover:opacity-45"
          style={{ backgroundImage: "url('/cta-bg.png')" }}
        />

        {/* Content - 100% High Visibility Crisp Typography */}
        <div className="relative z-10 space-y-6 max-w-lg mx-auto flex flex-col items-center justify-center">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight font-sans">
            Ready to sync?
          </h2>

          {/* Description */}
          <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-sans">
            Stop copy-pasting directories. Automate your LLM context packaging in one command and build 10x faster.
          </p>

          {/* Copyable Command Input Box - Clean single-line bar without bash header */}
          <div className="w-full max-w-md mx-auto rounded-xl border border-zinc-700 bg-zinc-900/90 p-3.5 sm:p-4 font-mono text-xs flex items-center justify-between gap-4 shadow-xl hover:border-zinc-500 transition-all duration-300">
            <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none text-left min-w-0">
              <span className="text-zinc-400 select-none font-bold">$</span>
              <span className="text-white font-semibold whitespace-nowrap select-all">{command}</span>
            </div>
            
            <button
              onClick={handleCopy}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all duration-200 active:scale-[0.95] cursor-pointer shrink-0 shadow-md"
              aria-label={copied ? "Copied to clipboard" : "Copy install command"}
              title={copied ? "Copied!" : "Copy command"}
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? "check" : "content_copy"}
              </span>
            </button>
          </div>

          {/* Quickstart Guide Link */}
          <div className="pt-2">
            <Link
              href="/docs#getting-started"
              className="inline-flex items-center gap-1.5 text-xs text-white font-medium hover:text-zinc-300 transition-colors underline underline-offset-4 decoration-zinc-600"
            >
              <span>View the Quickstart Guide</span>
              <span className="material-symbols-outlined text-[13px] no-underline">arrow_forward</span>
            </Link>
          </div>

          {/* Product Hunt Badge */}
          <div className="pt-1">
            <a
              href="https://www.producthunt.com/products/tokencap-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tokencap-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md focus-visible:outline-2 focus-visible:outline-zinc-400 focus-visible:outline-offset-4"
              aria-label="View TokenCap on Product Hunt"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1218192&theme=dark&t=1786476363151"
                alt="TokenCap - Give AI coding agents the context they actually need. | Product Hunt"
                width="240"
                height="50"
              />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export { FinalCTA };
