import React from 'react';

import {
  NavWrapper
} from './index.style'

const NavigationBar = () => {
  return (
    <NavWrapper>
      <ul className="nav-items">
        <li className="nav-items__nav-item">cv</li>
        <li className="nav-items__nav-item">activities</li>
        <li className="nav-items__nav-item">journal</li>
      </ul>
    </NavWrapper>
  )
}

export default NavigationBar;