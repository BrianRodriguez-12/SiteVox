export const initGoogleAnalytics = () => {
    const loadGoogleAnalytics = () => {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V9HKJTZTY6';
      script.async = true;
      document.head.appendChild(script);
  
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-V9HKJTZTY6');
      };
    };
  
    const initializeOsanoAnalytics = () => {
      if (window.osano && osano.consent.analytics) {
        loadGoogleAnalytics();
      }
    };
  
    if (window.osano && osano.isReady && osano.isReady()) {
      initializeOsanoAnalytics();
    } else {
      // Escucha el evento `osano:ready`
      document.addEventListener('osano:ready', initializeOsanoAnalytics);
    }
  };
  