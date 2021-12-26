import Title from './title';
import Posts from './posts';
import * as S from './index.style';

const Journal = (): JSX.Element => (
  <S.Journal>
    <Title />
    <Posts />
  </S.Journal>
);

export default Journal;
