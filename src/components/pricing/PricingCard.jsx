import { pricingPlans } from "@/data/pricing";

function PricingCard() {
  const plan = pricingPlans[0];
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{plan.name}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-300">
        {plan.features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <p className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-cyan-200">{plan.cta}</p>
    </article>
  );
}

export { PricingCard };
