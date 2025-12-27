// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    'grid-background',
    'nav-glass',
    'card-surface',
    'principle-card',
    'metric-card',
    'metric-value',
    'metric-label',
    'btn-primary',
    'input-primary',
    'section-spacing',
    {
      pattern: /(card|metric|btn|input|nav|grid|section)-.*/,
    },
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        Identiq: {
          bg: '#0B0A0F',
          purple: {
            500: '#a855f7',
            600: '#9333ea',
          },
          amber: {
            400: '#fbbf24',
          },
        },
      },
      maxWidth: {
        '8xl': '1600px',
      },
    },
  },
  plugins: [],
}