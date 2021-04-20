import { fetchMainProjects } from 'utils/selectors'
import Title from './title'
import About from './about'
import ProjectsCollab from './projects-collab'
import * as S from './index.style'

const Index = (): JSX.Element => {
  const { mainProjects } = fetchMainProjects('/api/main-projects')

  return (
    <S.Index>
      <Title />
      <About />
      <ProjectsCollab
        projects={mainProjects}
      />
    </S.Index>
  )
}

export default Index