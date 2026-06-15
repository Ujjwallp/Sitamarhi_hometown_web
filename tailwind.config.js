export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        devotional: {
          bg: '#FAF6ED',
          secondary: '#EAD6B0',
          saffron: '#FF9933',
          gold: '#D4AF37',
          maroon: '#7A1F1F',
          text: '#1C120A',
        },
        category: {
          sacred: {
            start: 'var(--color-sacred-start)',
            end: 'var(--color-sacred-end)',
            border: 'var(--color-sacred-border)',
            accent: 'var(--color-sacred-accent)',
          },
          heritage: {
            start: 'var(--color-heritage-start)',
            end: 'var(--color-heritage-end)',
            border: 'var(--color-heritage-border)',
            accent: 'var(--color-heritage-accent)',
          },
          culture: {
            start: 'var(--color-culture-start)',
            end: 'var(--color-culture-end)',
            border: 'var(--color-culture-border)',
            accent: 'var(--color-culture-accent)',
          },
          info: {
            start: 'var(--color-info-start)',
            end: 'var(--color-info-end)',
            border: 'var(--color-info-border)',
            accent: 'var(--color-info-accent)',
          },
          services: {
            start: 'var(--color-services-start)',
            end: 'var(--color-services-end)',
            border: 'var(--color-services-border)',
            accent: 'var(--color-services-accent)',
          },
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a1628',
        },
        accent: {
          DEFAULT: '#ea580c',
          light: '#f97316',
          dark: '#c2410c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
