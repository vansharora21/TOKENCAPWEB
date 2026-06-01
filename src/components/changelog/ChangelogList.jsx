import { changelogItems } from "@/data/changelog";

function ChangelogList() {
  return (
    <div className="grid gap-4">
      {changelogItems.map((item) => (
        <article key={item.version} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">v{item.version} · {item.date}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{item.status}</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
            {item.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export { ChangelogList };