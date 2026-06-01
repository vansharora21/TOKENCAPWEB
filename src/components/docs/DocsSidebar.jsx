import Link from "next/link";
import { docsNavigation } from "@/data/navigation";

function DocsSidebar() {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Docs map</p>
      <nav className="mt-6 flex flex-col gap-2">
        {docsNavigation.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/6 hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export { DocsSidebar };