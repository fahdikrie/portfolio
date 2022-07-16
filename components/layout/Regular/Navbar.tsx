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

export interface SocialItemProps {
  href: string;
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
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <S.Wrapper>
      <S.Socials>
        {resolvedTheme && (
          <>
            <S.ThemeButton
              onClick={() => onSetTheme()}
              isLightTheme={resolvedTheme === 'light'}
            />
            <a
              href="https://github.com/fahdikrie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Social src={githubIcon} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/fahdikrie/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.Social src={linkedInIcon} alt="linkedin" />
            </a>
          </>
        )}
      </S.Socials>
      <S.Items>
        {NAVBAR_ITEMS.map((el, id) => (
          <NavItem key={id} {...el} />
        ))}
      </S.Items>
    </S.Wrapper>
  );
};

export default Navbar;
