"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`text-muted hover:text-foreground transition focus-visible:outline-2 focus-visible:outline-zinc-700 focus-visible:outline-offset-2 cursor-pointer p-1 rounded-md hover:bg-card-hover/40 flex items-center justify-center ${className}`}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="relative flex items-center justify-center w-5 h-5">
        {theme === "dark" ? (
          <svg className="h-5 w-5 text-muted hover:text-amber-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-muted hover:text-indigo-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </span>
    </button>
  );
}

