import tw, { styled } from 'twin.macro';

export const Favorites = tw.div`
  w-full h-full
`;

export const Header = tw.h2`
  mb-0
  text-left
  text-white font-black
  text-sm-header md:text-md-header lg:text-header
`;

export const SubHeader = styled.h3`
  ${tw`
    mb-20
    text-left
    font-normal
    z-20 relative
    text-white opacity-70
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
    text-white
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
      ${tw`bg-purple-900 px-2 rounded opacity-100`}
    }
  }
`;
