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
      messageNotFound: 'Page not found',
      send: 'Send',
      messageSent: 'Message sent successfully',
      messageError: 'There was a problem sending your message.',
      tijuana: 'Tijuana',
      cbxBorderCrossing: 'CBX Border Crossing',
      santaFeTrail: 'Santa Fe Trail',
      visas: {
        title: 'Visa Information',
        widgetText:
          'Find all the necessary information to successfully apply for your visa.',
        requiredDocuments: {
          title: 'Required Documents',
          passport: 'Passport',
          passportDetails:
            'A valid passport with at least six months of validity.',
          photo: 'Photo',
          photoDetails: 'Photos will be taken on the day of your appointment.',
          applicationForm: 'DS-160 Form',
          applicationFormDetails:
            'Submit the form online at the official website.',
          paymentReceipt: 'Payment Receipt',
          paymentReceiptDetails:
            'Non-refundable payment receipt for the application fee.',
          supportingDocuments: 'Supporting Documents',
          supportingDocumentsDetails:
            'Documents proving ties to your home country, such as employment letters or property ownership.',
        },
        commonQuestions: {
          title: 'Frequently Asked Questions',
          q1: {
            question: 'What should I bring to my visa appointment?',
            answer:
              'Bring your passport, DS-160 confirmation, payment receipt, and any supporting documents.',
          },
          q2: {
            question: 'Can I bring my phone to the appointment?',
            answer:
              'Electronic devices are not allowed inside the embassy or consulate.',
          },
          q3: {
            question: 'What happens during the appointment?',
            answer:
              'Your photo and fingerprints will be taken, and an interview will be conducted.',
          },
          q4: {
            question: 'Is identification required?',
            answer:
              'Identification is not always necessary, but it is recommended to bring one.',
          },
          q5: {
            question: 'Can I get a refund if my visa is denied?',
            answer:
              'The application fee is non-refundable, regardless of the outcome.',
          },
        },
        tips: {
          title: 'Helpful Tips',
          arriveEarly:
            'Arrive at least 15 minutes before your scheduled appointment.',
          prepareAnswers:
            'Prepare concise answers to potential questions about your trip.',
          avoidNervousness:
            'Stay calm and answer honestly during the interview.',
          checkDocuments:
            'Double-check all required documents before your appointment.',
          electronicDevices:
            'Do not bring electronic devices or large bags to the appointment.',
          metalObjects:
            'Avoid carrying metal objects to pass security quickly.',
        },
      },
      FAQ: {
        title: 'DS-160 Form FAQs',
        q1: {
          question: 'What is the DS-160 form?',
          answer:
            'The DS-160, Online Nonimmigrant Visa Application form, is for temporary travel to the United States, and for K (fiancé(e)) visas.',
        },
        q2: {
          question: 'How do I complete the DS-160 form?',
          answer:
            'You must complete the DS-160 form online at the Consular Electronic Application Center (CEAC) website.',
        },
        q3: {
          question: 'What documents do I need to complete the DS-160 form?',
          answer:
            'You will need your passport, travel itinerary, dates of your last five visits to the United States, and your resume or curriculum vitae.',
        },
        q4: {
          question: 'Can I save my DS-160 form and complete it later?',
          answer:
            'Yes, you can save your application and complete it later. Make sure to note your application ID.',
        },
        q5: {
          question: 'What should I do if I make a mistake on my DS-160 form?',
          answer:
            'If you make a mistake, you will need to complete a new DS-160 form.',
        },
      },
      travelTips: {
        title: 'Travel Tips',
        widgetText:
          'Practical guides to make the most of your experience abroad.',
        tabs: {
          general: 'Generals',
          tropical: 'Tropical',
          snow: 'Snow / Cold',
          us: 'US',
        },
        general: {
          packing: 'Pack Light',
          packingDetails:
            'Bring only what you need to avoid carrying extra weight.',
          meds: 'Medications',
          medsDetails: 'Carry your medications in their original packaging.',
          insurance: 'Travel Insurance',
          insuranceDetails:
            'Get travel insurance to cover medical emergencies.',
          currency: 'Currency Exchange',
          currencyDetails:
            'Exchange money at currency exchange offices for better rates.',
          vaccines: 'Vaccinations',
          vaccinesDetails:
            'Check if you need any special vaccinations for your destination.',
          emergency: 'Emergency Contacts',
          emergencyDetails: 'Carry a list of emergency numbers and contacts.',
        },
        snow: {
          packing: 'Pack Light',
          packingDetails: 'Cold climates may require warmer clothing.',
          meds: 'Medications',
          medsDetails:
            'Medications should be protected from the cold. Bring enough for the duration of your trip.',
          insurance: 'Travel Insurance',
          insuranceDetails:
            'Travel insurance should cover illnesses related to cold weather.',
          vaccines: 'Vaccinations',
          vaccinesDetails:
            'Vaccinations against flu and common cold-weather illnesses.',
          emergency: 'Emergency Contacts',
          emergencyDetails:
            'Carry a list of emergency numbers and contacts and have an emergency plan for snowstorms.',
        },
        tropical: {
          packing: 'Pack Light',
          packingDetails:
            'Tropical climates may require less clothing suited for the heat.',
          meds: 'Medications',
          medsDetails:
            'Consider humidity and heat when packing your medications.',
          insurance: 'Travel Insurance',
          insuranceDetails:
            'Travel insurance should cover tropical diseases and insect protection.',
          vaccines: 'Vaccinations',
          vaccinesDetails:
            'Vaccinations against tropical diseases and yellow fever.',
          emergency: 'Emergency Contacts',
          emergencyDetails:
            'Carry a list of emergency numbers and contacts and have an emergency plan for tropical diseases.',
        },
        us: {
          packing: 'Pack Light',
          packingDetails:
            'Bring only what you need to avoid carrying extra weight.',
          meds: 'Medications',
          medsDetails: 'Carry your medications in their original packaging.',
          insurance: 'Travel Insurance',
          insuranceDetails:
            'Get travel insurance to cover medical emergencies.',
          currency: 'Currency Exchange',
          currencyDetails:
            'Exchange money at currency exchange offices for better rates.',
          vaccines: 'Vaccinations',
          vaccinesDetails:
            'Check if you need any special vaccinations for your destination.',
          emergency: 'Emergency Contacts',
          emergencyDetails: 'Carry a list of emergency numbers and contacts.',
          transportation: 'Transportation',
          transportationDetails:
            'Familiarize yourself with public and private transportation options.',
          accommodation: 'Accommodation',
          accommodationDetails:
            'Book your accommodation in advance to get better rates.',
          food: 'Food',
          foodDetails: 'Try local food and follow hygiene recommendations.',
          safety: 'Safety',
          safetyDetails:
            'Keep your belongings secure and follow local safety guidelines.',
        },
      },
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
      messageNotFound: 'Página no encontrada',
      send: 'Enviar',
      messageSent: 'Mensaje enviado correctamente',
      messageError: 'Hubo un problema al enviar tu mensaje.',
      tijuana: 'Tijuana',
      cbxBorderCrossing: 'Cruce Fronterizo CBX',
      santaFeTrail: 'Camino de Santa Fe',
      visas: {
        title: 'Información sobre Visas',
        widgetText:
          'Encuentra toda la información necesaria para solicitar tu visa de forma exitosa.',
        requiredDocuments: {
          title: 'Documentos Requeridos',
          passport: 'Pasaporte',
          passportDetails:
            'Pasaporte válido con al menos seis meses de vigencia.',
          photo: 'Foto',
          photoDetails: 'Las fotos se tomarán el día de la cita.',
          applicationForm: 'Formulario DS-160',
          applicationFormDetails:
            'Completa el formulario en línea en la página oficial.',
          paymentReceipt: 'Comprobante de Pago',
          paymentReceiptDetails:
            'El comprobante de pago de la tarifa no es reembolsable.',
          supportingDocuments: 'Documentos de Apoyo',
          supportingDocumentsDetails:
            'Documentos que demuestren lazos con tu país de origen, como cartas de empleo o propiedades.',
        },
        commonQuestions: {
          title: 'Preguntas Frecuentes',
          q1: {
            question: '¿Qué debo llevar a mi cita para la visa?',
            answer:
              'Lleva tu pasaporte, confirmación del formulario DS-160, comprobante de pago y cualquier documento de apoyo.',
          },
          q2: {
            question: '¿Puedo llevar mi teléfono a la cita?',
            answer:
              'No se permiten dispositivos electrónicos dentro de la embajada o consulado.',
          },
          q3: {
            question: '¿Qué ocurre durante la cita?',
            answer:
              'Se tomarán tus fotos y huellas digitales, y se realizará una entrevista.',
          },
          q4: {
            question: '¿Es necesaria una identificación?',
            answer: 'No siempre es obligatoria, pero se recomienda llevar una.',
          },
          q5: {
            question: '¿Puedo obtener un reembolso si mi visa es rechazada?',
            answer:
              'La tarifa de solicitud no es reembolsable, sin importar el resultado.',
          },
        },
        tips: {
          title: 'Consejos Útiles',
          arriveEarly: 'Llega al menos 15 minutos antes de tu cita programada.',
          prepareAnswers:
            'Prepara respuestas concisas para preguntas sobre tu viaje.',
          avoidNervousness:
            'Mantén la calma y responde con honestidad durante la entrevista.',
          checkDocuments:
            'Verifica todos los documentos requeridos antes de tu cita.',
          electronicDevices:
            'No lleves dispositivos electrónicos ni bolsas grandes a la cita.',
          metalObjects:
            'Evita llevar objetos de metal para pasar rápido por seguridad.',
        },
      },
      FAQ: {
        title: 'Preguntas Frecuentes sobre el Formulario DS-160',
        q1: {
          question: '¿Qué es el formulario DS-160?',
          answer:
            'El formulario DS-160, Solicitud de Visa de No Inmigrante en Línea, es para viajes temporales a los Estados Unidos y para visas K (prometido(a)).',
        },
        q2: {
          question: '¿Cómo completo el formulario DS-160?',
          answer:
            'Debe completar el formulario DS-160 en línea en el sitio web del Centro de Solicitud Electrónica Consular (CEAC).',
        },
        q3: {
          question:
            '¿Qué documentos necesito para completar el formulario DS-160?',
          answer:
            'Necesitará su pasaporte, itinerario de viaje, fechas de sus últimas cinco visitas a los Estados Unidos y su currículum vitae.',
        },
        q4: {
          question:
            '¿Puedo guardar mi formulario DS-160 y completarlo más tarde?',
          answer:
            'Sí, puede guardar su solicitud y completarla más tarde. Asegúrese de anotar su ID de solicitud.',
        },
        q5: {
          question:
            '¿Qué debo hacer si cometo un error en mi formulario DS-160?',
          answer:
            'Si comete un error, deberá completar un nuevo formulario DS-160.',
        },
      },
      travelTips: {
        title: 'Consejos de viaje',
        widgetText:
          'Guías prácticas para aprovechar al máximo tu experiencia en el extranjero.',
        tabs: {
          general: 'Generales',
          tropical: 'Climas Tropicales',
          snow: 'Climas frios',
          us: 'Estados Unidos',
        },
        general: {
          packing: 'Empaque ligero',
          packingDetails:
            'Lleva solo lo necesario para evitar cargar peso extra.',
          meds: 'Medicamentos',
          medsDetails: 'Lleva tus medicamentos en su envase original.',
          insurance: 'Seguro de viaje',
          insuranceDetails:
            'Contrata un seguro de viaje para cubrir emergencias médicas.',
          currency: 'Cambio de moneda',
          currencyDetails:
            'Cambia dinero en casas de cambio para obtener una mejor tasa.',
          vaccines: 'Vacunas',
          vaccinesDetails:
            'Consulta si necesitas vacunas especiales para tu destino.',
          emergency: 'Contactos de emergencia',
          emergencyDetails:
            'Lleva una lista con números de emergencia y contactos.',
        },
        snow: {
          packing: 'Empaque ligero',
          packingDetails: 'Climas frios pueden requerir ropa más abrigada.',
          meds: 'Medicamentos',
          medsDetails:
            'Los medicamentos deben estar protegidos del frío. y llevar suficiente para la duración del viaje.',
          insurance: 'Seguro de viaje',
          insuranceDetails:
            'La cobertura de seguro de viaje debe incluir enfermedades relacionadas con el frio.',
          vaccines: 'Vacunas',
          vaccinesDetails:
            'Vacunas contra la gripe y enfermedades comunes en climas frios.',
          emergency: 'Contactos de emergencia',
          emergencyDetails:
            'Lleva una lista con números de emergencia y contactos y asegurate de tener un plan de emergencia en caso de tormentas de nieve.',
        },
        tropical: {
          packing: 'Empaque ligero',
          packingDetails:
            'Climas tropicales pueden requerir menos ropa equipada para el calor.',
          meds: 'Medicamentos',
          medsDetails:
            'Ten en cuenta la humedad y el calor al llevar tus medicamentos.',
          insurance: 'Seguro de viaje',
          insuranceDetails:
            'La cobertura de seguro de viaje debe incluir enfermedades tropicales, así como protección contra insectos.',
          vaccines: 'Vacunas',
          vaccinesDetails:
            'Vacunas contra enfermedades tropicales y fiebre amarilla.',
          emergency: 'Contactos de emergencia',
          emergencyDetails:
            'Lleva una lista con números de emergencia y contactos y asegurate de tener un plan de emergencia en caso de enfermedades tropicales.',
        },
        us: {
          packing: 'Empaque ligero',
          packingDetails:
            'Lleva solo lo necesario para evitar cargar peso extra.',
          meds: 'Medicamentos',
          medsDetails: 'Lleva tus medicamentos en su envase original.',
          insurance: 'Seguro de viaje',
          insuranceDetails:
            'Contrata un seguro de viaje para cubrir emergencias médicas.',
          currency: 'Cambio de moneda',
          currencyDetails:
            'Cambia dinero en casas de cambio para obtener una mejor tasa.',
          vaccines: 'Vacunas',
          vaccinesDetails:
            'Consulta si necesitas vacunas especiales para tu destino.',
          emergency: 'Contactos de emergencia',
          emergencyDetails:
            'Lleva una lista con números de emergencia y contactos.',
          transportation: 'Transporte',
          transportationDetails:
            'Familiarízate con las opciones de transporte público y privado.',
          accommodation: 'Alojamiento',
          accommodationDetails:
            'Reserva tu alojamiento con antelación para obtener mejores tarifas.',
          food: 'Comida',
          foodDetails:
            'Prueba la comida local y sigue las recomendaciones de higiene.',
          safety: 'Seguridad',
          safetyDetails:
            'Mantén tus pertenencias seguras y sigue las indicaciones de seguridad locales.',
        },
      },
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
