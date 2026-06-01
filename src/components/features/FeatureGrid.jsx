import { features } from "@/data/features";
import { FeatureCard } from "@/components/features/FeatureCard";

function FeatureGrid({ limit = features.length }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {features.slice(0, limit).map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}

export { FeatureGrid };