import Blog from 'components/containers/Blog/Feed';
import Layout from '@/components/layout/Regular';
import NotionPreviewProvider from 'hocs/providers/NotionPreviewProvider';
import notion, { NOTION_BLOG_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import { BlogProps } from 'types/pages';

export const getStaticProps = async () => {
  const recordMap = await notion.getPage(NOTION_BLOG_PAGE_ID);
  const posts = await processRecordMap(recordMap, NOTION_BLOG_PAGE_ID);
  console.log(posts);

  return {
    props: { posts },
    revalidate: 10,
  };
};

const BlogPage = ({ router, posts }: BlogProps): JSX.Element => (
  <NotionPreviewProvider posts={posts}>
    <Layout
      pageDescription="An internet-web blog of Fahdii Ajmalal Fikrie."
      currentPage={router.pathname}
      pageTitle="Blog"
    >
      <Blog />
    </Layout>
  </NotionPreviewProvider>
);

export default BlogPage;
