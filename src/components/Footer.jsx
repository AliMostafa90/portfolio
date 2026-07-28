import React from 'react';
import { navItems, profile } from '../data/content';
import { Icon } from './ui';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-btn bg-brand font-display text-sm font-bold text-white">
              AM
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold text-heading">{profile.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {profile.roles[0]} — {profile.location}
              </div>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted transition duration-200 hover:text-heading">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
               className="text-muted transition duration-200 hover:text-heading">
              <Icon.Github className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
               className="text-muted transition duration-200 hover:text-heading">
              <Icon.Linkedin className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email"
               className="text-muted transition duration-200 hover:text-heading">
              <Icon.Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/[0.06] pt-6 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
