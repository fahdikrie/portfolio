import tw, { styled } from 'twin.macro'

interface RecentsCardsProps {
  loading: boolean
}

export const Recents = tw.div`
  w-full z-20
`

export const Header = tw.div`
  w-full
  flex flex-row
  justify-between
`

export const Title = styled.h6`
  ${tw`
    font-normal text-white
    text-sm-small md:text-md-small lg:text-small
    md:tracking-wide
    mb-5 md:mb-8
    margin-left[2px]
  `}

  & span {
    ${tw`
      text-purple-900
    `}
  }
`

export const RecentsCards = styled.div<RecentsCardsProps>`
  ${tw`
    w-full
  `}

  ${(loading) => (
    !loading
      ? tw`grid grid-cols-4 gap-5`
      : tw`flex flex-row`
  )}
`

export const Loading = styled.div`
  ${tw`
    my-0 mx-auto
    flex flex-col
    justify-center items-center
    width[calc(100% - 4px)]
    height[calc(22.5vw * 3 / 1.975)]
    md:height[calc(10.775vw * 3 / 1.925)]
  `}

  @media (min-width: 1920px) {
    height: calc((0.1155 * 1920px) * 3 / 1.925);
  }
`