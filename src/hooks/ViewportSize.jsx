import { useState, useEffect } from 'react';

const useViewportSize = () => {
  const [viewport, setViewport] = useState({
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isBigTablet: window.innerWidth >= 1024 && window.innerWidth < 1200,
    isDesktop: window.innerWidth >= 1200,
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export default useViewportSize;
