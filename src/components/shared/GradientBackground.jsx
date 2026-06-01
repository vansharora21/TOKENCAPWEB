function GradientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-blue-500/14 blur-3xl animate-float" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
    </div>
  );
}

export { GradientBackground };