"use client";

import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Docs", href: "/docs" },
    { label: "CLI", href: "/cli" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        {/* Left: Brand name */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-white hover:opacity-90 transition">
          <span className="text-xl font-bold tracking-tight text-white">TokenCap</span>
        </Link>

        {/* Middle: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <button className="text-zinc-400 hover:text-white transition focus:outline-none" aria-label="Search">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Demo CLI button */}
          <Link
            href="/cli"
            className="hidden sm:inline-block rounded-full border border-purple-500/40 bg-purple-500/5 px-4 py-1.5 text-xs font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20"
          >
            Demo CLI
          </Link>

          {/* Globe Icon */}
          <button className="hidden sm:inline-block text-zinc-400 hover:text-white transition focus:outline-none" aria-label="Globe">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
            </svg>
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-400 hover:text-white transition focus:outline-none md:hidden p-1"
            aria-label="Toggle Menu"
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
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0c]/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2"></div>
              {/* Mobile-only CTA */}
              <Link
                href="/cli"
                onClick={() => setIsOpen(false)}
                className="w-full text-center rounded-lg border border-purple-500/40 bg-purple-500/5 py-2.5 text-sm font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20 block"
              >
                Demo CLI
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };