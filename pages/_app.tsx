import type { AppProps } from 'next/app'

import GlobalStyles from 'styles/global.style'
import Fonts from 'public/fonts/fonts'
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp