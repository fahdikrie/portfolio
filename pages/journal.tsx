import Journal from 'components/containers/Journal/Feed';
import Layout from 'components/layout/Regular';
import NotionPreviewProvider from 'hocs/providers/NotionPreviewProvider';
import notion, { NOTION_JOURNAL_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import { JournalProps } from 'types/pages';

export const getStaticProps = async () => {
  const recordMap = await notion.getPage(NOTION_JOURNAL_PAGE_ID);
  const posts = await processRecordMap(recordMap);

  return {
    props: { posts },
    revalidate: 10,
  };
};

const JournalPage = ({ router, posts }: JournalProps): JSX.Element => (
  <NotionPreviewProvider posts={posts}>
    <Layout
      pageDescription="An internet-web journal of Fahdii Ajmalal Fikrie."
      currentPage={router.pathname}
      pageTitle="Journal"
    >
      <Journal />
    </Layout>
  </NotionPreviewProvider>
);

export default JournalPage;
