import { useState, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';

import HALO from 'libs/Vanta/vanta.halo';

export const SVanta = styled.div`
  ${tw`
    w-full h-full fixed
    2xl:max-width[1920px]
  `}

  & .canvas {
    ${tw`
      w-full h-full
      2xl:max-width[1920px]
    `}
  }
`;

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  const sizeVanta = props.sizeVanta; // desktop 1.00, mobile 0.50
  const baseColorVanta = props.baseColorVanta; // #4C1D95 or #BB19BB
  const backgroundColorVanta = props.backgroundColorVanta; // for multi-theme
  const xOffsetVanta = props.xOffsetVanta;

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: baseColorVanta,
          backgroundColor: backgroundColorVanta,
          xOffset: xOffsetVanta,
          yOffset: 0.0,
          size: sizeVanta,
        })
      );
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [
    vantaEffect,
    backgroundColorVanta,
    sizeVanta,
    xOffsetVanta,
    baseColorVanta,
  ]);

  return <SVanta ref={myRef} />;
};

export default Vanta;
