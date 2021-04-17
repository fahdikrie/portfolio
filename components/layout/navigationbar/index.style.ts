import tw from 'twin.macro'

export const Wrapper = tw.div`
  w-screen 2xl:max-width[1920px]
  2xl:block 2xl:mx-auto
  h-screen
`

export const Items = tw.ul`
  px-12 md:px-16 xl:px-32
  py-16 md:py-32
  w-full
  flex flex-row justify-end
`

export const Item = tw.li`
  cursor-pointer
  ml-16 xl:ml-24
  my-5
  text-white
  opacity-70 hover:opacity-100
  tracking-wide
  text-sm-small md:text-small
`

export const Socials = tw.div`
  absolute
  w-full 2xl:max-width[1920px]
  px-12 md:px-16
  py-16 md:py-32
  flex md:flex-col
  md:bottom-0
`

export const Social = tw.img`
  cursor-pointer
  w-24 md:w-32 xl:w-36
  mr-12 md:mr-0
  mt-0 md:mt-12
  opacity-70 hover:opacity-100

`