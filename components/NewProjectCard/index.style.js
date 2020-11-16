import styled from 'styled-components'

export const ProjectCardWrapper = styled.div`
  width: 100%;
  position: relative;
  color: white;
  overflow: hidden;

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

  overflow: hidden;
  border-radius: 0.5vw;

  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0px);

  -webkit-transition: background-color 1s ease-in-out, backdrop-filter 0.5s linear;
  -moz-transition: background-color 1s ease-in-out, backdrop-filter 0.5s linear;
  -o-transition: background-color 1s ease-in-out, backdrop-filter 0.5s linear;
  transition: background-color 1s ease-in-out, backdrop-filter 0.5s linear;

  &:hover {
    background-color: ${props => props.overlay};
    backdrop-filter: blur(10px);
  }

  & .overlay__hidden {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  &:hover .overlay__hidden {
    opacity: 1;
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
  width: 95%;
  margin: 20px 0 5px;
  line-height: 2;
  letter-spacing: 0.5px;

  font-family: 'San Francisco Pro Light';
  font-size: calc(1rem + 0.25vw);

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
    font-size: calc(0.9rem + 0.35vw);
  }

  @media (max-width: 380px) {
    font-size: calc(0.5rem + 0.3vw);
  }
`

export const Stacks = styled.p`
  width: 95%;
  margin: 10px 0;
  line-height: 1.5;
  letter-spacing: 0.5px;

  font-family: 'San Francisco Pro Light';
  font-size: calc(1rem + 0.25vw);

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
    font-size: calc(0.9rem + 0.25vw);
  }

  @media (max-width: 380px) {
    font-size: calc(0.5rem + 0.2vw);
  }
`