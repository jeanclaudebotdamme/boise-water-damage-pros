/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        'primary-dark': '#0052A3',
        secondary: '#FF6B35',
        'secondary-dark': '#E55A2B',
        accent: '#22C55E',
      },
    },
  },
  plugins: [],
}