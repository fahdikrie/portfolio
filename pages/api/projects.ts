import { Projects } from 'content/data/projects';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(Projects));
}
