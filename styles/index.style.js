import styled from 'styled-components'

export const HomepageWrapper = styled.div`
  position: relative;
  width: 100%;
  color: white;
`

export const TitleSection = styled.section`
  width: calc(100% - 8%);
  height: 100vh;
  padding-left: 8%;

  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  margin: 0;
  font-family: 'San Francisco Pro Black';
  font-size: calc(1rem + 5.5vw);

  @media (max-width: 525px) {
    font-size: calc(1rem + 15vw);
  }
`

export const AboutSection = styled.section`
  width: calc(55% - 8%);
  padding-left: 8%;

  line-height: 2;
  letter-spacing: 1.5px;

  @media (max-width: 525px) {
    width: calc(87.5% - 8%);
    line-height: 1.75;
    letter-spacing: 0.5px;
  }
`

export const About = styled.h3`
  font-family: 'San Francisco Pro Light';
  font-size: calc(1rem + 0.3vw);

  @media (min-width: 1920px) {
    font-size: calc(1rem + 0.75vw);
  }
`

export const ProjectsSection = styled.section`
  width: calc(85% - 8%);
  padding-left: 8%;
  margin-top: 20rem;

  & .main-projects-wrapper {
    & .main-projects {
      display: flex;

      & .main-projects__project-card {
        width: calc(100% - 60px);
        padding: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    width: calc(92% - 8%);
    padding-left: 8%;
    margin-top: 10rem;

    & .main-projects-wrapper {
      & .main-projects {
        flex-direction: column;
        justify-content: center;

        & .main-projects__project-card {
          width: calc(100% - 20px);
          padding: 10px;
        }
      }
    }
  }
`

export const Heading = styled.h2`
  margin: 0 0 10px 0;

  font-family: 'San Francisco Pro Black';
  font-size: calc(1rem + 2.5vw);

  @media (max-width: 525px) {
    font-size: calc(1rem + 7.5vw);
  }
`