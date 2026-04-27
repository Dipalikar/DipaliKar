import { Sparkles } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-accent-300/60" />
            Tech Stack
          </span>
          <h2 className="section-title">Tools I build with.</h2>
          <p className="section-lead">
            A pragmatic stack that spans the modern web, cloud and the GenAI
            ecosystem — chosen for shipping production-grade products quickly.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`card ${
                group.accent
                  ? 'md:col-span-2 lg:col-span-3 border-accent-400/20 bg-gradient-to-br from-accent-500/[0.08] via-white/[0.02] to-transparent'
                  : ''
              }`}
            >
              <div className="flex items-center gap-2">
                {group.accent && (
                  <Sparkles className="h-4 w-4 text-accent-300" />
                )}
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-200">
                  {group.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`chip ${
                      group.accent
                        ? 'border-accent-300/30 bg-accent-500/10 text-accent-100'
                        : ''
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
