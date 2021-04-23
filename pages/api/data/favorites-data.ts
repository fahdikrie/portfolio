interface Data {
  id: number
  title: string
  images: string[]
}

export const Movies: Data[] = [
  {
    id: 1,
    title: "title",
    images: Array.apply("title", 4).map(
      (el: string, i: number) => el = el + i + ".png"
    )
  },
]