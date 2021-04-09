const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'jumbo': ['96px', '120%'],
      'wambo': ['72px', '120%'],
      'header': ['48px', '140%'],
      'subheader': ['36px', '140%'],
      'large': ['24px', '140%'],
      'small': ['18px', '140%'],
      'tiny': ['16px', '140%'],
      'sm-jumbo': ['64px', '120%'],
      'sm-wambo': ['48px', '120%'],
      'sm-header': ['32px', '140%'],
      'sm-subheader': ['24px', '140%'],
      'sm-large': ['16px', '140%'],
      'sm-small': ['12px', '140%'],
      'sm-tiny': ['8px', '140%'],
    },
    spacing: {
      '144': '144px',
      '128': '128px',
      '100': '100px',
      '80': '80px',
      '64': '64px',
      '48': '48px',
      '32': '32px',
      '24': '24px',
      '20': '20px',
      '16': '16px',
      '8': '8px',
      '0': '0px',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
