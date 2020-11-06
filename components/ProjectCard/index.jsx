import React from 'react'
import {
  ProjectCardWrapper,
  Image,
  Title,
  Time,
  Desc,
  Stacks
} from './index.style'

const ProjectCard = ({
  image,
  name,
  time,
  desc,
  stacks
}) => {
  return (
    <ProjectCardWrapper className="project-card">
      <Image
        src={image}
        alt={name}
      />

      <div className="project-card__info">
        <Title>
          {name}
        </Title>

        <Time>
          {time}
        </Time>

        <Desc
          dangerouslySetInnerHTML={{__html: desc}}
        />

        <Stacks>
          {stacks.join(" ⋅ ")}
        </Stacks>
      </div>
    </ProjectCardWrapper>
  )
}

export default ProjectCard