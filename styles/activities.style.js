import styled from 'styled-components'

export const ActivitiesWrapper = styled.div`
  width: calc(100% - 16%);
  padding: 100px 8% 0;

  @media (min-width: 1920px) {
    padding-top: 200px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 10%);
    padding: 80px 5% 0;
  }
`
export const PosterCardsContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;

  @media (min-width: 1920px) {
    grid-gap: 100px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }
`
export const PosterCardsWrapper = styled.div`
  & .goodreads-cards__header,
  & .letterboxd-cards__header {
    width: calc(100% - 4px);
    margin: 0 auto;

    & hr {
      background-color: white;
      height: 0.1px;
      border: none;

      filter: opacity(75%);
    }
  }

  & .goodreads-cards__cards,
  & .letterboxd-cards__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`

export const PostersTitle = styled.h6`
  margin: 0;
  color: white;
  filter: opacity(75%);

  font-size: calc(0.5rem + 0.5vw);
  font-family: 'San Francisco Pro Light';
  letter-spacing: 2px;

  display: flex;
  justify-content: space-between;

  & .link {
    text-decoration: underline;
    cursor: pointer;
  }

  & .purple {
    color: #BB19BB;
  }

  @media (max-width: 768px) {
    letter-spacing: 1px;
  }
`