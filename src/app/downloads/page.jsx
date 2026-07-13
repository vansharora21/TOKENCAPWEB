"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CopyButton } from "@/components/shared/CopyButton";

/* -------------------------------------------------------------------------- */
/* Data                                                                        */
/* -------------------------------------------------------------------------- */

const availablePlatforms = [
  {
    id: "npm",
    name: "npm",
    label: "CLI Package",
    description:
      "Install TokenCap globally from npm. The fastest way to get started — one command and you're generating snapshots.",
    command: "npm install -g tokencap",
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-6.18 13.254z" />
      </svg>
    ),
    color: "#cb3837",
    bgGlow: "rgba(203, 56, 55, 0.08)",
  },
  {
    id: "vsx",
    name: "Open VSX",
    label: "VS Code Extension",
    description:
      "Install from the open-source VS Code marketplace. Full editor integration with auto-capture, status bar, and command palette.",
    command: null,
    link: "https://open-vsx.org/extension/VanshArora21/tokencap",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M11.4 0L5.4 6 0 11.4l5.4 5.4 6-6L6 5.4zm1.2 0l6 6-6 6 6 6 6-6-6-6zM12.6 6l6 6-6 6-6-6z" />
      </svg>
    ),
    color: "#24a256",
    bgGlow: "rgba(36, 162, 86, 0.08)",
  },
  {
    id: "vscode",
    name: "VS Code Marketplace",
    label: "VS Code Extension",
    description:
      "Install from the official Microsoft marketplace. Same full-featured extension with seamless editor integration.",
    command: "code --install-extension VanshArora21.tokencap",
    link: "https://marketplace.visualstudio.com/items?itemName=VanshArora21.tokencap",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M17.583 2.427L12 8.01l-5.583-5.583H4.5L12 14.5l7.5-7.5zM12 15.99l-5.583-5.583L12 4.824l5.583 5.583z" />
        <path d="M17.583 14.427L12 20.01l-5.583-5.583H4.5L12 26.5l7.5-7.5z" opacity="0.5" />
      </svg>
    ),
    color: "#007acc",
    bgGlow: "rgba(0, 122, 204, 0.08)",
  },
];

const comingSoonPlatforms = [
  {
    id: "claude",
    name: "Claude Desktop",
    label: "MCP Integration",
    description:
      "Native Model Context Protocol integration for Claude Desktop. TokenCap context will be available as an MCP tool automatically.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z" opacity="0.4" />
        <circle cx="12" cy="12" r="3" opacity="0.6" />
      </svg>
    ),
    color: "#d4a574",
  },
  {
    id: "codex",
    name: "Codex CLI",
    label: "Native Support",
    description:
      "First-class support in Codex CLI sessions. TokenCap will auto-discover and load project context without manual setup.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6zM14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6z" opacity="0.4" />
      </svg>
    ),
    color: "#00d4aa",
  },
  {
    id: "skills",
    name: "Skill Injection",
    label: "Agent Plugin",
    description:
      "One-line installation to inject TokenCap skills into any AI coding agent. Drop-in integration for Cursor, Windsurf, Cline, and Roo Code.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" opacity="0.4" />
      </svg>
    ),
    color: "#a78bfa",
  },
];

/* -------------------------------------------------------------------------- */
/* Animated card border                                                        */
/* -------------------------------------------------------------------------- */

