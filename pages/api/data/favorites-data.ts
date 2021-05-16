interface Data {
  title: string
  slug: string
  images: string[]
}

const MOVIE_DIR_PREFIX = "/assets/favorites/"

export const Favorites: Data[] = [
  {
    title: "Eat Drink Man Woman",
    slug: "eat-drink-man-woman",
    images: Array(4).fill("eat-drink-man-woman").map(
      (el: string, i: number) => el = MOVIE_DIR_PREFIX + el + "-" + i + ".png"
    )
  },
  {
    title: "Columbus",
    slug: "columbus",
    images: Array(4).fill("columbus").map(
      (el: string, i: number) => el = MOVIE_DIR_PREFIX + el + "-" + i + ".png"
    )
  },
]