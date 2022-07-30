import Link from 'next/link';
import tw, { styled } from 'twin.macro';

export const SItem = styled.div<NavbarItemStyleProps>`
  ${tw`
    my-10 z-10
    font-bold
    tracking-wide
    cursor-pointer
    text-gunmetal dark:text-white
    ml-16 md:ml-24 xl:ml-32
    opacity-70 hover:opacity-95
    text-md-small lg:text-small
  `}

  ${(props) =>
    props.isActive
      ? tw`
        opacity-95
        hidden md:block
      `
      : ''}
`;

const NavbarItem = ({ currentPage, href, text }: NavbarItemProps) => (
  <SItem isActive={currentPage == href}>
    <Link href={href}>{text}</Link>
  </SItem>
);

export default NavbarItem;
