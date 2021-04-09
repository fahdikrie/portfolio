import type { AppProps } from 'next/app'

import Fonts from 'public/fonts/fonts'
import 'styles/global.fallback.css'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp