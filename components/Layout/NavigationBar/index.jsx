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
          src={GithubIcon}
          alt="github"
          width="30px"
        />
        <img
          src={LinkedInIcon}
          alt="linkedin"
          width="30px"
        />
      </div>

      <ul className="nav-items">
        {(props.currentPage !== "index")
          ? <li className="nav-items__nav-item">home</li>
          : ""}
        <li className="nav-items__nav-item">cv</li>
        {(props.currentPage !== "activities")
          ? <li className="nav-items__nav-item">activities</li>
          : ""}
        <li className="nav-items__nav-item">journal</li>
      </ul>
    </NavWrapper>
  )
}

export default NavigationBar;