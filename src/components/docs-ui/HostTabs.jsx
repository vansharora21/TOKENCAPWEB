"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Command } from "./Command";

/** Setup per AI tool, as an accessible tab list (arrow keys move between tools). */
export function HostTabs({ hosts }) {
  const [activeId, setActiveId] = useState(hosts[0]?.id);
  const listRef = useRef(null);
  const host = hosts.find((h) => h.id === activeId) || hosts[0];
  if (!host) return null;

  const onKeyDown = (e) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const index = hosts.findIndex((h) => h.id === host.id);
    const next = hosts[(index + step + hosts.length) % hosts.length];
    setActiveId(next.id);
    listRef.current?.querySelector(`[data-host="${next.id}"]`)?.focus();
  };

  return (
    <div className="my-6">
      <div ref={listRef} role="tablist" aria-label="AI tool" onKeyDown={onKeyDown} className="flex gap-5 overflow-x-auto border-b border-repo-ink/10">
        {hosts.map((h) => (
          <button
            key={h.id}
            type="button"
            role="tab"
            id={`host-tab-${h.id}`}
            data-host={h.id}
            aria-selected={h.id === host.id}
            aria-controls="host-panel"
            tabIndex={h.id === host.id ? 0 : -1}
            onClick={() => setActiveId(h.id)}
            className={cn(
              "-mb-px whitespace-nowrap border-b-2 py-2 text-sm transition-colors",
              h.id === host.id ? "border-repo-ink text-repo-ink" : "border-transparent text-repo-muted hover:text-repo-ink",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink",
            )}
          >
            {h.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id="host-panel" aria-labelledby={`host-tab-${host.id}`} className="pt-4">
        <Command command={host.command} />
        {host.note && <p className="mt-2 text-sm text-repo-muted">{host.note}</p>}
      </div>
    </div>
  );
}
