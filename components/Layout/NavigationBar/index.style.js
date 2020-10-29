import styled from 'styled-components';

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
  font-family: 'San Francisco Pro Bold';

  & ul.nav-items {
    display: flex;
    list-style-type: none;

    & li.nav-items__nav-item {
      margin-left: 50px;
      letter-spacing: 1px;
    }
  }
`