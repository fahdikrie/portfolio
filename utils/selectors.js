import useSWR from "swr"

const fetcher = url => fetch(url).then(res => res.json())

export const fetchMainProjects = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const { data: mainProjects, error } = useSWR(path, fetcher)

  return { mainProjects, error }
}