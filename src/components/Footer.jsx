import { Github, Mail } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-400">
          © {year} {profile.name}. Built with React, Tailwind & a lot of
          curiosity.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-colors hover:border-accent-400/30 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-colors hover:border-accent-400/30 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
