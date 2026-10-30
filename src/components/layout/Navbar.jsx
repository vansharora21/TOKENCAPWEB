"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemePicker, ThemeRow } from "@/components/theme/ThemePicker";
import { primaryNav, githubUrl } from "@/data/navigation";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";

function isActive(item, pathname) {
  return (item.match || [item.href]).some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function openSearch() {
  window.dispatchEvent(new CustomEvent("open-search"));
}

/** Two bars that turn into an X; the motion lives in globals.css (.menu-bars). */
function MenuIcon({ open }) {
  return (
    <span className="menu-bars" data-open={open} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

/**
 * Phone menu: a full-height sheet where each destination is a slab that rises
 * out of the ground, the way dependents rise in the home-page model.
 */
function MobileMenu({ pathname, onClose, toggleRef }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    const toggle = toggleRef.current;
    panel.querySelector("a")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Keep Tab inside the sheet and the toggle; Escape closes it.
    const onKey = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const focusable = [toggle, ...panel.querySelectorAll("a, button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      toggle?.focus();
    };
  }, [onClose, toggleRef]);

  return (
    <div
      ref={panelRef}
      id="mobile-menu"
      className="menu-sheet fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-repo-ground px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 md:hidden"
    >
      <nav aria-label="Main" className="menu-floor flex-1">
        <ul className="space-y-1">
          {primaryNav.map((item, i) => {
            const active = isActive(item, pathname);
            return (
              <li key={item.href} className="menu-slab" style={{ "--i": i }}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={cn("block rounded-lg px-2 py-3", focusRing)}
                >
                  <span className={cn("block text-4xl font-semibold tracking-[-0.035em]", active ? "text-repo-accent" : "text-repo-ink")}>
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-repo-muted">{item.hint}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="menu-slab mt-8" style={{ "--i": primaryNav.length }}>
        <ThemeRow />
      </div>

      <div className="menu-slab mt-3 flex items-center gap-2" style={{ "--i": primaryNav.length + 1 }}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("flex min-h-12 flex-1 items-center justify-center rounded-lg bg-repo-ink text-sm font-medium text-repo-ground", focusRing)}
        >
          GitHub
        </a>
        <button
          type="button"
          onClick={() => { onClose(); openSearch(); }}
          aria-label="Search the docs"
          className={cn("flex size-12 items-center justify-center rounded-lg bg-repo-panel text-repo-ink", focusRing)}
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">search</span>
        </button>
      </div>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeMenu = useRef(() => setMenuOpen(false)).current;

  // A route change closes the phone menu.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-repo-ink/10 bg-repo-ground text-repo-ink">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-8 lg:px-10">
        <Link href="/" className={cn("rounded text-[17px] font-semibold tracking-[-0.02em]", focusRing)}>
          TokenCap
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => {
              const active = isActive(item, pathname);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm text-repo-muted transition-colors hover:text-repo-ink",
                      active && "text-repo-ink",
                      focusRing,
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <div className={cn("flex items-center gap-1", menuOpen && "invisible md:visible")}>
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search the docs"
              className={cn("flex size-10 items-center justify-center rounded-md text-repo-muted hover:text-repo-ink", focusRing)}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">search</span>
            </button>
            <ThemePicker />
          </div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("ml-2 hidden rounded-md bg-repo-ink px-3.5 py-2 text-sm font-medium text-repo-ground sm:inline-block", focusRing)}
          >
            GitHub
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn("flex size-11 items-center justify-center rounded-md md:hidden", focusRing)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu pathname={pathname} onClose={closeMenu} toggleRef={toggleRef} />}
    </header>
  );
}

export { Navbar };
