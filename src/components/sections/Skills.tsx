"use client";

import { Code, Layout, Server, Database, Wrench } from "lucide-react";
import { skills } from "@/data/config";
import { Section, SectionHeading, FadeIn } from "@/components/ui";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "Tools & Platforms": Wrench,
};

export function Skills() {
  return (
    <Section id="skills" borderTop>
      <SectionHeading
        label="02 — Skills"
        title="My Tech Stack"
        description="A practical set of technologies, languages, and tools I use to build scalable web applications."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => {
          const Icon = categoryIcons[category.category] || Code;
          return (
            <FadeIn key={category.category} delay={index * 0.06}>
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm h-full flex flex-col justify-between hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/10 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-zinc-100 tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-300 bg-zinc-800/60 border border-zinc-700/60 hover:border-violet-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3.5 border-t border-zinc-800/70 flex items-center justify-between text-xs text-zinc-400">
                  <span>{category.items.length} tools &amp; frameworks</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
