import { Solos } from 'content/data/solos-data';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(Solos));
}
