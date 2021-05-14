import Layout from 'components/layout'
import Index from 'components/index'

const Home = ({ router }): JSX.Element => (
  <Layout currentPage={router.pathname}>
    <Index />
  </Layout>
)

export default Home