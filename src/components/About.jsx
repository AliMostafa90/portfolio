import React from 'react';
import { about, languages, profile, softSkills } from '../data/content';
import { Icon, Reveal, SectionHeading } from './ui';

export default function About() {
  return (
    <section id="about" className="section-y scroll-mt-24 border-t border-white/[0.06]">
      <div className="shell">
        <SectionHeading eyebrow="About" title={about.heading} />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="relative">
                <div className="absolute -inset-3 rounded-card bg-brand opacity-15 blur-2xl" aria-hidden="true" />
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="720"
                  className="relative aspect-[4/5] w-full rounded-card border border-white/[0.08] object-cover shadow-lift"
                />
              </figure>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="rounded-btn border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      {l.name}
                    </div>
                    <div className="mt-1 text-sm font-medium text-heading">{l.level}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {about.body.map((paragraph, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-lg leading-relaxed text-body">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={240}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-btn border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
                    <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    <span className="text-sm text-body">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Working style
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-body">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
