import { commands } from "@/data/commands";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CodeBlock } from "@/components/shared/CodeBlock";

function CLISection() {
  return (
    <section className="space-y-8">
      <SectionHeading eyebrow="CLI" title="Command examples live in their own data layer." description="That keeps the product story consistent when the terminal flow expands beyond a placeholder." />
      <div className="grid gap-4 lg:grid-cols-3">
        {commands.slice(0, 3).map((command) => (
          <article key={command.command} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-cyan-200">{command.description}</p>
            <div className="mt-4"><CodeBlock>{command.command}</CodeBlock></div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{command.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { CLISection };