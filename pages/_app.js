import 'styles/global.fallback.css'
import { GlobalStyle } from 'styles/global.style'
import { GlobalFonts } from 'public/fonts/fonts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <GlobalFonts/>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
