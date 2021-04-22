import Title from './title'
import About from './about'
import Projects from './projects'
import * as S from './index.style'

const Index = (): JSX.Element => {
  return (
    <S.Index>
      <Title />
      <About />
      <Projects />
    </S.Index>
  )
}

export default Index