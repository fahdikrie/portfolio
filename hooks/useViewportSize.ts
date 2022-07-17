import { useEffect, useState } from 'react';

const useViewportSize = () => {
  const [width, setWidth] = useState(null);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return width;
};

export default useViewportSize;
