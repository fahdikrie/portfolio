import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import LinkedInIconLight from 'public/assets/linkedin-light.svg';
import GithubIconLight from 'public/assets/github-light.svg';
import LinkedInIconDark from 'public/assets/linkedin-dark.svg';
import GithubIconDark from 'public/assets/github-dark.svg';

import * as S from './Navbar.style';
import { NAVBAR_ITEMS } from './constants';

interface NavbarProps {
  currentPage: string;
}

export interface NavbarItemProps {
  href: string;
  text: string;
}

interface SocialItemProps {
  href: string;
  src: string;
  alt: string;
}

const Navbar = ({ currentPage }: NavbarProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [githubIcon, setGithubIcon] = useState();
  const [linkedInIcon, setLinkedInIcon] = useState();

  const NavItem = ({ href, text }: NavbarItemProps) => (
    <S.Item isActive={currentPage == href}>
      <Link href={href}>{text}</Link>
    </S.Item>
  );

  const SocialItem = ({ href, src, alt }: SocialItemProps) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <S.Social src={src} alt={alt} />
    </a>
  );

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
    switch (resolvedTheme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('light');
        break;
    }
  };

  return (
    <S.Navbar>
      <S.Socials>
        {resolvedTheme && (
          <>
            <S.ThemeButton
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
      <S.Items>
        {NAVBAR_ITEMS.map((el, id) => (
          <NavItem key={id} {...el} />
        ))}
      </S.Items>
    </S.Navbar>
  );
};

export default Navbar;
