import { Block, ExtendedRecordMap, NotionMap } from 'notion-types';
import { idToUuid } from 'notion-utils';
import { getAllPostIds, getPageProperties } from './services';

export const processRecordMap = async (recordMap: ExtendedRecordMap) => {
  // Check if the given recordMap is a Database or not
  const block: NotionMap<Block> = recordMap.block;
  const uuid = idToUuid('7d689ff0d95d42f2bc4f01fcf0c9b7b9');
  const rawMetadata = block[uuid]?.value;

  if (
    rawMetadata?.type !== 'collection_view_page' &&
    rawMetadata?.type !== 'collection_view'
  ) {
    console.error(`pageId "${uuid}" is not a database`);
    return null;
  }

  // Get all ids from the pages on collection
  const collection = Object.values(recordMap.collection)[0]?.value;
  const collectionQuery = recordMap.collection_query;
  const pageIds = getAllPostIds(collectionQuery);

  // Get posts data
  const schema = collection?.schema;
  const posts: PostPreview[] = [];
  pageIds.forEach(async (pageId) => {
    posts.push(await getPageProperties(pageId, block, schema));
  });

  return Promise.resolve(posts);
};
