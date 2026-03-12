'use client';

import { useEffect, useState } from 'react';

const useViewportSize = () => {
  const [viewport, setViewport] = useState({
    isMobile: false,
    isTablet: false,
    isBigTablet: false,
    isDesktop: true,
  });

  const handleResize = () => {
    const width = window.innerWidth;

    setViewport({
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isBigTablet: width >= 1024 && width < 1200,
      isDesktop: width >= 1200,
    });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export default useViewportSize;
