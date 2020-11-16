import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import {
  ProjectCardWrapper,
  Overlay,
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
  console.log(time)

  return (
    <>
      <ProjectCardWrapper>
        <Image
          className="project-card__image"
          src={image}
          alt={name}
          layout="responsive"
          width="1"
          height="1"
          loading="eager"
        />

        <Overlay>
          <Title>{name}</Title>
          <Time>{time}</Time>

          {/* <Desc dangerouslySetInnerHTML={{__html: desc}} /> */}
        </Overlay>
      </ProjectCardWrapper>
    </>
  )
}

export default ProjectCard