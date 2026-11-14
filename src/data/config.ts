// ============================================================
// PORTFOLIO CONFIGURATION — Syed Saqif
// ============================================================
// All personal content lives here.
// ============================================================

export const siteConfig = {
  name: "Syed Saqif",
  title: "Syed Saqif — Software Developer",
  description:
    "Second-year BTech IT student at Heritage Institute of Technology, Kolkata. Building full-stack web applications with Next.js, TypeScript, Python, and FastAPI.",
  url: "https://github.com/syedsaqif",
  ogImage: "/og.png",
};

// ─── Personal ────────────────────────────────────────────────
export const personal = {
  name: "Syed Saqif",
  tagline: "I build software that solves real problems.",
  bio: "I'm a second-year BTech Information Technology student at Heritage Institute of Technology, Kolkata, focused on practical software development. I build modern full-stack web applications with Next.js, TypeScript, Python, and FastAPI — turning real-world ideas into reliable, well-engineered products.",
  education: "Heritage Institute of Technology, Kolkata",
  degree: "BTech Information Technology — 2nd Year",
  location: "Kolkata, India",
  email: "syedsaqif03@gmail.com",
  resumeUrl: null as string | null, // Hidden until finalized
};

// ─── Social Links ────────────────────────────────────────────
export const social = {
  github: "https://github.com/syedsaqif",
  linkedin: "https://www.linkedin.com/in/syedsaqifhossain/",
  instagram: "https://www.instagram.com/i_msyedsaqif/",
};

// ─── Skills ──────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "VS Code", "Postman", "Vercel"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: "krishi-market",
    title: "Krishi Market",
    description:
      "A digital marketplace connecting Indian farmers directly with buyers to eliminate middlemen and enable fair pricing.",
    longDescription:
      "A digital agricultural marketplace connecting farmers directly with buyers to promote fair pricing and eliminate intermediaries. Features live product listings, transparent price discovery, and a clean buyer-seller interface built with Next.js, FastAPI, and PostgreSQL.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    githubUrl: "https://github.com/syedsaqif/krishi-market-showcase",
    liveUrl: "https://krishimarket-frontend.onrender.com/",
    featured: true,
  },
];

// ─── Experience & Achievements ───────────────────────────────
// Empty until confirmed achievements are ready
export const achievements: Achievement[] = [];

export type AchievementType =
  | "hackathon"
  | "activity"
  | "award"
  | "certification";

export interface Achievement {
  id: string;
  type: AchievementType;
  title: string;
  organization: string;
  date: string;
  description: string;
  url?: string;
}
