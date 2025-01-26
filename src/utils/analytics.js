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

  if (window.osano) {
    // Escuchar cambios en el consentimiento
    osano.addEventListener('consent:on', () => {
      if (osano.consent.analytics) {
        loadGoogleAnalytics();
      }
    });
  }
};
