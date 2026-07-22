function DocsArticle({ title, slug, content }) {
  return (
    <article id={slug} className="rounded-2xl border border-card-border bg-card p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">{title}</p>
      <div className="prose dark:prose-invert mt-4 max-w-none prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-code:text-cyan-400">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={`${slug}-${index}`}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export { DocsArticle };