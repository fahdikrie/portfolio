import { FavoriteMovies } from 'content/data/favorite-movies-data';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(FavoriteMovies));
}
