import { FavoriteMovies } from 'content/data/favorite-movies';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(FavoriteMovies));
}
