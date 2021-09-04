import tw, { styled } from 'twin.macro';

export const Solos = tw.div`
  z-20 relative
  margin[0px -24px] md:mx-0
  mb-64 md:mb-144
  overflow-x-hidden
`;

export const Header = styled.h2`
  ${tw`
    mx-24 md:mx-0
    mb-0
    text-white font-black
    text-left md:text-center
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
    text-white opacity-70
    text-sm-large md:text-small lg:text-large
  `}

  & u {
    ${tw`hidden md:inline`}
  }
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
        bg-purple-400
        opacity-40
      `}
    }

    & .swiper-pagination-bullet-active {
      ${tw`
        opacity-100
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

  & div {
    ${tw`
      width[calc(100vw - 48px)]!
      mr-10
      inline-block
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
      min-h-full
      inline-block
      invisible
    `}
  }
`;
