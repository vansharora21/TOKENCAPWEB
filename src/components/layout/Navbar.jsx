"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Downloads", href: "/downloads" },
  { label: "Docs", href: "/docs" },
  { label: "Timeline", href: "/changelog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-card-border bg-nav-bg/85 backdrop-blur-xl" onKeyDown={handleKeyDown}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Left: Brand name */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground hover:opacity-90 transition">
          <span className="text-xl font-bold tracking-tight">TokenCap</span>
        </Link>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-zinc-700 focus-visible:outline-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="text-muted hover:text-foreground transition focus-visible:outline-2 focus-visible:outline-zinc-700 focus-visible:outline-offset-2"
            aria-label="Search"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted hover:text-foreground transition focus-visible:outline-2 focus-visible:outline-zinc-700 focus-visible:outline-offset-2 md:hidden p-1 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-card-border bg-nav-bg/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