function AnimatedBorder({ color, isActive }) {
  return (
    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
      {/* Top glow line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
        animate={
          isActive
            ? { opacity: [0.3, 0.8, 0.3] }
            : { opacity: 0.1 }
        }
        transition={
          isActive
            ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.3 }
        }
      />
      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
        animate={
          isActive
            ? { opacity: [0.2, 0.6, 0.2] }
            : { opacity: 0.05 }
        }
        transition={
          isActive
            ? { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
            : { duration: 0.3 }
        }
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Platform card                                                               */
/* -------------------------------------------------------------------------- */

function PlatformCard({ platform, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <AnimatedBorder color={platform.color} isActive={isHovered} />

      <div
        className="relative rounded-xl border border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl p-8 transition-all duration-500 h-full flex flex-col"
        style={{
          boxShadow: isHovered
            ? `0 0 40px ${platform.bgGlow}, inset 0 1px 0 rgba(255,255,255,0.04)`
            : "inset 0 1px 0 rgba(255,255,255,0.02)",
        }}
      >
        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500"
            style={{
              background: `${platform.color}10`,
              color: platform.color,
              boxShadow: isHovered ? `0 0 20px ${platform.bgGlow}` : "none",
            }}
          >
            {platform.icon}
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border"
            style={{
              color: platform.color,
              background: `${platform.color}10`,
              borderColor: `${platform.color}20`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: platform.color }}
            />
            {platform.label}
          </span>
        </div>

        {/* Name + description */}
        <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
        <p className="text-sm leading-relaxed text-[#ccc3d8] mb-8 flex-grow">
          {platform.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {/* Install command */}
          {platform.command && (
            <div className="bg-[#131315] rounded-lg border border-white/[0.06] px-4 py-2.5 flex items-center justify-between gap-3 font-mono text-[13px] group/command hover:border-white/[0.12] transition-colors">
              <span className="text-zinc-200 whitespace-nowrap select-all overflow-hidden text-ellipsis">
                {platform.command}
              </span>
              <CopyButton text={platform.command} />
            </div>
          )}

          {/* Link button */}
          <a
            href={platform.link || "#"}
            target={platform.link ? "_blank" : undefined}
            rel={platform.link ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            style={{
              background: platform.color,
              color: "#fff",
              boxShadow: isHovered
                ? `0 0 24px ${platform.bgGlow}`
                : `0 0 12px ${platform.bgGlow}`,
            }}
          >
            <span className="material-symbols-outlined text-[16px]">
              {platform.link ? "open_in_new" : "download"}
            </span>
            {platform.link ? "Install Now" : "Install"}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Coming soon card                                                            */
/* -------------------------------------------------------------------------- */

function ComingSoonCard({ platform, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: 0.3 + index * 0.1, ease: "easeOut" }}
      className="relative group"
    >
      <div className="relative rounded-xl border border-white/[0.04] bg-[#09090b]/40 backdrop-blur-sm p-6 transition-all duration-500 h-full flex flex-col opacity-70 hover:opacity-100">
        {/* Icon + badge row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
            style={{
              background: `${platform.color}08`,
              color: `${platform.color}80`,
            }}
          >
            {platform.icon}
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border border-white/[0.06] text-zinc-500 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse" />
            Coming Soon
          </span>
        </div>

        {/* Name + description */}
        <h3 className="text-lg font-bold text-zinc-300 mb-1.5">{platform.name}</h3>
        <p className="text-sm leading-relaxed text-zinc-500 flex-grow">
          {platform.description}
        </p>

        {/* Disabled action */}
        <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600 font-mono">
          <span className="material-symbols-outlined text-[14px]">schedule</span>
          <span>In development</span>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Floating particles (decorative)                                             */
/* -------------------------------------------------------------------------- */

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#7c3aed]/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                        */
/* -------------------------------------------------------------------------- */

export default function DownloadsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-40px" });
  const availableRef = useRef(null);
  const availableInView = useInView(availableRef, { once: true, margin: "-60px" });
  const comingSoonRef = useRef(null);
  const comingSoonInView = useInView(comingSoonRef, { once: true, margin: "-40px" });

  return (
    <div className="min-h-screen bg-[#0a0a0c] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#7c3aed]/[0.06] via-[#7c3aed]/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-20 relative">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <motion.header
          ref={heroRef}
          initial={{ opacity: 0, y: 24 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-20 relative"
        >
          <FloatingParticles />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#d2bbff] font-mono text-[10px] uppercase tracking-wider font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            Download TokenCap
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-3xl mx-auto font-nerdropol">
            Get TokenCap,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2bbff] to-[#7c3aed] anim-heading-gradient">
              your way
            </span>
          </h1>

          <p className="text-[#ccc3d8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            Install via npm for CLI access, or grab the VS Code extension from
            Open VSX or the Microsoft Marketplace. AI-native integrations are
            on the way.
          </p>
        </motion.header>

        {/* ── Available Platforms ───────────────────────────────── */}
        <section ref={availableRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={availableInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#4edea3] text-sm">
                check_circle
              </span>
            </div>
            <h2 className="text-xl font-bold text-white font-vorcas">Available Now</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availablePlatforms.map((p, i) => (
              <PlatformCard key={p.id} platform={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── Quick Install Terminal ────────────────────────────── */}
        <motion.section
          ref={comingSoonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={comingSoonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl overflow-hidden">
            {/* Terminal header */}
            <div className="bg-[#111113] px-4 py-2.5 border-b border-white/[0.05] flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
              </div>
              <span className="text-[10px] font-mono text-zinc-600">
                bash — quick install
              </span>
              <div className="w-12" />
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-[13px] space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2 overflow-x-auto text-left">
                  <span className="text-[#7c3aed] select-none font-bold">$</span>
                  <span className="text-zinc-200 whitespace-nowrap select-all">
                    npm install -g tokencap
                  </span>
                </div>
                <CopyButton text="npm install -g tokencap" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2 overflow-x-auto text-left">
                  <span className="text-[#7c3aed] select-none font-bold">$</span>
                  <span className="text-zinc-200 whitespace-nowrap select-all">
                    tokencap make
                  </span>
                </div>
                <CopyButton text="tokencap make" />
              </div>
              <div className="pt-2 border-t border-white/[0.04] flex items-center gap-2 text-xs text-zinc-500">
                <span className="material-symbols-outlined text-[14px] text-[#4edea3]">
                  info
                </span>
                <span>
                  Generates TOKENCAP.md, TOKENCAP_GRAPH.md, and
                  TOKENCAP_MEMORY.md
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Coming Soon ───────────────────────────────────────── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-500 text-sm">
                schedule
              </span>
            </div>
            <h2 className="text-xl font-bold text-zinc-400 font-vorcas">Coming Soon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoonPlatforms.map((p, i) => (
              <ComingSoonCard key={p.id} platform={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-bold text-sm hover:brightness-110 transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(124,58,237,0.15)] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                book
              </span>
              Read the Quickstart Guide
            </a>
            <a
              href="/vscode"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.08] text-zinc-300 font-bold text-sm hover:bg-white/[0.04] transition-all active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                code
              </span>
              VS Code Extension Details
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
