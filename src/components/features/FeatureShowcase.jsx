import { featureShowcase } from "@/data/features";
import { CodeBlock } from "@/components/shared/CodeBlock";

function FeatureShowcase() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">{featureShowcase.eyebrow}</p>
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{featureShowcase.title}</h3>
        <p className="max-w-2xl text-base leading-7 text-slate-300">{featureShowcase.description}</p>
      </div>
      <CodeBlock className="text-cyan-100">{`<PageWrapper>
  <Hero />
  <FeatureGrid />
  <FinalCTA />
</PageWrapper>`}</CodeBlock>
    </section>
  );
}

export { FeatureShowcase };