import { testimonials } from "@/data/testimonials";

function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">Testimonials</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Suggested proof points for launch.</h2>
        <p className="max-w-2xl text-base leading-7 text-slate-300">
          These are placeholder slots for future public quotes, seeded from the supplied content bundle.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.audience} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium text-cyan-200">{item.audience}</p>
            <p className="mt-3 text-base leading-7 text-slate-200">“{item.theme}”</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export { Testimonials };
