import * as S from './Header.style';

const JournalHeader = ({ post }: { post: PostDetail }) => (
  <S.Header>
    <S.Title>{post?.title}</S.Title>
    <S.Info>
      <S.InfoText>{post?.date}</S.InfoText>
      <S.InfoText>•</S.InfoText>
      <S.InfoText>{post?.readTime} read</S.InfoText>
    </S.Info>
    <S.Summary>{post?.summary}</S.Summary>
    <S.Tags>
      {post?.tags?.map((tag, id) => (
        <S.Tag key={id}>{tag}</S.Tag>
      ))}
    </S.Tags>
    <S.Separator />
  </S.Header>
);

export default JournalHeader;
