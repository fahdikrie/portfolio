import Link from 'next/link'

import LinkedInIcon from 'public/assets/linkedin.svg'
import GithubIcon from 'public/assets/github.svg'
import * as Nav from './index.style'

interface AppProps {
  currentPage: string
}

const NavigationBar = ({ currentPage }: AppProps ) => (
  <>
    <Nav.Wrapper>
      <Nav.Socials>
        <Nav.Social
          src={GithubIcon}
          alt="github"
        />
        <Nav.Social
          src={LinkedInIcon}
          alt="linkedin"
        />
      </Nav.Socials>
      <Nav.Items>
        {currentPage != "/" && (
          <Nav.Item>
            <Link href="/">
              home
            </Link>
          </Nav.Item>
        )}
        {currentPage != "/activities" && (
          <Nav.Item>
            <Link href="/activities">
              activities
            </Link>
          </Nav.Item>
        )}
        <Nav.Item>
          resume
        </Nav.Item>
        {currentPage != "/journal" && (
          <Nav.Item>
            <Link href="/journal">
              journal
            </Link>
          </Nav.Item>
        )}
      </Nav.Items>
    </Nav.Wrapper>
  </>
)

export default NavigationBar