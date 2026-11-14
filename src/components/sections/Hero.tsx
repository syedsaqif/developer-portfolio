"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight, ArrowDown, Terminal } from "lucide-react";
import { personal, social } from "@/data/config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", id);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Seamless Background Ambience without sharp edges */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-grid-pattern opacity-50" />
        <div className="hero-glow-bg" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Status Badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400" />
                </span>
                Open to internship opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-zinc-100"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>

            {/* Tagline / Subtitle */}
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-xl mb-8"
            >
              {personal.tagline}{" "}
              <span className="text-zinc-400 block sm:inline mt-1 sm:mt-0">
                2nd-year BTech IT student at {personal.education}. Building full-stack web applications with modern frontend and backend technologies.
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#projects");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 hover:bg-violet-500 hover:shadow-violet-900/50 transition-all cursor-pointer active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-violet-500/50 hover:bg-zinc-800 hover:text-white transition-all cursor-pointer active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex items-center gap-3"
            >
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-800/80 bg-zinc-900/80 text-zinc-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-950/20 transition-all"
                >
                  <Github size={18} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-800/80 bg-zinc-900/80 text-zinc-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-950/20 transition-all"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="flex items-center justify-center w-11 h-11 rounded-xl border border-zinc-800/80 bg-zinc-900/80 text-zinc-400 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-950/20 transition-all"
                >
                  <Instagram size={18} />
                </a>
              )}

              <div className="h-5 w-px bg-zinc-800 mx-1" />
              <span className="font-mono text-xs text-zinc-400 tracking-wider">
                github.com/syedsaqif
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Abstract Developer Card (Desktop Balance) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Subtle glow behind card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/20 to-indigo-600/10 blur-xl opacity-60" />

            <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-900/80 p-6 backdrop-blur-xl shadow-2xl shadow-black/40">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
                  <Terminal size={12} className="text-violet-400" />
                  <span>developer.config.ts</span>
                </div>
              </div>

              {/* Code Snippet Motif */}
              <div className="font-mono text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-1">
                <p>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-zinc-100 font-semibold">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-300">&quot;Syed Saqif&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">college:</span>{" "}
                  <span className="text-emerald-300">&quot;HIT Kolkata&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> [
                </p>
                <p className="pl-8 text-violet-300">
                  &quot;Next.js&quot;, &quot;React&quot;, &quot;TypeScript&quot;, &quot;FastAPI&quot;, &quot;Python&quot;
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-zinc-400">openToOpportunities:</span>{" "}
                  <span className="text-amber-400">true</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Status Footer inside card */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-zinc-300 text-[11px]">System Ready</span>
                </div>
                <span className="font-mono text-[11px] text-zinc-400">2nd Year BTech</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-14 flex justify-center"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#about");
          }}
          className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-violet-400 transition-colors">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="motion-reduce:animate-none"
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
