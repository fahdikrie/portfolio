import * as S from './Hero.style';

const Hero = (): JSX.Element => (
  <S.Hero>
    <div>
      <S.JumboText>
        out in <br />
        the open.
      </S.JumboText>
      <S.SubHeader>
        tech-blogs and learning notes
      </S.SubHeader>
    </div>
  </S.Hero>
);

export default Hero;
