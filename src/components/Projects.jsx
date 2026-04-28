import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { projects, profile } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="section-eyebrow">
              <span className="h-px w-8 bg-accent-300/60" />
              Selected Projects
            </span>
            <h2 className="section-title">AI-native products I've built.</h2>
            <p className="section-lead">
              Two end-to-end SaaS applications that put generative AI to work —
              from document intelligence to a multi-tool subscription platform.
            </p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <Github className="h-4 w-4" />
            More on GitHub
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <article
              key={p.name}
              className="card group relative flex flex-col overflow-hidden"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-400">
                  0{idx + 1} / 0{projects.length}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-300/20 bg-accent-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-accent-200">
                  <Sparkles className="h-3 w-3" />
                  AI Product
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-300">
                {p.headline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-ink-200">
                {p.description}
              </p>

              <ul className="mt-4 space-y-2">
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-ink-300"
                  >
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent-400"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-4">
                <span className="text-xs text-ink-400">Role · {p.role}</span>
                <div className="flex gap-3">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary py-1.5 px-3 text-xs"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost py-1.5 px-3 text-xs"
                    >
                      <Github className="h-3 w-3" />
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
