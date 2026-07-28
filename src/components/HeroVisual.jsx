import React from 'react';
import { heroNodes } from '../data/content';

// SVG viewBox is 400×400; node coords in content.js are percentages, so ×4.
const toSvg = (pct) => pct * 4;
const CORE = 200;

const TONE = {
  primary: { ring: 'border-primary-500/40', dot: 'bg-primary-500', text: 'text-primary-300' },
  secondary: { ring: 'border-secondary-500/40', dot: 'bg-secondary-500', text: 'text-secondary-300' },
  accent: { ring: 'border-accent-500/40', dot: 'bg-accent-500', text: 'text-accent-300' },
};

/**
 * Animated system diagram: an orchestrator core wired to the surrounding
 * capability nodes, with data pulses travelling along each connection.
 * Motion is transform/dashoffset only, and stops under prefers-reduced-motion.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      {/* soft ambient wash behind the diagram */}
      <div className="absolute inset-[12%] rounded-full bg-primary-600/10 blur-[80px]" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="60%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* orbit rings */}
        <circle cx={CORE} cy={CORE} r="144" fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
        <circle
          cx={CORE} cy={CORE} r="112" fill="none"
          stroke="rgba(148,163,184,0.10)" strokeWidth="1" strokeDasharray="2 10"
        />

        {/* static wires */}
        {heroNodes.map((n) => (
          <line
            key={`base-${n.id}`}
            x1={CORE} y1={CORE} x2={toSvg(n.x)} y2={toSvg(n.y)}
            stroke="rgba(148,163,184,0.16)" strokeWidth="1"
          />
        ))}

        {/* travelling data pulses */}
        {heroNodes.map((n, i) => (
          <line
            key={`pulse-${n.id}`}
            x1={CORE} y1={CORE} x2={toSvg(n.x)} y2={toSvg(n.y)}
            stroke="url(#wire)" strokeWidth="1.75" strokeLinecap="round"
            strokeDasharray="3 21"
            className="animate-dash"
            style={{ animationDelay: `${i * 0.26}s` }}
          />
        ))}
      </svg>

      {/* orchestrator core */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative grid h-24 w-24 place-items-center rounded-2xl bg-brand shadow-soft">
          <div className="absolute inset-0 rounded-2xl bg-brand blur-xl opacity-40" />
          <div className="relative text-center leading-tight">
            <div className="font-display text-xl font-bold text-white">AI</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/80">
              Orchestrator
            </div>
          </div>
        </div>
      </div>

      {/* capability nodes */}
      {heroNodes.map((n, i) => {
        const tone = TONE[n.tone];
        return (
          <div
            key={n.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.7}s` }}>
            <div
              className={`flex items-center gap-2 rounded-full border ${tone.ring} glass px-3.5 py-2
                          shadow-card backdrop-blur-xl`}>
              <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
              <span className={`font-mono text-[11px] font-medium tracking-wide ${tone.text}`}>
                {n.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
