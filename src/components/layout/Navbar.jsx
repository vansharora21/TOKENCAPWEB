"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "@/components/theme/ThemeProvider";

const docsDropdownItems = [
  { label: "How to Install", href: "/downloads" },
  { label: "Features", href: "/features" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "CLI Reference", href: "/cli" },
  { label: "All Documentation", href: "/docs" },
];

const navItems = [
  { label: "Downloads", href: "/downloads" },
  { label: "Timeline", href: "/changelog" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Close menus on Escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setDocsOpen(false);
    }
  };

  // Close dropdown on route change
  useEffect(() => {
    setDocsOpen(false);
    setIsOpen(false);
  }, [pathname]);

  const isDocsActive =
    pathname === "/docs" ||
    pathname === "/features" ||
    pathname === "/benchmarks" ||
    pathname === "/cli" ||
    pathname === "/vscode";

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center pointer-events-none" onKeyDown={handleKeyDown}>
      {/* Docked Top Notch Container: Solid Black in Light Mode / Solid White in Dark Mode */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 pointer-events-auto">
        <div
          className={`relative flex items-center justify-between px-5 sm:px-8 py-3 border-b border-x rounded-b-[28px] sm:rounded-b-[34px] shadow-2xl transition-colors duration-200 ${
            isDark
              ? "bg-white text-black border-zinc-200"
              : "bg-black text-white border-zinc-800"
          }`}
        >
          {/* Top-Left Inverted Fillet Curve */}
          <div className="absolute -left-[20px] top-0 w-[20px] h-[20px] pointer-events-none hidden sm:block overflow-hidden">
            <svg
              className={`w-full h-full fill-current transition-colors duration-200 ${
                isDark ? "text-white" : "text-black"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M20 0 L0 0 C 12 0, 20 8, 20 20 Z" />
              <path
                d="M0 0 C 12 0, 20 8, 20 20"
                fill="none"
                stroke={isDark ? "#e4e4e7" : "#27272a"}
                strokeWidth="1.2"
              />
            </svg>
          </div>

          {/* Top-Right Inverted Fillet Curve */}
          <div className="absolute -right-[20px] top-0 w-[20px] h-[20px] pointer-events-none hidden sm:block overflow-hidden">
            <svg
              className={`w-full h-full fill-current transition-colors duration-200 ${
                isDark ? "text-white" : "text-black"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M0 0 L20 0 C 8 0, 0 8, 0 20 Z" />
              <path
                d="M20 0 C 8 0, 0 8, 0 20"
                fill="none"
                stroke={isDark ? "#e4e4e7" : "#27272a"}
                strokeWidth="1.2"
              />
            </svg>
          </div>

          {/* Left: Brand name */}
          <Link
            href="/"
            className={`flex items-center text-sm font-semibold tracking-tight transition shrink-0 ${
              isDark ? "text-black hover:opacity-80" : "text-white hover:opacity-90"
            }`}
          >
            <span className="text-base font-bold tracking-tight font-sans">
              TokenCap
            </span>
          </Link>

          {/* Middle: Centered Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
            
            {/* Docs Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDocsOpen(true)}
              onMouseLeave={() => setDocsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDocsOpen((prev) => !prev)}
                className={`
                  flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer
                  ${
                    isDocsActive || docsOpen
                      ? isDark
                        ? "text-black bg-zinc-100 font-semibold"
                        : "text-white bg-zinc-900 font-semibold"
                      : isDark
                      ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/70"
                  }
                `}
                aria-expanded={docsOpen}
              >
                <span>Docs</span>
                <span className={`material-symbols-outlined text-[13px] transition-transform duration-150 ${docsOpen ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>

              {/* Minimalist Dropdown Popover */}
              {docsOpen && (
                <div className="absolute top-full left-0 pt-2 w-52 z-50 animate-in fade-in duration-100">
                  <div
                    className={`p-2 rounded-2xl sm:rounded-[20px] shadow-2xl space-y-1 border ${
                      isDark
                        ? "bg-white border-zinc-200 text-black"
                        : "bg-black border-zinc-800 text-white"
                    }`}
                  >
                    {docsDropdownItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`
                            block px-3.5 py-2 text-xs font-medium rounded-xl transition-colors
                            ${
                              isActive
                                ? isDark
                                  ? "text-black bg-zinc-100 font-semibold"
                                  : "text-white bg-zinc-900 font-semibold"
                                : isDark
                                ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-3 py-1.5 text-xs font-medium rounded-full transition-colors
                    ${
                      isActive
                        ? isDark
                          ? "text-black bg-zinc-100 font-semibold"
                          : "text-white bg-zinc-900 font-semibold"
                        : isDark
                        ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/70"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Review Button + Search + Theme) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Review Button: White Pill in Light Theme / Black Pill in Dark Theme */}
            <Link
              href="/reviews"
              className={`flex items-center gap-1.5 font-semibold text-xs px-3.5 sm:px-4 py-1.5 rounded-full transition-all active:scale-[0.97] shadow-sm shrink-0 ${
                isDark
                  ? "bg-black text-white hover:bg-zinc-800"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              <span className="material-symbols-outlined text-[13px]">
                star
              </span>
              <span>Review</span>
            </Link>

            {/* Search Icon */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isDark
                  ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
              aria-label="Search"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Theme Toggle Button */}
            <div className={isDark ? "text-zinc-600 hover:text-black" : "text-zinc-400 hover:text-white"}>
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-1.5 rounded-full transition cursor-pointer ${
                isDark
                  ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Minimalist Mobile Menu Dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden mt-2 p-3 rounded-2xl shadow-2xl space-y-2 border animate-in fade-in duration-150 ${
              isDark
                ? "bg-white border-zinc-200 text-black"
                : "bg-black border-zinc-800 text-white"
            }`}
          >
            <div className="space-y-0.5">
              <div className={`px-3 py-1 text-[9px] font-mono uppercase tracking-[0.15em] ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                Docs
              </div>
              {docsDropdownItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-1.5 text-xs rounded-lg transition-colors ${
                    isDark
                      ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className={`border-t pt-2 space-y-0.5 ${isDark ? "border-zinc-200" : "border-zinc-800"}`}>
              <div className={`px-3 py-1 text-[9px] font-mono uppercase tracking-[0.15em] ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                Navigation
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-1.5 text-xs rounded-lg transition-colors ${
                    isDark
                      ? "text-zinc-600 hover:text-black hover:bg-zinc-100"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export { Navbar };
