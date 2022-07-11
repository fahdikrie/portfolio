import Journal from 'components/containers/Journal';
import Layout from 'components/layout';
import { NotionProvider } from 'hocs/providers/NotionProvider';
import notion, { NOTION_JOURNAL_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import { JournalProps } from 'types/pages';

export const getStaticProps = async () => {
  const pageId = NOTION_JOURNAL_PAGE_ID;
  const recordMap = await notion.getPage(pageId);
  const posts = await processRecordMap(recordMap);
  console.log(posts);

  return {
    props: { posts },
    revalidate: 10,
  };
};

const JournalPage = ({ router, posts }: JournalProps): JSX.Element => (
  <NotionProvider posts={posts}>
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
