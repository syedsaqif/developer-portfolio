"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Copy, Check, ArrowUpRight } from "lucide-react";
import { personal, social } from "@/data/config";
import { Section, SectionHeading, FadeIn } from "@/components/ui";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    hint: "Preferred for direct communication",
    canCopy: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/syedsaqif",
    href: social.github,
    hint: "Repositories & open source code",
    canCopy: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/syedsaqifhossain",
    href: social.linkedin,
    hint: "Professional network & background",
    canCopy: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@i_msyedsaqif",
    href: social.instagram,
    hint: "Personal updates & creative pursuits",
    canCopy: false,
  },
].filter((c) => Boolean(c.href));

function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy email address"
      className="flex items-center justify-center w-9 h-9 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors ml-auto flex-shrink-0 cursor-pointer"
      aria-label="Copy email"
    >
      {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
    </button>
  );
}

export function Contact() {
  return (
    <Section id="contact" borderTop>
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="04 — Contact"
          title="Get In Touch"
          description="I'm open to discussing internships, collaborative projects, or tech ideas. Reach out directly through any of the channels below."
          align="center"
        />

        <div className="flex flex-col gap-3.5">
          {contactChannels.map(({ icon: Icon, label, value, href, hint, canCopy }, index) => (
            <FadeIn key={label} delay={index * 0.05}>
              <a
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-4 sm:p-5 backdrop-blur-sm flex items-center gap-4 hover:border-violet-500/40 hover:bg-zinc-900/80 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icon size={18} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">
                      {label}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-zinc-100 truncate">
                    {value}
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5 hidden sm:block">
                    {hint}
                  </p>
                </div>

                {canCopy ? (
                  <EmailCopyButton email={personal.email} />
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="text-zinc-400 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                  />
                )}
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <p className="mt-8 text-center text-xs text-zinc-400">
            Feel free to reach out directly via email or connect on LinkedIn and GitHub.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
