import styled from 'styled-components'

export const ProjectCardWrapper = styled.div`
  width: 100%;
  border-radius: 10px;

  backdrop-filter: blur(75px);
  -webkit-backdrop-filter: blur(75px);

  &:hover {
    transform: scale(1.01);
  }

  & .project-card__info {
    width: calc(100% - 20px);
    padding: 10px 10px;
  }

  @media (max-width: 525px) {
    border-radius: 3px;

    & .project-card__info {
      width: calc(100% - 6px);
      padding: 5px 3px;
    }
  }
`

export const Image = styled.img`
  width: calc(100% - 6px);
  border-radius: 10px;
  border: 3px solid transparent;

  @media (max-width: 525px) {
    border-radius: 3px;
  }
`

export const Title = styled.h3`
  margin: 0;
  letter-spacing: 1.5px;

  font-size: calc(1rem + 1vw);
  font-family: 'San Francisco Pro Bold';
  text-align: center;

  @media (min-width: 525px) and (max-width: 768px) {
    font-size: calc(1.2rem + 1.1vw);
  }

  @media (max-width: 525px) {
    letter-spacing: 1px;
    font-size: calc(1rem + 0.85vw);
  }
`

export const Time = styled.h5`
  margin: 10px 0px;

  font-size: calc(0.5rem + 0.5vw);
  font-family: 'San Francisco Pro Bold';
  font-style: italic;
  text-align: center;

  color: #BB19BB;

  @media (min-width: 525px) and (max-width: 768px) {
    font-size: calc(0.75rem + 0.5vw);
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
    font-size: calc(0.65rem + 0.5vw);
  }
`
export const Desc = styled.p`
  margin: 10px 0px;
  line-height: 1.5;
  letter-spacing: 1px;

  font-size: calc(0.5rem + 0.5vw);
  font-family: 'San Francisco Pro Light';
  text-align: justify;
  text-justify: inter-cluster;

  @media (min-width: 525px) and (max-width: 768px) {
    font-size: calc(0.75rem + 0.5vw);
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
    font-size: calc(0.65rem + 0.5vw);
  }
`

export const Stacks = styled.p`
  margin: 0;
  line-height: 1.5;

  font-size: calc(0.5rem + 0.5vw);
  font-family: 'San Francisco Pro Regular';

  @media (min-width: 525px) and (max-width: 768px) {
    font-size: calc(0.75rem + 0.5vw);
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
    font-size: calc(0.65rem + 0.5vw);
  }
`