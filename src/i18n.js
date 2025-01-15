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
      "welcome": "Welcome to VoxMex 🌎",
      "introText": "Your reliable guide for hassle-free travel. Explore tips, guides, and useful tools for your adventures from Mexico to the world.",
      "visas": "Visas",
      "visasText": "Find all the necessary information to successfully apply for your visa.",
      "travelTips": "Travel Tips",
      "travelTipsText": "Practical guides to make the most of your experience abroad.",
      "faqs": "FAQs",
      "faqsText": "Answers to the most frequently asked questions about procedures and travel."
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
      "welcome": "Bienvenido a VoxMex 🌎",
      "introText": "Tu guía confiable para viajar sin complicaciones. Explora consejos, guías, y herramientas útiles para tus aventuras desde México al mundo.",
      "visas": "Visas",
      "visasText": "Encuentra toda la información necesaria para solicitar tu visa de forma exitosa.",
      "travelTips": "Consejos de viaje",
      "travelTipsText": "Guías prácticas para aprovechar al máximo tu experiencia en el extranjero.",
      "faqs": "FAQs",
      "faqsText": "Respuestas a las preguntas más frecuentes sobre trámites y viajes."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;