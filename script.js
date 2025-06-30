const weddingDate = new Date('2025-11-30T00:00:00');
const countdownEl = document.getElementById('countdown');
const toggleBtn = document.getElementById('lang-toggle');

const translations = {
  es: {
    'banner-subtitle': 'RESERVA LA FECHA',
    'banner-title': 'Juandi & Dani',
    'countdown-label': 'Cuenta Regresiva',
    'event-label': 'La Boda de',
    'event-title': 'Juandi & Dani',
    'event-date': '30 de Noviembre, 2025',
    'event-location': 'Santa Marta, Colombia',

    'nosotros-title': '¡Sí, nos casamos!',
    'nosotros-text':'Desde el momento en que nos conocimos, nuestros corazones se unieron y hemos sido inseparables desde entonces. Han sido seis años llenos de amor, risas, aventuras y crecimiento compartido. Hoy, con muchísima ilusión, estamos listos para dar el siguiente paso y celebrar nuestro amor con ustedes, oficializando nuestra historia para siempre frente al mar.',

    'detalles-title': 'Nuestra Boda',
    'ceremonia-title': 'Ceremonia',
    'ceremonia-time': '4:00 PM',
    'ceremonia-place': 'Playa',
    'recepcion-title': 'Recepción',
    'recepcion-time': '6:00 PM',
    'recepcion-place': 'Casa Kapikua',
    'lugar-title': ' Lugar: Casa Kapikua',
    'lugar-location': 'Km 20 vía Santa Marta – Ciénaga, Santa Marta, Colombia',

    'dresscode-title': 'Código de Vestimenta',
    'dresscode-text1':'Se reserva el color blanco y azul.',
    'dresscode-text2':'Damas: Vestido largo de un solo tono sin estampados, calzado con tacón grueso o sandalias planas (la ceremonia será en la playa).',
    'dresscode-text3':'Caballeros: Guayabera o camisa de lino.',
    'weather-title': 'Clima',
    'weather-text': 'Espera clima tropical cálido con temperaturas alrededor de 30 °C. Se recomiendan telas ligeras.',

    'viajes-title': 'Viajes y Hospedaje',
    'viajes-subtitle': 'Planificando tu Visita',
    'aeropuerto-title': 'Aeropuerto Más Cercano',
    'aeropuerto-text': 'Aeropuerto Internacional Simón Bolívar (SMR)',
    'transporte-title': 'Transporte',
    'transporte-text': 'Se recomienda hacer uso de medios de transporte como Uber, taxi o transporte privado',
    'santamarta-title': 'Santa Marta',
    'santamarta-text': 'Perla de América, hermosa ciudad costera',

    'hoteles-title': 'Hoteles Recomendados',
    'hotel1-name': 'Airbnb',
    'hotel1-desc': 'Reserva tu estancia y disfruta de una experiencia memorable.',
    'hotel2-name': 'GHL',
    'hotel2-desc': 'El Hotel está ubicado a unos 3km de Kapikua.',
    'hotel3-name': 'Wyndham',
    'hotel3-desc': 'Está ubicado unos 5 km de Kapikua.',
    'hotel4-name': 'Zuana Beach Resort',
    'hotel4-desc': 'Está ubicado a 6km de Kapikua.',
    'hotel5-name': 'Decameron',
    'hotel5-desc': 'Está ubicado a 1km de Kapikua.',
    'hotel6-name': 'Hilton',
    'hotel6-desc': 'Está ubicado a 6km de Kapikua.',

    'regalos-title': 'Lista de Regalos',
    'regalos-subtitle': 'Tu Presencia es Nuestro Regalo',
    'regalos-text':
      'Tu presencia en nuestra boda es el regalo más grande de todos. Para aquellos que deseen honrarnos con un regalo, hemos creado estas opciones:',
    'lluvia-title': 'Lluvia de Sobres',
    'lluvia-text': 'El día de la boda tendremos un espacio especial para recibir tu sobre con todo nuestro cariño.',
    'fondo-title': 'Transferencia Digital',
    'fondo-text': 'También puedes hacernos un aporte desde donde estés a través de este link de pago.',

    'confirmacion-title': 'Confirmación',
    'confirmacion-subtitle': 'Por favor completa tu confirmación antes del 1 de octubre de 2025. Para ayudarnos con la organización, te pedimos que cada persona registre su asistencia por separado, incluso si hacen parte del mismo grupo o familia.',

    'contacto-title': '¿Preguntas?',
    'contacto-subtitle': '¿Preguntas? Estamos Aquí para Ayudar'
  },
  en: {
    'banner-subtitle': 'SAVE THE DATE',
    'banner-title': 'Juandi & Dani',
    'countdown-label': 'Countdown',
    'event-label': 'The Wedding of',
    'event-title': 'Juandi & Dani',
    'event-date': 'November 30, 2025',
    'event-location': 'Santa Marta, Colombia',

    'nosotros-title': 'About Us',
    'nosotros-subtitle': 'Our Love Story',
    'nosotros-text':
      'Two hearts, one journey. We met in 2019 and have been inseparable since. After years of adventures, laughter, and growth together, we are ready to take the next step and celebrate our love with all of you in the beautiful city of Santa Marta.',
    'nosotros-names': 'Juandi & Dani',
    'nosotros-date': 'Together since 2019',

    'detalles-title': 'Event Details',
    'ceremonia-title': 'Ceremony',
    'ceremonia-time': '4:00 PM',
    'ceremonia-place': 'On the Beach',
    'recepcion-title': 'Reception',
    'recepcion-time': '6:00 PM',
    'recepcion-place': 'Casa Kapikua',
    'lugar-title': 'Casa Kapikua',
    'lugar-location': 'Km 20 vía Santa Marta – Ciénaga, Santa Marta, Colombia',

    'dresscode-title': 'Dress Code',
    'dresscode-text':
      'White and blue tones reserved.\nLadies: long solid-tone dress (no prints), chunky heels or flat sandals (ceremony on the beach).\nMen: guayabera or linen shirt.',

    'weather-title': 'Weather',
    'weather-text': 'Expect warm tropical weather around 30 °C. Lightweight fabrics recommended.',

    'viajes-title': 'Travel & Stay',
    'viajes-subtitle': 'Planning Your Visit',
    'aeropuerto-title': 'Nearest Airport',
    'aeropuerto-text': 'Simón Bolívar International Airport (SMR)',
    'transporte-title': 'Transportation',
    'transporte-text': 'Transportation will be arranged from airport and locally for out-of-town guests.',
    'santamarta-title': 'Santa Marta',
    'santamarta-text': 'Pearl of America, beautiful coastal city',

    'hoteles-title': 'Recommended Hotels',
    'hotel1-name': 'Hotel Casa San Agustín',
    'hotel1-desc': 'Luxury colonial hotel in the historic center',
    'hotel2-name': 'Hotel Boutique Don Pepe',
    'hotel2-desc': 'Boutique hotel with modern amenities',
    'hotel3-name': 'Casa Verde Hotel',
    'hotel3-desc': 'Eco-friendly hotel near the beach',

    'regalos-title': 'Gift Registry',
    'regalos-subtitle': 'Your Presence is Our Gift',
    'regalos-text':
      'Your presence at our wedding is the greatest gift of all. For those who wish to honor us with a gift, we have created these options:',
    'lluvia-title': 'Envelope Shower',
    'lluvia-text': 'Your generous contribution will help us start our new life together.',
    'fondo-title': 'Honeymoon Fund',
    'fondo-text': 'Help us create memories on our honeymoon adventure.',

    'confirmacion-title': 'RSVP',
    'confirmacion-subtitle': 'Please respond by October 1, 2025',

    'contacto-title': 'Questions?',
    'contacto-subtitle': 'Questions? We Are Here to Help'
  }
};

let currentLang = 'es';

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdownEl.textContent = currentLang === 'es' ? '¡Es el gran día!' : "It's the big day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (currentLang === 'es') {
    countdownEl.textContent = `${days} Días ${hours} Hrs ${minutes} Min ${seconds} Seg`;
  } else {
    countdownEl.textContent = `${days} Days ${hours} Hrs ${minutes} Min ${seconds} Sec`;
  }
}

function switchLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';

  toggleBtn.textContent = currentLang === 'es' ? '🌐 ES' : '🌐 EN';

  for (const id in translations[currentLang]) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = translations[currentLang][id];
    }
  }

  updateCountdown();
}

toggleBtn.addEventListener('click', switchLanguage);

// Iniciar bucle del contador
setInterval(updateCountdown, 1000);
updateCountdown();

// Inicializar texto en español al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  for (const id in translations[currentLang]) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = translations[currentLang][id];
    }
  }
  toggleBtn.textContent = '🌐 ES';
});
