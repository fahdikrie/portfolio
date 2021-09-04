import tw, { styled } from 'twin.macro';

export const Info: any = tw.p`
  mt-5 md:mt-3
  text-white opacity-70
  font-size[calc(0.25rem + 1vw)]
  md:font-size[calc(0.075rem + 0.75vw)]
`;

export const RecentCard = styled.div`
  ${tw`w-full`}

  &:hover {
    .recent-card__image {
      ${tw`border-purple-900`}
    }

    ${Info} {
      ${tw`opacity-100`}
    }
  }

  & .recent-card__image {
    ${tw`
      border-2
      border-radius[5px]
      border-transparent
      width[calc(100% - 4px)]
    `}
  }

  & .recent-card__image img {
    ${tw`
      object-cover
      border-radius[3px]
    `}
  }

  & .recent-card__info {
    ${tw`
      my-0
      text-white
      width[calc(100% - 4px)]
      flex justify-between items-center
    `}
  }
`;
