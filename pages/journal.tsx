import { default as Index } from 'components/journal'
import Layout from 'components/layout'

const Journal = ({ router }): JSX.Element => (
  <>
    <Layout currentPage={router.pathname}>
      <Index />
    </Layout>
  </>
)

export default Journal