import { cn } from "@/lib/utils";

function Badge({ children, className }) {
  return <span className={cn("inline-flex items-center rounded-full border border-card-border bg-pre-bg px-3 py-1 text-xs font-mono font-medium uppercase tracking-wider text-muted", className)}>{children}</span>;
}

export { Badge };