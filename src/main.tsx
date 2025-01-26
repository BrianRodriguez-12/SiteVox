import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Translations
import i18n from './shared/i18n';

// Components
import App from './App';

// Styles
import './shared/global.css';

// Utils
import { initGoogleAnalytics } from './utils/analytics';

const savedLanguage = localStorage.getItem('language');
if (savedLanguage) {
  i18n.changeLanguage(savedLanguage);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
/* 
initGoogleAnalytics(); */
