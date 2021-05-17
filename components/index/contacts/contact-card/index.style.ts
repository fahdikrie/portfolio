import tw, { styled } from 'twin.macro'

export const ContactCard = styled.a`
  ${tw`
    flex justify-center items-center
  `}

  & img {
    ${tw`
      mr-5
      w-28 h-28
    `}
  }

  & h6 {
    ${tw`
      text-white underline text-decoration-color[#4C1D95]
      text-sm-large md:text-small lg:text-large
    `}
  }
`