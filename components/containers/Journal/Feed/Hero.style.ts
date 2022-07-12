import tw, { styled } from 'twin.macro';

export const Hero = styled.div`
  ${tw`
    w-full md:h-screen
    flex items-center
    mt-64 md:mt-0
    text-center md:text-left
  `}

  & div {
    ${tw`
      md:h-5/6 w-full
      flex flex-col justify-center
    `}
  }
`;

export const JumboText = tw.h1`
  font-serif
  font-black
  text-gunmetal dark:text-white
  text-sm-wambo // md:text-wambo
  lg:text-sm-jumbo xl:text-jumbo
`;

export const SubHeader = styled.h3`
  ${tw`
    font-serif
    font-bold
    text-gunmetal dark:text-white
    text-sm-large md:text-large
    lg:text-sm-subheader xl:text-subheader
  `}
`;
