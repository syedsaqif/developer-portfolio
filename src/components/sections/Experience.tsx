"use client";

import { Trophy, Briefcase, Award, BookOpen, ExternalLink } from "lucide-react";
import { achievements, type AchievementType, type Achievement } from "@/data/config";
import { Section, SectionHeading, FadeIn } from "@/components/ui";

const typeConfig: Record<
  AchievementType,
  { icon: React.ElementType; accent: string; bg: string }
> = {
  hackathon: {
    icon: Trophy,
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
  },
  activity: {
    icon: BookOpen,
    accent: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
  },
  award: {
    icon: Award,
    accent: "#34d399",
    bg: "rgba(52,211,153,0.08)",
  },
  certification: {
    icon: Briefcase,
    accent: "var(--violet)",
    bg: "var(--violet-dim)",
  },
};

function AchievementCard({ item, index }: { item: Achievement; index: number }) {
  const cfg = typeConfig[item.type];
  const Icon = cfg.icon;

  return (
    <FadeIn delay={index * 0.07}>
      <div className="card-surface p-6 flex gap-4 hover:border-[var(--border-hover)]">
        <div
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{ background: cfg.bg, border: `1px solid ${cfg.accent}22` }}
        >
          <Icon size={18} style={{ color: cfg.accent }} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
            <div>
              <span className="mono-label text-[10px]" style={{ color: cfg.accent }}>
                {item.type}
              </span>
              <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                {item.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                {item.date}
              </span>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View verification link"
                  className="text-[var(--text-muted)] hover:text-[var(--violet)] transition-colors"
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] mb-2">{item.organization}</p>
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {item.description}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function Experience() {
  // If no confirmed achievements are available, hide the section entirely
  if (achievements.length === 0) {
    return null;
  }

  return (
    <Section id="experience" borderTop>
      <SectionHeading
        label="04 — Experience"
        title="Achievements & Activities"
        description="Hackathons, student activities, and achievements outside the classroom."
      />

      <div className="flex flex-col gap-4">
        {achievements.map((item, i) => (
          <AchievementCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </Section>
  );
}
