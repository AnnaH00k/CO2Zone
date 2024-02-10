import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/[locale]/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/[locale]/*.{js,ts,jsx,tsx,mdx}',
    '.src/[locale]/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/[locale]/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/[locale]/components/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg': '#1E2A52',
        'blueExtraLight': '#D7D8EF',
        'blueLight': '#7C7EAE',
        'blueDark': '#41426C',
        'blueExtraDark': '#111F43',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
