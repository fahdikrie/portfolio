import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import * as S from './index.style';

const Index = (): JSX.Element => (
  <S.Index>
    <Hero />
    <About />
    <Projects />
    <Contacts />
  </S.Index>
);

export default Index;
