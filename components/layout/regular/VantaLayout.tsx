import { useTheme } from 'next-themes';

import VantaGlobe from '@/components/elements/VantaGlobe';
import VantaHalo from '@/components/elements/VantaHalo';
import useViewportSize from 'hooks/useViewportSize';

const VantaLayout = () => {
  const BREAKPOINT = 525;
  const width = useViewportSize();
  const { resolvedTheme } = useTheme();

  if (width < BREAKPOINT) return null;

  if (resolvedTheme === 'light')
    return (
      <VantaGlobe
        sizeVanta={1.1}
        baseColorVanta={0x513203}
        backgroundColorVanta={0xf7f7f7}
        xOffsetVanta={0.3}
      />
    );
  else
    return (
      <VantaHalo
        sizeVanta={1.1}
        baseColorVanta={0x4c1d95}
        backgroundColorVanta={0x0}
        xOffsetVanta={0.3}
      />
    );
};

export default VantaLayout;
