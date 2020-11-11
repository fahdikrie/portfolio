import styled from 'styled-components'

export const PosterCardWrapper = styled.div`
  width: 100%;
  color: white;

  & .poster-card__image-wrapper .poster-card__image {
    object-fit: cover;
    border-radius: 5px;
  }

  & .poster-card__info {
    display: flex;
    justify-content: space-between
  }
`

export const Info = styled.p`
  filter: opacity(70%);
  font-size: calc(0.1rem + 0.75vw);
  margin: 5px 0 0;

  @media (max-width: 768px) {
    font-size: calc(0.25rem + 1vw);
  }
`