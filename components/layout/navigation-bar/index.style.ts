import tw, { styled } from 'twin.macro';

interface ItemProps {
  isActive: boolean;
}

export const Wrapper = tw.div`
  absolute z-10
  w-full h-full
  2xl:block 2xl:mx-auto
`;

export const Items = tw.ul`
  px-12 md:px-16 xl:px-32
  py-16 md:py-24
  w-full
  flex flex-row justify-end
`;

export const Item = styled.li<ItemProps>`
  ${tw`
    my-10
    font-bold
    tracking-wide
    cursor-pointer
    text-gunmetal dark:text-white
    ml-16 md:ml-24 xl:ml-32
    opacity-70 hover:opacity-95
    text-sm-small md:text-md-small lg:text-small
  `}

  ${(props) =>
    props.isActive
      ? tw`
        opacity-95
        hidden md:block
      `
      : ''}
`;

export const Socials = tw.div`
  absolute md:fixed
  // uncomment this to implement fixed layout
  md:2xl:max-width[1920px]
  w-full
  px-12 md:px-16
  py-16 md:py-32
  flex md:flex-col
  md:bottom-0
`;

export const Social = tw.img`
  inline z-50
  cursor-pointer
  w-24 md:w-28 lg:w-32
  mr-12 md:mr-0
  mt-0 md:mt-12
  opacity-70 hover:opacity-100
`;
