import Link from 'next/link';
import tw, { styled } from 'twin.macro';

export const SPostPreviewCard = styled.div`
  ${tw`
    mb-32 md:mb-48
    cursor-pointer
    text-left
  `}

  &:hover {
    & .post-preview-card__title {
      ${tw`
        underline
      `}
    }
  }

  & .post-preview-card__date {
    ${tw`
      opacity-70
      text-gunmetal dark:text-white
      text-tiny md:text-sm-small
      mb-8
    `}
  }

  & .post-preview-card__title {
    ${tw`
      tracking-wider
      font-serif font-bold
      text-gunmetal dark:text-white
      text-sm-large md:text-md-large lg:text-large
      mb-8
    `}
  }

  & .post-preview-card__summary {
    ${tw`
      opacity-80
      font-sans font-normal
      text-gunmetal dark:text-white
      text-sm-small md:text-md-small
    `}
  }
`;

const PostPreviewCard = ({ post }: { post: PostPreview }): JSX.Element => (
  <Link href={`journal/${post.slug}`} passHref>
    <SPostPreviewCard>
      <div className="post-preview-card__date">{post?.date ?? '-'}</div>
      <div className="post-preview-card__title">{post?.title}</div>
      <div className="post-preview-card__summary">{post?.summary}</div>
    </SPostPreviewCard>
  </Link>
);

export default PostPreviewCard;
