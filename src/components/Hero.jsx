import React from 'react';
import { profile, stats } from '../data/content';
import { Icon, Reveal } from './ui';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-32 lg:pt-40">
      <div className="shell pb-20 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
                </span>
                Available for AI engineering roles
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                {profile.roles.map((role, i) => (
                  <React.Fragment key={role}>
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />}
                    <span className="font-display text-base font-medium text-body md:text-lg">
                      {role}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <Icon.Arrow className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Contact Me
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 flex items-center gap-5 border-t border-white/[0.06] pt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="text-muted transition duration-200 hover:text-heading">
                  <Icon.Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-muted transition duration-200 hover:text-heading">
                  <Icon.Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send an email"
                  className="text-muted transition duration-200 hover:text-heading">
                  <Icon.Mail className="h-5 w-5" />
                </a>
                <span className="ml-auto font-mono text-xs text-muted">{profile.location}</span>
              </div>
            </Reveal>
          </div>

          {/* Right — animated system diagram */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal delay={180}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>

        {/* Stat strip */}
        <Reveal delay={120}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-white/[0.08] bg-white/[0.06] lg:mt-24 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-base px-6 py-7">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-semibold text-heading">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
