import { default as Index } from 'components/journal';
import Layout from 'components/layout';

const Journal = ({ router }): JSX.Element => (
  <Layout
    description="An internet-web journal of Fahdii Ajmalal Fikrie."
    currentPage={router.pathname}
    pageTitle="journal"
  >
    <Index />
  </Layout>
);

export default Journal;
