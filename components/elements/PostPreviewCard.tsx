import Link from 'next/link';
import tw, { styled } from 'twin.macro';

interface SPostPreviewCardProps {
  path: string;
}

export const SPostPreviewCard = styled.div<SPostPreviewCardProps>`
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
    ${(props) => props.path === 'blog' ? tw`font-sans` : tw`font-serif`}

    ${tw`
      tracking-wider font-bold
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

const PostPreviewCard = ({ path, post }: { path: string, post: PostPreview }): JSX.Element => (
  <Link href={`${path}/${post.slug}`} passHref>
    <SPostPreviewCard path={path}>
      <div className="post-preview-card__date">{post?.date ?? '-'}</div>
      <div className="post-preview-card__title">{post?.title}</div>
      <div className="post-preview-card__summary">{post?.summary}</div>
    </SPostPreviewCard>
  </Link>
);

export default PostPreviewCard;
