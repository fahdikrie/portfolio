import { IoMdDocument } from 'react-icons/io';

import * as S from './Hero.style';

const Hero = (): JSX.Element => {
  return (
    <S.Hero>
      <div>
        <S.JumboText>about me.</S.JumboText>
        <S.SubHeader>bio, experience, education, etc.</S.SubHeader>
        <S.HStack>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <S.ButtonFilled>
              <IoMdDocument />
              <span>Resume</span>
            </S.ButtonFilled>
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <S.ButtonOutlined>
              <IoMdDocument />
              <span>CV</span>
            </S.ButtonOutlined>
          </a>
        </S.HStack>
      </div>
    </S.Hero>
  );
};

export default Hero;
