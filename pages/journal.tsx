import Head from 'next/head'

import { default as Index } from 'components/journal'
import FontSerif from 'public/fonts/font-serif'
import Layout from 'components/layout'

const Journal = ({ router }): JSX.Element => (
  <>
    <FontSerif />
    <Layout currentPage={router.pathname}>
      <Index />
    </Layout>
  </>
)

export default Journal