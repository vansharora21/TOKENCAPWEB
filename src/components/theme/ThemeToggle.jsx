"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center justify-center w-9 h-9 rounded-lg border border-card-border bg-card/80 hover:bg-pre-bg hover:border-zinc-700/60 transition-all duration-300 ease-out cursor-pointer overflow-hidden shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] active:scale-95 ${className}`}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Subtle background glow effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Animated icon container */}
      <span className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
        <span
          className={`material-symbols-outlined text-base transition-all duration-500 transform ${
            theme === "dark"
              ? "text-amber-400 rotate-0 scale-100"
              : "text-indigo-400 rotate-180 scale-100"
          }`}
        >
          {theme === "dark" ? "light_mode" : "dark_mode"}
        </span>
      </span>
    </button>
  );
}
