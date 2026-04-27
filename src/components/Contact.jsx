import { Download, Github, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const resumeHref = profile.resumeUrl;

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-500/[0.12] via-white/[0.03] to-transparent p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="section-eyebrow">
                <span className="h-px w-8 bg-accent-300/60" />
                Get in touch
              </span>
              <h2 className="section-title">
                Let's build something thoughtful together.
              </h2>
              <p className="section-lead">
                I'm actively exploring full-stack and AI engineering roles. If
                you have a product I can help you ship — or just want to chat
                about RAG, agents and modern web stacks — drop me a line.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Say hello
                </a>
                <a
                  href={resumeHref}
                  download={profile.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-ink-400">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-white">
                        {value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          href.startsWith('http') ? 'noreferrer' : undefined
                        }
                        className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:border-accent-400/30 hover:bg-white/[0.06]"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
