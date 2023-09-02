/** @type {import('tailwindcss').Config} */

const overrideBtnStyle = {
  '.btn': {
    'border-radius': '0.5rem',
  },
  '.menu > li > span': {
    'border-radius': '0.5rem',
  },
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="black"]'],
  theme: {
    extend: {
      colors: {
        'off-white': '#efefef',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        lofi: {
          ...require('daisyui/src/theming/themes')['[data-theme=lofi]'],
          ...overrideBtnStyle,
        },
      },
      {
        black: {
          ...require('daisyui/src/theming/themes')['[data-theme=black]'],
          ...overrideBtnStyle,
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
