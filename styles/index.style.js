import styled from 'styled-components'

export const HomepageWrapper = styled.div`
  position: relative;
  width: 100%;

  & .title-section {
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
      font-size: 3.5rem;
    }

    @media (max-width: 1024px) {
      font-size: 3rem;
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


`

export const Heading = styled.h1`
  color: white;
  margin: 0;
`