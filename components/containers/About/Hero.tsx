import * as S from './Hero.style';

const Hero = (): JSX.Element => (
  <S.Hero>
    <div>
      <S.JumboText>about me.</S.JumboText>
      <S.SubHeader>bio, experience, education, etc.</S.SubHeader>
    </div>
  </S.Hero>
);

export default Hero;
