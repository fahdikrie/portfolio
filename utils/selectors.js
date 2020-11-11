import useSWR from "swr"
import RSSParser from 'rss-parser'

import {
  intToStars,
  getUncompressedURL
} from 'utils/utils'
import {
  CORS_PROXY,
  GOODREADS_RSS,
  LETTERBOXD_RSS,
} from 'utils/constants'

const fetcher = url => fetch(url).then(res => res.json())

export const fetchMainProjects = path => {
  if (!path) throw new Error("Path is required")

  const {
    data: mainProjects,
    error
  } = useSWR(path, fetcher)

  return { mainProjects, error }
}

export const fetchGoodreads = async () => {
  let parser = new RSSParser()
  let data = {
    items: [],
    error: false
  }

  try {
    let feed = await parser.parseURL(CORS_PROXY + GOODREADS_RSS)

    for (let i = 0; i < 4; i++) {
      let bookData = {
        image: "",
        link: "",
        title: "",
        rating: "",
        date: ""
      }

      const el = feed.items[i]

      console.log(el.content)

      let html = document.createElement('html');
      html.innerHTML = el.content

      bookData.image = getUncompressedURL(html.getElementsByTagName('img')[0].src)
      bookData.link = el.link
      bookData.title = el.title
      bookData.rating = intToStars(el.content.split("<br/>")[5].split(":")[1].trim())
      bookData.date = el.pubDate.split(" ")[2] + " " + el.pubDate.split(" ")[1]

      data.items.push(bookData)
    }

  } catch (error) { data.error = error }

  return data
}

export const fetchLetterboxd = async () => {
  let parser = new RSSParser()
  let data = {
    items: [],
    error: false
  }

  try {
    let feed = await parser.parseURL(CORS_PROXY + LETTERBOXD_RSS)

    for (let i = 0; i < 4; i++) {
      let movieData = {
        image: "",
        link: "",
        title: "",
        rating: "",
        date: ""
      }

      const el = feed.items[i]

      console.log(el)
      console.log(el.content)

      let html = document.createElement('html');
      html.innerHTML = el.content

      movieData.image = html.getElementsByTagName('img')[0].src
      movieData.link = el.link
      movieData.title = el.title
      movieData.rating = el.title.split("-")[el.title.split("-").length - 1]
      movieData.date = el.pubDate.split(" ")[2] + " " + el.pubDate.split(" ")[1]

      data.items.push(movieData)
    }

  } catch (error) { data.error = error }

  return data
}