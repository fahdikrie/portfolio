import React from 'react';

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
          ? <li className="nav-items__nav-item"><a href="/">home</a></li>
          : ""}
        <li className="nav-items__nav-item"><a href="/">resume</a></li>
        {(props.currentPage !== "activities")
          ? <li className="nav-items__nav-item"><a href="/activities">activities</a></li>
          : ""}
        <li className="nav-items__nav-item"><a href="/">journal</a></li>
      </NavItemsWrapper>
    </NavWrapper>
  )
}

export default NavigationBar;