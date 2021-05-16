import Link from 'next/link'

import LinkedInIcon from 'public/assets/linkedin.svg'
import GithubIcon from 'public/assets/github.svg'
import * as S from './index.style'

interface NavigationBarProps {
  currentPage: string
}

const NavigationBar = ({ currentPage }: NavigationBarProps ) => (
  <>
    <S.Wrapper>
      <S.Socials>
        <div>
          <a
            href="https://github.com/fahdikrie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Social
              src={GithubIcon}
              alt="github"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/fahdikrie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Social
              src={LinkedInIcon}
              alt="linkedin"
            />
          </a>
        </div>
      </S.Socials>
      <S.Items>
        <S.Item
          isActive={currentPage == "/" ? true : false}
        >
          <Link href="/">
            home
          </Link>
        </S.Item>
        <S.Item
          isActive={currentPage == "/activities" ? true : false}
        >
          <Link href="/activities">
            activities
          </Link>
        </S.Item>
        <S.Item
          isActive={currentPage == "/resume" ? true : false}
        >
          resume
        </S.Item>
        <S.Item
          isActive={currentPage == "/journal" ? true : false}
        >
          <Link href="/journal">
            journal
          </Link>
        </S.Item>
      </S.Items>
    </S.Wrapper>
  </>
)

export default NavigationBar