import useSWR from 'swr'
import RSSParser from 'rss-parser'

import {
  getUncompressedURL,
  convertIntToStars,
  convertDateFormat
} from 'utils/utils'

interface Data {
  items: Object[]
  isError: boolean | any
}

const fetcher = (url: string): Promise<Object> => fetch(url).then(res => res.json())

export const fetchProjects = (path: string) => {
  if (!path) throw new Error("Path is required")

  const {
    data: projects,
    error
  } = useSWR(path, fetcher)

  return { projects, error }
}

export const fetchFavorites = (path: string) => {
  if (!path) throw new Error("Path is required")

  const {
    data: favorites,
    error
  } = useSWR(path, fetcher)

  return { favorites, error }
}

export const fetchGoodreads = async () => {
  let parser = new RSSParser()
  let data: Data = {
    items: [],
    isError: false
  }

  try {
    let feed = await parser.parseURL(process.env.NEXT_PUBLIC_CORS_PROXY + process.env.NEXT_PUBLIC_GOODREADS_RSS)

    for (let i = 0; i < 4; i++) {
      let bookData = {
        image: "",
        link: "",
        title: "",
        rating: "",
        date: ""
      }

      const el = feed.items[i]

      let html = document.createElement('html');
      html.innerHTML = el.content

      bookData.image = getUncompressedURL(
        html
          .getElementsByTagName('img')[0]
          .src
      )
      bookData.link = el.link
      bookData.title = el.title
      bookData.rating = convertIntToStars(
        el
          .content
          .split("<br/>")[5]
          .split(":")[1]
          .trim()
      )
      bookData.date = convertDateFormat(
        html
          .getElementsByTagName('body')[0]
          .innerHTML
          .split("read at:")[1]
          .split("<br>")[0]
      )

      data.items.push(bookData)
    }

  } catch (error) { data.isError = true }

  return data
}

export const fetchLetterboxd = async () => {
  let parser = new RSSParser()
  let data: Data = {
    items: [],
    isError: false
  }

  try {
    let feed = await parser.parseURL(process.env.NEXT_PUBLIC_CORS_PROXY + process.env.NEXT_PUBLIC_LETTERBOXD_RSS)

    for (let i = 0; i < 4; i++) {
      let movieData = {
        image: "",
        link: "",
        title: "",
        rating: "",
        date: ""
      }

      const el = feed.items[i]

      let html = document.createElement('html');
      html.innerHTML = el.content

      movieData.image = (
        html
          .getElementsByTagName('img')[0]
          .src
      )
      movieData.link = el.link
      movieData.title = (
        el
          .title
          .split("-")
          .splice(0, el.title.split("-").length - 1)
          .join("-")
      )
      movieData.rating = (
        el
          .title
          .split("-")[el.title.split("-").length - 1]
          .split(" ")[1]
      )
      movieData.date = (
        el.contentSnippet.includes("Watched on ")
          ? el
              .content
              .split("<p>")
              .pop()
              .split(" ")[3]
              .substring(0, 3)
            + " "
            + el
                .content
                .split("<p>")
                .pop()
                .split(" ")[4].slice(0, -1)
          : el
              .pubDate
              .split(" ")[2]
            + " "
            + el
                .pubDate
                .split(" ")[1]
      )

      data.items.push(movieData)
    }

  } catch (error) { data.isError = true }

  return data
}