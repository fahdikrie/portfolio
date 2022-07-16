import { JournalDetailProps } from 'types/pages';

import JournalLayout from 'components/layout/journal';
import notion, { NOTION_JOURNAL_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import JournalDetail from '@/components/containers/Journal/Detail';
import { MapPageUrlFn } from 'react-notion-x';
import { estimatePageReadTimeAsHumanizedString } from 'notion-utils';
import { getPreviewImageMap } from 'libs/notion/images';

const mapPageUrl = (id: string) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '');
};

export const getStaticProps = async ({ params: { slug } }) => {
  const recordMap = await notion.getPage(NOTION_JOURNAL_PAGE_ID);
  const posts = await processRecordMap(recordMap);

  let post = posts.find((post: PostPreview) => post.slug === slug);
  const postRecordMap = await notion.getPage(post.id);
  const previewImageMap = await getPreviewImageMap(postRecordMap);
  (postRecordMap as any).preview_images = previewImageMap;
  console.log(postRecordMap);
  const keys = Object.keys(postRecordMap?.block || {});
  const postBlock = postRecordMap?.block?.[keys[0]].value;
  post = {
    readTime: estimatePageReadTimeAsHumanizedString(
      postBlock,
      postRecordMap,
      {}
    ),
    ...post,
  } as PostDetail;

  return {
    props: { post, postRecordMap },
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

const JournalDetailPage = ({ post, postRecordMap }: JournalDetailProps) => {
  return (
    <JournalLayout pageDescription={post?.summary} pageTitle={post?.title}>
      <JournalDetail
        post={post}
        postRecordMap={postRecordMap}
        mapPageUrl={mapPageUrl as MapPageUrlFn}
      />
    </JournalLayout>
  );
};

export default JournalDetailPage;
