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

    'nosotros-title': 'Nosotros',
    'nosotros-subtitle': 'Nuestra Historia de Amor',
    'nosotros-text':
      'Dos corazones, un viaje. Nos conocimos en 2019 y hemos sido inseparables desde entonces. Después de años de aventuras, risas y crecimiento juntos, estamos listos para dar el siguiente paso y celebrar nuestro amor con todos ustedes en la hermosa ciudad de Santa Marta.',
    'nosotros-names': 'Juandi & Dani',
    'nosotros-date': 'Juntos desde 2019',

    'detalles-title': 'Detalles del Evento',
    'ceremonia-title': 'Ceremonia',
    'ceremonia-time': '4:00 PM',
    'ceremonia-place': 'En la Playa',
    'recepcion-title': 'Recepción',
    'recepcion-time': '6:00 PM',
    'recepcion-place': 'Casa Kapikua',
    'lugar-title': 'Casa Kapikua',
    'lugar-location': 'Km 20 vía Santa Marta – Ciénaga, Santa Marta, Colombia',

    'dresscode-title': 'Código de Vestimenta',
    'dresscode-text':
      'Se reserva color blanco y azul.\nDamas: vestido largo de un solo tono sin estampados, calzado con tacón grueso o sandalias planas (ceremonia será en la playa).\nHombres: guayabera o camisa de lino.',

    'weather-title': 'Clima',
    'weather-text': 'Espera clima tropical cálido con temperaturas alrededor de 30 °C. Se recomiendan telas ligeras.',

    'viajes-title': 'Viajes y Hospedaje',
    'viajes-subtitle': 'Planificando tu Visita',
    'aeropuerto-title': 'Aeropuerto Más Cercano',
    'aeropuerto-text': 'Aeropuerto Internacional Simón Bolívar (SMR)',
    'transporte-title': 'Transporte',
    'transporte-text': 'Se organizará transporte desde el aeropuerto y local para huéspedes de fuera de la ciudad.',
    'santamarta-title': 'Santa Marta',
    'santamarta-text': 'Perla de América, hermosa ciudad costera',

    'hoteles-title': 'Hoteles Recomendados',
    'hotel1-name': 'Hotel Casa San Agustín',
    'hotel1-desc': 'Hotel colonial de lujo en el centro histórico',
    'hotel2-name': 'Hotel Boutique Don Pepe',
    'hotel2-desc': 'Hotel boutique con comodidades modernas',
    'hotel3-name': 'Casa Verde Hotel',
    'hotel3-desc': 'Hotel ecológico cerca de la playa',

    'regalos-title': 'Lista de Regalos',
    'regalos-subtitle': 'Tu Presencia es Nuestro Regalo',
    'regalos-text':
      'Tu presencia en nuestra boda es el regalo más grande de todos. Para aquellos que deseen honrarnos con un regalo, hemos creado estas opciones:',
    'lluvia-title': 'Lluvia de Sobres',
    'lluvia-text': 'Tu generosa contribución nos ayudará a comenzar nuestra nueva vida juntos.',
    'fondo-title': 'Fondo de Luna de Miel',
    'fondo-text': 'Ayúdanos a crear recuerdos en nuestra aventura de luna de miel.',

    'confirmacion-title': 'Confirmación',
    'confirmacion-subtitle': 'Por favor responde antes del 1 de Octubre, 2025',

    'contacto-title': 'Contáctanos',
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

    'contacto-title': 'Contact Us',
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
