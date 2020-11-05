import styled from 'styled-components'

export const HomepageWrapper = styled.div`
  position: relative;
  width: 100%;
  color: white;

  & div.title-section {
    width: calc(100% - 8%);
    height: 100vh;
    padding-left: 8%;

    display: flex;
    align-items: center;

    font-size: 3rem;

    @media (min-width: 1660px) {
      font-size: 5rem;
    }

    @media (max-width: 1440px) {
      font-size: 3rem;
    }

    @media (max-width: 1024px) {
      font-size: 2.75rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 525px) {
      font-size: 2.25rem;
    }

    @media (max-width: 350px) {
      font-size: 2rem;
    }
  }

  & div.about-section {
    width: calc(55% - 8%);
    padding-left: 8%;

    font-size: 1.15rem;
    line-height: 2;
    letter-spacing: 1px;

    @media (min-width: 1660px) {
      font-size: 2rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      width: calc(85% - 8%);
    }

    @media (max-width: 525px) {
      font-size: 0.95rem;
      line-height: 1.75;
      letter-spacing: normal;
    }
  }
`

export const Heading = styled.h1`
  margin: 0;
`

export const Paragraph = styled.p`
  font-family: 'San Francisco Pro Regular';
`