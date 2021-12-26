import tw, { styled } from 'twin.macro';

export const Favorites = tw.div`
  w-full h-full
`;

export const Header = tw.h2`
  mb-0
  text-left
  font-black
  text-gunmetal dark:text-white
  text-sm-header md:text-md-header lg:text-header
`;

export const SubHeader = styled.h3`
  ${tw`
    mb-20
    text-left
    opacity-70
    font-normal
    z-20 relative
    text-gunmetal dark:text-white
    text-sm-large md:text-small lg:text-large
  `}

  & a u {
    ${tw`
      cursor-pointer
    `}
  }
`;

export const List = tw.ul`
  ml-28
  z-20 relative
  list-style-type[circle]
`;

export const ListItem = styled.li`
  ${tw`
    mb-10
    text-gunmetal dark:text-white
    text-sm-large md:text-small lg:text-large
  `}

  & a u {
    ${tw`
      cursor-pointer
      font-bold
    `}
  }

  span {
    ${tw`
      opacity-80
      text-sm-small md:text-md-small lg:text-small
    `}

    &.list-item__rating {
      ${tw`
        text-white
        bg-bronze dark:bg-purple-900
        px-2 rounded opacity-100
      `}
    }
  }
`;
