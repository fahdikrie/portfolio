import Layout from 'components/layout';
import Home from 'components/containers/Home';

const DESCRIPTION = `A personal webpage of Fahdii Ajmalal Fikrie (goes by the name Fahdii, Badi, Fahdikrie, or Dikrie). Fahdii is a 21 years old CS student at the University of Indonesia.`;

const HomePage = ({ router }): JSX.Element => (
  <Layout
    pageDescription={DESCRIPTION}
    currentPage={router.pathname}
    pageTitle="Home"
  >
    <Home />
  </Layout>
);

export default HomePage;
