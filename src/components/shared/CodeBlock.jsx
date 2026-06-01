import { cn } from "@/lib/utils";

function CodeBlock({ children, className }) {
  return <pre className={cn("overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 text-sm leading-7 text-slate-200 shadow-2xl shadow-black/20", className)}><code className="font-mono">{children}</code></pre>;
}

export { CodeBlock };