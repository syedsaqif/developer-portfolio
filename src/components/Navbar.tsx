"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { personal, achievements } from "@/data/config";

const baseNavLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // If no achievements are defined, don't show the Experience link
  const navLinks = baseNavLinks.filter((link) => {
    if (link.href === "#experience") {
      return achievements.length > 0;
    }
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-xl shadow-black/30"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            aria-label="Syed Saqif — Back to top"
            className="group flex items-center gap-1 font-mono text-sm sm:text-base font-bold tracking-tight text-zinc-100 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-violet-400 transition-transform group-hover:-translate-x-0.5">&lt;</span>
            <span>{personal.name.split(" ")[0].toLowerCase()}</span>
            <span className="text-violet-400 transition-transform group-hover:translate-x-0.5">/&gt;</span>
          </a>

          {/* Desktop Nav Items */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 rounded-full border border-zinc-800/90 bg-zinc-900/70 p-1.5 backdrop-blur-md shadow-lg shadow-black/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="rounded-full px-4 py-1.5 text-xs lg:text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/90 transition-all cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action / Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 hover:bg-violet-600 hover:text-white transition-all shadow-sm shadow-violet-900/20"
              >
                Resume
              </a>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/90 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] inset-x-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-6 py-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </a>
              ))}

              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 text-center rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 hover:bg-violet-500 transition-colors"
                >
                  View Resume
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
