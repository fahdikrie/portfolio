import notion from 'libs/notion';
import { PageProps } from 'types/pages';

import Journal from 'components/containers/Journal';
import Layout from 'components/layout';
import { NotionProvider } from 'hocs/providers/NotionProvider';

export const getStaticProps = async () => {
  const pageId = '067dd719a912471ea9a3ac10710e7fdf';
  const recordMap = await notion.getPage(pageId);

  return {
    props: { recordMap },
    revalidate: 10,
  };
};

const JournalPage = ({ router, recordMap }: PageProps): JSX.Element => (
  <NotionProvider recordMap={recordMap}>
    <Layout
      pageDescription="An internet-web journal of Fahdii Ajmalal Fikrie."
      currentPage={router.pathname}
      pageTitle="Journal"
    >
      <Journal />
    </Layout>
  </NotionProvider>
);

export default JournalPage;
