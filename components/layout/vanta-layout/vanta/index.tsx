import React, { useState, useEffect, useRef } from 'react'

import HALO from '../assets/vanta/vanta.halo'
import * as S from './index.style'

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const sizeVanta = props.sizeVanta // desktop 1.00, mobile 0.50
  const baseColorVanta = props.baseColorVanta // #4C1D95 or #BB19BB
  const backgroundColorVanta = props.backgroundColorVanta // for multi-theme
  const xOffsetVanta = props.xOffsetVanta

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(HALO({
        el: myRef.current,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: baseColorVanta,
        backgroundColor: backgroundColorVanta,
        xOffset: xOffsetVanta,
        yOffset: 0.00,
        size: sizeVanta
      }))
    }
    return () => {
      if (vantaEffect) (vantaEffect as any).destroy()
    }
  }, [vantaEffect, backgroundColorVanta, sizeVanta, xOffsetVanta])

  return (
    <S.Vanta ref={myRef} />
  )
}

export default Vanta;