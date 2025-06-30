const weddingDate = new Date('2025-11-30T00:00:00');
const countdownEl = document.getElementById('countdown');
const toggleBtn = document.getElementById('lang-toggle');
const translations = {
  es: {
    // Menú
    'nav-inicio': 'Inicio',
    'nav-nosotros': 'Nosotros',
    'nav-preboda': 'Pre-boda',
    'nav-boda': 'Nuestra Boda',
    'nav-datos': 'Datos de Interés',
    'nav-rsvp': 'RSVP',
    'lang-toggle': '🌐 ES',

    // Hero
    'event-label': 'La Boda de',
    'event-title': 'Juandi & Dani',
    'event-date': '30 de Noviembre, 2025',
    'event-location': 'Santa Marta, Colombia',

    // Nosotros
    'nosotros-title': '¡Sí, nos casamos!',
    'nosotros-text': 'Desde el momento en que nos conocimos, nuestros corazones se unieron y hemos sido inseparables desde entonces. Han sido seis años llenos de amor, risas, aventuras y crecimiento compartido. Hoy, con muchísima ilusión, estamos listos para dar el siguiente paso y celebrar nuestro amor con ustedes, oficializando nuestra historia para siempre frente al mar.',

    // Pre-boda
    'preboda-title': 'Pre-boda',
    'preboda-text': 'Sabemos que muchos están viajando desde lejos para acompañarnos y eso significa el mundo para nosotros. Si llegas desde el sábado, nos encantaría compartir un evento de bienvenida. Una oportunidad para reencontrarnos y empezar a celebrar juntos\nFecha: Sábado 29 Noviembre del 2025\nLugar: Por Definir\nHora: 5:00 PM',

    // Detalles boda
    'detalles-title': 'Nuestra Boda',
    'ceremonia-title': 'Ceremonia',
    'ceremonia-time': '4:00 PM',
    'ceremonia-place': 'En la Playa',
    'recepcion-title': 'Recepción',
    'recepcion-time': '6:00 PM',
    'recepcion-place': 'Casa Kapikua',
    'lugar-title': 'Lugar: Casa Kapikua',
    'lugar-location': 'Km 20 vía Santa Marta – Ciénaga, Santa Marta, Colombia',

    // Código de vestimenta y clima
    'dresscode-title': 'Dress Code',
    'dresscode-text1': 'Se reserva color blanco y azul.',
    'dresscode-text2': 'Damas: Vestido largo de un solo tono sin estampados, calzado con tacón grueso o sandalias planas (la ceremonia será en la playa).',
    'dresscode-text3': 'Caballeros: Guayabera o camisa de lino.',
    'weather-title': 'Clima',
    'weather-text': 'Espera clima tropical cálido con temperaturas alrededor de 30 °C. Se recomiendan telas ligeras.',

    // Viajes y hospedaje
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
    'hotel2-desc': 'El Hotel GHL Relax Costa Azul está ubicado a unos 3km de Kapikua.',
    'hotel3-name': 'Wyndham',
    'hotel3-desc': 'Está ubicado unos 5 km de Kapikua.',
    'hotel4-name': 'Zuana',
    'hotel4-desc': 'Está ubicado a unos 6km de Kapikua.',
    'hotel5-name': 'Decameron',
    'hotel5-desc': 'Está ubicado a 1km de Kapikua.',
    'hotel6-name': 'Hilton',
    'hotel6-desc': 'Está ubicado a unos 6km de Kapikua.',

    // Restaurantes
    'restaurantes-recomendados': 'Restaurantes Recomendados',
    'restaurantes-centro': 'Centro Histórico',
    'restaurantes-pozos': 'Pozos Colorados',

    // Regalos
    'regalos-title': 'Lista de Regalos',
    'regalos-subtitle': 'Tu Presencia es Nuestro Regalo',
    'regalos-text': 'Tu presencia en nuestra boda es el regalo más grande de todos. Para aquellos que deseen honrarnos con un regalo, hemos creado estas opciones:',
    'lluvia-title': 'Lluvia de Sobres',
    'lluvia-text': 'El día de la boda tendremos un espacio especial para recibir tu sobre con todo nuestro cariño.',
    'fondo-title': 'Transferencia Digital',
    'fondo-text': 'También puedes hacernos un aporte desde donde estés a través de este link de pago.',
    'fondo-btn': 'Regalo',

    // Confirmación
    'confirmacion-title': 'Confirmación',
    'confirmacion-subtitle': 'Por favor completa tu confirmación antes del 1 de octubre de 2025. Para ayudarnos con la organización, te pedimos que cada persona registre su asistencia por separado, incluso si hacen parte del mismo grupo o familia.',
    'form-label-asistencia': '¿Vas a asistir?',
    'form-si': '¡Sí, estaré ahí!',
    'form-no': 'Lo siento, no puedo asistir',
    'form-nombre': 'Nombre Completo *',
    'form-correo': 'Correo Electrónico *',
    'form-dietas': 'Restricciones Dietéticas',
    'form-placeholder-dietas': 'Vegetariano, Vegano, Alergias, etc.',
    'form-mensaje': 'Mensaje Especial (Opcional)',
    'form-boton': 'Enviar Confirmación',

    // Contacto
    'contacto-title': '¿Preguntas?',

    // Footer
    'footer-names': 'Juandi & Dani',
    'footer-date-location': '30 de Noviembre, 2025 · Santa Marta, Colombia',
    'footer-madeby': 'Hecho con ♥ por Juandi & Dani'
  },

  en: {
    // Menú
    'nav-inicio': 'Home',
    'nav-nosotros': 'About Us',
    'nav-preboda': 'Pre-Wedding',
    'nav-boda': 'Our Wedding',
    'nav-datos': 'Info',
    'nav-rsvp': 'RSVP',
    'lang-toggle': '🌐 EN',

    // Hero
    'event-label': 'The Wedding of',
    'event-title': 'Juandi & Dani',
    'event-date': 'November 30, 2025',
    'event-location': 'Santa Marta, Colombia',

    // Nosotros
    'nosotros-title': 'We’re Getting Married!',
    'nosotros-text': 'From the moment we met, our hearts united and we’ve been inseparable ever since. These six years have been filled with love, laughter, adventure, and shared growth. Now, with great joy, we’re ready to take the next step and celebrate our love with you — making our story official forever by the sea.',

    // Pre-boda
    'preboda-title': 'Pre-Wedding',
    'preboda-text': 'We know many of you are traveling from afar, and that means the world to us. If you arrive on Saturday, we’d love to share a welcome gathering — a chance to reconnect and start the celebration together.\nDate: Saturday, November 29, 2025\nPlace: To be confirmed\nTime: 5:00 PM',

    // Detalles boda
    'detalles-title': 'Our Wedding',
    'ceremonia-title': 'Ceremony',
    'ceremonia-time': '4:00 PM',
    'ceremonia-place': 'On the Beach',
    'recepcion-title': 'Reception',
    'recepcion-time': '6:00 PM',
    'recepcion-place': 'Casa Kapikua',
    'lugar-title': 'Location: Casa Kapikua',
    'lugar-location': 'Km 20 via Santa Marta – Ciénaga, Santa Marta, Colombia',

    // Código de vestimenta y clima
    'dresscode-title': 'Dress Code',
    'dresscode-text1': 'White and blue colors reserved.',
    'dresscode-text2': 'Ladies: Long solid-colored dress (no prints), chunky heels or flat sandals (ceremony on the beach).',
    'dresscode-text3': 'Gentlemen: Guayabera or linen shirt.',
    'weather-title': 'Weather',
    'weather-text': 'Expect warm tropical weather around 30 °C. Lightweight fabrics are recommended.',

    // Viajes y hospedaje
    'viajes-title': 'Travel & Stay',
    'viajes-subtitle': 'Planning Your Visit',
    'aeropuerto-title': 'Nearest Airport',
    'aeropuerto-text': 'Simón Bolívar International Airport (SMR)',
    'transporte-title': 'Transportation',
    'transporte-text': 'We recommend using Uber, taxi, or private transport',
    'santamarta-title': 'Santa Marta',
    'santamarta-text': 'Pearl of America, beautiful coastal city',
    'hoteles-title': 'Recommended Hotels',

    'hotel1-name': 'Airbnb',
    'hotel1-desc': 'Book your stay and enjoy a memorable experience.',
    'hotel2-name': 'GHL',
    'hotel2-desc': 'The GHL Relax Costa Azul Hotel is about 3km from Kapikua.',
    'hotel3-name': 'Wyndham',
    'hotel3-desc': 'Located about 5 km from Kapikua.',
    'hotel4-name': 'Zuana',
    'hotel4-desc': 'Located about 6km from Kapikua.',
    'hotel5-name': 'Decameron',
    'hotel5-desc': 'Located 1km from Kapikua.',
    'hotel6-name': 'Hilton',
    'hotel6-desc': 'Located about 6km from Kapikua.',

    // Restaurantes
    'restaurantes-recomendados': 'Recommended Restaurants',
    'restaurantes-centro': 'Historic Center',
    'restaurantes-pozos': 'Pozos Colorados',

    // Regalos
    'regalos-title': 'Gift Options',
    'regalos-subtitle': 'Your Presence is Our Gift',
    'regalos-text': 'Your presence at our wedding is the greatest gift. If you would like to honor us with a present, here are two options:',
    'lluvia-title': 'Envelope Shower',
    'lluvia-text': 'We’ll have a special space at the wedding to receive your envelope with love.',
    'fondo-title': 'Digital Contribution',
    'fondo-text': 'You can also make a contribution from anywhere through this payment link.',
    'fondo-btn': 'Gift',

    // Confirmación
    'confirmacion-title': 'RSVP',
    'confirmacion-subtitle': 'Please respond by October 1, 2025. We kindly ask each person to RSVP individually, even if attending as part of a group or family.',
    'form-label-asistencia': 'Will you attend?',
    'form-si': 'Yes, I’ll be there!',
    'form-no': 'Sorry, I can’t attend',
    'form-nombre': 'Full Name *',
    'form-correo': 'Email *',
    'form-dietas': 'Dietary Restrictions',
    'form-placeholder-dietas': 'Vegetarian, Vegan, Allergies, etc.',
    'form-mensaje': 'Special Message (Optional)',
    'form-boton': 'Send Confirmation',

    // Contacto
    'contacto-title': 'Questions?',

    // Footer
    'footer-names': 'Juandi & Dani',
    'footer-date-location': 'November 30, 2025 · Santa Marta, Colombia',
    'footer-madeby': 'Made with ♥ by Juandi & Dani'
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
