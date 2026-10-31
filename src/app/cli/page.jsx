import { buildMetadata } from "@/lib/seo";
import { cliReference } from "@/data/docsTopics";
import { DocsShell } from "@/components/docs-ui/DocsShell";
import { DocsSection, FlagList } from "@/components/docs-ui/DocsSection";
import { Command } from "@/components/docs-ui/Command";

export const metadata = buildMetadata({
  title: "CLI Reference",
  description: "Every TokenCap command, with usage, examples, subcommands and flags.",
  path: "/cli",
});

const groups = [
  {
    label: "Commands",
    items: cliReference.map((c) => ({ id: `cmd-${c.name}`, label: `tokencap ${c.name}`, keywords: c.summary })),
  },
];

export default function CliPage() {
  return (
    <DocsShell
      eyebrow="Reference"
      title="CLI"
      intro="Seven commands. Each one lists its usage, a few real examples, and every flag it takes."
      groups={groups}
    >
      {cliReference.map((cmd) => (
        <DocsSection key={cmd.name} id={`cmd-${cmd.name}`} title={`tokencap ${cmd.name}`} summary={cmd.summary}>
          {cmd.usage && (
            <pre className="mt-5 overflow-x-auto rounded-lg bg-repo-panel px-4 py-3 font-mono text-[13px] ring-1 ring-repo-ink/10">{cmd.usage}</pre>
          )}

          {cmd.examples?.length > 0 && (
            <ul className="mt-6 space-y-4">
              {cmd.examples.map((ex) => (
                <li key={ex.command}>
                  {ex.note && <p className="mb-1.5 text-sm text-repo-muted">{ex.note}</p>}
                  <Command command={ex.command} />
                </li>
              ))}
            </ul>
          )}

          {cmd.subcommands?.length > 0 && (
            <dl className="mt-8 grid grid-cols-1 gap-x-6 text-sm sm:grid-cols-[auto_1fr]">
              {cmd.subcommands.map((s) => (
                <div key={s.name} className="contents">
                  <dt className="border-t border-repo-ink/10 pt-2.5 font-mono text-[13px]">{s.name}</dt>
                  <dd className="pb-2.5 text-repo-muted sm:border-t sm:border-repo-ink/10 sm:pt-2.5">{s.text}</dd>
                </div>
              ))}
            </dl>
          )}

          <FlagList flags={cmd.flags} label="Flags" open={cmd.flags?.length <= 6} />
        </DocsSection>
      ))}
    </DocsShell>
  );
}
