"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemePicker, ThemeRow } from "@/components/theme/ThemePicker";
import { primaryNav, chromeCompanion, writeReview } from "@/data/navigation";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";
// Header pieces float over the page, so each carries its own surface.
const floating = "bg-repo-panel ring-1 ring-repo-ink/10 shadow-[0_8px_20px_-12px_rgb(0_0_0/0.35)]";
const roundButton = "flex size-11 items-center justify-center rounded-full";

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

      <div className="menu-slab mt-3 grid grid-cols-[1fr_1fr_auto] gap-2" style={{ "--i": primaryNav.length + 1 }}>
        <a
          href={chromeCompanion.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("flex min-h-12 items-center justify-center rounded-lg bg-repo-ink px-2 text-center text-sm font-medium text-repo-ground", focusRing)}
        >
          {chromeCompanion.label}
        </a>
        <Link
          href={writeReview.href}
          onClick={onClose}
          className={cn("flex min-h-12 items-center justify-center rounded-lg bg-repo-panel px-2 text-center text-sm font-medium text-repo-ink", focusRing)}
        >
          {writeReview.label}
        </Link>
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

/** True from the md breakpoint up; read on the client, false on the server. */
function useDesktop() {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return desktop;
}

/**
 * Desktop menu: a pill that slides up from the bottom of the screen. A
 * highlight glides under whichever item the pointer or focus is on, and
 * settles back on the current page when it leaves.
 */
function PillMenu({ pathname, onClose, toggleRef }) {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [glide, setGlide] = useState(null);

  const moveTo = useCallback((el) => {
    setGlide(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, []);
  const restToCurrent = useCallback(() => moveTo(listRef.current?.querySelector('[aria-current="page"]')), [moveTo]);

  useEffect(() => {
    restToCurrent();
    rootRef.current.querySelector("a")?.focus();
    const onKey = (e) => { if (e.key === "Escape") { onClose(); toggleRef.current?.focus(); } };
    const onDown = (e) => {
      if (!rootRef.current.contains(e.target) && !toggleRef.current?.contains(e.target)) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [onClose, toggleRef, restToCurrent]);

  const item = "relative z-10 flex h-10 items-center whitespace-nowrap rounded-full px-4 text-sm transition-colors";
  const glideHandlers = { onPointerEnter: (e) => moveTo(e.currentTarget), onFocus: (e) => moveTo(e.currentTarget) };

  return (
    <div
      ref={rootRef}
      id="site-menu"
      className="nav-pill fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 z-50 flex items-center gap-1 rounded-full bg-repo-panel p-1.5 text-repo-ink shadow-[0_18px_48px_-16px_rgb(0_0_0/0.45)] ring-1 ring-repo-ink/10"
    >
      <nav aria-label="Main">
        <ul ref={listRef} className="relative flex items-center" onPointerLeave={restToCurrent} onBlur={restToCurrent}>
          {glide && (
            <li
              aria-hidden="true"
              className="nav-pill-glide pointer-events-none absolute inset-y-0 rounded-full bg-repo-ink/[0.08]"
              style={{ left: glide.left, width: glide.width }}
            />
          )}
          {primaryNav.map((nav, i) => {
            const active = isActive(nav, pathname);
            return (
              <li key={nav.href} className="nav-pill-item" style={{ "--i": i }}>
                <Link
                  href={nav.href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  {...glideHandlers}
                  className={cn(item, active ? "font-medium text-repo-ink" : "text-repo-muted hover:text-repo-ink", focusRing)}
                >
                  {nav.label}
                </Link>
              </li>
            );
          })}
          <li className="nav-pill-item" style={{ "--i": primaryNav.length }}>
            <Link
              href={writeReview.href}
              onClick={onClose}
              {...glideHandlers}
              className={cn(item, "text-repo-muted hover:text-repo-ink", focusRing)}
            >
              {writeReview.label}
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href={chromeCompanion.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("nav-pill-item ml-1 flex h-10 items-center whitespace-nowrap rounded-full bg-repo-ink px-4 text-sm font-medium text-repo-ground", focusRing)}
        style={{ "--i": primaryNav.length + 1 }}
      >
        {chromeCompanion.label}
      </a>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname();
  const desktop = useDesktop();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeMenu = useRef(() => setMenuOpen(false)).current;

  // A route change closes the menu.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 h-16 text-repo-ink">
      {/* No bar: the name and three round buttons float over the page. */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-10">
        <Link href="/" className={cn(floating, "pointer-events-auto flex h-11 items-center rounded-full px-5 text-[17px] font-semibold tracking-[-0.02em]", focusRing)}>
          TokenCap
        </Link>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the docs"
            className={cn(floating, roundButton, "text-repo-muted hover:text-repo-ink", focusRing)}
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">search</span>
          </button>
          <ThemePicker buttonClassName={cn(floating, roundButton)} />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={desktop ? "site-menu" : "mobile-menu"}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={cn(roundButton, "bg-repo-ink text-repo-ground shadow-[0_8px_20px_-10px_rgb(0_0_0/0.5)]", focusRing)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="pointer-events-auto">
          {desktop
            ? <PillMenu pathname={pathname} onClose={closeMenu} toggleRef={toggleRef} />
            : <MobileMenu pathname={pathname} onClose={closeMenu} toggleRef={toggleRef} />}
        </div>
      )}
    </header>
  );
}

export { Navbar };
