import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDeviceType(): {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTouchDevice: boolean;
} {
  const [device, setDevice] = useState<{
    deviceType: DeviceType;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isTouchDevice: boolean;
  }>(() => {
    if (typeof window === 'undefined') {
      return {
        deviceType: 'desktop',
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isTouchDevice: false,
      };
    }
    const width = window.innerWidth;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const deviceType: DeviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
    return { deviceType, isMobile, isTablet, isDesktop, isTouchDevice: isTouch };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const deviceType: DeviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
      setDevice({ deviceType, isMobile, isTablet, isDesktop, isTouchDevice: isTouch });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}
