"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsTopics, cliReference } from "@/data/docsTopics";
import featuresData from "@/website-content/features.json";

const GROUPS = [
  { id: "docs", label: "Docs" },
  { id: "commands", label: "Commands" },
  { id: "features", label: "Features" },
];
const MAX_PER_GROUP = 6;

// Everything searchable, built once at module scope.
const INDEX = [
  ...docsTopics.map((t) => ({ group: "docs", title: t.title, text: `${t.summary} ${t.body || ""}`, url: `/docs#${t.slug}` })),
  ...cliReference.map((c) => ({ group: "commands", title: `tokencap ${c.name}`, text: `${c.summary} ${c.usage || ""}`, url: `/cli#cmd-${c.name}`, mono: true })),
  ...featuresData.map((f) => ({ group: "features", title: f.title, text: f.description, url: "/features" })),
];

/** A short excerpt around the first match, so the snippet shows why it matched. */
function excerpt(text, q) {
  const plain = text.replace(/[#*`>]/g, "").replace(/\s+/g, " ").trim();
  const at = plain.toLowerCase().indexOf(q);
  if (at < 60) return plain.slice(0, 130);
  return `...${plain.slice(at - 40, at + 90)}`;
}

/** Wrap the matched part of a string in <mark>, without changing its case. */
function Highlight({ text, q }) {
  const at = text.toLowerCase().indexOf(q);
  if (!q || at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-transparent font-semibold text-repo-ink">{text.slice(at, at + q.length)}</mark>
      {text.slice(at + q.length)}
    </>
  );
}

function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setIsOpen((o) => !o); }
      else if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); setIsOpen(true); }
      else if (e.key === "Escape") setIsOpen(false);
    };
    const onOpen = () => setIsOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", onOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
  }, [isOpen]);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    const grouped = GROUPS.map((g) => ({
      ...g,
      items: INDEX.filter((r) => r.group === g.id && (r.title.toLowerCase().includes(q) || r.text.toLowerCase().includes(q)))
        // Title matches first: they are what people usually mean.
        .sort((a, b) => Number(b.title.toLowerCase().includes(q)) - Number(a.title.toLowerCase().includes(q)))
        .slice(0, MAX_PER_GROUP),
    })).filter((g) => g.items.length);
    let i = 0;
    for (const g of grouped) for (const item of g.items) item.index = i++;
    return grouped;
  }, [q]);
  const count = results.reduce((n, g) => n + g.items.length, 0);

  useEffect(() => setActive(0), [q]);
  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (url) => { setIsOpen(false); router.push(url); };

  const onInputKey = (e) => {
    if (!count) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => (a + 1) % count); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => (a - 1 + count) % count); }
    else if (e.key === "Enter") {
      e.preventDefault();
      const hit = results.flatMap((g) => g.items).find((r) => r.index === active);
      if (hit) go(hit.url);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="presentation">
      {/* No backdrop: the page stays as it is, and a click anywhere on it closes search. */}
      <button type="button" tabIndex={-1} aria-hidden="true" className="absolute inset-0 cursor-default" onClick={() => setIsOpen(false)} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="search-drop relative mx-auto flex max-h-[min(75vh,38rem)] max-w-2xl flex-col rounded-b-2xl bg-repo-panel text-repo-ink shadow-[0_24px_48px_-20px_rgb(0_0_0/0.35)] ring-1 ring-repo-ink/10 md:w-[calc(100%-26rem)]"
      >
        <div className="flex items-center gap-3 border-b border-repo-ink/10 px-4">
          <span className="material-symbols-outlined text-[20px] text-repo-muted" aria-hidden="true">search</span>
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={count > 0}
            aria-controls="search-results"
            aria-activedescendant={count ? `search-result-${active}` : undefined}
            aria-label="Search docs, commands and features"
            placeholder="Search docs, commands and features"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            className="h-16 flex-1 bg-transparent text-base text-repo-ink placeholder:text-repo-muted focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded px-2 py-1 text-xs text-repo-muted hover:text-repo-ink focus-visible:outline-2 focus-visible:outline-repo-ink"
          >
            Esc
          </button>
        </div>

        <div ref={listRef} id="search-results" role="listbox" aria-label="Results" className="overflow-y-auto px-2 py-2">
          {count > 0 &&
            results.map((group) => (
              <div key={group.id} role="group" aria-label={group.label} className="py-1">
                <p className="px-3 pb-1 pt-2 text-xs text-repo-muted">{group.label}</p>
                {group.items.map((r) => (
                  <button
                    key={`${r.group}-${r.title}`}
                    type="button"
                    role="option"
                    id={`search-result-${r.index}`}
                    data-index={r.index}
                    aria-selected={r.index === active}
                    tabIndex={-1}
                    onMouseMove={() => setActive(r.index)}
                    onClick={() => go(r.url)}
                    className={cn("block w-full rounded-md px-3 py-2.5 text-left", r.index === active && "bg-repo-ink/[0.07]")}
                  >
                    <span className={cn("block truncate text-sm text-repo-ink", r.mono && "font-mono text-[13px]")}>
                      <Highlight text={r.title} q={q} />
                    </span>
                    <span className="mt-0.5 block truncate text-[13px] text-repo-muted">
                      <Highlight text={excerpt(r.text, q)} q={q} />
                    </span>
                  </button>
                ))}
              </div>
            ))}

          {q && count === 0 && (
            <p className="px-3 py-8 text-center text-sm text-repo-muted">No matches for "{query.trim()}". Try a command like make or serve.</p>
          )}
          {!q && (
            <p className="px-3 py-6 text-sm text-repo-muted">
              Type to search. Use the arrow keys to move and Enter to open.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export { SearchModal };
