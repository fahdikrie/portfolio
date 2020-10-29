import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::selection {
    background: purple; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: purple; /* Gecko Browsers */
  }

  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }

  html,
  body {
    background-color: black;
    padding: 0;
    margin: 0;

    // keeping this as a fallback
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`