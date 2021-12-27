import Title from './title';
import About from './about';
import Projects from './projects';
import Contacts from './contacts';
import * as S from './index.style';

const Index = (): JSX.Element => (
  <S.Index>
    <Title />
    <About />
    <Projects />
    <Contacts />
  </S.Index>
);

export default Index;
