import { useNotionData } from 'hooks/useNotionData';
import { useEffect } from 'react';

const Feed = () => {
  const { posts } = useNotionData();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return <></>;
};

export default Feed;
