import { docsSections } from "@/data/docs";
import Link from "next/link";

function DocsContent() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {docsSections.map((section) => (
        <article key={section.slug} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
            {String(section.order).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">{section.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{section.content.split("\n\n")[0]}</p>
          <Link href={`/docs/${section.slug}`} className="mt-4 inline-flex text-sm font-medium text-cyan-200 transition hover:text-cyan-100">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
}

export { DocsContent };