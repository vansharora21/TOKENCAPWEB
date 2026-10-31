"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { themes } from "@/data/themes";
import { useTheme } from "./ThemeProvider";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";

/** A theme's ground with its accent laid across it, as a small chip. */
function Swatch({ theme, className }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-block overflow-hidden rounded-full ring-1 ring-repo-ink/20", className)}
      style={{ background: theme.scene.ground }}
    >
      <span className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: theme.scene.block }} />
      <span className="absolute right-[18%] top-[22%] size-[30%] rounded-full" style={{ background: theme.scene.accent }} />
    </span>
  );
}

/** Radio group of themes. Arrow keys move the choice, as in a native radio group. */
function ThemeOptions({ layout, onPicked }) {
  const { theme, setTheme } = useTheme();
  const pick = (id) => { setTheme(id); onPicked?.(); };
  const onKeyDown = (e) => {
    const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const index = themes.findIndex((t) => t.id === theme);
    const next = themes[(index + step + themes.length) % themes.length];
    setTheme(next.id);
    e.currentTarget.querySelector(`[data-theme-id="${next.id}"]`)?.focus();
  };

  return (
    <div role="radiogroup" aria-label="Theme" onKeyDown={onKeyDown} className={layout === "row" ? "grid grid-cols-4 gap-2" : "flex flex-col gap-1"}>
      {themes.map((t) => {
        const checked = t.id === theme;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            data-theme-id={t.id}
            onClick={() => pick(t.id)}
            className={cn(
              layout === "row"
                ? "flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-lg bg-repo-panel text-xs text-repo-muted"
                : "flex min-h-10 items-center gap-3 rounded-md px-2.5 text-sm text-repo-muted hover:bg-repo-ink/5 hover:text-repo-ink",
              checked && "text-repo-ink ring-1 ring-repo-ink/40",
              focusRing,
            )}
          >
            <Swatch theme={t} className={layout === "row" ? "size-6" : "size-5"} />
            {t.label}
          </button>
        );
      })}
    </div>
  );
}

/** Phone menu: all themes visible at once. */
export function ThemeRow() {
  return <ThemeOptions layout="row" />;
}

/** Desktop navbar: a palette button that opens the list, below it or (`up`) above it. */
export function ThemePicker({ placement = "down", buttonClassName = "flex size-10 items-center justify-center rounded-md" }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    rootRef.current.querySelector('[aria-checked="true"]')?.focus();
    const onKey = (e) => { if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    const onDown = (e) => { if (!rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const current = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Theme: ${current.label}. Change theme`}
        className={cn(buttonClassName, focusRing)}
      >
        <Swatch theme={current} className="size-5" />
      </button>
      {open && (
        <div className={cn("absolute right-0 z-50 w-44", placement === "up" ? "bottom-12" : "top-12", "rounded-lg bg-repo-panel p-1.5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.45)] ring-1 ring-repo-ink/10")}>
          <ThemeOptions layout="list" onPicked={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
