import React from 'react'
import Link from 'next/link'

import GithubIcon from 'public/assets/github1.svg'
import LinkedInIcon from 'public/assets/linkedin1.svg'

import {
  NavWrapper,
  NavSocialsWrapper,
  NavItemsWrapper,
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
          ? <li className="nav-items__nav-item">
              <Link href="/">
                home
              </Link>
            </li>
          : ""}
        {(props.currentPage !== "activities")
          ? <li className="nav-items__nav-item">
              <Link href="/activities">
                activities
              </Link>
            </li>
          : ""}
        <li className="nav-items__nav-item">
          <Link href="/">
            resume
          </Link>
        </li>
        <li className="nav-items__nav-item">
          <Link href="/">
            journal
          </Link>
        </li>
      </NavItemsWrapper>
    </NavWrapper>
  )
}

export default NavigationBar;