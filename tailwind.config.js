module.exports = {
  purge: [
    './src/pages/**/*.{jsx,tsx,mdx}',
    './src/pages/*.tsx',
    './src/blog/pages/*.mdx',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'block-quote': ['Georgia', 'Times New Roman'],
      },
      fontSize: {
        inherit: 'inherit',
      },
      spacing: {
        '8vh': '8vh',
        '25p': '25%',
      },
      lineHeight: {
        code: '1.188',
      },
      zIndex: {
        1: '1',
        negative: '-1',
      },
      height: {
        '95vh': '95vh',
        'terminal-xs': '46rem',
        'terminal-sm': '36rem',
      },
      width: {
        'terminal-sm': '90%',
        'terminal-md': '70%',
        'terminal-lg': '70rem',
        'half-screen': '50vw',
        'line-number': '3.5rem',
      },
      maxWidth: {
        'line-number': '3.5rem',
      },
      minWidth: {
        'line-number': '3.5rem',
      },
      colors: {
        // color scheme is defined in /app.css
        // To enable text-primary-xxx, bg-primary-xxx, or border-primary-xxx
        primary: {
          light: 'var(--color-primary-light)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          dark: 'var(--color-primary-dark)',
        },
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        code: '#1e1e1e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
