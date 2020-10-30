import React from 'react';

import GithubIcon from 'public/assets/github1.svg'
import LinkedInIcon from 'public/assets/linkedin1.svg'

import {
  NavWrapper
} from './index.style'

const NavigationBar = (props) => {
  return (
    <NavWrapper>
      <div className="nav-socials">
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
      </div>

      <ul className="nav-items">
        {(props.currentPage !== "index")
          ? <li className="nav-items__nav-item">home</li>
          : ""}
        <li className="nav-items__nav-item">resume</li>
        {(props.currentPage !== "activities")
          ? <li className="nav-items__nav-item">activities</li>
          : ""}
        <li className="nav-items__nav-item">journal</li>
      </ul>
    </NavWrapper>
  )
}

export default NavigationBar;