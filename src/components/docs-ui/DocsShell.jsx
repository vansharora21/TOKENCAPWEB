"use client";

import { Children, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";
const SWIPE_PX = 60;

function SideNav({ groups, activeId, onPick }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () => groups
      .map((g) => ({ ...g, items: g.items.filter((it) => !q || `${it.label} ${it.keywords || ""}`.toLowerCase().includes(q)) }))
      .filter((g) => g.items.length),
    [groups, q],
  );

  const pickFirst = (e) => {
    if (e.key !== "Enter") return;
    const first = shown[0]?.items[0];
    if (!first) return;
    e.preventDefault();
    onPick(first.id);
  };

  return (
    <nav aria-label="Topics">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={pickFirst}
        placeholder="Filter topics"
        aria-label="Filter topics"
        className={cn("h-10 w-full rounded-md bg-repo-panel px-3 text-sm text-repo-ink ring-1 ring-repo-ink/10 placeholder:text-repo-muted", focusRing)}
      />
      {shown.length === 0 && <p className="mt-4 text-sm text-repo-muted">No topic matches.</p>}
      {shown.map((g) => (
        <div key={g.label} className="mt-6">
          <p className="mb-1.5 text-xs font-medium text-repo-muted">{g.label}</p>
          <ul className="border-l border-repo-ink/10">
            {g.items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  onClick={(e) => { e.preventDefault(); onPick(it.id); }}
                  aria-current={activeId === it.id ? "page" : undefined}
                  className={cn(
                    "-ml-px block border-l py-1.5 pl-3 text-sm transition-colors",
                    activeId === it.id ? "border-repo-ink text-repo-ink" : "border-transparent text-repo-muted hover:text-repo-ink",
                    focusRing,
                  )}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

/** Previous / next, as large targets naming where they go. */
function Pager({ items, index, go }) {
  const prev = items[index - 1];
  const next = items[index + 1];
  const card = "flex min-h-16 flex-col justify-center rounded-lg px-4 py-3 ring-1 ring-repo-ink/10 transition-colors hover:bg-repo-ink/[0.04]";
  return (
    <nav aria-label="Previous and next topic" className="mt-12 grid grid-cols-2 gap-3">
      {prev ? (
        <button type="button" onClick={() => go(index - 1)} className={cn(card, "text-left", focusRing)}>
          <span className="text-xs text-repo-muted">← Previous</span>
          <span className="mt-0.5 text-sm font-medium">{prev.label}</span>
        </button>
      ) : <span />}
      {next && (
        <button type="button" onClick={() => go(index + 1)} className={cn(card, "items-end text-right", focusRing)}>
          <span className="text-xs text-repo-muted">Next →</span>
          <span className="mt-0.5 text-sm font-medium">{next.label}</span>
        </button>
      )}
    </nav>
  );
}

/**
 * Shared layout for /docs, /cli and /mcp. Topics are slides: one shows at a
 * time, with previous and next, arrow keys, swipe on touch screens, and a
 * filterable topic list that jumps straight to a slide.
 * `groups` is [{ label, items: [{ id, label, keywords?, aliases? }] }] and
 * `children` are the slides, in the same order as the items.
 */
export function DocsShell({ eyebrow, title, intro, groups, children }) {
  const slides = Children.toArray(children);
  const items = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  // Every id and old alias that opens a slide, for #links.
  const anchors = useMemo(() => {
    const map = new Map();
    items.forEach((it, i) => [it.id, ...(it.aliases || [])].forEach((a) => map.set(a, i)));
    return map;
  }, [items]);

  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const [direction, setDirection] = useState(1);
  const [open, setOpen] = useState(false);
  const stageRef = useRef(null);
  const swipe = useRef(null);

  const go = useCallback((next, { updateHash = true } = {}) => {
    if (next < 0 || next >= items.length) return;
    setDirection(next >= indexRef.current ? 1 : -1);
    indexRef.current = next;
    setIndex(next);
    setOpen(false);
    if (updateHash) history.replaceState(null, "", `#${items[next].id}`);
    // Bring the top of the new slide into view if the reader had scrolled down.
    const top = stageRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) window.scrollBy({ top: top - 96 });
  }, [items]);

  const pickId = useCallback((id) => go(anchors.get(id) ?? 0), [anchors, go]);

  // Open the slide named in the URL, now and on later #link clicks.
  useEffect(() => {
    const fromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (anchors.has(id)) go(anchors.get(id), { updateHash: false });
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [anchors, go]);

  // Arrow keys move between slides, unless focus is somewhere arrows mean something.
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.target.closest?.("input, textarea, select, pre, [role=tablist], [role=radiogroup], [role=dialog]")) return;
      e.preventDefault();
      go(indexRef.current + (e.key === "ArrowRight" ? 1 : -1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Horizontal swipe on touch screens; ignored when it starts in scrollable code.
  const onPointerDown = (e) => {
    if (e.pointerType !== "touch" || e.target.closest("pre, [role=tablist], .overflow-x-auto")) return;
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e) => {
    const start = swipe.current;
    swipe.current = null;
    if (!start) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(e.clientY - start.y) * 1.5) return;
    go(index + (dx < 0 ? 1 : -1));
  };

  const active = items[index];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-10 text-repo-ink sm:px-8 lg:px-10 lg:pt-16">
      <header className="max-w-2xl">
        {eyebrow && <p className="text-sm text-repo-muted">{eyebrow}</p>}
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 text-lg leading-relaxed text-repo-muted">{intro}</p>}
      </header>

      <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-14">
        <div className="mb-6 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="docs-topics"
            className={cn("flex h-11 w-full items-center justify-between rounded-md bg-repo-panel px-4 text-sm ring-1 ring-repo-ink/10", focusRing)}
          >
            <span><span className="text-repo-muted">Topic: </span>{active?.label}</span>
            <span className="material-symbols-outlined text-[20px] text-repo-muted" aria-hidden="true">{open ? "expand_less" : "expand_more"}</span>
          </button>
          {open && (
            <div id="docs-topics" className="mt-3 rounded-lg bg-repo-panel p-4 ring-1 ring-repo-ink/10">
              <SideNav groups={groups} activeId={active?.id} onPick={pickId} />
            </div>
          )}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pb-6 pr-1">
            <SideNav groups={groups} activeId={active?.id} onPick={pickId} />
          </div>
        </aside>

        <div ref={stageRef} className="min-w-0 max-w-3xl scroll-mt-24">
          {/* Where you are: one segment per slide, each a shortcut to it. */}
          {items.length > 1 && (
            <div className="mb-8 flex items-center gap-4">
              <div className="flex flex-1 gap-1" role="group" aria-label="Topics">
                {items.map((it, i) => (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={it.label}
                    aria-current={i === index ? "step" : undefined}
                    className={cn("group flex h-6 flex-1 items-center", focusRing)}
                  >
                    <span className={cn("block h-1 w-full rounded-full transition-colors", i <= index ? "bg-repo-ink" : "bg-repo-ink/15 group-hover:bg-repo-ink/30")} />
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs tabular-nums text-repo-muted" aria-live="polite">
                {index + 1} / {items.length}
              </span>
            </div>
          )}

          <div
            key={index}
            className="docs-slide"
            data-direction={direction > 0 ? "next" : "prev"}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => { swipe.current = null; }}
          >
            {slides[index]}
          </div>

          {items.length > 1 && <Pager items={items} index={index} go={go} />}
        </div>
      </div>
    </main>
  );
}
