import tw, { styled } from 'twin.macro';
import { ThemeButton } from '../regular/Navbar.style';

export const JournalNavbar = styled.div`
  ${tw`
    absolute md:fixed
    w-screen

    px-12 md:px-16 xl:px-32
    padding-top[calc(16px + 3px)]
    md:padding-top[calc(24px + 3px)]
    pb-16 md:pb-24

    flex justify-between items-center
  `}

  & ${ThemeButton} {
    ${tw`m-0`}
  }
`;
