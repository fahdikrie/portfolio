import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import LinkedInIconLight from 'public/assets/linkedin-light.svg';
import GithubIconLight from 'public/assets/github-light.svg';
import LinkedInIconDark from 'public/assets/linkedin-dark.svg';
import GithubIconDark from 'public/assets/github-dark.svg';

import * as S from './index.style';

interface NavigationBarProps {
  currentPage: string;
}

const NavigationBar = ({ currentPage }: NavigationBarProps) => {
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
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
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
          <S.Item isActive={currentPage == '/' ? true : false}>
            <Link href="/">home</Link>
          </S.Item>
          <S.Item isActive={currentPage == '/activities' ? true : false}>
            <Link href="/activities">activities</Link>
          </S.Item>
          <S.Item isActive={currentPage == '/resume' ? true : false}>
            <Link href="/resume.pdf">resume</Link>
          </S.Item>
          <S.Item isActive={currentPage == '/journal' ? true : false}>
            <Link href="/journal">journal</Link>
          </S.Item>
        </S.Items>
      </S.Wrapper>
    </>
  );
};

export default NavigationBar;
