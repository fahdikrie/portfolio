import { Projects } from 'content/data/projects-data';

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(Projects));
}
