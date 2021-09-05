import {
  getUncompressedURL,
  convertIntToStars,
  convertDateFormat,
} from 'libs/utils';

interface Data {
  items: Item[];
  isError: boolean;
}

interface Item {
  image: string;
  link: string;
  title: string;
  rating: string;
  date: string;
}

export const fetchGoodreads = async () => {
  let data: Data = {
    items: [],
    isError: false,
  };

  try {
    let feed = await fetch('/api/goodreads/').then((res) => res.json());

    for (let i = 0; i < 4; i++) {
      let bookData: Item = {
        image: '',
        link: '',
        title: '',
        rating: '',
        date: '',
      };

      const el = feed.items[i];

      let html = document.createElement('html');
      html.innerHTML = el.content;

      bookData.image = getUncompressedURL(
        html.getElementsByTagName('img')[0].src
      );
      bookData.link = el.link;
      bookData.title = el.title;
      bookData.rating = convertIntToStars(
        el.content.split('<br/>')[5].split(':')[1].trim()
      );
      bookData.date = convertDateFormat(
        html
          .getElementsByTagName('body')[0]
          .innerHTML.split('read at:')[1]
          .split('<br>')[0]
      );

      data.items.push(bookData);
    }
  } catch (error) {
    data.isError = true;
  }

  return data;
};

export const fetchLetterboxd = async () => {
  let data: Data = {
    items: [],
    isError: false,
  };

  try {
    const feed = await fetch('/api/letterboxd/').then((res) => res.json());

    for (let i = 0; i < 4; i++) {
      let movieData: Item = {
        image: '',
        link: '',
        title: '',
        rating: '',
        date: '',
      };

      const el = feed.items[i];

      let html = document.createElement('html');
      html.innerHTML = el.content;

      movieData.image = html.getElementsByTagName('img')[0].src;
      movieData.link = el.link;
      movieData.title = el.title
        .split('-')
        .splice(0, el.title.split('-').length - 1)
        .join('-');
      movieData.rating = el.title
        .split('-')
        [el.title.split('-').length - 1].split(' ')[1];
      movieData.date =
        new Date(el['letterboxd:watchedDate']).toLocaleString('en-us', {
          month: 'short',
        }) +
        ' ' +
        new Date(el['letterboxd:watchedDate']).getDate();

      data.items.push(movieData);
    }
  } catch (error) {
    data.isError = true;
  }

  return data;
};
