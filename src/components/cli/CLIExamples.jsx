import { commands } from "@/data/commands";

function CLIExamples() {
  return (
    <div className="space-y-4">
      {commands.map((command) => (
        <div key={command.command} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
          <p className="text-sm font-medium text-white">{command.command}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{command.description}</p>
        </div>
      ))}
    </div>
  );
}

export { CLIExamples };