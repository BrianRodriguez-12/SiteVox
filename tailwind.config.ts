import type { Config } from 'tailwindcss';

export default {
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
        detailColor: 'var(--detailColor)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
} satisfies Config;
