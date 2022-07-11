import PostPreviewCard from '@/components/elements/PostPreviewCard';
import { useNotionData } from 'hooks/useNotionData';
import { useEffect } from 'react';

import * as S from './Feed.style';

const Feed = () => {
  const { posts } = useNotionData();

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <S.FeedWrapper>
      <S.Feed>
        {posts?.map((post: PostPreview, id: number) => {
          return <PostPreviewCard key={id} post={post} />;
        })}
      </S.Feed>
    </S.FeedWrapper>
  );
};

export default Feed;
