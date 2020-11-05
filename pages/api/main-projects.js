import { Projects } from './data/main-projects'

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(JSON.stringify(Projects))
}