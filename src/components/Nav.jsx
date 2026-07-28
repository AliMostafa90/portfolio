import React, { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../data/content';
import { Icon } from './ui';

export default function Nav({ activeSection, setActiveSection, scrolled, progress }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const listRef = useRef(null);
  const linkRefs = useRef({});

  // Slide the pill onto the active link.
  useEffect(() => {
    const measure = () => {
      const el = linkRefs.current[activeSection];
      const list = listRef.current;
      if (!el || !list) return setIndicator({ left: 0, width: 0 });

      const a = el.getBoundingClientRect();
      const b = list.getBoundingClientRect();
      // Width is 0 while the desktop nav is hidden — avoids a pill flash at origin.
      setIndicator(a.width ? { left: a.left - b.left, width: a.width } : { left: 0, width: 0 });
    };

    measure();
    const settle = setTimeout(measure, 250); // re-measure once webfonts land
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(settle);
      window.removeEventListener('resize', measure);
    };
  }, [activeSection]);

  // Close the mobile panel on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled || menuOpen
          ? 'border-b border-white/[0.08] bg-base/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}>
      <nav aria-label="Main" className="shell">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-premium ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
          {/* Brand */}
          <a href="#home" onClick={() => setActiveSection('home')} className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-btn bg-brand font-display text-sm font-bold text-white shadow-soft">
              AM
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-sm font-semibold text-heading">
                {profile.name}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                AI Engineer
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div
            ref={listRef}
            className="relative hidden items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1 lg:flex">
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 rounded-full bg-white/[0.07] transition-all duration-500 ease-premium"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.width ? 1 : 0 }}
            />
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                ref={(el) => (linkRefs.current[item.id] = el)}
                onClick={() => setActiveSection(item.id)}
                aria-current={activeSection === item.id ? 'true' : undefined}
                className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-heading' : 'text-muted hover:text-body'
                }`}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost hidden !py-2 text-[13px] sm:inline-flex">
              <Icon.Download className="h-3.5 w-3.5" />
              Résumé
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="grid h-10 w-10 place-items-center rounded-btn border border-white/[0.08] bg-white/[0.03] text-heading transition duration-200 hover:border-white/20 lg:hidden">
              <span className="flex flex-col gap-[5px]">
                <span className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
                <span className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[1.5px] w-4 bg-current transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-all duration-500 ease-premium lg:hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="shell space-y-1 border-t border-white/[0.08] py-4">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveSection(item.id);
                setMenuOpen(false);
              }}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`flex items-center gap-3 rounded-btn px-4 py-3 text-sm font-medium transition duration-200 ${
                activeSection === item.id
                  ? 'bg-white/[0.06] text-heading'
                  : 'text-muted hover:bg-white/[0.03] hover:text-body'
              }`}>
              <span className="font-mono text-[10px] text-primary-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-3 w-full sm:hidden">
            <Icon.Download className="h-4 w-4" />
            Download Résumé
          </a>
        </div>
      </div>

      {/* Scroll progress */}
      <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <div
          className="h-full origin-left bg-brand transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})`, width: '100%' }}
        />
      </div>
    </header>
  );
}
