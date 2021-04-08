import React from 'react'
import Link from 'next/link'

import GithubIcon from 'public/assets/github.svg'
import LinkedInIcon from 'public/assets/linkedin.svg'

import {
  NavWrapper,
  NavSocialsWrapper,
  NavItemsWrapper,
  NavItem
} from './index.style'

const NavigationBar = (props) => {
  return (
    <NavWrapper>
      <NavSocialsWrapper className="nav-socials">
        <img
          className="nav-socials__nav-social github"
          src={GithubIcon}
          alt="github"
        />
        <img
          className="nav-socials__nav-social linkedin"
          src={LinkedInIcon}
          alt="linkedin"
        />
      </NavSocialsWrapper>

      <NavItemsWrapper className="nav-items">
        {(props.currentPage !== "index")
          ? <NavItem className="nav-items__nav-item">
              <Link href="/">
                home
              </Link>
            </NavItem>
          : ""}

        {(props.currentPage !== "activities")
          ? <NavItem className="nav-items__nav-item">
              <Link
                href="/activities"
                shallow={true}
              >
                activities
              </Link>
            </NavItem>
          : ""}

        <NavItem className="nav-items__nav-item">
          <Link href="/">
            resume
          </Link>
        </NavItem>

        <NavItem className="nav-items__nav-item">
          <Link href="/">
            journal
          </Link>
        </NavItem>
      </NavItemsWrapper>
    </NavWrapper>
  )
}

export default NavigationBar