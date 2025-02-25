import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primaryColor)',
        backgroundColor: 'var(--backgroundColor)',
        textColor: 'var(--textColor)',
        secondaryTextColor: 'var(--secondaryTextColor)',
        errorColor: 'var(--errorColor)',
        detailColor: 'var(--detailColor)',
      },
    },
  },
  plugins: [],
} satisfies Config;
