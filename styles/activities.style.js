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
      border: 0.1px solid rgb(191, 191, 191);
      border-bottom: 0px;
    }
  }

  & .goodreads-cards__cards,
  & .letterboxd-cards__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    ${props => props.loading ? `grid-template-columns: auto;` : ``}
    ${props => props.error ? `grid-template-columns: auto;` : ``}
  }

  @media (max-width: 525px) {
    & .goodreads-cards__header,
    & .letterboxd-cards__header {
      & hr {
        margin: 5px 0;
      }
    }

    & .goodreads-cards__cards,
    & .letterboxd-cards__cards {
      grid-gap: 3px;
    }
  }
`

export const PostersTitle = styled.h6`
  margin: 0;
  color: white;

  font-size: calc(0.5rem + 0.5vw);
  font-family: 'San Francisco Pro Light';
  letter-spacing: 2px;

  display: flex;
  justify-content: space-between;

  & .link {
    cursor: pointer;
  }

  & .purple {
    color: #BB19BB;
  }

  @media (max-width: 768px) {
    font-size: calc(0.65rem + 0.5vw);
    letter-spacing: 1px;
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
  }
`

export const PostersLoading = styled.div`
  width: calc(100% - 4px);
  height: calc(10vw * 3 / 2);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: rgb(191, 191, 191);

  @media (max-width: 768px) {
    height: calc(23.5vw * 3 / 2);
    letter-spacing: 1px;
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
  }
`

export const PostersError = styled.div`
  width: calc(100% - 4px);
  height: calc(10vw * 3 / 2);
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: rgb(191, 191, 191);

  & h5 {
    width: 100%;
    color: white;

    font-family: 'San Francisco Pro Light';
    font-size: calc(0.55rem + 0.5vw);
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    height: calc(23.5vw * 3 / 2);
    letter-spacing: 1px;
  }

  @media (max-width: 525px) {
    letter-spacing: 0.5px;
  }
`