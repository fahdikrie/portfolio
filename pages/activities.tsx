import { default as Index } from 'components/activities';
import Layout from 'components/layout';

const Activities = ({ router }): JSX.Element => (
  <Layout
    currentPage={router.pathname}
    pageTitle="activities"
    description="A mini-page to showcase my interests; movies and books."
  >
    <Index />
  </Layout>
);

export default Activities;
