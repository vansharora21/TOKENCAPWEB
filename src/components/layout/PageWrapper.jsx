"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function PageWrapper({ children, className, container = true }) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={variants}
      className={cn(
        "w-full",
        container && "mx-auto max-w-7xl px-6 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </motion.main>
  );
}

export { PageWrapper };