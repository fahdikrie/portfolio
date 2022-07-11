import { NextRouter } from 'next/router';
import { ExtendedRecordMap } from 'notion-types';

interface PageProps {
  router: NextRouter;
  recordMap?: ExtendedRecordMap;
}
