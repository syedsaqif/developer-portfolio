"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Section Container ───────────────────────────────────────
interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  borderTop?: boolean;
}

export function Section({ id, className, children, borderTop = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        borderTop && "border-t border-zinc-800/80",
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-20 md:py-28">
        {children}
      </div>
    </section>
  );
}

// ─── Section Heading ─────────────────────────────────────────
interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "mb-12 md:mb-14",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2.5">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed",
            align === "center" ? "max-w-xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

// ─── FadeIn Wrapper ──────────────────────────────────────────
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const dirMap = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { y: 0, x: 16 },
    right: { y: 0, x: -16 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Card Wrapper ────────────────────────────────────────────
interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className={cn(
        "rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-violet-500/30",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
