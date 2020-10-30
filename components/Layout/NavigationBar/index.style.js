import styled from 'styled-components'
import { fallbackFonts } from 'public/fonts/fonts'

export const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  padding: 0px 3%;
  width: calc(100% - 6%);
  height: 10vh;

  color: white;
  font-family: 'San Francisco Pro Bold', ${fallbackFonts};

  & ul.nav-items {
    display: flex;
    list-style-type: none;
    font-size: 1rem;

    & li.nav-items__nav-item {
      margin-left: 50px;
      letter-spacing: 1px;
    }

    @media (min-width: 1660px) {
      font-size: 1.65rem;

      & li.nav-items__nav-item {
        margin-left: 70px;
      }
    }

    @media (max-width: 525px) {
      font-size: 1.2rem;

      & li.nav-items__nav-item {
        margin-left: 25px;
      }
    }
  }
`

export const MobileNavWrapper = styled(NavWrapper)`



`