import { createGlobalStyle } from 'styled-components'
import { fallbackFonts } from 'public/fonts/fonts'

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

  * {
    /* user-drag: none; */
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    display: block;
    background-color: black;
    padding: 0;
    margin: 0;

    font-family: 'San Francisco Pro Bold', ${fallbackFonts};
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

  h1, h2, h3, p, li {
      cursor: default;
  }

  img {
    display: block;
  }
`