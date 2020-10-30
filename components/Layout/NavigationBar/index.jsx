import React from 'react';

import {
  NavWrapper
} from './index.style'

const NavigationBar = (props) => {
  return (
    <NavWrapper>
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