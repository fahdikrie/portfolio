const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'jumbo': ['96px', '120%'],
      'wambo': ['72px', '120%'],
      'header': ['48px', '140%'],
      'subheader': ['36px', '140%'],
      'large': ['20px', '140%'],
      'small': ['16px', '140%'],
      'tiny': ['12px', '140%'],
      'md-jumbo': ['72px', '120%'],
      'md-wambo': ['56px', '120%'],
      'md-header': ['36px', '140%'],
      'md-subheader': ['28px', '140%'],
      'md-large': ['18.5px', '140%'],
      'md-small': ['14px', '140%'],
      'md-tiny': ['10px', '140%'],
      'sm-jumbo': ['64px', '120%'],
      'sm-wambo': ['48px', '120%'],
      'sm-header': ['28px', '140%'],
      'sm-subheader': ['24px', '140%'],
      'sm-large': ['17px', '140%'],
      'sm-small': ['12.5px', '140%'],
      'sm-tiny': ['8px', '140%'],
    },
    spacing: {
      '144': '144px',
      '128': '128px',
      '100': '100px',
      '80': '80px',
      '64': '64px',
      '56': '56px',
      '48': '48px',
      '36': '36px',
      '32': '32px',
      '28': '28px',
      '24': '24px',
      '20': '20px',
      '16': '16px',
      '14': '14px',
      '12': '12px',
      '10': '10px',
      '8': '8px',
      '5': '5px',
      '3': '3px',
      '2': '2px',
      '1': '1px',
      '0': '0px',
    },
    extend: {
      colors: {
        'magenta': '#bb19bb'
      },
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
