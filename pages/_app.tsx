import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import GlobalStyles from 'styles/global.style'
import Fonts from 'public/fonts/fonts'
import Layout from 'components/layout'
import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Fonts />
      <GlobalStyles />
      <Layout currentPage={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp