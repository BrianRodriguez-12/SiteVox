import { useEffect, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    osano: any;
  }
}

export default function AdSense() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const checkConsent = () => {
      if (window.osano && window.osano.consent.marketing) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error('Error al cargar AdSense:', err);
        }
      }
    };

    document.addEventListener('osano:ready', checkConsent);

    return () => {
      document.removeEventListener('osano:ready', checkConsent);
    };
  }, [isSmallScreen]);

  return (
    <ins
      className="block flex-1 h-full w-full"
      data-ad-client="ca-pub-3822217487643957"
      data-ad-slot={isSmallScreen ? '9655401305' : '9132657126'}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
