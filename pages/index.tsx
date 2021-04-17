import Index from 'components/index'
import {
  fetchMainProjects
} from 'utils/selectors'

const Home = (): JSX.Element => {
  const { mainProjects } = fetchMainProjects('/api/main-projects')

  return (
    <>
      <Index />
    </>
  )
}

export default Home