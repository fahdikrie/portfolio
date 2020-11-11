import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import RSSParser from 'rss-parser'

import Layout from 'components/Layout/index';
import {
  fetchGoodreads,
  fetchLetterboxd
} from 'utils/selectors'

export default function Activities() {
  const [goodreads, setGoodreads] = useState({
    items: [],
    error: false
  })

  const [letterboxd, setLetterboxd] = useState({
    items: [],
    error: false
  })

  useEffect(() => {
    async function fetchAsync() {
      const goodreadsData = await fetchGoodreads()
      setGoodreads({
        items: goodreadsData.items,
        error: goodreadsData.error
      })

      fetchLetterboxd()
    }

    fetchAsync()
  }, [])

  useEffect(() => {
    console.log(goodreads)
  }, [goodreads])

  return (
    !goodreads.error
      ? <>
          {/* {feed.items.map((el, i) => {
            let stars = el.title.split(" - ")[el.title.split(" - ").length - 1]
            // console.log(stars)

            return (
              <p key={i} style={{color:"white"}}>{stars}</p>
            )
          })} */}

          {!goodreads.error
          ? 
          goodreads.items?.map((el, i) => {
            let stars = el.title.split(" - ")[el.title.split(" - ").length - 1]
            // console.log(stars)

            return (
              <p key={i} style={{color:"white"}}>{stars}</p>
            )
          })
          : ""}
        </>

      : <h1 style={{color:"white"}}>loading...</h1>
  )
}
