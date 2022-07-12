import * as S from './Header.style';

const JournalHeader = ({ post }: { post: PostDetail }) => {
  return (
    <S.Header>
      <div>{post?.title}</div>
      <div>{post?.date}</div>
      <div>{post?.readTime} read</div>
      <div>{post?.summary}</div>
      <div>{post?.tags.join(' ')}</div>
      <hr />
    </S.Header>
  );
};

export default JournalHeader;
