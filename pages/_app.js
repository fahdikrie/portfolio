import { GlobalStyle } from 'styles/global.style'
import { GlobalFonts } from 'public/fonts/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalFonts/>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
