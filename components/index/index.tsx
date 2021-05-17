import Title from './title'
import About from './about'
import Projects from './projects'
import Solo from './solos'
import * as S from './index.style'

const Index = (): JSX.Element => (
  <S.Index>
    <Title />
    <About />
    <Projects />
    <Solo />
  </S.Index>
)

export default Index