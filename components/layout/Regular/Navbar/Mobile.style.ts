import tw, { styled } from 'twin.macro';

interface MobileNavbarStyleProps {
  isNavbarOpen: boolean;
}

export const Sidebar = styled.div<MobileNavbarStyleProps>`
  ${tw`
    bg-seashell dark:bg-black
    z-index[1000] right-0
    fixed

    w-full h-screen
    transition-transform
    ease-in-out
  `}

  ${(props) =>
    props.isNavbarOpen
      ? tw`translate-x-0 visible`
      : 'visibility: hidden; transform: translateX(100vw);'}

  .navbar-items__wrapper {
    ${tw`
      w-full py-24

      flex flex-col
      justify-center items-center
    `}
  }
`;

export const Navbar = styled.nav`
  ${tw`
    z-40 absolute
    px-12 py-16
    w-full

    flex justify-between
    items-center
  `}
`;

export const Items = tw.ul`
  px-12 md:px-16 xl:px-32
  py-16 md:py-24
  w-full
  flex flex-row justify-end
`;

export const Socials = tw.div`
  flex items-start
`;
