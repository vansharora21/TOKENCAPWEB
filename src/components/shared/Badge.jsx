import { cn } from "@/lib/utils";

function Badge({ children, className }) {
  return (
    <span className={cn("inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted", className)}>
      {children}
    </span>
  );
}

export { Badge };