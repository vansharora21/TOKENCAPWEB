import { testimonials } from "@/data/testimonials";

function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Suggested proof points for launch.</h2>
        <p className="max-w-2xl text-base leading-7 text-muted">
          These are placeholder slots for future public quotes, seeded from the supplied content bundle.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.audience} className="rounded-2xl border border-card-border bg-card p-6">
            <p className="text-sm font-medium text-cyan-400">{item.audience}</p>
            <p className="mt-3 text-base leading-7 text-foreground">“{item.theme}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { Testimonials };
