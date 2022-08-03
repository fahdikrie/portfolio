import Hero from './Hero';
import Feed from './Feed';
import * as S from './index.style';

const Blog = (): JSX.Element => (
  <S.Blog>
    <Hero />
    <Feed />
  </S.Blog>
);

export default Blog;
