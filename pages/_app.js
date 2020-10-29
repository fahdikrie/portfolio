import { GlobalStyle } from 'styles/global.style'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
