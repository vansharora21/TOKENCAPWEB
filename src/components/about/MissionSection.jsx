import { missionPoints } from "@/data/about";

function MissionSection() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Mission</p>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {missionPoints.map((point) => (
          <li key={point}>• {point}</li>
        ))}
      </ul>
    </section>
  );
}

export { MissionSection };
