import { IoMdDownload } from 'react-icons/io';

import * as S from './Hero.style';

const Hero = (): JSX.Element => {
  return (
    <S.Hero>
      <div>
        <S.JumboText>projects.</S.JumboText>
        <S.SubHeader>stuff i&apos;ve worked on in the past.</S.SubHeader>
        <S.HStack>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <S.ButtonFilled>
              <IoMdDownload />
              <span>Resume</span>
            </S.ButtonFilled>
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <S.ButtonOutlined>
              <IoMdDownload />
              <span>CV</span>
            </S.ButtonOutlined>
          </a>
        </S.HStack>
      </div>
    </S.Hero>
  );
};

export default Hero;
