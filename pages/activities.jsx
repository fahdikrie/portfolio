import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import PosterCard from 'components/PosterCard'
import {
  fetchGoodreads,
  fetchLetterboxd
} from 'utils/selectors'
import {
  ActivitiesWrapper,
  PosterCardsContainer,
  PosterCardsWrapper
} from 'styles/activities.style'

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
        <ActivitiesWrapper>
          <PosterCardsContainer>
            <PosterCardsWrapper
              className="goodreads-cards-wrapper"
            >
              {!goodreads.loading || !goodreads.items
                ? !goodreads.error
                    ? goodreads.items.map((el, i) => {

                      return (
                        <PosterCard
                          key={i}
                          image={el.image}
                          link={el.link}
                          title={el.title}
                          rating={el.rating}
                          date={el.date}
                        />
                      )
                    })
                    : <p style={{color: "white"}}>there seem to be errors on goodreads end</p>
                : <h1 style={{color: "white"}}>loading...</h1>}
            </PosterCardsWrapper>

            <PosterCardsWrapper
              className="letterboxd-cards-wrapper"
            >
              {!letterboxd.loading || !letterboxd.items
                ? !letterboxd.error
                    ? letterboxd.items.map((el, i) => {

                      return (
                        <PosterCard
                          key={i}
                          image={el.image}
                          link={el.link}
                          title={el.title}
                          rating={el.rating}
                          date={el.date}
                        />
                      )
                    })
                    : <p style={{color: "white"}}>there seem to be errors on letterboxd end</p>
                : <h1 style={{color: "white"}}>loading...</h1>}
            </PosterCardsWrapper>
          </PosterCardsContainer>
        </ActivitiesWrapper>
      </Layout>
    </>
  )
}
