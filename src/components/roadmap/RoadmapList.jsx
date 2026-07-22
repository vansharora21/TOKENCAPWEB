import { roadmapItems } from "@/data/roadmap";

function RoadmapList() {
  return (
    <div className="grid gap-4">
      {roadmapItems.map((item) => (
        <article key={item.title} className="rounded-[1.75rem] border border-card-border bg-card p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-200">{item.version}</p>
          <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">{item.status} · {item.source}</p>
        </article>
      ))}
    </div>
  );
}

export { RoadmapList };