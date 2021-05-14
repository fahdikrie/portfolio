import tw, { styled } from 'twin.macro'

export const Title = styled.div`
  ${tw`
    w-full h-screen
    flex items-center
  `}

  & div {
    ${tw`
      h-5/6 w-full
      flex flex-col justify-center
    `}
  }
`

export const JumboText = tw.h1`
  font-serif
  font-black
  text-white
  text-sm-jumbo xl:text-jumbo
`

export const SubHeader = tw.h3`
  font-serif
  font-bold
  text-white
  text-sm-subheader xl:text-subheader
`