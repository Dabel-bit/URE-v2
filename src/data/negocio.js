// Ficha única del negocio (NAP: nombre, dirección, teléfono).
// Debe ser IDÉNTICA a la de Google Business Profile, Instagram y directorios
// (ver configuracion-negocio-unrincondelencuentro.docx, sección 1).
//
// Los campos vacíos ('' o []) no se muestran en el sitio ni en los datos estructurados.
// Completarlos es la tarea más urgente del plan SEO.

export const SITE_URL = 'https://unrincondelencuentro.cl'

export const NEGOCIO = {
  nombre: 'Un Rincón del Encuentro',
  nombreLargo: 'Centro Psicológico Un Rincón del Encuentro',
  descripcionCorta: 'Centro de psicología feminista, afirmativa y neurodiversa en Providencia, Santiago. Atención presencial y online.',
  descripcion:
    'Colectivo de psicólogas feministas en Providencia, a pasos del Metro Los Leones. Psicoterapia afirmativa con enfoque de género y especialidad en temáticas LGBTIAQ+ y neurodivergencias, para infancia, adolescencia y adultez; terapia de parejas y evaluación para la identificación de autismo en adolescentes y adultos (ADOS-2 y ADI-R). Atención presencial y online.',

  correo: 'unrincondelencuentro@gmail.com',
  // Formato visible: '+56 9 1234 5678'. Pendiente.
  telefono: '',
  // Solo dígitos, con código de país: '56912345678'. Activa el botón flotante de WhatsApp. Pendiente.
  whatsapp: '',

  direccion: {
    calle: 'Andrés de Fuenzalida 22',
    // El edificio tiene otros centros de salud: sin oficina, Google puede confundir la ficha. Pendiente.
    oficina: '',
    comuna: 'Providencia',
    ciudad: 'Santiago',
    region: 'Región Metropolitana',
    codigoPostal: '',
    pais: 'CL',
  },
  metro: 'Metro Los Leones (Línea 1)',
  geo: { latitud: -33.417991, longitud: -70.6031775 },
  mapa: 'https://maps.app.goo.gl/Pp8aakQ4LJmejiVd9',
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.201486653369!2d-70.6031775!3d-33.417991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfd4e06ebfd3%3A0x4bc02c134ff7c206!2sCentro%20Psicol%C3%B3gico%20Un%20Rinc%C3%B3n%20Del%20Encuentro!5e0!3m2!1ses-419!2scl!4v1742389957727!5m2!1ses-419!2scl',

  // Horario real de atención. Ejemplo:
  //   { etiqueta: 'Lunes a viernes', dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '09:00', cierra: '20:00' }
  // Pendiente.
  horario: [],

  instagram: 'https://www.instagram.com/unrincondelencuentro',
  instagramUsuario: '@unrincondelencuentro',

  formularios: {
    general: 'https://docs.google.com/forms/d/e/1FAIpQLSc-Tc8eP4tdGjB3qqyuYJCe1JZ7XRXeFl_LDRkQNML0MkaFSw/viewform',
    // Antes apuntaba a la URL de edición (/edit?chromeless=1), que pide permisos. Esta es la pública.
    autismo: 'https://docs.google.com/forms/d/e/1FAIpQLScl4t-N-3pSObWX_7mK7NOA5IKqSjL_HhKdN-8B4mx8ZD2Ykg/viewform',
  },

  // Agregar transferencia u otras solo si se aceptan.
  formasDePago: 'Tarjeta de débito o crédito',
}

export const direccionCompleta = () => {
  const { calle, oficina, comuna, ciudad } = NEGOCIO.direccion
  return [oficina ? `${calle}, oficina ${oficina}` : calle, comuna, ciudad].join(', ')
}

export const enlaceWhatsapp = (texto = 'Hola, quiero agendar una hora') =>
  NEGOCIO.whatsapp ? `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(texto)}` : ''
