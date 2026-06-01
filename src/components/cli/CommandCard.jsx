import { commands } from "@/data/commands";

function CommandCard() {
  const command = commands[0];
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Default command</p>
      <p className="mt-3 text-lg font-semibold text-white">{command.command}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{command.description}</p>
    </article>
  );
}

export { CommandCard };