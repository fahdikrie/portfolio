import tw, { styled } from 'twin.macro'

export const Contacts = tw.div`
  z-20 relative
  margin[0px -24px] md:mx-0
  overflow-x-hidden
  mb-64
`

export const Header = styled.h2`
  ${tw`
    mx-24 md:mx-0
    mb-0
    text-white font-black
    text-left md:text-center
    text-sm-header md:text-md-header lg:text-header
  `}

  & br {
    ${tw`block md:hidden`}
  }
`
export const SubHeader = styled.h3`
  ${tw`
    mb-20
    font-normal
    mx-24 md:mx-0
    md:text-center
    text-white opacity-70
    text-sm-large md:text-small lg:text-large
  `}

  & u {
    ${tw`hidden md:inline`}
  }
`

export const ContactCardWrapper = tw.div`
  mx-24 md:mx-auto
  w-full mt-32
  flex-wrap
  flex items-start
  md:(justify-center)
  gap-x-20 gap-y-16
  md:(gap-x-32 gap-y-28)
`