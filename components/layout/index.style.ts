import tw from 'twin.macro'

export const Layout = tw.div`
  relative
  w-screen

  // uncomment this to implement fixed layout
  2xl:max-width[1920px] mx-auto
`