"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "material-symbols-outlined text-sm cursor-pointer hover:text-[#d2bbff] transition-colors focus-visible:outline-2 focus-visible:outline-[#7c3aed] focus-visible:outline-offset-2",
        copied ? "text-[#4edea3]" : "text-zinc-500",
        className
      )}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? "check" : "content_copy"}
    </button>
  );
}
