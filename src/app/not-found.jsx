import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <div className="space-y-6 max-w-md">
        {/* Eyebrow */}
        <div className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-muted">
          404 · NOT FOUND
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
          404 - Page Not Found
        </h1>

        {/* Description */}
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Check the URL or navigate back home.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6d28d9] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Back to Home
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
          >
            <span className="material-symbols-outlined text-lg">description</span>
            Browse Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
