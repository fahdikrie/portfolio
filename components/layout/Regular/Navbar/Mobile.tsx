import NavbarItem from '@/components/elements/NavbarItem';
import { NAVBAR_ITEMS } from './constants';
import * as S from './Mobile.style';

const Navbar = ({ currentPage }: NavbarProps) => {
  return (
    <S.Navbar>
      {NAVBAR_ITEMS.map((el, id) => (
        <NavbarItem key={id} currentPage={currentPage} {...el} />
      ))}
    </S.Navbar>
  );
};

export default Navbar;
