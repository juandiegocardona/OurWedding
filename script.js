const weddingDate = new Date('2025-11-30T00:00:00');
const countdownEl = document.getElementById('countdown');
function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    countdownEl.textContent = '¡Es el gran día!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

const translations = {
  es: {
    'main-title': '¡Nos Casamos!',
    itinerary: 'Itinerario',
    travel: 'Alojamiento y Viaje',
    registry: 'Lista de Regalos',
    rsvp: 'Confirmación de Asistencia',
    dresscode: 'Código de Vestimenta',
    weather: 'Clima',
    about: 'Sobre Nosotros',
    contact: 'Contacto',
    map: 'Ubicación'
  },
  en: {
    'main-title': 'We are Getting Married!',
    itinerary: 'Schedule',
    travel: 'Travel & Stay',
    registry: 'Gift Registry',
    rsvp: 'RSVP',
    dresscode: 'Dress Code',
    weather: 'Weather',
    about: 'About Us',
    contact: 'Contact',
    map: 'Location'
  }
};

let currentLang = 'es';
const toggleBtn = document.getElementById('lang-toggle');
function switchLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  toggleBtn.textContent = currentLang === 'es' ? 'English' : 'Español';
  for (const key in translations.es) {
    const element = document.getElementById(key);
    if (element) {
      if (element.tagName.toLowerCase() === 'h1' || element.tagName.toLowerCase() === 'h2') {
        element.textContent = translations[currentLang][key];
      }
    }
  }
}

toggleBtn.addEventListener('click', switchLanguage);
