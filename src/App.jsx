import React from 'react';

import { navItems } from './data/content';
import { useScrollState } from './hooks/useScrollState';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Ambience } from './components/ui';

const SECTION_IDS = navItems.map((item) => item.id);

export default function App() {
  const { activeSection, setActiveSection, scrolled, progress } = useScrollState(SECTION_IDS);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70]
                   focus:rounded-btn focus:bg-brand focus:px-5 focus:py-3 focus:text-sm
                   focus:font-semibold focus:text-white">
        Skip to content
      </a>

      <Ambience />

      <Nav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrolled={scrolled}
        progress={progress}
      />

      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
