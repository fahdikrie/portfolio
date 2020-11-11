import React, { useEffect, useState } from 'react'
import Head from 'next/head'

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

      const letterboxdData = await fetchLetterboxd()
      setLetterboxd({
        items: letterboxdData.items,
        error: letterboxdData.error
      })
    }

    fetchAsync()
  }, [])

  return (
    <>
      <div>
        {goodreads.items
          ? !goodreads.error
              ? goodreads.items.map((el, i) => {

                return (
                  <>
                    <img src={el.image} alt={i} width="150px"/>
                    <p style={{color: "white"}}>{el.title}</p>
                  </>
                )
              })
              : <p style={{color: "white"}}>"there seem to be errors on goodreads end"</p>
          : <p style={{color: "white"}}>"loading"</p>}
      </div>

      <div>
        {letterboxd.items
          ? !letterboxd.error
              ? letterboxd.items.map((el, i) => {

                return (
                  <>
                    <img src={el.image} alt={i} width="150px"/>
                    <p style={{color: "white"}}>{el.title}</p>
                  </>
                )
              })

              : <p>"there seem to be errors on goodreads end"</p>
          : <p>"loading"</p>}
      </div>
    </>
  )
}
