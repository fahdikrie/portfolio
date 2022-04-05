import Layout from 'components/layout';
import Home from 'components/containers/Home';

const DESCRIPTION = `Fahdii Ajmalal Fikrie (goes by the name Fahdii, Badi, Fahdikrie, or Dikrie both IRL and on the internet-web) is a 21 years old sophomore student currently majoring CS at the University of Indonesia.`;

const HomePage = ({ router }): JSX.Element => (
  <Layout
    pageDescription={`A web portfolio of Fahdii Ajmalal Fikrie. ${DESCRIPTION}`}
    currentPage={router.pathname}
    pageTitle="Home"
  >
    <Home />
  </Layout>
);

export default HomePage;
