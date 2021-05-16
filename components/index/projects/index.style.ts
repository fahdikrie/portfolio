import tw, { styled } from 'twin.macro'

export const ProjectsCollab = tw.div`
  z-20 relative
  margin[0px -24px]
  md:(margin-left[-64px] margin-right[-64px])
  lg:(margin-left[-80px] margin-right[-80px])
  xl:(margin-left[-100px] margin-right[-100px])
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

export const Navigation = styled.div`
  ${tw`
    hidden md:block
    md:width[calc(64px - 15px)]
    lg:width[calc(80px - 15px)]
    xl:width[calc(100px - 15px)]
  `}

  & img {
    ${tw`
      block mx-auto
      cursor-pointer
      md:w-24 lg:w-32 xl:w-36
    `}

    &.chevron-left {
      transform: rotate(180deg);
    }
  }
`

export const DesktopSwiper = styled.div`
  ${tw`
    flex items-center
  `}

  & .swiper-container {
    ${tw`
      hidden md:block
      active:cursor[grabbing]
      width[100%]
    `}
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