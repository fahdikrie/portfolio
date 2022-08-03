import { NextRouter } from 'next/router';
import { ExtendedRecordMap } from 'notion-types';
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
}

interface JournalDetailComponentProps {
  post?: PostPreview | null;
  postRecordMap?: ExtendedRecordMap | null;
  mapPageUrl?: MapPageUrlFn;
}

interface BlogProps extends PageProps {
  posts?: PostPreview[] | null;
}

interface BlogDetailProps extends PageProps {
  post?: PostPreview | null;
  postRecordMap?: ExtendedRecordMap | null;
}

interface BlogDetailComponentProps {
  post?: PostPreview | null;
  postRecordMap?: ExtendedRecordMap | null;
  mapPageUrl?: MapPageUrlFn;
}
