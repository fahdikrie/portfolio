import { Solos } from 'content/data/solos';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(Solos));
}
