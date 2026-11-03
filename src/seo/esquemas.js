// Datos estructurados schema.org (JSON-LD), según la sección 5 del plan SEO.
// Validar con https://search.google.com/test/rich-results y https://validator.schema.org/
//
// Todas las páginas incluyen la ficha de la clínica y del sitio; cada página agrega sus nodos.

import { NEGOCIO, SITE_URL } from '../data/negocio.js'
import { PRECIOS, pesos } from '../data/precios.js'
import { servicios } from '../data/servicios.js'

const ID_CLINICA = `${SITE_URL}/#clinica`
const ID_SITIO = `${SITE_URL}/#sitio`
const absoluta = (ruta) => new URL(ruta, SITE_URL).href

const montos = Object.values(PRECIOS).map((p) => p.monto)

const clinica = () => {
  const { calle, oficina, comuna, region, codigoPostal, pais } = NEGOCIO.direccion
  return {
    '@type': 'MedicalClinic',
    '@id': ID_CLINICA,
    name: NEGOCIO.nombre,
    alternateName: NEGOCIO.nombreLargo,
    description: NEGOCIO.descripcion,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    email: NEGOCIO.correo,
    ...(NEGOCIO.telefono && { telephone: NEGOCIO.telefono }),
    priceRange: `${pesos(Math.min(...montos))} - ${pesos(Math.max(...montos))}`,
    currenciesAccepted: 'CLP',
    paymentAccepted: NEGOCIO.formasDePago,
    address: {
      '@type': 'PostalAddress',
      streetAddress: oficina ? `${calle}, oficina ${oficina}` : calle,
      addressLocality: comuna,
      addressRegion: region,
      ...(codigoPostal && { postalCode: codigoPostal }),
      addressCountry: pais,
    },
    geo: { '@type': 'GeoCoordinates', latitude: NEGOCIO.geo.latitud, longitude: NEGOCIO.geo.longitud },
    hasMap: NEGOCIO.mapa,
    ...(NEGOCIO.horario.length && {
      openingHoursSpecification: NEGOCIO.horario.map((h) => ({
        '@type': 'OpeningHoursSpecification', dayOfWeek: h.dias, opens: h.abre, closes: h.cierra,
      })),
    }),
    areaServed: [{ '@type': 'City', name: 'Santiago' }, { '@type': 'Country', name: 'Chile' }],
    availableLanguage: 'es',
    knowsAbout: [
      'Psicoterapia', 'Neurodivergencias', 'Autismo', 'TDAH',
      'Evaluación para la identificación de autismo (ADOS-2 y ADI-R)',
      'Psicoterapia afirmativa LGBTIAQ+', 'Psicoterapia con enfoque de género',
      'Terapia de parejas', 'Psicoterapia infanto-juvenil',
    ],
    availableService: servicios.map((s) => ({ '@id': `${absoluta(`/servicios/${s.slug}`)}#servicio` })),
    sameAs: [NEGOCIO.instagram],
  }
}

const sitio = () => ({
  '@type': 'WebSite',
  '@id': ID_SITIO,
  name: NEGOCIO.nombre,
  url: `${SITE_URL}/`,
  inLanguage: 'es-CL',
  publisher: { '@id': ID_CLINICA },
})

export const grafo = (nodos = []) => ({
  '@context': 'https://schema.org',
  '@graph': [clinica(), sitio(), ...nodos],
})

// [{ nombre, ruta }] -> BreadcrumbList. El último elemento es la página actual.
export const migas = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.nombre,
    item: absoluta(item.ruta),
  })),
})

export const paginaPreguntas = (preguntas) => ({
  '@type': 'FAQPage',
  mainEntity: preguntas.map(({ pregunta, respuesta }) => ({
    '@type': 'Question',
    name: pregunta,
    acceptedAnswer: { '@type': 'Answer', text: respuesta },
  })),
})

const oferta = (clave) => ({
  '@type': 'Offer',
  name: PRECIOS[clave].nombre,
  price: String(PRECIOS[clave].monto),
  priceCurrency: 'CLP',
  description: PRECIOS[clave].detalle,
})

export const servicio = (s) => ({
  '@type': 'Service',
  '@id': `${absoluta(`/servicios/${s.slug}`)}#servicio`,
  name: s.nombre,
  description: s.intro,
  url: absoluta(`/servicios/${s.slug}`),
  serviceType: 'Psicología',
  provider: { '@id': ID_CLINICA },
  areaServed: [{ '@type': 'City', name: 'Santiago' }, { '@type': 'Country', name: 'Chile' }],
  ...(s.precios.length && { offers: s.precios.map(oferta) }),
})

export const catalogoPrecios = () => ({
  '@type': 'OfferCatalog',
  name: `Valores ${NEGOCIO.nombre}`,
  itemListElement: Object.keys(PRECIOS).map(oferta),
})

export const persona = (p) => ({
  '@type': 'Person',
  '@id': `${absoluta(`/equipo/${p.slug}`)}#persona`,
  name: p.nombre,
  jobTitle: p.cargo,
  url: absoluta(`/equipo/${p.slug}`),
  image: absoluta(p.imagen),
  worksFor: { '@id': ID_CLINICA },
  alumniOf: p.universidades.map((u) => ({ '@type': 'CollegeOrUniversity', name: u })),
  hasCredential: p.formacion.map((f) => ({ '@type': 'EducationalOccupationalCredential', name: f })),
  knowsAbout: p.areas,
  ...(p.registroSIS && { identifier: { '@type': 'PropertyValue', propertyID: 'Registro Nacional de Prestadores Individuales de Salud', value: p.registroSIS } }),
})
