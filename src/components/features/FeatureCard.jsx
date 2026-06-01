import { Badge } from "@/components/shared/Badge";

function FeatureCard({ feature }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <Badge className="mb-4">{feature.accent}</Badge>
      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
    </article>
  );
}

export { FeatureCard };