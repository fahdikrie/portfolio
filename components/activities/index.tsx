import { useEffect, useState } from 'react';

import {
  fetchGoodreads,
  fetchLetterboxd,
} from 'libs/selectors';
import fetcher from 'libs/fetcher'

import Recents from './recents';
import Favorites from './favorites';
import * as S from './index.style';

interface Data {
  items: any[] | any;
  isError: boolean | any;
}

const Activities = (): JSX.Element => {
  const [goodreads, setGoodreads] = useState({
    items: [],
    isError: false,
    isLoading: true,
  });

  const [letterboxd, setLetterboxd] = useState({
    items: [],
    isError: false,
    isLoading: true,
  });

  const { data: favoriteBooks } = fetcher('/api/favorite-books');
  const { data: favoriteMovies } = fetcher('/api/favorite-movies');

  useEffect((): boolean | any => {
    let mounted = true;

    async function fetchAsync() {
      const goodreadsData: Data = await fetchGoodreads();
      const letterboxdData: Data = await fetchLetterboxd();

      if (mounted) {
        setGoodreads({
          items: goodreadsData.items,
          isError: goodreadsData.isError,
          isLoading: false,
        });
        setLetterboxd({
          items: letterboxdData.items,
          isError: letterboxdData.isError,
          isLoading: false,
        });
      }
    }

    fetchAsync();
    return () => (mounted = false);
  }, []);

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
          link="https://www.goodreads.com/review/list/100267901?shelf=read&sort=date_added"
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
          data={favoriteMovies}
          type="movie"
        />
        <Favorites
          header="badi's fav 📚"
          subheader="I haven't read that much book, so, yeah."
          data={favoriteBooks}
          type="book"
        />
      </S.FavoritesWrapper>
    </S.Activities>
  );
};

export default Activities;
