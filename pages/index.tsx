import Layout from 'components/layout'
import Index from 'components/index'

const Home = ({ router }): JSX.Element => (
  <Layout
    currentPage={router.pathname}
    pageTitle="home | bbbadi"
    description="A web portfolio of Fahdii Ajmalal Fikrie."
  >
    <Index />
  </Layout>
)

export default Home