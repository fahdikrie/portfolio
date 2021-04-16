import React, { useState, useEffect, useRef } from 'react'

import HALO from '../../assets/vanta/vanta.halo'
import * as S from './index.style'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  const sizeVanta = props.sizeVanta // desktop 1.00, mobile 0.50
  const backgroundColorVanta = props.backgroundColorVanta // buat multi-theme
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
        backgroundColor: backgroundColorVanta,
        xOffset: xOffsetVanta,
        yOffset: 0.00,
        size: sizeVanta
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect, backgroundColorVanta, sizeVanta, xOffsetVanta])

  // return <div ref={myRef} className={classes.vantablack}/>
  return (
    <S.Vanta ref={myRef} />
  )
}

export default Vanta;