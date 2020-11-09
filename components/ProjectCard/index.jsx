import React, { lazy } from 'react'
import Image from 'next/image'

import {
  ProjectCardWrapper,
  // Image,
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
      <div
        className="project-card__image-wrapper"
      >
        <Image
          className="project-card__image"
          src={image}
          alt={name}
          layout="responsive"
          width="2"
          height="1"
          loading="lazy"
        />
      </div>

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