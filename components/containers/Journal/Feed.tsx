import { useEffect } from 'react';
import { useNotionContext } from 'react-notion-x';

const Feed = () => {
  const { recordMap } = useNotionContext();

  useEffect(() => {
    console.log(recordMap);
  }, [recordMap]);

  return <></>;
};

export default Feed;
