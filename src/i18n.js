import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "quickLinks": "Quick Links",
      "contact": "Contact",
      "privacyPolicy": "Privacy Policy",
      "followUs": "Follow us",
      "email": "Email",
      "phone": "Phone",
      "home": "Home",
      "services": "Services",
      "aboutUs": "About us",
      "contactUs": "Contact us",
    }
  },
  es: {
    translation: {
      "quickLinks": "Enlaces rápidos",
      "contact": "Contacto",
      "privacyPolicy": "Política de Privacidad",
      "followUs": "Síguenos",
      "email": "Correo electrónico",
      "phone": "Teléfono",
      "home": "Inicio",
      "services": "Servicios",
      "aboutUs": "Sobre Nosotros",
      "contactUs": "Contáctanos",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;