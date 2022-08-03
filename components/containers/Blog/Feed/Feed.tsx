import PostPreviewCard from '@/components/elements/PostPreviewCard';
import useNotionPreviewData from 'hooks/useNotionPreviewData';

import * as S from './Feed.style';

const Feed = () => {
  const { posts } = useNotionPreviewData();

  return (
    <S.FeedWrapper>
      <S.Feed>
        {posts?.map((post: PostPreview, id: number) => {
          return <PostPreviewCard key={id} path="blog" post={post} />;
        })}
      </S.Feed>
    </S.FeedWrapper>
  );
};

export default Feed;
