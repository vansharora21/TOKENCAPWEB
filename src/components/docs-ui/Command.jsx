import { CopyButton } from "@/components/shared/CopyButton";

/** One copyable command, with an optional sample of what it prints. */
export function Command({ command, output, outputNote, id }) {
  return (
    <div>
      <div className="flex items-center gap-3 rounded-lg bg-repo-panel py-2 pl-4 pr-2 font-mono text-[13px] text-repo-ink ring-1 ring-repo-ink/10">
        <span aria-hidden="true" className="text-repo-muted">$</span>
        <span id={id} className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap">{command}</span>
        <CopyButton text={command} />
      </div>
      {output && (
        <figure className="mt-2">
          <pre className="overflow-x-auto rounded-lg px-4 py-3 font-mono text-[12px] leading-relaxed text-repo-muted ring-1 ring-repo-ink/10">{output}</pre>
          {outputNote && <figcaption className="mt-1 text-xs text-repo-muted">{outputNote}</figcaption>}
        </figure>
      )}
    </div>
  );
}
