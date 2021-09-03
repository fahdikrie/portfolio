import Title from './title'
import About from './about'
import Projects from './projects'
import Solos from './solos'
import Contacts from './contacts'
import * as S from './index.style'

const Index = (): JSX.Element => (
  <S.Index>
    <Title />
    <About />
    <Projects />
    <Solos />
    <Contacts />
  </S.Index>
)

export default Index