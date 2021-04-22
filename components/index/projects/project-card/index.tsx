import Image from 'next/image'

import * as S from './index.style'

interface ProjectCardProps {
  image: string
  name: string
  time: string
  overlay: string
}

const ProjectCard = ({
  image,
  name,
  time,
  overlay
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
    >
      <S.Name>{name}</S.Name>
      <S.Time>{time}</S.Time>
    </S.Overlay>
  </S.ProjectCard>
)

export default ProjectCard