import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { education, certifications } from '../data/portfolio.js';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-accent-300/60" />
            Education & Certifications
          </span>
          <h2 className="section-title">Foundations & credentials.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                Education
              </h3>
            </div>
            <ul className="mt-6 space-y-5">
              {education.map((e) => (
                <li
                  key={e.institution}
                  className="border-l-2 border-accent-400/30 pl-4"
                >
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-400">
                    {e.period}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-white">
                    {e.institution}
                  </div>
                  <div className="text-sm text-ink-300">{e.degree}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">
                Certifications
              </h3>
            </div>
            <ul className="mt-6 space-y-5">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="border-l-2 border-accent-400/30 pl-4"
                >
                  <div className="font-mono text-xs uppercase tracking-wider text-ink-400">
                    {c.year}
                  </div>
                  <div className="mt-1 font-display text-base font-semibold text-white">
                    {c.name}
                  </div>
                  <div className="text-sm text-ink-300">{c.issuer}</div>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-300 transition-colors hover:text-accent-200"
                    >
                      Verify credential
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
