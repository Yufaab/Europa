/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
      },
      colors: {
        primary: '#0098FF',
      },
    },
    plugins: [],
  },
};
