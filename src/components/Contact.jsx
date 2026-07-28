import React, { useState } from 'react';
import { profile } from '../data/content';
import { Icon, Reveal, SectionHeading } from './ui';

const CHANNELS = [
  { key: 'email', label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Glyph: Icon.Mail },
  { key: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref, Glyph: Icon.Phone },
  { key: 'location', label: 'Location', value: profile.location, href: null, Glyph: Icon.Pin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  // No backend on this site — compose the message into the visitor's mail client.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-y scroll-mt-24 border-t border-white/[0.06]">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that ships"
          description="Open to AI engineering roles, internships, freelance work, and collaborations on agent and automation systems."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Channels */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {CHANNELS.map(({ key, label, value, href, Glyph }) => {
                const inner = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn border border-white/[0.08] bg-white/[0.03] text-primary-300">
                      <Glyph className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-heading">
                        {value}
                      </span>
                    </span>
                  </>
                );

                const shared =
                  'flex items-center gap-4 rounded-card border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 ease-premium';

                return href ? (
                  <a key={key} href={href} className={`${shared} hover:-translate-y-0.5 hover:border-white/20`}>
                    {inner}
                  </a>
                ) : (
                  <div key={key} className={shared}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost flex-1"
                aria-label="GitHub profile">
                <Icon.Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost flex-1"
                aria-label="LinkedIn profile">
                <Icon.Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="rounded-card border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      Name
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={update('name')}
                      placeholder="Jane Doe" className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      Email
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={update('email')}
                      placeholder="jane@company.com" className="field"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Subject
                  </label>
                  <input
                    id="subject" name="subject" type="text"
                    value={form.subject} onChange={update('subject')}
                    placeholder="AI engineering role" className="field"
                  />
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={update('message')}
                    placeholder="Tell me about the role or project…" className="field resize-y"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn-primary">
                    Send Message
                    <Icon.Arrow className="h-4 w-4" />
                  </button>
                  <p className="text-xs text-muted">
                    Opens in your mail app — nothing is stored on this site.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
