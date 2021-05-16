import { useEffect, useState } from 'react'

import {
  fetchFavoriteBooks,
  fetchFavoriteMovies,
  fetchGoodreads,
  fetchLetterboxd
} from 'utils/selectors'
import Recents from './recents'
import Favorites from './favorites'
import * as S from './index.style'

interface Data {
  items: any[] | any
  isError: boolean | any
}

const Activities = (): JSX.Element => {
  const [goodreads, setGoodreads] = useState({
    items: [],
    isError: false,
    isLoading: true,
  })

  const [letterboxd, setLetterboxd] = useState({
    items: [],
    isError: false,
    isLoading: true,
  })

  const { favoriteMovies } = fetchFavoriteMovies('/api/favorite-movies')
  const { favoriteBooks } = fetchFavoriteBooks('/api/favorite-books')

  useEffect((): boolean | any => {
    let mounted = true

    async function fetchAsync() {
      const goodreadsData: Data = await fetchGoodreads()
      const letterboxdData: Data = await fetchLetterboxd()

      if (mounted) {
        setGoodreads({
          items: goodreadsData.items,
          isError: goodreadsData.isError,
          isLoading: false,
        })
        setLetterboxd({
          items: letterboxdData.items,
          isError: letterboxdData.isError,
          isLoading: false,
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
          data={letterboxd.items}
          link="https://letterboxd.com/fahdikrie/films/diary/"
          title="watches"
          service="letterboxd"
          isError={letterboxd.isError}
          isLoading={letterboxd.isLoading}
        />
        <Recents
          data={goodreads.items}
          link="https://www.goodreads.com/review/list/100267901?shelf=read"
          title="reads"
          service="goodreads"
          isError={goodreads.isError}
          isLoading={goodreads.isLoading}
        />
      </S.RecentsWrapper>
      <S.FavoritesWrapper>
        <Favorites
          header="badi's fav 🎬"
          subheader="Top 20 movies, in no particular order."
          link="https://letterboxd.com/fahdikrie/films/diary/"
          data={favoriteMovies}
          type="movie"
        />
        <Favorites
          header="badi's fav 📚"
          subheader="I haven't read that much book, so, yeah."
          link="https://www.goodreads.com/review/list/100267901?shelf=read"
          data={favoriteBooks}
          type="book"
        />
      </S.FavoritesWrapper>
    </S.Activities>
  )
}

export default Activities