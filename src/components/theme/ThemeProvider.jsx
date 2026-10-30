"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { themeById, DEFAULT_THEME, SITE_DEFAULT_THEME } from "@/data/themes";

const STORAGE_KEY = "tokencap-theme";

const ThemeContext = createContext({
  theme: SITE_DEFAULT_THEME,
  mode: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

/** Saved value, upgrading the old two-theme values ("dark" / "light"). */
function readSavedTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && themeById[saved]) return saved;
  if (saved === "dark" || saved === "light") return DEFAULT_THEME[saved];
  return SITE_DEFAULT_THEME;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(SITE_DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);
  const mode = themeById[theme].mode;

  useEffect(() => {
    setTheme(readSavedTheme());
    setMounted(true);
  }, []);

  // <html> carries the theme id for the new tokens and the light/dark class
  // the older pages still style against.
  useEffect(() => {
    if (!mounted) return;
    const root = window.document.documentElement;
    root.dataset.theme = theme;
    root.classList.toggle("dark", mode === "dark");
    root.classList.toggle("light", mode === "light");
    root.style.colorScheme = mode;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mode, mounted]);

  // Kept for older callers: flips between the default light and dark themes.
  const toggleTheme = () => setTheme(mode === "dark" ? DEFAULT_THEME.light : DEFAULT_THEME.dark);

  // Prevent hydration layout shift by using a client-side wrapper after mounting
  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleTheme }}>
      <div className={mounted ? "" : "opacity-0 transition-opacity duration-200"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
