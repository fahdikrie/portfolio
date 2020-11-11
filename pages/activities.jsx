import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import RSSParser from 'rss-parser'

import Layout from 'components/Layout/index';

export default function Activities() {
  const [feed, setFeed] = useState({ title: '', items: [] })

  const rssData = async () => {
    const CORS_PROXY = "https://cors.bbbadi.tech/"
    let parser = new RSSParser();

    try {
      const feed = await parser.parseURL(`${CORS_PROXY}https://letterboxd.com/fahdikrie/rss/`)
      setFeed(feed)
      console.log(feed)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    rssData()
  }, [])

  return (
    feed
      ? <>
            {feed.items.map((el, i) => {
              let stars = el.title.split(" - ")[el.title.split(" - ").length - 1]
              console.log(stars)

              return (
                <p key={i} style={{color:"white"}}>{stars}</p>
              )
            })}
        </>

      : <h1 style={{color:"white"}}>loading...</h1>
  )
}
