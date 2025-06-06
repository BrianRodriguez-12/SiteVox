import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// languages
import enTranslation from '../public/locales/en/common.json';
import esTranslation from '../public/locales/es/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
