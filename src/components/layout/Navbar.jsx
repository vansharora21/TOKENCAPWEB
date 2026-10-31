"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemePicker } from "@/components/theme/ThemePicker";
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
 * Phone menu: a rail that grows down from the menu button. Each destination
 * is a round icon with its name in a chip beside it, and a highlight marks
 * the current page, the vertical twin of the desktop pill.
 */
function RailMenu({ pathname, onClose, toggleRef }) {
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const [glide, setGlide] = useState(null);

  useEffect(() => {
    const current = listRef.current?.querySelector('[aria-current="page"]')?.closest("li");
    if (current) setGlide({ top: current.offsetTop, height: current.offsetHeight });
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
  }, [onClose, toggleRef]);

  const entries = [
    ...primaryNav.map((nav) => ({ ...nav, active: isActive(nav, pathname) })),
    { ...writeReview, active: isActive(writeReview, pathname) },
    { ...chromeCompanion, external: true, primary: true },
  ];

  return (
    <div
      ref={rootRef}
      id="mobile-menu"
      className="nav-rail fixed right-2.5 top-[4.25rem] z-50 rounded-full bg-repo-panel p-1.5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.45)] ring-1 ring-repo-ink/10 sm:right-[1.625rem] md:hidden"
    >
      <nav aria-label="Main">
        <ul ref={listRef} className="relative flex flex-col gap-1.5">
          {glide && (
            <li
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 rounded-full bg-repo-ink/[0.09]"
              style={{ top: glide.top, height: glide.height }}
            />
          )}
          {entries.map((entry, i) => {
            const external = entry.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
            const Tag = entry.external ? "a" : Link;
            return (
              <li key={entry.href} className="nav-rail-item relative" style={{ "--i": i }}>
                <Tag
                  href={entry.href}
                  onClick={onClose}
                  aria-current={entry.active ? "page" : undefined}
                  {...external}
                  className={cn("group relative flex size-11 items-center justify-center rounded-full", focusRing)}
                >
                  {/* The circle is its own span: .material-symbols-outlined forces
                      inline-block, which would override flex centring. */}
                  <span
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full",
                      entry.primary ? "bg-repo-ink text-repo-ground" : entry.active ? "text-repo-ink" : "text-repo-muted",
                    )}
                    aria-hidden="true"
                  >
                    <span className="material-symbols-outlined text-[22px]">{entry.icon}</span>
                  </span>
                  {/* The name floats beside the rail, so the rail itself stays narrow. */}
                  <span
                    className={cn(
                      "nav-rail-label absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-full px-3.5 py-2 text-sm shadow-[0_8px_20px_-12px_rgb(0_0_0/0.4)] ring-1 ring-repo-ink/10",
                      entry.primary ? "bg-repo-ink font-medium text-repo-ground" : "bg-repo-panel",
                      entry.active ? "font-medium text-repo-ink" : !entry.primary && "text-repo-ink/80",
                    )}
                  >
                    {entry.label}
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </nav>
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

  // Measure the <li>, whose offsetParent is the list; the link inside it is
  // positioned itself, so its own offsetLeft is always about 0.
  const moveTo = useCallback((el) => {
    const item = el?.closest("li");
    setGlide(item ? { left: item.offsetLeft, width: item.offsetWidth } : null);
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
            : <RailMenu pathname={pathname} onClose={closeMenu} toggleRef={toggleRef} />}
        </div>
      )}
    </header>
  );
}

export { Navbar };
