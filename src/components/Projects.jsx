import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../data/content';
import { Icon, Reveal, SectionHeading } from './ui';

function ProjectCard({ project, onOpen }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-card border border-white/[0.08] bg-card/40
                 transition duration-300 ease-premium
                 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-lift">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View details for ${project.title}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-surface text-left">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 ease-premium group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-base/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-body backdrop-blur-md">
          {project.category}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-heading">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-white/[0.06] pt-5">
          <button
            type="button"
            onClick={onOpen}
            className="text-sm font-medium text-heading transition duration-200 hover:text-primary-300">
            Case study
          </button>
          <span className="h-3 w-px bg-line" aria-hidden="true" />
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition duration-200 hover:text-heading">
            <Icon.Github className="h-3.5 w-3.5" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted transition duration-200 hover:text-heading">
            Live
            <Icon.External className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-base/85 p-4 backdrop-blur-md"
      onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-2xl overflow-hidden rounded-card border border-white/[0.08] bg-surface shadow-lift">
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] p-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-300">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="mt-2 font-display text-2xl font-semibold">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-btn border border-white/[0.08] bg-white/[0.03] text-muted transition duration-200 hover:text-heading">
            <Icon.Close className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6">
          <div className="overflow-hidden rounded-btn border border-white/[0.08]">
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <p className="mt-6 leading-relaxed text-body">{project.desc}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            What I built
          </h4>
          <ul className="mt-4 space-y-3">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <Icon.Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            Technologies
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-body">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 border-t border-white/[0.06] p-6">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1">
            <Icon.Github className="h-4 w-4" />
            View Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary flex-1">
            Live Demo
            <Icon.External className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-y scroll-mt-24 border-t border-white/[0.06]">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems I've designed and shipped"
          description="Multi-agent platforms, retrieval systems, fine-tuned models, and automation running against real workloads."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
