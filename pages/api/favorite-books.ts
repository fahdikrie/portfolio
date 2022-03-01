import { FavoriteBooks } from 'content/data/favorite-books';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(FavoriteBooks));
}
