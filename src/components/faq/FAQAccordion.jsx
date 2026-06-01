"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is TOKENCAP.md?",
    answer: (
      <div>
        <p className="mb-3">
          TOKENCAP.md is a standardized manifest file that lives in your project root. It provides structured metadata and "context hints" for LLMs, allowing them to understand your project architecture without reading every single file.
        </p>
        <div className="bg-[#1c1b1d] rounded-lg p-3 border border-[#4a4455]/40 font-mono text-xs text-[#4edea3]">
          <code>
            # TokenCap Project Manifest<br />
            &gt; version: 2.4.0<br />
            &gt; scan_depth: deep
          </code>
        </div>
      </div>
    ),
  },
  {
    question: "Does TokenCap upload my code?",
    answer: "No. TokenCap is local-first. All tokenization, embedding generation, and context gathering happen entirely on your local machine. We do not maintain any cloud-based mirrors of your source code. Your data stays where it belongs.",
  },
  {
    question: "Does it work with Cursor?",
    answer: "Absolutely. TokenCap generates context fragments that are perfectly formatted for Cursor's \"Composer\" and \"Chat\" modes. Simply pipe your TokenCap output into a .txt file or use our clipboard command to give Cursor superhuman context.",
  },
  {
    question: "Which LLMs are supported?",
    answer: "TokenCap is model-agnostic. It produces optimized Markdown or JSON structures that work beautifully with GPT-4, Claude 3.5 Sonnet, Llama 3, and Gemini Pro. Our \"Prompt-Ready\" output mode is specifically tuned for high-attention-span models.",
  },
  {
    question: "How do I ignore specific files?",
    answer: "TokenCap respects your .gitignore automatically. Additionally, you can add a .tokencapignore file for CLI-specific exclusions, or use the --exclude flag during runtime.",
  },
  {
    question: "Is there a CLI limit?",
    answer: "There are no artificial limits. However, for massive monorepos (>500k files), we recommend using our --sparse scan mode to maintain rapid performance and prevent context window overflow in your LLM.",
  },
  {
    question: "Can I use it for documentation?",
    answer: "Yes! TokenCap includes a docs command that converts your codebase structure and JSDoc/Type hints into a clean documentation skeleton, ready for VitePress or Docusaurus.",
  },
  {
    question: "Is TokenCap open source?",
    answer: "The core CLI engine is open source under the MIT License. We offer a \"Pro\" cloud sync layer for team-wide context sharing, but the local-first utility will always remain free and open.",
  },
];

export function FAQAccordion() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = !!openIndexes[index];
        return (
          <div
            key={index}
            className="accordion-item glass-panel rounded-xl glow-hover overflow-hidden transition-all duration-300 border border-white/10 bg-white/5"
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-base font-bold text-white">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 text-zinc-400 ${
                  isOpen ? "rotate-180 text-white" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-[#4a4455]/20 p-5" : "max-h-0"
              }`}
            >
              <div className="text-sm leading-relaxed text-[#ccc3d8]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
