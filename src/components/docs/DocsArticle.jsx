function DocsArticle({ title, slug, content }) {
  return (
    <article id={slug} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">{title}</p>
      <div className="prose prose-invert mt-4 max-w-none prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-code:text-cyan-200">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={`${slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export { DocsArticle };