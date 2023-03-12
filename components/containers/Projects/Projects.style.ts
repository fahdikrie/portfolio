import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    mt-32
    md:margin-top[88px]
    lg:margin-top[91.4px]

    pt-0 md:pt-48
    overflow-y-scroll
  `}
`;

export const DesktopSwiper = styled.div`
  & .swiper-container {
    ${tw`
      hidden md:block
      active:cursor[grabbing]
    `}

    & .swiper-pagination-bullet {
      ${tw`
        md:(w-5 h-5 mx-2)
        lg:(width[7.5px] height[7.5px] mx-3)
        xl:(w-8 h-8 mx-5)
      `}
    }

    & .swiper-pagination-bullet-active {
      ${tw`
        bg-black
      `}
    }
  }
`;

export const MobileSwiper = styled.div`
  ${tw`
    overflow-x-scroll
    scrollbar-width[none]
    -ms-overflow-style[none]
    -webkit-overflow-scrolling[touch]
    pl-24

    flex md:hidden
    w-full
  `}

  &::-webkit-scrollbar {
    ${tw`
      hidden
      w-0 h-0
    `}
  }

  & div.project-card {
    ${tw`
      width[calc(100vw - 48px)]!
      height[calc(100vw - 48px)]!
      mr-10
      inline-block
      flex-shrink-0
    `}

    &:nth-last-child(2) {
      ${tw`
        mr-0
      `}
    }
  }

  & div.swiper__margin {
    ${tw`
      pl-24
      w-0
      min-h-full
      inline-block
      invisible
    `}
  }
`;
