import tw, { styled } from 'twin.macro';

export const ContactCard = styled.a`
  ${tw`
    flex justify-center items-center
    mb-20 md:mb-0
  `}

  & img {
    ${tw`
      mr-5
      w-28 h-28
    `}
  }

  & h6 {
    ${tw`
      text-gunmetal dark:text-white
      underline text-decoration-color[#4C1D95]
      text-sm-large md:text-small lg:text-large
    `}
  }
`;
