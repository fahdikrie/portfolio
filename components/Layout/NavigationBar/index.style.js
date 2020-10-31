import styled from 'styled-components'
import { fallbackFonts } from 'public/fonts/fonts'


export const NavSocialsWrapper = styled.div`
  & {
    position: fixed;
    bottom: 40px;
    left: 20px;

    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & img {
      width: 30px;
      filter: opacity(0.75);
      cursor: pointer;

      &:hover {
        filter: opacity(1);
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
      }

      &.nav-socials__nav-social.github {
        width: 35px;
      }
    }
  }
`

export const NavItemsWrapper = styled.ul`
   & {
    display: flex;
    list-style-type: none;
    font-size: 1.1rem;
    padding: 0;

    & li.nav-items__nav-item {
      margin-left: 50px;
      letter-spacing: 1px;
      filter: opacity(0.75);
      cursor: pointer;

      &:hover {
        filter: opacity(1);
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
      }
    }
  }
`

export const NavWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  width: calc(100% - 6%);
  padding: 15px 3%;

  color: white;
  font-family: 'San Francisco Pro Bold', ${fallbackFonts};

  @media (min-width: 1660px) {
    width: calc(100% - 6%);
    padding: 35px 3%;

    & ${NavSocialsWrapper} {
      height: 120px;
      bottom: 60px;
      left: 30px;

      & img {
        width: 45px;

        &.nav-socials__nav-social.github {
          width: 50px;
        }
      }
    }

    & ${NavItemsWrapper} {
      font-size: 1.65rem;

      & li.nav-items__nav-item {
        margin-left: 70px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 10px 3%;
    justify-content: space-between;

    & ${NavSocialsWrapper} {
      position: static;
      flex-direction: row;
      justify-content: space-between;

      height: fit-content;
      width: 60px;

      & img {
        width: calc(1rem * 1.5);

        &.nav-socials__nav-social.github {
          width: calc(1rem * 1.5);
        }
      }
    }

    & ${NavItemsWrapper} {
      & li.nav-items__nav-item {
        margin-left: 30px;
      }
    }
  }

  @media (max-width: 525px) {
    padding: 10px 3%;

    & ${NavItemsWrapper} {
      font-size: 1rem;

      & li.nav-items__nav-item {
        margin-left: 17.5px;
      }
    }
  }

  @media (max-width: 376px) {
    & ${NavItemsWrapper} {
      font-size: 0.9rem;

      & li.nav-items__nav-item {
        margin-left: 12.5px;
      }
    }
  }

  @media (max-width: 330px) {
    & ${NavSocialsWrapper} {
      width: 57.5px;
    }

    & ${NavItemsWrapper} {
      font-size: 0.75rem;
    }
  }
`