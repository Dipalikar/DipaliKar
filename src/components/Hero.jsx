import {
  ArrowRight,
  Download,
  Github,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { profile, stats } from '../data/portfolio.js';

const resumeHref = profile.resumeUrl;
const photoHref = `${import.meta.env.BASE_URL}${profile.photo}`;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to opportunities
              </span>
            )}

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm {profile.firstName}.{' '}
              <span className="bg-gradient-to-r from-accent-200 via-accent-300 to-accent-400 bg-clip-text text-transparent">
                I build AI-powered products.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-ink-300 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-300">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-300" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent-300" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4 text-accent-300" />
                {profile.githubHandle}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={resumeHref}
                download={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#projects" className="btn-ghost">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-fade-in lg:max-w-none">
            <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2rem] bg-gradient-to-br from-accent-500/30 via-accent-700/20 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-glow backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={photoHref}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 hidden rotate-3 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 text-sm shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-2 font-display font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-accent-300" />
                  AI Engineer
                </div>
                <p className="mt-0.5 text-xs text-ink-300">
                  RAG · MCP · LLM Agents
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 text-center backdrop-blur-sm"
            >
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-ink-400 sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
