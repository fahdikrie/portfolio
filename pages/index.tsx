import {
  fetchMainProjects
} from 'utils/selectors'

const Home = (): JSX.Element => {
  const { mainProjects } = fetchMainProjects('/api/main-projects')

  return (

  )
}