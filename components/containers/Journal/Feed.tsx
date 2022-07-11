import { ExtendedRecordMap } from 'notion-types';
import { useEffect } from 'react';

const Feed = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  useEffect(() => {
    console.log(recordMap);
  }, [recordMap]);

  return <></>;
};

export default Feed;
