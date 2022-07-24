import tw, { styled } from 'twin.macro';

import { SSocialItem } from '@/components/elements/SocialItem';

export const Navbar = tw.nav`
  absolute
  w-full h-full
  2xl:block 2xl:mx-auto
`;

export const Items = tw.ul`
  px-12 md:px-16 xl:px-32
  py-16 md:py-24
  w-full
  flex flex-row justify-end
`;

export const Socials = tw.div`
  absolute md:fixed z-10
  // uncomment this to implement fixed layout
  md:2xl:max-width[1920px]
  px-12 md:px-16
  py-16 md:py-32
  flex md:flex-col
  items-start
  md:bottom-0
`;

export const ThemeButton = styled(SSocialItem).attrs({ as: 'button' })<{
  isLightTheme: boolean;
}>`
  ${tw`
      border-radius[50%]
      h-24 md:h-28 lg:h-32
      scale-100 hover:scale-105
      overflow-hidden
      relative

      mt-2 md:mt-0
      mb-0 md:mb-5

      transition-all
      ease-in-out
      border[3px solid]
      active:border[2px solid]

      after:(
        w-1/2
        h-full
        top-0 right-0
        absolute
        outline-none

        text-transparent
        content['-']
      )

      focus:outline-none
      hover:outline-none
      active:outline-none
      -webkit-tap-highlight-color[transparent]
    `}

  ${(props) =>
    props.isLightTheme
      ? tw`bg-gunmetal border-gunmetal after:bg-seashell`
      : tw`bg-seashell border-seashell after:bg-black`}
`;
