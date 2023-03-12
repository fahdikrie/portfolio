import Hero from './Hero';
import { default as ProjectList } from './Projects';
import * as S from './index.style';

const Projects = (): JSX.Element => (
  <S.Projects>
    <Hero />
    <ProjectList />
  </S.Projects>
);

export default Projects;
