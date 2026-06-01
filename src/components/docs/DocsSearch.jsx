function DocsSearch() {
  return (
    <label className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-slate-400">Search docs</span>
      <input type="search" placeholder="Search tokens, routes, or commands" className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none" />
      <kbd className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-400">⌘K</kbd>
    </label>
  );
}

export { DocsSearch };