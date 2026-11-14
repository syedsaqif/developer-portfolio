"use client";

import { MapPin, GraduationCap, Code2, Rocket, ArrowUpRight } from "lucide-react";
import { personal, social } from "@/data/config";
import { Section, SectionHeading, FadeIn } from "@/components/ui";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    title: personal.education,
    subtitle: personal.degree,
  },
  {
    icon: MapPin,
    label: "Location",
    title: personal.location,
    subtitle: "West Bengal, India",
  },
  {
    icon: Code2,
    label: "Focus",
    title: "Full-Stack Development",
    subtitle: "Web Apps & Backend APIs",
  },
  {
    icon: Rocket,
    label: "Status",
    title: "Open to Internships",
    subtitle: "Summer & Fall Opportunities",
  },
];

export function About() {
  return (
    <Section id="about" borderTop>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Left Column: Narrative */}
        <div>
          <SectionHeading
            label="01 — About"
            title="A bit about me"
          />

          <FadeIn>
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              <p>
                {personal.bio}
              </p>
              <p>
                I prioritize clean architecture, maintainability, and building responsive, accessible interfaces connected to robust backend services. Always eager to learn, contribute to open source, and build alongside great engineering teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-violet-500/40 hover:text-white transition-all"
                >
                  <span>GitHub Profile</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:border-violet-500/40 hover:text-white transition-all"
                >
                  <span>LinkedIn Connect</span>
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Right Column: 4 Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {highlights.map(({ icon: Icon, label, title, subtitle }, index) => (
            <FadeIn key={label} delay={index * 0.06}>
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-sm flex flex-col justify-between h-full hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/10 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3.5">
                    <Icon size={18} />
                  </div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-zinc-100 leading-snug">
                    {title}
                  </p>
                </div>
                {subtitle && (
                  <p className="text-xs text-zinc-400 mt-3 pt-2.5 border-t border-zinc-800/70">
                    {subtitle}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
