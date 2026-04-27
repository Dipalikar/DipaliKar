import { Brain, Cloud, Layers, Users } from 'lucide-react';
import { profile, softSkills, languages } from '../data/portfolio.js';

const highlights = [
  {
    icon: Layers,
    title: 'Full-Stack Engineering',
    body: 'React, Node.js and PostgreSQL — end-to-end ownership of UI, API and data layers.',
  },
  {
    icon: Brain,
    title: 'Applied Generative AI',
    body: 'Designing AI agents with RAG, MCP tool calls and prompt engineering for real-world apps.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Mindset',
    body: 'AWS Certified Cloud Practitioner — deploying on EC2, S3 and Lambda.',
  },
  {
    icon: Users,
    title: 'Stakeholder Delivery',
    body: '1.5+ years at PwC working with US healthcare clients under HIPAA & compliance constraints.',
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="section-eyebrow">
            <span className="h-px w-8 bg-accent-300/60" />
            About
          </span>
          <h2 className="section-title">
            From audit-grade precision to AI-grade products.
          </h2>
          <p className="section-lead">{profile.about}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card">
            <h3 className="font-display text-base font-semibold text-white">
              Soft Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3 className="font-display text-base font-semibold text-white">
              Languages
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <span className="font-medium text-white">{l.name}</span>
                  <span className="text-xs text-ink-400">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
