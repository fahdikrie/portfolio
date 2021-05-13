import Image from 'next/image'

import * as S from './index.style'

interface ProjectCardProps {
  image: string
  name: string
  time: string
  overlay: string
  color: string
}

const ProjectCard = ({
  image,
  name,
  time,
  overlay,
  color
}: ProjectCardProps): JSX.Element => (
  <S.ProjectCard>
    <Image
      src={image}
      alt={name}
      layout="responsive"
      width="1"
      height="1"
      loading="eager"
    />

    <S.Overlay
      overlay={overlay}
      color={color}
    >
      <S.Name dangerouslySetInnerHTML={{__html: name}} />
      <S.Time dangerouslySetInnerHTML={{__html: time}} />
    </S.Overlay>
  </S.ProjectCard>
)

export default ProjectCard