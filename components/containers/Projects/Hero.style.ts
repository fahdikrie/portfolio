import tw, { styled } from 'twin.macro';

export const Hero = styled.div`
  ${tw`
    w-full md:h-screen
    flex items-center
    mt-64 md:mt-0
    text-center md:text-left
  `}

  & > div {
    ${tw`
      md:h-5/6 w-full
      flex flex-col justify-center
    `}
  }
`;

export const JumboText = tw.h1`
  font-sans
  font-black
  text-gunmetal dark:text-white
  text-sm-wambo // md:text-wambo
  lg:text-sm-jumbo xl:text-jumbo
`;

export const SubHeader = styled.h3`
  ${tw`
    font-sans
    font-bold
    text-gunmetal dark:text-white
    text-sm-large md:text-large
    lg:text-sm-subheader xl:font-size[28px]
  `}
`;

export const HStack = styled.div`
  ${tw`
    mt-10 md:mt-32
    flex gap-10 md:gap-20
    justify-center md:justify-start
  `}
`;

export const ButtonFilled = styled.button`
  ${tw`
    min-width[120px]
    bg-bronze dark:bg-magenta
    hover:bg-opacity-80

    flex gap-10
    justify-center items-center

    text-white
    font-semibold font-sans
    text-sm-small md:text-md-small lg:text-small

    border rounded
    border-bronze dark:border-magenta
    py-5 px-10
    shadow
  `}

  svg {
    ${tw`
      width[14px] height[14px]
      md:width[16px] md:height[16px]
      lg:width[18px] lg:height[18px]
    `}
  }
`;

export const ButtonOutlined = styled.button`
  ${tw`
    min-width[120px]
    bg-transparent
    hover:bg-opacity-80

    flex gap-10
    justify-center items-center

    text-gunmetal dark:text-white
    font-semibold font-sans
    text-sm-small md:text-md-small lg:text-small

    border-2 rounded
    border-bronze dark:border-magenta
    py-5 px-10
    shadow
  `}

  svg {
    ${tw`
      width[14px] height[14px]
      md:width[16px] md:height[16px]
      lg:width[18px] lg:height[18px]
    `}
  }
`;
