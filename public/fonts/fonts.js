import { createGlobalStyle } from 'styled-components';


export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'San Francisco Pro Light';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-Light.ttf');
    font-display: block;
  }

  /* @font-face {
    font-family: 'San Francisco Pro Light';
    font-style: italic;
    font-weight: 400;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-LightItalic.ttf');
    font-display: block;
  }

  @font-face {
    font-family: 'San Francisco Pro Regular';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-Regular.ttf');
    font-display: block;
  }

  @font-face {
    font-family: 'San Francisco Pro Regular';
    font-style: italic;
    font-weight: 500;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-RegularItalic.ttf');
    font-display: block;
  } */

  @font-face {
    font-family: 'San Francisco Pro Bold';
    font-style: normal;
    font-weight: 600;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-Bold.ttf');
    font-display: block;
  }

  @font-face {
    font-family: 'San Francisco Pro Bold';
    font-style: italic;
    font-weight: 600;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-BoldItalic.ttf');
    font-display: block;
  }

  @font-face {
    font-family: 'San Francisco Pro Black';
    font-style: normal;
    font-weight: 700;
    src: url('./fonts/San\ Francisco\ Pro/SF-Pro-Display-Black.ttf');
    font-display: block;
  }
`

export const fallbackFonts = `
  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
`