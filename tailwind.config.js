/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'off-white': '#efefef',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
