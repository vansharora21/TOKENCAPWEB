"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

function Hero() {
  const [copied, setCopied] = useState(false);
  const commandText = "npm install -g tokencap";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left max-w-xl py-6"
    >
      {/* Title */}
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] font-display"
      >
        Your codebase. <br />
        Compressed. <br />
        Ready to hand off.
      </motion.h1>

      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="mt-6 text-sm sm:text-base text-muted leading-relaxed max-w-md"
      >
        Stop wasting tokens. TokenCap snapshots your workspace into structured, AI-ready prompts with files, imports, Git context, and invariants.
      </motion.p>

      {/* Action Block */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full"
      >
        {/* Copy command input box */}
        <div className="flex items-center bg-pre-bg border border-card-border rounded-lg overflow-hidden flex-grow max-w-xs transition-colors hover:border-card-hover">
          <span className="text-muted font-mono text-xs pl-3.5 select-none">$</span>
          <input 
            type="text" 
            readOnly 
            value={commandText}
            className="bg-transparent border-none text-foreground/90 font-mono text-[11px] px-2 py-3 focus:outline-none flex-grow w-full select-all"
          />
          <button
            onClick={handleCopy}
            className="text-muted hover:text-foreground px-3.5 flex items-center justify-center border-l border-card-border transition-colors cursor-pointer"
            title="Copy command"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">
              {copied ? "check" : "content_copy"}
            </span>
          </button>
        </div>

        <Link
          href="/reviews"
          className="text-center bg-foreground text-background hover:opacity-90 font-medium px-5 py-3 rounded-lg active:scale-[0.98] transition-all text-xs flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-xs">star</span>
          Leave a Review
        </Link>

        <Link
          href="/docs"
          className="text-center border border-card-border hover:border-card-hover bg-card hover:bg-pre-bg text-foreground/80 hover:text-foreground font-medium px-5 py-3 rounded-lg active:scale-[0.98] transition-all text-xs"
        >
          View Docs
        </Link>
      </motion.div>
    </motion.section>
  );
}

export { Hero };