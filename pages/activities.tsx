import { default as Index } from 'components/activities'
import Layout from 'components/layout'

const Activities = ({ router }): JSX.Element => (
  <Layout currentPage={router.pathname}>
    <Index />
  </Layout>
)

export default Activities