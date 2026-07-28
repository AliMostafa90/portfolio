import { useEffect, useState } from 'react';

/**
 * Tracks the section currently in view, whether the page has scrolled off the
 * top, and overall scroll progress. Single passive listener for all three.
 */
export function useScrollState(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActiveSection(current);
      setScrolled(window.scrollY > 8);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return { activeSection, setActiveSection, scrolled, progress };
}
