import { convertIntToStars, convertRecentDateFormat } from 'libs/utils';

export const getGoodreads = async () => {
  const data: Activities = {
    items: [],
    isError: false,
  };

  try {
    const feed = await fetch('/api/goodreads/').then((res) => res.json());
    const items = feed.items.splice(0, 4);

    items.map((el) => {
      const html = document.createElement('html');
      html.innerHTML = el.content;

      data.items.push({
        image: el['book_large_image_url'],
        link: el['link'],
        title: el['title'],
        rating: convertIntToStars(el['user_rating']),
        date: convertRecentDateFormat(el['user_read_at']),
      });
    });
  } catch (error) {
    data.isError = true;
  }

  return data;
};

export const getLetterboxd = async () => {
  const data: Activities = {
    items: [],
    isError: false,
  };

  try {
    const feed = await fetch('/api/letterboxd/').then((res) => res.json());
    const items = feed.items.splice(0, 4);

    items.map((el) => {
      const html = document.createElement('html');
      html.innerHTML = el.content;

      data.items.push({
        image: html.getElementsByTagName('img')[0].src,
        link: el['link'],
        title: el['letterboxd:filmTitle'],
        rating: convertIntToStars(el['letterboxd:memberRating']),
        date: convertRecentDateFormat(el['letterboxd:watchedDate']),
      });
    });
  } catch (error) {
    data.isError = true;
  }

  return data;
};
