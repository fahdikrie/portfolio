import styled from 'styled-components'
import { fallbackFonts } from 'public/fonts/fonts'


export const NavSocialsWrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 20px;

  height: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    width: 30px;
    cursor: pointer;
    filter: opacity(0.75);

    /* backface-visibility: hidden;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased; */

    &:hover {
      filter: opacity(1);

      /* backface-visibility: hidden;
      -webkit-font-smoothing: subpixel-antialiased;
      transform: translateZ(0);

      transform: scale(1.1);
      -webkit-transform: scale(1.1); */

      zoom: 1.05;
    }

    &.nav-socials__nav-social.github {
      width: 35px;
    }
  }
`

export const NavItemsWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 1rem 0px;

  & li.nav-items__nav-item {
    margin-left: 50px;
    letter-spacing: 1px;
    color: rgb(191, 191, 191);
    cursor: pointer;

    &:hover {
      color: white;
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }
  }

  @media (max-width: 525px) {
    margin: 14px 0px;
  }

  @media (max-width: 325px) {
    margin: 12px 0px;
  }
`

export const NavItem = styled.li`
  margin: 0;
  font-family: 'San Francisco Pro Bold', ${fallbackFonts};
  font-size: calc(1rem + 0.1vw);

  @media (min-width: 1920px) {
    font-size: calc(1rem + 0.5vw);
  }

  @media (max-width: 525px) {
    font-size: calc(0.85rem + 0.1vw);
  }

  @media (max-width: 325px) {
    font-size: calc(0.75rem + 0.1vw);
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

  @media (min-width: 1920px) {
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
      & li.nav-items__nav-item {
        margin-left: 17.5px;
      }
    }
  }

  @media (max-width: 376px) {
    & ${NavItemsWrapper} {
      & li.nav-items__nav-item {
        margin-left: 12.5px;
      }
    }
  }

  @media (max-width: 330px) {
    & ${NavSocialsWrapper} {
      width: 57.5px;
    }
  }
`