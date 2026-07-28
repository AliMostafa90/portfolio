/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Design tokens ────────────────────────────────────────────────
      // Recolor the entire site by editing these values.
      colors: {
        base: '#0A0F1C',     // page background
        surface: '#111827',  // raised sections
        card: '#1F2937',     // cards
        line: '#334155',     // borders

        primary: {
          DEFAULT: '#2563EB',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        accent: {
          DEFAULT: '#10B981',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },

        heading: '#F8FAFC',
        body: '#CBD5E1',
        muted: '#94A3B8',

        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },

      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      borderRadius: {
        card: '20px',
        btn: '12px',
        input: '14px',
      },

      spacing: {
        section: '120px',
        'section-lg': '160px',
      },

      boxShadow: {
        soft: '0 10px 30px rgba(37, 99, 235, 0.15)',
        card: '0 4px 24px rgba(2, 6, 23, 0.40)',
        lift: '0 20px 48px rgba(2, 6, 23, 0.55)',
      },

      backgroundImage: {
        brand: 'linear-gradient(135deg, #2563EB 0%, #06B6D4 60%, #10B981 100%)',
      },

      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.30, 1)',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
        },
        dash: {
          to: { strokeDashoffset: '-24' },
        },
        haze: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
      },

      animation: {
        float: 'float 6s ease-in-out infinite',
        dash: 'dash 1.6s linear infinite',
        haze: 'haze 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
