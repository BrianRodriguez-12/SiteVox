import React, { useEffect, useState } from 'react';

// Styles
import './styles.css';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    osano: any;
  }
}

const AdSense: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadAdsense = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('Error al cargar AdSense:', err);
      }
    };

    const checkConsent = () => {
      if (window.osano && window.osano.consent.marketing) {
        loadAdsense();
      }
    };

    document.addEventListener('osano:ready', checkConsent);

    return () => {
      document.removeEventListener('osano:ready', checkConsent);
    };
  }, [isSmallScreen]);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-3822217487643957"
      data-ad-slot={isSmallScreen ? '9655401305' : '9132657126'}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdSense;
