import styled from 'styled-components'
import { fallbackFonts } from 'public/fonts/fonts'

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

  & div.nav-socials {
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


  & ul.nav-items {
    display: flex;
    list-style-type: none;
    font-size: 1.1rem;

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

  @media (min-width: 1660px) {
    width: calc(100% - 6%);
    padding: 35px 3%;

    & div.nav-socials {
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

    & ul.nav-items {
      font-size: 1.65rem;

      & li.nav-items__nav-item {
        margin-left: 70px;
      }
    }
  }

  @media (max-width: 525px) {
    padding: 10px 3%;

    & ul.nav-items {
      font-size: 1rem;

      & li.nav-items__nav-item {
        margin-left: 25px;
      }
    }
  }

  @media (max-width: 376px) {
    & ul.nav-items {
      font-size: 0.9rem;

      & li.nav-items__nav-item {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 330px) {
    & ul.nav-items {
      font-size: 0.75rem;
    }
  }
`

export const MobileNavWrapper = styled(NavWrapper)`



`