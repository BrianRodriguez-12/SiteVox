import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      privacyPolicy: 'Privacy Policy',
      followUs: 'Follow us',
      email: 'Email',
      phone: 'Phone',
      home: 'Home',
      services: 'Services',
      aboutUs: 'About us',
      contactUs: 'Contact us',
      welcome: 'Welcome to VoxMex 🌎',
      introText:
        'Your reliable guide for hassle-free travel. Explore tips, guides, and useful tools for your adventures from Mexico to the world.',
      visas: 'Visas',
      visasText:
        'Find all the necessary information to successfully apply for your visa.',
      travelTips: 'Travel Tips',
      travelTipsText:
        'Practical guides to make the most of your experience abroad.',
      faqs: 'FAQs',
      faqsText:
        'Answers to the most frequently asked questions about procedures and travel.',
      servicesTitle: 'Services',
      servicesDescription: 'Explore our services to plan your trip:',
      travelToJapan: 'Travel to Japan',
      travelToUS: 'Travel to the United States',
      planTripToUS: 'Plan your trip to the United States',
      cbxDescription:
        'From Mexico, the Cross Border Xpress (CBX) is an excellent option to cross the border quickly and safely. We show you the best routes and tips.',
      idealDates: 'Ideal dates to travel.',
      howToUseCBX: 'How to use the CBX.',
      transportOptions: 'Transport options from the airport.',
      planTripToJapan: 'Plan your trip to Japan',
      japanDescription:
        'Japan is a fascinating destination with a rich history and culture. Here we help you plan your trip from Narita Airport to Tokyo.',
      bestDates: 'The best dates to travel.',
      publicTransport: 'How to use public transport.',
      recommendedRoutes: 'Recommended routes to reach your destination.',
      aboutUsTitle: 'About Us',
      aboutUsDescription:
        'At VoxMex, we are dedicated to making your travels easier and helping you plan your activities efficiently. We believe in the power of clear and accessible information to reduce travel stress and allow you to enjoy every moment.',
      ourMission: 'Our Mission',
      missionDescription:
        'To help travelers fulfill their dreams of exploring the world by providing practical tools and guides to simplify the process.',
      ourVision: 'Our Vision',
      visionDescription:
        'To be the go-to platform for travelers seeking support from planning to return, creating a united and well-informed community.',
      contactFormTitle: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      messageSent: 'Message sent successfully',
      messageError: 'There was a problem sending your message.',
      tijuana: 'Tijuana',
      cbxBorderCrossing: 'CBX Border Crossing',
      santaFeTrail: 'Santa Fe Trail',
    },
  },
  es: {
    translation: {
      quickLinks: 'Enlaces rápidos',
      contact: 'Contacto',
      privacyPolicy: 'Política de Privacidad',
      followUs: 'Síguenos',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      home: 'Inicio',
      services: 'Servicios',
      aboutUs: 'Sobre Nosotros',
      contactUs: 'Contáctanos',
      welcome: 'Bienvenido a VoxMex 🌎',
      introText:
        'Tu guía confiable para viajar sin complicaciones. Explora consejos, guías, y herramientas útiles para tus aventuras desde México al mundo.',
      visas: 'Visas',
      visasText:
        'Encuentra toda la información necesaria para solicitar tu visa de forma exitosa.',
      travelTips: 'Consejos de viaje',
      travelTipsText:
        'Guías prácticas para aprovechar al máximo tu experiencia en el extranjero.',
      faqs: 'FAQs',
      faqsText:
        'Respuestas a las preguntas más frecuentes sobre trámites y viajes.',
      servicesTitle: 'Servicios',
      servicesDescription:
        'Explora nuestros servicios para planificar tu viaje:',
      travelToJapan: 'Viajes a Japón',
      travelToUS: 'Viajes a Estados Unidos',
      planTripToUS: 'Planifica tu viaje a Estados Unidos',
      cbxDescription:
        'Desde México, el Cross Border Xpress (CBX) es una excelente opción para cruzar la frontera de forma rápida y segura. Te mostramos las mejores rutas y consejos.',
      idealDates: 'Fechas ideales para viajar.',
      howToUseCBX: 'Cómo usar el CBX.',
      transportOptions: 'Opciones de transporte desde el aeropuerto.',
      planTripToJapan: 'Planifica tu viaje a Japón',
      japanDescription:
        'Japón es un destino fascinante con una rica historia y cultura. Aquí te ayudamos a planificar tu viaje desde el aeropuerto de Narita hasta Tokio.',
      bestDates: 'Las mejores fechas para viajar.',
      publicTransport: 'Cómo usar el transporte público.',
      recommendedRoutes: 'Rutas recomendadas para llegar a tu destino.',
      aboutUsTitle: 'Acerca de Nosotros',
      aboutUsDescription:
        'En VoxMex, nos dedicamos a facilitar tus viajes y ayudarte a planificar tus actividades de manera eficiente. Creemos en el poder de la información clara y accesible para reducir el estrés de viajar y permitirte disfrutar cada momento.',
      ourMission: 'Nuestra Misión',
      missionDescription:
        'Ayudar a los viajeros a cumplir sus sueños de explorar el mundo proporcionando herramientas y guías prácticas para simplificar el proceso.',
      ourVision: 'Nuestra Visión',
      visionDescription:
        'Ser la plataforma de referencia para viajeros que buscan apoyo desde la planificación hasta el regreso, creando una comunidad unida y bien informada.',
      contactFormTitle: 'Contáctanos',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar',
      messageSent: 'Mensaje enviado correctamente',
      messageError: 'Hubo un problema al enviar tu mensaje.',
      tijuana: 'Tijuana',
      cbxBorderCrossing: 'Cruce Fronterizo CBX',
      santaFeTrail: 'Camino de Santa Fe',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
