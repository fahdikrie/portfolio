import { FavoriteBooks } from 'data/favorite-books-data';

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(JSON.stringify(FavoriteBooks));
}
