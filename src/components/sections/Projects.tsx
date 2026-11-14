"use client";

import { Github, ExternalLink, ArrowUpRight, Sprout, TrendingUp, Cpu } from "lucide-react";
import { projects } from "@/data/config";
import { Section, SectionHeading, FadeIn } from "@/components/ui";

function FeaturedProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <FadeIn>
      <div className="rounded-3xl border border-zinc-800/90 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20 transition-all">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-stretch">
          {/* Left Column: Details */}
          <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300">
                  Featured Project
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live on Render
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-100 mb-3">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-2.5">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-800/80 border border-zinc-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-800/80">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-violet-900/30 hover:bg-violet-500 hover:shadow-violet-900/50 transition-all active:scale-95"
                >
                  <span>Live Application</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-violet-500/40 hover:text-white transition-all active:scale-95"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual App Preview Showcase */}
          <div className="relative border-t lg:border-t-0 lg:border-l border-zinc-800/90 bg-zinc-950/70 p-6 sm:p-8 flex flex-col justify-between">
            {/* Top Mock Window Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-zinc-400 hover:text-zinc-200 bg-zinc-900/90 px-3 py-1 rounded-md border border-zinc-800 flex items-center gap-1.5 transition-colors"
              >
                <span>krishimarket-frontend.onrender.com</span>
                <ExternalLink size={10} />
              </a>
            </div>

            {/* App Showcase Preview Visual */}
            <div className="my-6 space-y-3">
              <div className="p-4 rounded-xl border border-zinc-800/90 bg-zinc-900/70">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 mb-1">
                  <Sprout size={16} className="text-emerald-400" />
                  <span>Direct Farmer-to-Buyer Portal</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Marketplace interface enabling direct crop listings and buyer inquiries without complex distribution channels.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-800/90 bg-zinc-900/70">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 mb-1">
                  <TrendingUp size={16} className="text-amber-400" />
                  <span>Transparent Price Discovery</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Clear commodity price visibility to assist farmers and buyers with informed transactions.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-800/90 bg-zinc-900/70">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-zinc-200 mb-1">
                  <Cpu size={16} className="text-violet-400" />
                  <span>Full-Stack Architecture</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Next.js App Router client connected to a Python FastAPI backend with PostgreSQL database.
                </p>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-xs text-zinc-400">
              <span>Next.js + FastAPI + PostgreSQL</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-violet-400 hover:text-violet-300 hover:underline"
              >
                <span>Open demo</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <Section id="projects" borderTop>
      <SectionHeading
        label="03 — Projects"
        title="Featured Work"
        description="Practical applications built with performance, usability, and clean engineering practices."
      />

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/syedsaqif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:border-violet-500/40 hover:text-white transition-all"
          >
            <Github size={16} />
            <span>More projects on GitHub @syedsaqif</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
