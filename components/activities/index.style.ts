import tw from 'twin.macro'

export const Activities = tw.div`
  relative w-full
  px-24 md:px-64 lg:px-80 xl:px-100
  pt-80 md:pt-100
`

export const RecentsWrapper = tw.div`
  grid
  gap-20 lg:gap-48
  grid-cols-1 md:grid-cols-2
`

export const FavoritesWrapper = tw.div`
  grid
  gap-20 lg:gap-48
  grid-cols-1 md:grid-cols-2
  mt-36 md:mt-48
  mb-64
`