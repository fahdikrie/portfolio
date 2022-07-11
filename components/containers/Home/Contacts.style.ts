import tw, { styled } from 'twin.macro';

export const Contacts = tw.div`
  z-20 relative
  margin[0px -24px] md:mx-0
  overflow-x-hidden
  mb-64
`;

export const Header = styled.h2`
  ${tw`
    mx-24 md:mx-0
    mb-0
    font-black
    text-left md:text-center
    text-gunmetal dark:text-white
    text-sm-header md:text-md-header lg:text-header
  `}

  & br {
    ${tw`block md:hidden`}
  }
`;

export const SubHeader = styled.h3`
  ${tw`
    mb-20
    font-normal
    mx-24 md:mx-0
    md:text-center
    opacity-70
    text-gunmetal dark:text-white
    text-sm-large md:text-small lg:text-large
  `}

  & u {
    ${tw`hidden md:inline`}
  }
`;

export const ContactCardWrapper = tw.div`
  md:mt-20
  mx-24 md:mx-auto
  w-full 2xl:w-5/6

  flex flex-wrap
  flex-col items-start
  md:(flex-row justify-center)

  gap-x-10
  md:(gap-x-20 gap-y-24)
  lg:(gap-x-32)
`;
