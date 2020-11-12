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
                      : <PostersError>
                          <h5>
                            whoops! <br/><br/>
                            there seem to be errors on goodreads's end 🤔
                          </h5>
                        </PostersError>
                  : <PostersLoading>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="24px" height="30px" viewBox="0 0 24 30" style={{"enableBackground":"new 0 0 50 50"}} xmlSpace="preserve">
                        <rect x="0" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                        <rect x="10" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                        <rect x="20" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                      </svg>
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
                      : <PostersError>
                          <h5>
                            whoops! <br/><br/>
                            there seem to be errors on letterboxd's end 🤔
                          </h5>
                        </PostersError>
                  : <PostersLoading>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="24px" height="30px" viewBox="0 0 24 30" style={{"enableBackground":"new 0 0 50 50"}} xmlSpace="preserve">
                        <rect x="0" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                        <rect x="10" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                        <rect x="20" y="13" width="4" height="5" fill="purple">
                          <animate attributeName="height" attributeType="XML"
                            values="5;21;5" 
                            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                          <animate attributeName="y" attributeType="XML"
                            values="13; 5; 13"
                            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                        </rect>
                      </svg>
                    </PostersLoading>}
              </div>
            </PosterCardsWrapper>
          </PosterCardsContainer>
        </ActivitiesWrapper>
      </Layout>
    </>
  )
}
