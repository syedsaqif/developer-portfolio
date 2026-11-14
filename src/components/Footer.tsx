import { Github, Linkedin, Instagram } from "lucide-react";
import { personal, social } from "@/data/config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Logo */}
        <span className="font-mono text-sm font-bold text-zinc-400 tracking-wider">
          <span className="text-violet-400">&lt;</span>
          {personal.name.toLowerCase().replace(" ", "-")}
          <span className="text-violet-400">/&gt;</span>
        </span>

        {/* Credit */}
        <p className="text-xs text-zinc-400">
          Crafted with 💜 using Next.js &amp; Tailwind CSS.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <Github size={17} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <Linkedin size={17} />
            </a>
          )}
          {social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-zinc-400 hover:text-violet-400 transition-colors"
            >
              <Instagram size={17} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
