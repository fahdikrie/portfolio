import * as S from './Hero.style';

const Hero = (): JSX.Element => (
  <S.Hero>
    <div>
      <S.JumboText>
        writing into <br />
        the void.
      </S.JumboText>
      <S.SubHeader>
        an internet-web journal by <u>badi</u>
      </S.SubHeader>
    </div>
  </S.Hero>
);

export default Hero;
