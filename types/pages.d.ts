import { NextRouter } from 'next/router';

interface PageProps {
  router: NextRouter;
}

interface JournalProps extends PageProps {
  posts?: PostPreview[] | null;
}
