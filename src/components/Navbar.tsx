import Image from 'next/image';
import Link from 'next/link';

import cls from '@/styles/components/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={cls.Navbar}>
      <div>
        <Image
          src="/favicon.ico"
          alt="Fahdii Ajmalal Fikrie"
          width={32}
          height={32}
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
