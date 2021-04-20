import Vanta from './vanta'
import useWindowSize from 'hooks/usewindowsize'

const VantaLayout = () => {
  const width = useWindowSize()
  const breakpoint: number = 525

  if (width < breakpoint) return null
  if (width > 1920) return null
  return (
    <Vanta
      sizeVanta={1.10}
      backgroundColorVanta={0x0}
      xOffsetVanta={0.30}
    />
  )
}

export default VantaLayout