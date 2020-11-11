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
    error: false,
    loading: true,
  })

  const [letterboxd, setLetterboxd] = useState({
    items: [],
    error: false,
    loading: true,
  })

  useEffect(() => {
    async function fetchAsync() {
      const goodreadsData = await fetchGoodreads()
      const letterboxdData = await fetchLetterboxd()

      setGoodreads({
        items: goodreadsData.items,
        error: goodreadsData.error,
        loading: false,
      })
      setLetterboxd({
        items: letterboxdData.items,
        error: letterboxdData.error,
        loading: false,
      })
    }

    fetchAsync()
  }, [])

  return (
    <>
      <Layout
        currentPage="activities"
      >
        <div>
          {!goodreads.loading || !goodreads.items
            ? !goodreads.error
                ? goodreads.items.map((el, i) => {

                  return (
                    <div key={i}>
                      <img src={el.image} alt={i} width="150px"/>
                      <p style={{color: "white"}}>{el.rating}</p>
                    </div>
                  )
                })
                : <p style={{color: "white"}}>there seem to be errors on goodreads end</p>
            : <h1 style={{color: "white"}}>loading...</h1>}
        </div>

        <div>
          {!letterboxd.loading || !letterboxd.items
            ? !letterboxd.error
                ? letterboxd.items.map((el, i) => {

                  return (
                    <div key={i}>
                      <img src={el.image} alt={i} width="150px"/>
                      <p style={{color: "white"}}>{el.rating}</p>
                    </div>
                  )
                })

                : <p style={{color: "white"}}>there seem to be errors on letterboxd end</p>
            : <h1 style={{color: "white"}}>loading...</h1>}
        </div>
      </Layout>
    </>
  )
}
