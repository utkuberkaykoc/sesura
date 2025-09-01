/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ambient: {
          rain: '#3b82f6',
          thunder: '#1e40af',
          fire: '#f97316',
          birds: '#22c55e',
          forest: '#16a34a',
          cafe: '#a855f7',
          city: '#6b7280',
          water: '#06b6d4',
          wind: '#84cc16',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-gradient-ambient',
    'bg-gradient-rain',
    'bg-gradient-thunder',
    'bg-gradient-fire',
    'bg-gradient-birds',
    'bg-gradient-forest',
    'bg-gradient-cafe',
    'bg-gradient-city',
    'bg-gradient-water',
    'bg-gradient-wind'
  ]
}
