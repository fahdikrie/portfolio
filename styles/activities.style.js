import styled from 'styled-components'

export const ActivitiesWrapper = styled.div`
  width: calc(100% - 16%);
  padding: 100px 8% 0;

  @media (max-width: 768px) {
    width: calc(100% - 10%);
    padding: 100px 5% 0;
  }
`
export const PosterCardsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`
export const PosterCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`