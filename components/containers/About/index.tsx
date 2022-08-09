import Hero from './Hero';
import Desc from './Desc';
import * as S from './index.style';

const About = (): JSX.Element => (
  <S.About>
    <Hero />
    <Desc />
  </S.About>
);

export default About;
