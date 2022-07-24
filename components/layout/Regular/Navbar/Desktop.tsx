import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import LinkedInIconLight from 'public/assets/linkedin-light.svg';
import GithubIconLight from 'public/assets/github-light.svg';
import LinkedInIconDark from 'public/assets/linkedin-dark.svg';
import GithubIconDark from 'public/assets/github-dark.svg';

import * as S from 'components/layout/Regular/Navbar/Desktop.style';
import { NAVBAR_ITEMS } from './constants';
import NavbarItem from '@/components/elements/NavbarItem';
import SocialItem from '@/components/elements/SocialItem';

const Navbar = ({ currentPage }: NavbarProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [githubIcon, setGithubIcon] = useState();
  const [linkedInIcon, setLinkedInIcon] = useState();

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
    if (resolvedTheme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
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
          <NavbarItem key={id} currentPage={currentPage} {...el} />
        ))}
      </S.Items>
    </S.Navbar>
  );
};

export default Navbar;
