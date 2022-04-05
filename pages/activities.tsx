import Activities from 'components/containers/Activities';
import Layout from 'components/layout';

const ActivitiesPage = ({ router }): JSX.Element => (
  <Layout
    pageDescription="A mini-page to showcase my interests; movies and books."
    currentPage={router.pathname}
    pageTitle="Activities"
  >
    <Activities />
  </Layout>
);

export default ActivitiesPage;
