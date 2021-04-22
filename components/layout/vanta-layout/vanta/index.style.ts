import tw, { styled } from 'twin.macro'

export const Vanta = styled.div`
  ${tw`
    w-full h-full fixed
    2xl:max-width[1920px]
  `}

  & .canvas {
    ${tw`
      w-full h-full
      2xl:max-width[1920px]
    `}
  }
`