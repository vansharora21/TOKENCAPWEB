import { cn } from "@/lib/utils";

function Badge({ children, className }) {
  return <span className={cn("inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200", className)}>{children}</span>;
}

export { Badge };