// Preguntas frecuentes generales (/preguntas-frecuentes). Respuestas cortas y con datos
// concretos: son las que citan Google y los asistentes de IA.
//
// Preguntas que el plan recomienda y que faltan porque requieren datos del equipo
// (agregarlas cuando estén definidas):
//   - ¿Atienden por Fonasa?
//   - ¿Cuánto dura una sesión y cada cuánto son?
//   - ¿Puedo elegir a mi psicóloga?
//   - ¿Cuál es la política de cancelación?
//   - ¿Qué Isapres o seguros complementarios reembolsan?
//   - ¿Hay estacionamiento?
//   - ¿El informe de evaluación de autismo sirve para trámites (credencial de discapacidad, colegio, trabajo)?

import { NEGOCIO, direccionCompleta } from './negocio.js'
import { PRECIOS, pesos } from './precios.js'

const P = PRECIOS

export const categoriasPreguntas = [
  {
    titulo: 'Valores y pagos',
    preguntas: [
      {
        pregunta: '¿Cuánto cuesta una sesión de psicoterapia?',
        respuesta: `La sesión de atención general cuesta ${pesos(P.general.monto)}, la atención con Isapre ${pesos(P.isapre.monto)} y la psicoterapia de parejas ${pesos(P.pareja.monto)}.`,
      },
      {
        pregunta: '¿Atienden con Isapre?',
        respuesta: `Sí. La sesión con Isapre cuesta ${pesos(P.isapre.monto)} y se entrega boleta para solicitar el reembolso.`,
      },
      {
        pregunta: '¿Cuánto cuesta la evaluación de autismo?',
        respuesta: `La evaluación para la identificación de autismo en adolescentes y adultos cuesta ${pesos(P.autismo.monto)} e incluye cuatro sesiones y un informe escrito. Se puede pagar en cuotas con tarjeta de débito o crédito.`,
        enlace: '/servicios/evaluacion-autismo-adultos-adolescentes',
      },
    ],
  },
  {
    titulo: 'Atención',
    preguntas: [
      {
        pregunta: '¿Atienden online?',
        respuesta: 'Sí. Ofrecemos psicoterapia online por videollamada, con los mismos valores y el mismo enfoque que la atención presencial.',
        enlace: '/servicios/terapia-online',
      },
      {
        pregunta: '¿A quiénes atienden?',
        respuesta: 'Atendemos infancia, adolescencia y adultez, además de parejas. Tenemos especialidad en neurodivergencias, temáticas LGBTIAQ+ y enfoque de género.',
        enlace: '/servicios',
      },
      {
        pregunta: '¿Qué es la terapia afirmativa?',
        respuesta: 'Es una psicoterapia que parte del respeto a las orientaciones sexuales, las identidades de género y las neurodivergencias, sin considerarlas un problema que haya que corregir. Se centra en el bienestar de la persona y en el impacto de la discriminación en su vida.',
        enlace: '/servicios/psicoterapia-afirmativa-lgbtiq',
      },
      {
        pregunta: '¿Qué es el enfoque feminista en psicoterapia?',
        respuesta: 'Es una forma de trabajo que considera cómo el género, los mandatos sociales y las desigualdades influyen en la salud mental, sin culpabilizar a la persona por experiencias que tienen raíces sociales.',
        enlace: '/servicios/psicologia-feminista',
      },
      {
        pregunta: '¿Qué significa neuroafirmativo?',
        respuesta: 'Significa entender el autismo, el TDAH y otras neurodivergencias como formas distintas de funcionamiento, no como algo que deba corregirse. La terapia busca bienestar, no que la persona oculte quién es.',
        enlace: '/servicios/neurodivergencias',
      },
      {
        pregunta: '¿Evalúan autismo en niñas y niños?',
        respuesta: 'La evaluación para la identificación de autismo que ofrecemos actualmente está dirigida a adolescentes y personas adultas.',
      },
      {
        pregunta: '¿La información que entrego es confidencial?',
        respuesta: 'Sí. Toda la información que compartes en el formulario y en las sesiones es confidencial y se usa solo para tu atención, de acuerdo con la Ley 20.584 sobre derechos y deberes de los pacientes y la ética profesional.',
      },
    ],
  },
  {
    titulo: 'Agenda y ubicación',
    preguntas: [
      {
        pregunta: '¿Cómo agendo una hora?',
        respuesta: 'Completa el formulario de atención general o el de evaluación de autismo en la página "Agenda tu hora". El equipo se pondrá en contacto contigo a la brevedad para coordinar una sesión inicial.',
        enlace: '/formulario',
      },
      {
        pregunta: '¿Dónde están ubicadas?',
        respuesta: `En ${direccionCompleta()}, a pasos del ${NEGOCIO.metro}.`,
        enlace: '/ubicacion',
      },
    ],
  },
]

export const todasLasPreguntas = categoriasPreguntas.flatMap((c) => c.preguntas)
