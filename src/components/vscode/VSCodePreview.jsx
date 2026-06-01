function VSCodePreview() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-xs text-slate-400">
        <span className="rounded-full bg-white/10 px-3 py-1">TokenCap.tsx</span>
        <span className="rounded-full bg-white/10 px-3 py-1">README.md</span>
        <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-cyan-200">Preview</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 bg-white/5 p-4 lg:border-b-0 lg:border-r">
          <div className="space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl bg-white/5 px-3 py-2">Routes</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">Components</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">Data</div>
            <div className="rounded-2xl bg-white/5 px-3 py-2">SEO</div>
          </div>
        </aside>
        <div className="p-6">
          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 font-mono text-sm leading-7 text-slate-200">
            <p>{`export default function Page() {`}</p>
            <p>{`  return <main>TokenCap</main>;`}</p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { VSCodePreview };