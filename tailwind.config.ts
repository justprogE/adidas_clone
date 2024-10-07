import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        joinAdiclub: 'var(--background-highlight)',
      },
      fontFamily: {
        hausBold: 'var(--font-haus-bold)',
        hausRegular: 'var(--font-haus-regular)',
        hausCn: 'var(--font-hauscn)',
        neueBold: 'var(--font-neue-bold)',
      },
    },
    screens: {
      '3xl': { max: '1600px' },
      '2xl': { max: '1440px' },
      xl: { max: '1280px' },
      lg: { max: '1120px' },
      slg: { max: '1040px' },
      md: { max: '960px' },
      smd: { max: '768px' },
      sm: { max: '600px' },
      esm: { max: '390px' },
    },
  },
  plugins: [],
};
export default config;
