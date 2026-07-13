import Link from "next/link";

function Hero() {
  return (
    <section className="flex flex-col items-start text-left max-w-xl pt-4 pb-4">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-vorcas anim-heading-reveal">
        Never Lose Project <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 anim-heading-gradient">Context</span> Again
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
        TokenCap generates AI-ready coding handoff snapshots (TOKENCAP.md) instantly, keeping your LLMs in sync with your local development.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <Link
          href="/docs/getting-started"
          className="w-full sm:w-auto text-center bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-sm shadow-lg shadow-purple-600/10"
        >
          Install TokenCap
        </Link>
        <Link
          href="/docs"
          className="w-full sm:w-auto text-center border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 hover:bg-zinc-900/60 text-zinc-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition duration-200 text-sm"
        >
          View Docs
        </Link>
      </div>
    </section>
  );
}

export { Hero };