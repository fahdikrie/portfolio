import tw, { styled } from 'twin.macro';

export const JournalDetail = styled.div`
  ${tw`
    max-w-5xl mx-auto
    min-h-screen

    px-24 md:px-64 lg:px-80 xl:px-100
    pt-32 md:pt-100 lg:pt-128
  `}

  * {
    ${tw`
      cursor-auto!
      select-text!
    `}
  }

  a {
    ${tw`cursor-pointer!`}
  }
`;
