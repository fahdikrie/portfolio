import Layout from '@/components/layout';
import notion, { NOTION_JOURNAL_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import { useEffect } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { JournalDetailProps } from 'types/pages';

const mapPageUrl = (id: string) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '');
};

export const getStaticProps = async ({ params: { slug } }) => {
  const recordMap = await notion.getPage(NOTION_JOURNAL_PAGE_ID);
  const posts = await processRecordMap(recordMap);

  const post = posts.find((post: PostPreview) => post.slug === slug);
  const postBlock = await notion.getPage(post.id);
  console.log(postBlock);

  return {
    props: { post, postBlock },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const recordMap = await notion.getPage(NOTION_JOURNAL_PAGE_ID);
  const posts = await processRecordMap(recordMap);
  const paths = posts.map((post) => `/journal/${post.slug}`);

  return {
    paths: paths,
    fallback: true,
  };
}

const JournalPost = ({ router, post, postBlock }: JournalDetailProps) => {
  useEffect(() => {
    console.log(post);
    console.log(postBlock);
  }, [post, postBlock]);

  return (
    <Layout
      pageDescription={post.summary}
      currentPage={router.pathname}
      pageTitle={`${post.title}`}
    >
      <NotionRenderer recordMap={postBlock} mapPageUrl={mapPageUrl} />
    </Layout>
  );
};

export default JournalPost;
