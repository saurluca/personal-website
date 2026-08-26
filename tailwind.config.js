/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        accent: 'var(--color-accent)',
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
        },
        background: 'var(--color-background)',
        border: 'var(--color-border)',
        danger: 'var(--color-danger)',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
