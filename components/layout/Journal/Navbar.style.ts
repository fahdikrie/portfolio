import tw, { styled } from 'twin.macro';
import { ThemeButton } from '../Regular/Navbar.style';

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

  & div {
    ${tw`
      cursor-pointer
      opacity-70 hover:opacity-95
    `}

    & img {
      ${tw`
        w-24 md:w-28 lg:w-32
        h-24 md:h-28 lg:h-32
      `}
    }
  }

  & ${ThemeButton} {
    ${tw`m-0`}
  }
`;
