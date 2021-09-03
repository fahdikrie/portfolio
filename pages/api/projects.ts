import { Projects } from 'data/projects-data'

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(JSON.stringify(Projects))
}