import Hero from './Hero';
import Feed from './Feed';
import * as S from './index.style';

const Journal = (): JSX.Element => (
  <S.Journal>
    <Hero />
    <Feed />
  </S.Journal>
);

export default Journal;
