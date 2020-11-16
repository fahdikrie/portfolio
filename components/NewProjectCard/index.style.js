import styled from 'styled-components'

export const ProjectCardWrapper = styled.div`
  width: 100%;
  position: relative;
  color: white;

  & .project-card__image {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  height: calc(100% - 10%);
  width: calc(100.1% - 10%);
  padding: 5%;
  border-radius: 10px;

  transition: backdrop-filter 0.2s ease-in;
  backdrop-filter: blur(0px);

  &:hover {
    backdrop-filter: blur(30px);
  }
`


export const Title = styled.h3`
  margin: 10px 0;

  font-family: 'San Francisco Pro Black';
  font-size: calc(1rem + 2vw);

  @media (max-width: 1200px) {
    font-size: calc(1rem + 1.35vw);
  }

  @media (max-width: 900px) {
    font-size: calc(1rem + 1vw);
  }

  @media (max-width: 768px) {
    font-size: calc(1rem + 4vw);
  }

  @media (max-width: 525px) {
    margin: 5px 0;
    font-size: calc(1rem + 3vw);
  }

  @media (max-width: 380px) {
    font-size: calc(1rem + 2vw);
  }
`

export const Time = styled.h5`
  margin: 5px 0;

  font-family: 'San Francisco Pro Bold';
  font-size: calc(1rem + 0.25vw);
  font-style: italic;

  @media (max-width: 1200px) {
    font-size: calc(0.9rem + 0.15vw);
  }

  @media (max-width: 900px) {
    font-size: calc(0.75rem + 0.1vw);
  }

  @media (max-width: 768px) {
    font-size: calc(1rem + 0.5vw);
  }

  @media (max-width: 525px) {
    font-size: calc(0.9rem + 0.15vw);
  }

  @media (max-width: 380px) {
    font-size: calc(0.5rem + 0.1vw);
  }
`

export const Desc = styled.p`

`

export const Stacks = styled.p`

`