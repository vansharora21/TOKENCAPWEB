"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Command } from "./Command";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-repo-ink";

/** "What do you want to do?" buttons that swap in the one command for that job. */
export function TaskPicker({ tasks }) {
  const [activeId, setActiveId] = useState(tasks[0]?.id);
  const task = tasks.find((t) => t.id === activeId) || tasks[0];
  if (!task) return null;

  return (
    <div className="my-6">
      <div role="group" aria-label="Pick a task" className="flex flex-wrap gap-2">
        {tasks.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={t.id === task.id}
            onClick={() => setActiveId(t.id)}
            className={cn(
              "min-h-10 rounded-md px-3 text-sm ring-1 ring-repo-ink/15 transition-colors",
              t.id === task.id ? "bg-repo-ink text-repo-ground ring-repo-ink" : "text-repo-muted hover:text-repo-ink",
              focusRing,
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div aria-live="polite" className="mt-4">
        <p className="mb-3 text-[15px] text-repo-ink">{task.why}</p>
        <Command command={task.command} output={task.output} outputNote={task.output ? "Example output" : undefined} />
      </div>
    </div>
  );
}
