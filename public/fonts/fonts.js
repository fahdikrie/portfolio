import { createGlobalStyle } from 'styled-components';


export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'San Francisco Pro Light';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-Light.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Light';
    font-style: italic;
    font-weight: 400;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-LightItalic.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Regular';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-Regular.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Regular';
    font-style: italic;
    font-weight: 400;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-RegularItalic.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Bold';
    font-style: normal;
    font-weight: 600;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-Bold.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Bold';
    font-style: italic;
    font-weight: 600;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-BoldItalic.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Black';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-Black.otf');
  }

  @font-face {
    font-family: 'San Francisco Pro Black';
    font-style: italic;
    font-weight: 700;
    src: url('fonts/San\ Francisco\ Pro/SF-Pro-Display-BlackItalic.otf');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/Ubuntu/Ubuntu-R.ttf');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: italic;
    font-weight: 400;
    src: url('fonts/Ubuntu/Ubuntu-RI.ttf');
  }

  @font-face {
    font-family: 'Ubuntu Bold';
    font-style: normal;
    font-weight: 700;
    src: url('fonts/Ubuntu/Ubuntu-B.ttf');
  }

  @font-face {
    font-family: 'Ubuntu Bold';
    font-style: italic;
    font-weight: 700;
    src: url('fonts/Ubuntu/Ubuntu-BI.ttf');
  }
`

export const fallbackFonts = `
  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
`