import tw, { styled } from 'twin.macro'

export const ProjectsCollab = tw.div`
  z-20 relative
  margin[0px -24px]
  md:mx-0
  mb-144
  overflow-x-hidden
`

export const SectionHeader = tw.h2`
  text-white font-black
  text-left md:text-center
  text-sm-header md:text-md-header lg:text-header
  mx-24 md:mx-0
  mb-20 md:mb-24 lg:mb-28
`

export const DesktopSwiper = styled.div`
  & .swiper-container {
    ${tw`
      pl-24 md:pl-0
      hidden md:block
      active:cursor[grabbing]
    `}

    & .swiper-wrapper {
      & .swiper-slide {
        ${tw`
          max-width[calc(100% - 24px)]!
          md:max-w-full!
        `}
      }
    }
  }
`

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
      height[calc(100vw - 48px)]!
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
`