import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Vanta from './components/Vanta/index';

const VantaLayout = () => {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 525;

  useEffect(() => {
    /* Set a variable "mounted" as an indicator 
       when a component is just mounted */
    let mounted = true

    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    if (mounted) window.addEventListener("resize", () => setWidth(window.innerWidth))
    console.log(mounted)

    /* Set the value of "mounted" as false
       and return it as a clean up for the function */
    return () => {
      mounted = false
      window.removeEventListener("resize", () => {})
    }

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return width > breakpoint
    ? <>
        <Vanta
          sizeVanta={1.10}
          backgroundColorVanta={0x0}
          xOffsetVanta={0.30}
        />
      </>
    : null
  }

  export default VantaLayout;