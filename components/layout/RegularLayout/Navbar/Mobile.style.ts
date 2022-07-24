import tw, { styled } from 'twin.macro';

interface MobileNavbarStyleProps {
  isNavbarOpen: boolean;
}

export const Sidebar = styled.div<MobileNavbarStyleProps>`
  ${tw`
    fixed z-50
    right-0
    width[100vw] h-screen
    bg-red-200
    transition-transform
    backdrop-blur
  `}

  ${(props) =>
    props.isNavbarOpen
      ? tw`translate-x-0 visible`
      : 'visibility: hidden; transform: translateX(100vw);'}
`;

export const Navbar = styled.nav`
  ${tw`
    bg-red-700
    z-40 absolute
    px-24 md:px-64
    py-16 md:py-24
    w-full
  `}
`;

export const Items = tw.ul`
  px-12 md:px-16 xl:px-32
  py-16 md:py-24
  w-full
  flex flex-row justify-end
`;
