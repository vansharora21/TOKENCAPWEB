"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="space-y-6 max-w-md">
        {/* Eyebrow */}
        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-red-400">
          500 · APPLICATION ERROR
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          An unexpected error occurred. You can try reloading the page or go back to the homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">refresh</span>
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
