import tw, { styled } from 'twin.macro'

export const ProjectsCollab = styled.div`
  ${tw`
    z-20 relative
    margin-left[-24px] margin-right[-24px]
    md:px-64 lg:px-80 xl:px-100
  `}

  & .swiper-container {
    --swiper-navigation-color: red;

    ${tw`
        pl-24
    `}

    & .swiper-slide {
      max-width: calc(100% - 24px)!important;
    }

    & .swiper-button-prev,
    & .swiper-button-next {
      ${tw`z-50`}
    }
  }
`