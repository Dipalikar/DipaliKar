import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-accent-300/60" />
            Experience
          </span>
          <h2 className="section-title">Where I've worked.</h2>
          <p className="section-lead">
            Professional experience spanning healthcare advisory at a global
            firm and self-directed engineering on full-stack AI products.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-400/40 via-white/10 to-transparent sm:block"
          />
          <ol className="space-y-6">
            {experience.map((job) => (
              <li
                key={job.company}
                className="relative sm:pl-14"
              >
                <span className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-accent-400/30 bg-ink-900 text-accent-300 sm:inline-flex">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div className="card">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                      {job.period}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-medium text-accent-300">
                    {job.role}
                    {job.location ? (
                      <span className="text-ink-400"> · {job.location}</span>
                    ) : null}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-ink-200"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-400"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
