/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0D1117',
        light: '#E6EDF3',
        accent: '#238636',
        secondary: '#30363D',
      },
    },
  },
  plugins: [],
};