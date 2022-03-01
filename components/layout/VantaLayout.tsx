import { useTheme } from 'next-themes';

import Vanta from 'components/elements/Vanta';
import useWindowSize from 'hooks/useWindowSize';

const VantaLayout = () => {
  const breakpoint = 525;
  const width = useWindowSize();
  const { resolvedTheme } = useTheme();

  if (width < breakpoint) return null;
  if (resolvedTheme === 'light') return null;

  return <Vanta sizeVanta={1.1} baseColorVanta={0x4c1d95} backgroundColorVanta={0x0} xOffsetVanta={0.3} />;
};

export default VantaLayout;
