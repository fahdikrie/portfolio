'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import ThemeSwitch from './ThemeSwitch';

const NAVBAR_ITEMS = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Activities',
    href: '/activities',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Journal',
    href: '/journal',
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav
      className={`
        navbar fixed top-0 left-0 right-0 mx-auto mt-4
        h-fit min-h-fit w-[320px] justify-between rounded-xl
        bg-base-100 bg-opacity-10 p-1 !font-sans shadow-sm backdrop-blur-sm
        backdrop-filter lg:static lg:w-fit
      `}
    >
      <div className="navbar-start w-fit">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className={`
              dropdown-content menu
              rounded-box menu-sm
              z-[1] mt-3 w-52 bg-base-100 p-2 shadow
            `}
          >
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.name}>
                <span
                  className="mix-blend-darken"
                  onClick={() => router.push(item.href)}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`btn-ghost lg:px-3 ${
            pathname === '/' ? 'active' : ''
          } btn text-xl normal-case mix-blend-darken`}
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
      <div className="navbar-end w-fit">
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export { Navbar };
export default Navbar;
