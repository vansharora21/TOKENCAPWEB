"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { InstallCliButton } from "@/components/shared/InstallCliButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
    },
  },
};

function Hero() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left max-w-xl py-6"
    >
      {/* Title */}
      <motion.h1 
        variants={itemVariants}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08] font-sans"
      >
        Your codebase. <br />
        Compressed. <br />
        Ready to hand off.
      </motion.h1>

      {/* Description */}
      <motion.p 
        variants={itemVariants}
        className="mt-6 text-sm sm:text-base text-muted leading-relaxed max-w-md font-sans"
      >
        Stop wasting tokens. TokenCap snapshots your workspace into structured, AI-ready prompts with files, imports, Git context, and invariants.
      </motion.p>

      {/* Action Block */}
      <motion.div 
        variants={itemVariants}
        className="mt-8 flex flex-wrap items-center gap-3 w-full"
      >
        {/* Install Button with Toast Notification */}
        <InstallCliButton
          command="npm install -g tokencap"
          label="Install"
          showCommandOnIdle={false}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-3 border border-card-border bg-pre-bg hover:bg-card-hover text-foreground rounded-lg text-xs font-semibold font-sans transition-all active:scale-[0.98] cursor-pointer shadow-sm"
        />

        <Link
          href="/reviews"
          className="text-center bg-foreground text-background hover:opacity-90 font-medium px-5 py-3 rounded-lg active:scale-[0.98] transition-all text-xs flex items-center justify-center gap-1.5"
        >
          <span className="material-symbols-outlined text-xs">star</span>
          Leave a Review
        </Link>

        <Link
          href="/docs"
          className="text-center border border-card-border hover:border-card-hover bg-card hover:bg-pre-bg text-foreground/80 hover:text-foreground font-medium px-5 py-3 rounded-lg active:scale-[0.98] transition-all text-xs"
        >
          View Docs
        </Link>
      </motion.div>
    </motion.section>
  );
}

export { Hero };