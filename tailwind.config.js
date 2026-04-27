/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f7fb',
          100: '#eceef5',
          200: '#d3d6e3',
          300: '#a9adc4',
          400: '#7d809b',
          500: '#5b5e78',
          600: '#3f4258',
          700: '#2a2c3d',
          800: '#181a26',
          900: '#0c0d15',
          950: '#06070d',
        },
        accent: {
          50: '#f6efff',
          100: '#ead8ff',
          200: '#d2b1ff',
          300: '#b685ff',
          400: '#9a5cff',
          500: '#7e3aff',
          600: '#6324e6',
          700: '#4d1ab3',
          800: '#371480',
          900: '#220c4d',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(154, 92, 255, 0.25), 0 8px 30px -8px rgba(154, 92, 255, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.9s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
