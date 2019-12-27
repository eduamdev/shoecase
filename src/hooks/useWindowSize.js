import { useEffect, useState, useCallback } from 'react';

export default function useWindowSize() {
  const isClient = typeof window === 'object';

  const getViewportSize = useCallback(() => {
    return {
      width: isClient
        ? Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        : undefined,
      height: isClient
        ? Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
          )
        : undefined
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getViewportSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getViewportSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getViewportSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
