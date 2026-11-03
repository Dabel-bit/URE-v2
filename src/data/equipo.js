// Profesionales del centro. Cada una tiene su página en /equipo/<slug>.
//
// registroSIS: número en el Registro Nacional de Prestadores Individuales de la
// Superintendencia de Salud. Refuerza la confianza (E-E-A-T) en Google. Pendiente para todas.
// La consulta pública está en REGISTRO_PRESTADORES_URL.

import magda from '../assets/img/magda.webp'
import bri from '../assets/img/bri.webp'
import sofi from '../assets/img/sofi.webp'
import ivonn from '../assets/img/ivonn.webp'
import vale from '../assets/img/vale.webp'
import catalina from '../assets/img/catalina.webp'
import valeg from '../assets/img/valeg.webp'
import dam from '../assets/img/dam.webp'

export const REGISTRO_PRESTADORES_URL = 'https://rnpi.superdesalud.gob.cl/'

export const equipo = [
  {
    slug: 'magdalena-daveggio',
    nombre: 'Magdalena Daveggio Urzúa',
    cargo: 'Codirectora · Psicóloga clínica',
    pronombres: 'Ella',
    imagen: magda,
    certificadaAutismo: true,
    registroSIS: '',
    universidades: ['Universidad Diego Portales', 'Pontificia Universidad Católica de Chile'],
    formacion: [
      'Psicóloga, Universidad Diego Portales. Minor en Historia.',
      'Magíster en Psicología Clínica, Pontificia Universidad Católica de Chile.',
      'Diplomada en Trastornos de la Personalidad, Pontificia Universidad Católica de Chile.',
      'Diplomada en Autismo, Fundación AMAsperger.',
      'Certificada para la evaluación de identificación de autismo (ADOS-2 y ADI-R).',
    ],
    poblaciones: ['Adultez'],
    areas: ['Trastornos de la personalidad', 'Neurodivergencias', 'Trastorno afectivo bipolar', 'Trastornos de la conducta alimentaria', 'Trauma', 'Atención general'],
    enfoque: 'Aborda los tratamientos desde un enfoque neuroafirmativo, de género y de atención afirmativa a la diversidad sexual y de género.',
  },
  {
    slug: 'brighitt-sanchez',
    nombre: 'Brighitt Sánchez Estrada',
    cargo: 'Codirectora · Psicóloga clínica',
    pronombres: 'Ella',
    imagen: bri,
    certificadaAutismo: true,
    registroSIS: '',
    universidades: ['Universidad Diego Portales'],
    formacion: [
      'Psicóloga y Bachiller en Ciencias Sociales, Universidad Diego Portales.',
      'Diplomada de Honores en Género, Universidad Diego Portales.',
      'Postítulo en Psicoterapia Psicoanalítica para la atención clínica de pacientes de alta complejidad, Instituto Psiquiátrico Dr. José Horwitz Barak.',
      'Certificada para la evaluación de identificación de autismo (ADOS-2 y ADI-R).',
    ],
    poblaciones: ['Adolescencia', 'Adultez'],
    areas: ['Procesos de transición de identidad de género', 'Neurodivergencias', 'Trastornos del ánimo', 'Violencia de género', 'Trauma', 'Trastornos de la conducta alimentaria'],
    enfoque: 'Además de su trabajo en el centro, se desempeña como psicóloga clínica en el Proyecto T del Centro de Estudios en Psicología Clínica y Psicoterapia (CEPPS).',
  },
  {
    slug: 'sofia-riquelme',
    nombre: 'Sofia Riquelme Cornejo',
    cargo: 'Codirectora · Psicóloga clínica',
    pronombres: 'Ella',
    imagen: sofi,
    certificadaAutismo: true,
    registroSIS: '',
    universidades: ['Universidad Diego Portales', 'Universidad Alberto Hurtado'],
    formacion: [
      'Psicóloga, Universidad Diego Portales.',
      'Magíster en Clínica Relacional, Universidad Alberto Hurtado.',
      'Certificada para la evaluación de identificación de autismo (ADOS-2 y ADI-R).',
    ],
    poblaciones: ['Infancia', 'Adolescencia', 'Adultez joven'],
    areas: ['Neurodiversidad', 'Trastornos del ánimo', 'Trastornos de la conducta alimentaria', 'Atención general'],
    enfoque: 'Se especializa en atención psicoterapéutica a población infanto-juvenil y adultez joven.',
  },
  {
    slug: 'ivonn-lopez',
    nombre: 'Ivonn López Morales',
    cargo: 'Codirectora · Psicóloga clínica',
    pronombres: 'Ella',
    imagen: ivonn,
    certificadaAutismo: false,
    registroSIS: '',
    universidades: ['Universidad Diego Portales'],
    formacion: [
      'Psicóloga y Minor en Ciencias Sociales, Universidad Diego Portales.',
      'Magíster en Psicología Jurídica y Forense, Universidad Diego Portales.',
    ],
    poblaciones: ['Adultez'],
    areas: ['Autismo', 'TDAH', 'Trastornos de la personalidad', 'Trastorno afectivo bipolar', 'Temáticas del ciclo vital'],
    enfoque: 'Trabaja desde un enfoque de derechos humanos, de género y de atención afirmativa a la diversidad sexual y de género. Además, realiza peritajes para Tribunales de Familia.',
  },
  {
    slug: 'valentina-morales',
    nombre: 'Valentina Morales Carvajal',
    cargo: 'Psicóloga clínica',
    pronombres: 'Ella',
    imagen: vale,
    certificadaAutismo: true,
    registroSIS: '',
    universidades: ['Universidad Diego Portales'],
    formacion: [
      'Psicóloga, Universidad Diego Portales.',
      'Certificada para la evaluación de identificación de autismo (ADOS-2 y ADI-R).',
    ],
    poblaciones: ['Adultez'],
    areas: ['Gestión emocional', 'Duelo', 'Alimentación intuitiva', 'Ansiedad', 'Neurodiversidad', 'Diversidad sexual'],
    enfoque: 'Trabaja desde un enfoque integrativo, de género y psicosocial.',
  },
  {
    slug: 'catalina-magnere',
    nombre: 'Catalina Magnère Cárdenas',
    cargo: 'Psicólogx clínica',
    pronombres: 'Ella / Elle',
    imagen: catalina,
    certificadaAutismo: false,
    registroSIS: '',
    universidades: ['Universidad Diego Portales', 'Universidad Alberto Hurtado'],
    formacion: [
      'Psicóloga clínica, Universidad Diego Portales.',
      'Postítulo en Terapia Sistémica Relacional para Familias y Parejas, Universidad Alberto Hurtado.',
    ],
    poblaciones: ['Adultez', 'Parejas'],
    areas: ['Terapia de parejas LGBTIAQ+', 'Psicoterapia afirmativa para la diversidad sexual y de género', 'Terapia individual'],
    enfoque: 'Trabaja desde un enfoque de género y neuroafirmativo, en terapia individual y de parejas.',
  },
  {
    slug: 'valentina-guerra',
    nombre: 'Valentina Guerra Venegas',
    cargo: 'Psicóloga clínica',
    pronombres: 'Ella',
    imagen: valeg,
    certificadaAutismo: false,
    registroSIS: '',
    universidades: ['Universidad Diego Portales'],
    formacion: ['Psicóloga, Universidad Diego Portales.'],
    poblaciones: ['Infancia', 'Adolescencia', 'Adultez'],
    areas: ['Primeros auxilios psicológicos', 'Ansiedad', 'Autoestima', 'Neurodivergencias', 'Violencia de género'],
    enfoque: 'Trabaja desde una perspectiva sistémica con enfoque de género y atención afirmativa y neuroafirmativa.',
  },
  {
    slug: 'damaris-carrasco',
    nombre: 'Dámaris Carrasco Navas',
    cargo: 'Psicóloga clínica',
    pronombres: 'Ella',
    imagen: dam,
    certificadaAutismo: false,
    registroSIS: '',
    universidades: ['Universidad Alberto Hurtado'],
    formacion: [
      'Psicóloga clínica, Universidad Alberto Hurtado.',
      'Diplomada en Psicología del Trauma.',
      'Diplomada en Clínica de Bordes y Abordaje Institucional.',
    ],
    poblaciones: ['Adolescencia', 'Adultez'],
    areas: ['Trauma', 'Trastornos de la personalidad', 'Trastornos del ánimo'],
    enfoque: 'Trabaja desde una orientación psicoanalítica.',
  },
]

export const buscarProfesional = (slug) => equipo.find((p) => p.slug === slug)
export const profesionales = (slugs) => slugs.map(buscarProfesional).filter(Boolean)
