import NavbarItem from '@/components/elements/NavbarItem';
import { useState } from 'react';
import { NAVBAR_ITEMS } from './constants';
import * as S from '@/components/layout/RegularLayout/Navbar/Mobile.style';

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <>
      <S.Sidebar isNavbarOpen={isNavbarOpen}>
        <button onClick={() => setNavbarOpen(false)}>Close</button>
        {NAVBAR_ITEMS.map((el, id) => (
          <NavbarItem key={id} currentPage={currentPage} {...el} />
        ))}
      </S.Sidebar>
      <S.Navbar>
        <button onClick={() => setNavbarOpen(true)}>Open</button>
      </S.Navbar>
    </>
  );
};

export default Navbar;
