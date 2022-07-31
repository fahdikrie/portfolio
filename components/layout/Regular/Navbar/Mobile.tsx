import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

import LinkedInIconLight from 'public/assets/linkedin-light.svg';
import GithubIconLight from 'public/assets/github-light.svg';
import LinkedInIconDark from 'public/assets/linkedin-dark.svg';
import GithubIconDark from 'public/assets/github-dark.svg';

import { NAVBAR_ITEMS } from './constants';
import { ThemeButton } from './Desktop.style';
import NavbarItem from '@/components/elements/NavbarItem';
import * as S from '@/components/layout/Regular/Navbar/Mobile.style';
import SocialItem from '@/components/elements/SocialItem';

const Navbar = ({ currentPage }: NavbarProps) => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [githubIcon, setGithubIcon] = useState();
  const [linkedInIcon, setLinkedInIcon] = useState();

  const isLightTheme = resolvedTheme === 'light';

  useEffect(() => {
    if (resolvedTheme) {
      const GithubIcon =
        resolvedTheme === 'light' ? GithubIconLight : GithubIconDark;
      const LinkedInIcon =
        resolvedTheme === 'light' ? LinkedInIconLight : LinkedInIconDark;

      setGithubIcon(GithubIcon);
      setLinkedInIcon(LinkedInIcon);
    }
  }, [resolvedTheme]);

  const onSetTheme = () => {
    if (isLightTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (isNavbarOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isNavbarOpen]);

  useEffect(() => {
    return function cleanup() {
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Sidebar isNavbarOpen={isNavbarOpen}>
        <div className="navbar-items__header">
          <button onClick={() => setNavbarOpen(false)}>
            <HiX size={28} color={isLightTheme ? 'black' : 'white'} />
          </button>
        </div>
        <div className="navbar-items__wrapper">
          {NAVBAR_ITEMS.map((el, id) => (
            <NavbarItem key={id} currentPage={currentPage} {...el} />
          ))}
        </div>
      </S.Sidebar>
      <S.Navbar>
        <S.Socials>
          {resolvedTheme && (
            <>
              <ThemeButton
                onClick={() => onSetTheme()}
                isLightTheme={resolvedTheme === 'light'}
              />
              <SocialItem
                href="https://github.com/fahdikrie"
                src={githubIcon}
                alt="github"
              />
              <SocialItem
                href="https://www.linkedin.com/in/fahdikrie/"
                src={linkedInIcon}
                alt="linkedin"
              />
            </>
          )}
        </S.Socials>
        <button onClick={() => setNavbarOpen((prev) => !prev)}>
          <HiMenuAlt3 size={28} color={isLightTheme ? 'black' : 'white'} />
        </button>
      </S.Navbar>
    </S.Wrapper>
  );
};

export default Navbar;
