import { default as Index } from 'components/journal';
import Layout from 'components/layout';

const Journal = ({ router }): JSX.Element => (
  <Layout
    currentPage={router.pathname}
    pageTitle="journal"
    description="An internet-web journal of Fahdii Ajmalal Fikrie."
  >
    <Index />
  </Layout>
);

export default Journal;
