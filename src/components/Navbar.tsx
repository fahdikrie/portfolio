'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import ThemeSwitch from './ThemeSwitch';

const NAVBAR_ITEMS = [
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'activities',
    href: '/activities',
  },
  {
    name: 'blog',
    href: '/blog',
  },
  {
    name: 'journal',
    href: '/journal',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className={`
        navbar fixed left-0 right-0 top-4 z-10 mx-4
        h-fit min-h-fit w-[calc(100vw-32px)] justify-between rounded-xl
        bg-base-100 bg-opacity-10 p-1 font-sans shadow-sm
        backdrop-blur-sm lg:sticky lg:mx-auto
        lg:w-fit
      `}
    >
      <div className="navbar-start w-fit">
        <details className="dropdown">
          <summary tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </summary>
          <ul
            tabIndex={0}
            className={`
              dropdown-content menu menu-sm
              z-[1] -ml-1 mt-3 w-52 rounded-lg bg-base-100
              bg-opacity-80 p-2 shadow backdrop-blur-sm
            `}
          >
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.name}>
                <span onClick={() => router.push(item.href)}>{item.name}</span>
              </li>
            ))}
          </ul>
        </details>
        <button
          className="btn-ghost btn text-xl normal-case mix-blend-darken lg:px-3"
          onClick={() => router.push('/')}
        >
          <Image
            src={`/assets/logo_rounded.svg`}
            alt="badi-logo"
            width={32}
            height={32}
          />
        </button>
      </div>
      <div className="navbar-center mx-4 hidden w-fit lg:flex">
        <ul className="menu menu-horizontal gap-1 p-1">
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.name}>
              <span
                className={`font-bold mix-blend-darken dark:!text-off-white lg:px-3 ${
                  pathname === item.href ? 'active' : ''
                }`}
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-fit">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export { Navbar };
export default Navbar;
