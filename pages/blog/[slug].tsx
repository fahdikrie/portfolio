import { BlogDetailProps } from 'types/pages';

import BlogLayout from '@/components/layout/Blog';
import notion, { NOTION_BLOG_PAGE_ID } from 'libs/notion';
import { processRecordMap } from 'libs/notion/utils';
import BlogDetail from '@/components/containers/Blog/Detail';
import { MapPageUrlFn } from 'react-notion-x';
import { estimatePageReadTimeAsHumanizedString } from 'notion-utils';
import { getPreviewImageMap } from 'libs/notion/images';

const mapPageUrl = (id: string) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '');
};

export const getStaticProps = async ({ params: { slug } }) => {
  const recordMap = await notion.getPage(NOTION_BLOG_PAGE_ID);
  const posts = await processRecordMap(recordMap, NOTION_BLOG_PAGE_ID);

  let post = posts.find((post: PostPreview) => post.slug === slug);
  const postRecordMap = await notion.getPage(post.id);
  const previewImageMap = await getPreviewImageMap(postRecordMap);
  (postRecordMap as any).preview_images = previewImageMap;
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
  const recordMap = await notion.getPage(NOTION_BLOG_PAGE_ID);
  const posts = await processRecordMap(recordMap, NOTION_BLOG_PAGE_ID);
  const paths = posts.map((post) => `/blog/${post.slug}`);

  return {
    paths: paths,
    fallback: true,
  };
}

const BlogDetailPage = ({ post, postRecordMap }: BlogDetailProps) => {
  return (
    <BlogLayout pageDescription={post?.summary} pageTitle={post?.title}>
      <BlogDetail
        post={post}
        postRecordMap={postRecordMap}
        mapPageUrl={mapPageUrl as MapPageUrlFn}
      />
    </BlogLayout>
  );
};

export default BlogDetailPage;
