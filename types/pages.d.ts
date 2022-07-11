import { NextRouter } from 'next/router';
import { Block, BlockMap } from 'notion-types';

interface PageProps {
  router: NextRouter;
}

interface JournalProps extends PageProps {
  posts?: PostPreview[] | null;
}

interface JournalDetailProps extends PageProps {
  post?: PostPreview | null;
  postBlock?: BlockMap<Block> | null;
}
