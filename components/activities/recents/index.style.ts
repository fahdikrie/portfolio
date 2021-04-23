import tw, { styled } from 'twin.macro'

export const Recents = tw.div`
  w-full
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

export const RecentsCards = tw.div`
  w-full flex flex-row
`