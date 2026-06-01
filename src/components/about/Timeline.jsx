import { timelineItems } from "@/data/about";

function Timeline() {
  return (
    <div className="grid gap-4">
      {timelineItems.map((item) => (
        <article key={item.year} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{item.year}</p>
          <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export { Timeline };
