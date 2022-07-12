import PostPreviewCard from '@/components/elements/PostPreviewCard';
import { useNotionData } from 'hooks/useNotionData';

import * as S from './Feed.style';

const Feed = () => {
  const { posts } = useNotionData();

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
