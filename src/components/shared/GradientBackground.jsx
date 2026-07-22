"use client";

import { usePathname } from "next/navigation";

function GradientBackground() {
  const pathname = usePathname();

  // Determine dynamic AI-style aurora gradients based on the current path
  let auroraClass = "from-zinc-500/4 via-zinc-700/2 to-transparent dark:from-[#d2bbff]/10 dark:via-[#7c3aed]/5"; // default Home (multi-glow cosmic)
  
  if (pathname.startsWith("/features")) {
    // Cyber Teal & Neural Emerald
    auroraClass = "from-cyan-500/6 via-emerald-500/3 to-transparent dark:from-cyan-500/12 dark:via-emerald-500/6";
  } else if (pathname.startsWith("/downloads")) {
    // Sunset Rose & Cosmic Fuchsia
    auroraClass = "from-rose-500/6 via-pink-500/3 to-transparent dark:from-rose-500/12 dark:via-pink-500/6";
  } else if (pathname.startsWith("/docs")) {
    // Ice Blue & Polar Cyan
    auroraClass = "from-teal-500/4 via-blue-500/2 to-transparent dark:from-teal-500/10 dark:via-blue-500/5";
  } else if (pathname.startsWith("/mcp")) {
    // Deep Violet & Electric Indigo
    auroraClass = "from-violet-500/6 via-indigo-500/3 to-transparent dark:from-violet-600/14 dark:via-indigo-600/7";
  } else if (pathname.startsWith("/about")) {
    // Copper Amber & Solar Gold
    auroraClass = "from-orange-500/4 via-amber-500/2 to-transparent dark:from-orange-500/10 dark:via-amber-500/5";
  } else if (pathname.startsWith("/changelog")) {
    // Mercury Silver & Slate Grey
    auroraClass = "from-zinc-400/4 via-slate-500/2 to-transparent dark:from-zinc-400/8 dark:via-slate-500/4";
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Dynamic route-specific glowing aurora blob */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] ${auroraClass} rounded-full blur-[130px] transition-all duration-700`}
        style={{ backgroundImage: 'radial-gradient(circle, var(--tw-gradient-stops))' }}
      />
      
      {/* Subtle monochrome micro-grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.25] dark:opacity-[0.18]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-card-border/30 to-transparent" />
    </div>
  );
}

export { GradientBackground };