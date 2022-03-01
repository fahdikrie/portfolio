import { FavoriteBooks } from 'content/data/favorite-books-data';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(FavoriteBooks));
}
