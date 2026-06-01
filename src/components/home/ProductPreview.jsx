function ProductPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/5 bg-[#0b0c10]/40 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* OS Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0e0f14]/80">
        {/* Windows dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        {/* Title */}
        <div className="text-xs font-mono text-zinc-500">
          TOKENCAP.md &mdash; Snapshot (04:21 PM)
        </div>
        <div className="w-12"></div> {/* spacer */}
      </div>

      {/* Pane Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-[480px]">
        {/* Left Sidebar (File Explorer) */}
        <div className="border-r border-white/5 bg-[#0a0a0c]/60 p-4 font-mono text-xs select-none">
          <h3 className="text-zinc-500 uppercase tracking-wider text-[10px] font-bold mb-4">Project Tree</h3>
          <div className="space-y-3">
            {/* Folder: src */}
            <div className="flex items-center gap-2 text-zinc-400">
              <svg className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span>src/</span>
            </div>

            {/* Files in src */}
            <div className="space-y-2.5 pl-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>main.ts</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>parser.ts</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/5 rounded px-1.5 py-0.5 -mx-1.5">
                <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold">TOKENCAP.md</span>
              </div>
            </div>

            {/* Root package.json */}
            <div className="flex items-center gap-2 text-zinc-400 pt-1">
              <svg className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>package.json</span>
            </div>
          </div>
        </div>

        {/* Right Code Panel (Markdown Viewer) */}
        <div className="bg-[#0b0c10]/20 p-6 overflow-y-auto font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed border-t md:border-t-0 border-white/5">
          <div className="space-y-6">
            <div>
              <span className="text-zinc-500 select-none">#</span> <span className="text-white font-bold">TokenCap Project Snapshot</span>
            </div>

            <div>
              <span className="text-zinc-500 select-none">##</span> <span className="text-white font-semibold">Active State</span>
              <div className="mt-2 space-y-1 text-zinc-400">
                <div><span className="text-zinc-500 select-none">Current branch:</span> <span className="text-emerald-400">feature/auth-fix</span></div>
                <div><span className="text-zinc-500 select-none">Last sync:</span> <span>2026.06.20 14:21:30</span></div>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 select-none">##</span> <span className="text-white font-semibold">Modified Files</span>
              <div className="mt-2 text-zinc-500 text-xs">
                &mdash; src/auth.ts (Modified lines: 42-50) &mdash;
              </div>
              <div className="mt-2 rounded bg-zinc-950/60 border border-white/5 p-4 font-mono text-zinc-300">
                <div>export const validateSession = (token) =&gt; &#123;</div>
                <div className="text-zinc-500 font-italic">&nbsp;&nbsp;// Redacted [SECRET_KEY] for security</div>
                <div>&nbsp;&nbsp;const isValid = verifyToken(token, process.env.JWT_SECRET);</div>
                <div>&nbsp;&nbsp;return isValid;</div>
                <div>&#125;</div>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 select-none">##</span> <span className="text-white font-semibold">Pending Tasks</span>
              <div className="mt-2 space-y-1.5 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">- [x]</span>
                  <span>Refactor token rotation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600">- [ ]</span>
                  <span>Fix expired session edge case</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductPreview };