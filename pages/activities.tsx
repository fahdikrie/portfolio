import { default as Index } from 'components/activities';
import Layout from 'components/layout';

const Activities = ({ router }): JSX.Element => (
  <Layout
    description="A mini-page to showcase my interests; movies and books."
    currentPage={router.pathname}
    pageTitle="activities"
  >
    <Index />
  </Layout>
);

export default Activities;
