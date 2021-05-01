import Vanta from './vanta'
import useWindowSize from 'hooks/usewindowsize'

const VantaLayout = () => {
  const width = useWindowSize()
  const breakpoint: number = 525

  if (width < breakpoint) return null

  return (
    <Vanta
      sizeVanta={1.10}
      baseColorVanta={0x4c1d95}
      backgroundColorVanta={0x0}
      xOffsetVanta={0.30}
    />
  )
}

export default VantaLayout