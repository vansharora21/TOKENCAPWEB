import { localSection } from "@/data/homeSections";

export function LocalSection() {
  return (
    <section aria-labelledby="local-title" className="bg-repo-ink py-20 text-repo-ground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <h2 id="local-title" className="max-w-[16ch] text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
          {localSection.title}
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {localSection.facts.map((fact) => (
            <p key={fact.lead} className="max-w-[36ch] text-base leading-relaxed text-repo-ground/75">
              <strong className="block text-lg font-semibold text-repo-ground">{fact.lead}</strong>
              {fact.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
