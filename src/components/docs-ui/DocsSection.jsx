import { Markdown } from "./Markdown";
import { Command } from "./Command";
import { TaskPicker } from "./TaskPicker";
import { HostTabs } from "./HostTabs";

/** A titled block of the docs. `aliases` keep old #anchors landing here. */
export function DocsSection({ id, aliases = [], title, summary, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-repo-ink/10 py-12 first:border-t-0 first:pt-0">
      {aliases.filter((a) => a !== id).map((a) => <span key={a} id={a} className="block scroll-mt-24" aria-hidden="true" />)}
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">{title}</h2>
      {summary && <p className="mt-2 text-[17px] leading-relaxed text-repo-muted">{summary}</p>}
      {children}
    </section>
  );
}

/** Options as a two-column list, folded away until asked for. */
export function FlagList({ flags, label = "All flags", open = false }) {
  if (!flags?.length) return null;
  return (
    <details open={open} className="group mt-8 rounded-lg ring-1 ring-repo-ink/10">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-repo-ink [&::-webkit-details-marker]:hidden">
        {label} ({flags.length})
        <span className="material-symbols-outlined text-[20px] text-repo-muted transition-transform group-open:rotate-180" aria-hidden="true">expand_more</span>
      </summary>
      <dl className="grid grid-cols-1 gap-x-6 border-t border-repo-ink/10 px-4 py-3 text-sm sm:grid-cols-[auto_1fr]">
        {flags.map((f) => (
          <div key={f.flag} className="contents">
            <dt className="pt-2 font-mono text-[13px] text-repo-ink">{f.flag}</dt>
            <dd className="pb-2 text-repo-muted sm:pt-2">{f.text}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

/** One docs topic: task picker or tool tabs first, then steps, notes and flags. */
export function DocsTopic({ topic }) {
  return (
    <DocsSection id={topic.slug} aliases={topic.aliases} title={topic.title} summary={topic.summary}>
      {topic.tasks && <TaskPicker tasks={topic.tasks} />}
      {topic.hosts && <HostTabs hosts={topic.hosts} />}

      {topic.steps?.length > 0 && (
        <ol className="mt-6 space-y-6">
          {topic.steps.map((step, i) => (
            <li key={step.label} className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3">
              <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full bg-repo-ink/[0.07] font-mono text-xs text-repo-muted">{i + 1}</span>
              <div>
                <p className="mb-2 font-medium leading-7">{step.label}</p>
                {step.command && <Command command={step.command} output={step.output} outputNote={step.outputNote} />}
                {step.note && <p className="mt-2 text-sm text-repo-muted">{step.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}

      {topic.body && <Markdown source={topic.body} className="mt-6 leading-relaxed text-repo-ink/90" />}
      <FlagList flags={topic.flags} />
    </DocsSection>
  );
}
