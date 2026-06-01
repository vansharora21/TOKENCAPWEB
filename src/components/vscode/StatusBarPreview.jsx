import { statusBarItems } from "@/data/vscode";

function StatusBarPreview() {
  return (
    <div className="flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
      {statusBarItems.map((item) => (
        <span key={item} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1">
          {item}
        </span>
      ))}
    </div>
  );
}

export { StatusBarPreview };
