import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Layout from 'components/Layout'
import Loading from 'components/Loading'
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
  PostersError
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
    let mounted = true

    async function fetchAsync() {
      const goodreadsData = await fetchGoodreads()
      const letterboxdData = await fetchLetterboxd()

      if (mounted) {
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
    }

    fetchAsync()
    return () => mounted = false
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
              loading={goodreads.loading ? 1 : 0}
              error={goodreads.error ? 1 : 0}
            >
              <div className="goodreads-cards__header">
                <PostersTitle>
                  <span>badi's recent reads<span className="purple">*</span></span>

                  <span className="link"><a href="https://www.goodreads.com/review/list/100267901?shelf=read" target="_blank">see more</a></span>
                </PostersTitle>
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
                      : <PostersError>
                          <h5>
                            whoops! <br/><br/>
                            there seem to be errors on goodreads's end 🤔
                          </h5>
                        </PostersError>
                  : <PostersLoading>
                      <Loading/>
                    </PostersLoading>}
              </div>
            </PosterCardsWrapper>

            <PosterCardsWrapper
              className="letterboxd-cards"
              loading={letterboxd.loading ? 1 : 0}
              error={letterboxd.error ? 1 : 0}
            >
              <div className="letterboxd-cards__header">
                <PostersTitle>
                  <span>badi's recent watches<span className="purple">*</span></span>

                  <span className="link"><a href="https://letterboxd.com/fahdikrie/films/diary/" target="_blank">see more</a></span>
                </PostersTitle>
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
                      : <PostersError>
                          <h5>
                            whoops! <br/><br/>
                            there seem to be errors on letterboxd's end 🤔
                          </h5>
                        </PostersError>
                  : <PostersLoading>
                      <Loading/>
                    </PostersLoading>}
              </div>
            </PosterCardsWrapper>
          </PosterCardsContainer>

          
        </ActivitiesWrapper>
      </Layout>
    </>
  )
}
