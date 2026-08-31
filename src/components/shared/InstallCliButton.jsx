"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function InstallCliButton({
  command = "npm install -g tokencap",
  label = "Install via npm",
  className = "",
  showCommandOnIdle = false,
}) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

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
      setShowToast(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const defaultClasses =
    "inline-flex items-center justify-center gap-2 px-4 py-2 border border-card-border bg-pre-bg hover:bg-card-hover text-foreground rounded text-xs font-bold font-mono transition-all active:scale-[0.98] cursor-pointer";

  return (
    <>
      <button
        onClick={handleCopy}
        type="button"
        className={className || defaultClasses}
        aria-label="Copy install command"
      >
        <span className="material-symbols-outlined text-[14px]">
          {copied ? "check" : "download"}
        </span>
        <span>
          {copied ? "Copied!" : showCommandOnIdle ? `$ ${command}` : label}
        </span>
      </button>

      {/* Floating Minimalist Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border border-zinc-800 bg-black text-white font-mono text-xs select-none backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Command copied to clipboard</span>
            <button
              onClick={() => setShowToast(false)}
              className="ml-2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss toast"
            >
              <span className="material-symbols-outlined text-xs">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
