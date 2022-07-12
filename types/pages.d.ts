import { NextRouter } from 'next/router';
import { Block, BlockMap, ExtendedRecordMap } from 'notion-types';
import { MapPageUrlFn } from 'react-notion-x';

interface PageProps {
  router: NextRouter;
}

interface JournalProps extends PageProps {
  posts?: PostPreview[] | null;
}

interface JournalDetailProps extends PageProps {
  post?: PostPreview | null;
  postRecordMap?: ExtendedRecordMap | null;
  postBlock?: BlockMap<Block> | null;
}

interface JournalDetailComponentProps {
  post?: PostPreview | null;
  postRecordMap?: ExtendedRecordMap | null;
  mapPageUrl?: MapPageUrlFn;
}
