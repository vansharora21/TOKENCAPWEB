"use client";

function DocsSearch() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
      className="flex w-full items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-left hover:border-white/20 transition cursor-pointer"
    >
      <span className="material-symbols-outlined text-zinc-400 text-lg">search</span>
      <span className="text-sm text-zinc-500 flex-1">Search docs, features, and commands...</span>
      <kbd className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-400">⌘K</kbd>
    </button>
  );
}

export { DocsSearch };