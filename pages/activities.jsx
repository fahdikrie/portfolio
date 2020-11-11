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
  PosterCardsWrapper,
  PostersTitle,
  PostersLoading,
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
              className="goodreads-cards"
              loading={goodreads.loading}
            >
              <div className="goodreads-cards__header">
                <PostersTitle>
                  <span>badi's recent reads<span className="purple">*</span></span>

                  <span className="link"><a href="https://www.goodreads.com/review/list/100267901?shelf=read" target="_blank">see more<span className="purple">!</span></a></span>
                </PostersTitle>

                <hr/>
              </div>

              <div className="goodreads-cards__cards">
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
                  : <PostersLoading>
                      <h5>loading...</h5>
                    </PostersLoading>}
              </div>
            </PosterCardsWrapper>

            <PosterCardsWrapper
              className="letterboxd-cards"
              loading={letterboxd.loading}
            >
              <div className="letterboxd-cards__header">
              <PostersTitle>
                <span>badi's recent movies<span className="purple">*</span></span>

                <span className="link"><a href="https://letterboxd.com/fahdikrie/films/diary/" target="_blank">see more<span className="purple">!</span></a></span>
              </PostersTitle>

                <hr/>
              </div>

              <div className="letterboxd-cards__cards">
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
                  : <PostersLoading>
                      <h5>loading...</h5>
                    </PostersLoading>}
              </div>
            </PosterCardsWrapper>
          </PosterCardsContainer>
        </ActivitiesWrapper>
      </Layout>
    </>
  )
}
