import React from 'react';
import { certifications, timeline } from '../data/content';
import { Reveal, SectionHeading } from './ui';

export default function Timeline() {
  return (
    <section
      id="experience"
      className="section-y scroll-mt-24 border-t border-white/[0.06] bg-surface/40">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built and studied"
          description="Engineering internships and academic work, in reverse order."
        />

        {/* Timeline rail */}
        <ol className="mt-16 relative">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-600/60 via-secondary-500/30 to-transparent md:left-[calc(12rem+7px)]"
          />

          {timeline.map((entry, i) => (
            <li key={`${entry.org}-${i}`} className="relative pb-12 last:pb-0">
              <Reveal delay={i * 80}>
                <div className="grid gap-4 md:grid-cols-[12rem_1fr] md:gap-8">
                  <div className="md:text-right md:pr-8">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {entry.period}
                    </span>
                  </div>

                  <div className="relative pl-8 md:pl-8">
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 ${
                        entry.kind === 'education'
                          ? 'border-secondary-500 bg-base'
                          : 'border-primary-500 bg-base'
                      }`}>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          entry.kind === 'education' ? 'bg-secondary-500' : 'bg-primary-500'
                        }`}
                      />
                    </span>

                    <h3 className="font-display text-xl font-semibold text-heading">{entry.org}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-300">{entry.role}</p>

                    <ul className="mt-4 space-y-2">
                      {entry.points.map((p, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Certifications */}
        <Reveal>
          <div className="mt-8 border-t border-white/[0.06] pt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
              Certifications
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-card border border-white/[0.08] bg-white/[0.02] p-5
                             transition duration-300 ease-premium hover:-translate-y-1 hover:border-white/20">
                  <h4 className="text-sm font-semibold leading-snug text-heading">{cert.title}</h4>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
