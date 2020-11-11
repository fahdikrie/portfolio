import React from 'react'
import Image from 'next/image'

import {
  PosterCardWrapper,
  Info
} from './index.style'

const PosterCard = ({
  image,
  link,
  title,
  rating,
  date
}) => {

  return (
    <a href={link} target="_blank">
      <PosterCardWrapper>
        <div
          className="poster-card__image-wrapper"
        >
          <Image
            className="poster-card__image"
            src={image}
            alt={title}
            layout="responsive"
            width="2"
            height="3"
            loading="lazy"
          />
        </div>

        <div
          className="poster-card__info"
        >
          <Info>{rating}</Info>
          <Info>{date}</Info>
        </div>
      </PosterCardWrapper>
    </a>
  )
}

export default PosterCard