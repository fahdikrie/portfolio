import { useEffect, useState } from 'react'

import {
  fetchGoodreads,
  fetchLetterboxd
} from 'utils/selectors'
import Recents from './recents'
import * as S from './index.style'

interface Data {
  items: any[] | any
  error: boolean | any
}

const Activities = (): JSX.Element => {
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

  useEffect((): boolean | any => {
    let mounted = true

    async function fetchAsync() {
      const goodreadsData: Data = await fetchGoodreads()
      const letterboxdData: Data = await fetchLetterboxd()

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
    <S.Activities>
      <S.RecentsWrapper>
        <Recents
          data={goodreads.items}
          loading={goodreads.loading}
          link="https://www.goodreads.com/review/list/100267901?shelf=read"
          title="reads"
        />
        <Recents
          data={letterboxd.items}
          loading={letterboxd.loading}
          link="https://letterboxd.com/fahdikrie/films/diary/"
          title="watches"
        />
      </S.RecentsWrapper>
    </S.Activities>
  )
}

export default Activities