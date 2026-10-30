import { CopyButton } from "@/components/shared/CopyButton";
import { setupSection } from "@/data/homeSections";

export function SetupSection() {
  return (
    <section aria-labelledby="setup-title" className="bg-repo-ground py-20 text-repo-ink lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 id="setup-title" className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{setupSection.title}</h2>
        <ol className="mt-10 space-y-4">
          {setupSection.commands.map((c) => (
            <li key={c.command} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex min-w-0 items-center gap-3 rounded-lg bg-repo-panel py-2 pl-4 pr-2 font-mono text-sm">
                <span aria-hidden="true" className="text-repo-muted">$</span>
                <span className="truncate">{c.command}</span>
                <CopyButton text={c.command} className="ml-auto" />
              </div>
              <p className="text-sm text-repo-muted sm:max-w-[24ch] sm:text-right">{c.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
