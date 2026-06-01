import { CodeBlock } from "@/components/shared/CodeBlock";

function TerminalWindow() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-4">
        <span className="h-3 w-3 rounded-full bg-rose-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <div className="p-4">
        <CodeBlock>{`$ tokencap init
Project scaffolded.

$ tokencap capture auth-flow
Flow recorded and ready for review.`}</CodeBlock>
      </div>
    </section>
  );
}

export { TerminalWindow };