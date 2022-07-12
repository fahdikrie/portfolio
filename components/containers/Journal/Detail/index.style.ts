import tw, { styled } from 'twin.macro';

export const TweetWrapper = styled.div`
  & div {
    ${tw`border-radius[12px] overflow-hidden`}
  }

  & .twitter-tweet,
  .twitter-tweet-rendered {
    ${tw`my-0! border-radius[12px]`}
  }
`;

export const JournalDetail = styled.div`
  ${tw`
    max-w-5xl mx-auto
    min-h-screen

    px-24 md:px-64 lg:px-80 xl:px-100
    py-80 md:py-100 lg:py-128
  `}

  * {
    ${tw`
      cursor-auto!
      select-text!
    `}
  }

  a,
  a.notion-hash-link,
  a.notion-hash-link svg,
  img,
  div.notion-code-copy-button {
    ${tw`cursor-pointer!`}
  }

  figcaption {
    ${tw`opacity-95 mb-10 text-center mx-auto`}
  }

  article {
    ${tw`border-radius[20px]`}
  }
`;
