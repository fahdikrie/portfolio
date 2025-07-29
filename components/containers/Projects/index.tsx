import Hero from './Hero';
import * as S from './index.style';
import ProjectList from './ProjectList';

const Projects = (): JSX.Element => (
  <S.Projects>
    <Hero />
    <ProjectList />
  </S.Projects>
);

export default Projects;
