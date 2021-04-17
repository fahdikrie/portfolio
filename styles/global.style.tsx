import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    ${tw`box-sizing[border-box]`}
  }

  /* reset anchor tag */
  a {
    ${tw`
      color[inherit]
      no-underline
    `}
  }

  /* Disable default text cadet/cursor */
  h1,
  h2,
  h3,
  p,
  li {
    ${tw`cursor-default`}
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    ${tw`m-0`}
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Hide overflow */
  html {
    ${tw`overflow-x-hidden`}
  }

  /* Set core body defaults */
  body {
    ${tw`
      block
      w-screen
      min-h-screen
      text-rendering[optimizeSpeed]
      leading-normal
      bg-black
    `}
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    ${tw`text-decoration-skip-ink[auto]`}
  }

  /* Make images easier to work with */
  img,
  picture {
    ${tw`max-w-full block`}
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    ${tw`font-sans`}
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      ${tw`scroll-behavior[auto]`}
    }
    *,
    *::before,
    *::after {
      ${tw`
        animation-duration[0.01ms !important]
        animation-iteration-count[1 !important]
        transition-duration[0.01ms !important]
        scroll-behavior[auto !important]
      `}
    }
  }

  /* Hide scrollbar */
  ::-webkit-scrollbar {
    ${tw`
      w-0
      bg-transparent
    `}
  }

  /* Hide outline */
  *:focus {
    ${tw`outline-none`}
  }

  /* Disable highlight/text selection */
  * {
    ${tw`select-none`}
  }

  /* If selection is enabled, set color to purple */
  ::selection,
  ::-moz-selection {
    ${tw`bg-purple-900`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles