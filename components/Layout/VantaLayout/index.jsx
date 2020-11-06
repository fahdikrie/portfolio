import React from 'react';

import Vanta from './components/Vanta/index';

const VantaLayout = () => {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 525;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return width < breakpoint ?
            <Vanta
              sizeVanta={0}
              backgroundColorVanta={0x0}
              xOffsetVanta={0.70}
            />
          :
            <Vanta
              sizeVanta={1.10}
              backgroundColorVanta={0x0}
              xOffsetVanta={0.30}
            />;}

  export default VantaLayout;