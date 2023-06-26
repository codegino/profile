module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{jsx,tsx,mdx}',
    './src/pages/**/*.{jsx,tsx,mdx}',
    './src/pages/*.tsx',
    './src/blog/pages/*.mdx',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'block-quote': ['Georgia', 'Times New Roman'],
      },
      fontSize: {
        inherit: 'inherit',
      },
      zIndex: {
        1: '1',
      },
      animation: {
        'spin-fast': 'spin 0.15s linear',
      },
      screens: {
        xs: '400px',
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
        lightest: 'var(--color-lightest)',
        darkest: 'var(--color-darkest)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
