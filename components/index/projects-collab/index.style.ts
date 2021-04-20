import tw, { styled } from 'twin.macro'

export const ProjectsCollab = styled.div`
  ${tw`
    z-20 relative
    margin-left[-24px] margin-right[-24px]
    md:mx-0
  `}

  & .swiper-container {
    ${tw`
        pl-24 md:pl-0
    `}

    & .swiper-wrapper {
      & .swiper-slide {
        max-width: calc(100% - 24px)!important;

        ${tw`
          md:max-w-full!
        `}
      }
    }

    & .swiper-button-prev,
    & .swiper-button-next {
      ${tw`z-50`}
    }
  }
`