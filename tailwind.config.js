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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
