import tw, { styled } from 'twin.macro';

export const FeedWrapper = styled.div`
  ${tw`
    mt-32
    md:margin-top[88px]
    lg:margin-top[91.4px]

    pt-0 md:pt-48
    overflow-y-scroll
  `}
`;

export const Feed = tw.div`
  w-auto
  bg-seashell dark:bg-black
`;
