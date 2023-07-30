'use client';

import ThemeSwitch from './ThemeSwitch';

const NAVBAR_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
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
    href: '/projects',
  },
];

const Navbar = () => {
  return (
    <nav
      className={`
        navbar
        fixed top-0 left-0 right-0
        mx-auto mt-4 h-fit
        min-h-fit w-[320px] justify-between rounded-xl
        bg-base-100 bg-opacity-10
        p-1 shadow-sm
        backdrop-blur-sm backdrop-filter
        lg:w-fit
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
                <a className="mix-blend-darken">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case mix-blend-darken">
          Badi
        </a>
      </div>
      <div className="navbar-center mx-8 hidden w-fit lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.name}>
              <a className="mix-blend-darken">{item.name}</a>
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
