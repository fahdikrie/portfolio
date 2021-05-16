import tw, { styled } from 'twin.macro'

export const ProjectsCollab = tw.div`
  z-20 relative
  margin[0px -24px]
  mb-144
  overflow-x-hidden
`

export const SectionHeader = tw.h2`
  mx-24 md:mx-0
  mb-20 md:mb-0
  text-white font-black
  text-left md:text-center
  text-sm-header md:text-md-header lg:text-header
`

export const SectionSubHeader = tw.h3`
  mb-20
  font-normal
  md:text-center
  hidden md:block
  text-white opacity-70
  text-sm-large md:text-small lg:text-large
`

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