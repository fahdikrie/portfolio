import Journal from 'components/containers/Journal';
import Layout from 'components/layout';

const JournalPage = ({ router }): JSX.Element => (
  <Layout
    description="An internet-web journal of Fahdii Ajmalal Fikrie."
    currentPage={router.pathname}
    pageTitle="journal"
  >
    <Journal />
  </Layout>
);

export default JournalPage;
