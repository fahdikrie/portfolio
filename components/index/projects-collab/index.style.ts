import tw, { styled } from 'twin.macro'

export const ProjectsCollab = styled.div`
  ${tw`
    z-20 relative
    margin[0px -24px]
    md:mx-0
    overflow-x-hidden
  `}
`

export const SectionHeader = tw.h2`
  text-white font-black
  text-left md:text-center
  text-sm-header md:text-md-header lg:text-header
  mx-24 md:mx-0
  mb-20
`

export const DesktopSwiper = styled.div`
  & .swiper-container {
    ${tw`
      pl-24 md:pl-0
      hidden md:block
    `}

    & .swiper-wrapper {
      & .swiper-slide {
        ${tw`
          max-width[calc(100% - 24px)!important]
          md:max-w-full!
        `}
      }
    }
  }
`

export const MobileSwiper = styled.div`
  ${tw`
    overflow-x-scroll
    pl-24

    flex md:hidden
    w-full
  `}

  & img {
    ${tw`
      width[320px]
      mr-10
      inline-block
    `}
  }

  & span {
    ${tw`
      text-sm-tiny
      invisible
    `}
  }
`