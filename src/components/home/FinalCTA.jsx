"use client";

import { useState } from "react";
import Link from "next/link";

function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g tokencap";

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.warn("Clipboard API not available in this environment.");
      }
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <section className="flex flex-col items-center text-center py-12 max-w-2xl mx-auto space-y-6">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        Ready to sync?
      </h2>

      {/* Description */}
      <p className="text-zinc-400 text-sm sm:text-base max-w-md">
        Ship faster with perfect context.
      </p>

      {/* Copyable Command Input Box */}
      <div className="flex w-full max-w-md items-center justify-between rounded-lg border border-white/5 bg-[#0a0a0c] p-1.5 pl-4 font-mono text-xs sm:text-sm">
        <span className="text-zinc-400 select-all overflow-x-auto whitespace-nowrap scrollbar-none pr-2">
          {command}
        </span>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-semibold px-4 py-1.5 text-xs transition duration-200 focus:outline-none focus:ring-1 focus:ring-purple-400"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Quickstart Guide Link */}
      <div className="pt-2">
        <Link
          href="/docs/getting-started"
          className="text-xs sm:text-sm text-zinc-400 hover:text-white transition underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
        >
          Or view the Quickstart Guide
        </Link>
      </div>
    </section>
  );
}

export { FinalCTA };