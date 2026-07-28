import React from 'react';
import { techStack } from '../data/content';
import { Badge, Reveal, SectionHeading } from './ui';

export default function TechStack() {
  return (
    <section id="stack" className="section-y scroll-mt-24 border-t border-white/[0.06] bg-surface/40">
      <div className="shell">
        <SectionHeading
          eyebrow="Stack"
          title="Tools I build production systems with"
          description="The frameworks, models, and infrastructure behind the projects below."
        />

        <div className="mt-16 space-y-10">
          {techStack.map((group, i) => (
            <Reveal key={group.group} delay={i * 60}>
              <div className="grid gap-5 border-t border-white/[0.06] pt-8 md:grid-cols-12">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:col-span-3">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2.5 md:col-span-9">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
