// Páginas de servicio (/servicios/<slug>), según la arquitectura del plan SEO (sección 4.1).
//
// Cada servicio sigue la plantilla de la sección 4.2: H1 con la palabra clave, primer párrafo
// "citable" (qué, para quién, dónde y precio), para quién es, proceso, enfoque, valores,
// profesionales y preguntas frecuentes.
//
// Los textos son una base escrita a partir del sitio actual: el equipo debe revisarlos y
// completarlos con su experiencia antes de publicar.

import { PRECIOS, pesos, PASOS_EVALUACION_AUTISMO } from './precios.js'

const P = PRECIOS

export const servicios = [
  {
    slug: 'psicoterapia-afirmativa-lgbtiq',
    nombre: 'Psicoterapia afirmativa LGBTIAQ+',
    titulo: 'Psicóloga LGBTIAQ+ en Providencia y online',
    descripcion: `Psicoterapia afirmativa para personas LGBTIAQ+ y trans en Providencia, Santiago, y online. Equipo de psicólogas con enfoque de género. Desde ${pesos(P.general.monto)} por sesión.`,
    h1: 'Psicoterapia afirmativa LGBTIAQ+ en Providencia y online',
    resumen: 'Un espacio seguro para personas lesbianas, gays, bisexuales, trans, intersex, asexuales, queer y de la diversidad sexual y de género.',
    intro: `Un Rincón del Encuentro ofrece psicoterapia afirmativa para personas LGBTIAQ+ en Providencia, Santiago (a pasos del Metro Los Leones), y online. La atención general cuesta ${pesos(P.general.monto)} por sesión y la atención con Isapre ${pesos(P.isapre.monto)}.`,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para cualquier persona de la diversidad sexual y de género que busque un espacio terapéutico donde no tenga que explicar ni justificar quién es. No es necesario que el motivo de consulta tenga relación con la orientación sexual o la identidad de género: muchas personas consultan por ansiedad, duelo, relaciones, trabajo o autoestima y eligen un espacio afirmativo para sentirse seguras.',
        ],
        lista: [
          'Procesos de exploración o reconocimiento de la orientación sexual o la identidad de género.',
          'Procesos de transición de identidad de género.',
          'Salir del clóset con la familia, en el trabajo o con amistades.',
          'Experiencias de discriminación, violencia o rechazo.',
          'Relaciones de pareja y vínculos afectivos.',
          'Cualquier otro motivo de consulta, en un espacio libre de prejuicios.',
        ],
      },
      {
        titulo: 'Qué significa que la terapia sea afirmativa',
        parrafos: [
          'La psicoterapia afirmativa parte de una base clara: las orientaciones sexuales y las identidades de género diversas no son un problema que haya que corregir. El foco está en el bienestar de la persona y en el impacto que pueden tener en su vida la discriminación, el estigma o la falta de redes de apoyo.',
          'En la práctica, esto significa respetar el nombre y los pronombres de cada consultante, no asumir su orientación ni su identidad, y comprender su historia en su contexto social y cultural.',
        ],
      },
      {
        titulo: 'Nuestro enfoque',
        parrafos: [
          'Somos un colectivo de psicólogas feministas. Integramos el enfoque de género, la perspectiva de derechos humanos y una mirada neuroafirmativa, porque muchas personas viven más de una de estas experiencias a la vez.',
        ],
      },
    ],
    precios: ['general', 'isapre'],
    formulario: 'general',
    profesionales: ['catalina-magnere', 'brighitt-sanchez', 'magdalena-daveggio', 'ivonn-lopez', 'valentina-morales', 'valentina-guerra'],
    faq: [
      {
        pregunta: '¿Tengo que consultar por un tema relacionado con mi orientación o identidad?',
        respuesta: 'No. Puedes consultar por cualquier motivo. Un espacio afirmativo significa que tu orientación y tu identidad serán respetadas, no que la terapia tenga que girar en torno a ellas.',
      },
      {
        pregunta: '¿Acompañan procesos de transición de género?',
        respuesta: 'Sí. Parte del equipo tiene experiencia en el acompañamiento psicoterapéutico de procesos de transición de identidad de género, con un enfoque afirmativo.',
      },
      {
        pregunta: '¿Puedo atenderme online?',
        respuesta: 'Sí. La psicoterapia afirmativa está disponible de forma presencial en Providencia y online por videollamada.',
      },
    ],
  },
  {
    slug: 'psicologia-feminista',
    nombre: 'Psicología feminista y enfoque de género',
    titulo: 'Psicóloga feminista en Santiago | Enfoque de género',
    descripcion: `Psicoterapia con enfoque de género y feminista en Providencia, Santiago, y online. Violencia de género, autoestima, vínculos y salud mental de mujeres y disidencias. Desde ${pesos(P.general.monto)}.`,
    h1: 'Psicología feminista y con enfoque de género en Santiago',
    resumen: 'Psicoterapia que considera cómo el género, los mandatos sociales y las desigualdades influyen en la salud mental.',
    intro: `Un Rincón del Encuentro es un colectivo de psicólogas feministas que ofrece psicoterapia con enfoque de género en Providencia, Santiago, y online, para mujeres, personas trans y disidencias, y para cualquier persona que busque esta mirada. La sesión de atención general cuesta ${pesos(P.general.monto)}.`,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para personas que sienten que parte de su malestar tiene relación con lo que se espera de ellas por su género: en la familia, en la pareja, en el trabajo o en la crianza.',
        ],
        lista: [
          'Experiencias de violencia de género, actual o pasada.',
          'Autoestima, imagen corporal y relación con la alimentación.',
          'Sobrecarga, culpa y mandatos de cuidado.',
          'Vínculos de pareja, dependencia emocional y relaciones que hacen daño.',
          'Trauma.',
        ],
      },
      {
        titulo: 'Qué es el enfoque de género en psicoterapia',
        parrafos: [
          'El enfoque de género reconoce que el malestar psicológico no ocurre en el vacío. Las desigualdades, los estereotipos y la violencia de género influyen en cómo vivimos, en lo que sentimos y en lo que nos permitimos sentir.',
          'Una psicoterapia feminista no impone una ideología a quien consulta. Busca comprender la historia de cada persona en su contexto, sin culpabilizarla por experiencias que tienen raíces sociales, y acompañarla a construir sus propias respuestas.',
        ],
      },
      {
        titulo: 'Nuestro enfoque',
        parrafos: [
          'Trabajamos con infancia, juventud y adultez, en un espacio terapéutico centrado en las necesidades de cada paciente, comprendiendo su historia, su contexto y su cultura. Integramos el enfoque de género con la atención afirmativa a la diversidad sexual y de género y con una mirada neuroafirmativa.',
        ],
      },
    ],
    precios: ['general', 'isapre'],
    formulario: 'general',
    profesionales: ['brighitt-sanchez', 'magdalena-daveggio', 'ivonn-lopez', 'valentina-morales', 'valentina-guerra', 'catalina-magnere'],
    faq: [
      {
        pregunta: '¿Atienden solo a mujeres?',
        respuesta: 'No. El enfoque de género es útil para cualquier persona. Atendemos a mujeres, hombres, personas trans y no binarias, de la infancia a la adultez.',
      },
      {
        pregunta: '¿Acompañan a personas que vivieron violencia de género?',
        respuesta: 'Sí. Parte del equipo se especializa en violencia de género y trauma, con un acompañamiento respetuoso de los tiempos de cada persona.',
      },
    ],
  },
  {
    slug: 'neurodivergencias',
    nombre: 'Psicoterapia para neurodivergencias',
    titulo: 'Psicóloga para autismo y TDAH en adultos | Providencia',
    descripcion: `Psicoterapia neuroafirmativa para personas autistas, con TDAH y otras neurodivergencias en Providencia, Santiago, y online. Infancia, adolescencia y adultez. Desde ${pesos(P.general.monto)}.`,
    h1: 'Psicoterapia neuroafirmativa para autismo, TDAH y otras neurodivergencias',
    resumen: 'Acompañamiento para personas autistas, con TDAH y otras neurodivergencias, desde el respeto a su forma de ser y de percibir el mundo.',
    intro: `Un Rincón del Encuentro ofrece psicoterapia neuroafirmativa para personas autistas, con TDAH y otras neurodivergencias, en Providencia, Santiago, y online. Atendemos infancia, adolescencia y adultez. La sesión de atención general cuesta ${pesos(P.general.monto)} y con Isapre ${pesos(P.isapre.monto)}.`,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para personas con un diagnóstico de autismo o TDAH, para quienes sospechan que podrían ser neurodivergentes y para quienes recibieron un diagnóstico en la adultez y quieren comprender su historia con esa nueva información.',
        ],
        lista: [
          'Cansancio por enmascarar (masking) o adaptarse constantemente a lo que se espera.',
          'Ansiedad, sobrecarga sensorial o burnout.',
          'Dificultades en el estudio, el trabajo o las relaciones.',
          'Procesar un diagnóstico recibido en la adultez.',
          'Acompañamiento a adolescentes y jóvenes neurodivergentes.',
        ],
      },
      {
        titulo: 'Qué significa un enfoque neuroafirmativo',
        parrafos: [
          'El enfoque neuroafirmativo entiende el autismo, el TDAH y otras neurodivergencias como formas distintas de funcionamiento, no como algo que deba "corregirse" para parecer neurotípico. La terapia no busca que la persona oculte quién es, sino que pueda vivir con menos sufrimiento y más bienestar, respetando sus necesidades.',
        ],
      },
      {
        titulo: '¿Necesitas una evaluación?',
        parrafos: [
          'Si quieres confirmar o descartar autismo, realizamos evaluaciones para la identificación de autismo en adolescentes y adultos con instrumentos como ADOS-2 y ADI-R.',
        ],
        enlace: { texto: 'Conoce la evaluación de autismo para adolescentes y adultos', a: '/servicios/evaluacion-autismo-adultos-adolescentes' },
      },
    ],
    precios: ['general', 'isapre'],
    formulario: 'general',
    profesionales: ['magdalena-daveggio', 'ivonn-lopez', 'brighitt-sanchez', 'sofia-riquelme', 'valentina-morales', 'valentina-guerra', 'catalina-magnere'],
    faq: [
      {
        pregunta: '¿Necesito un diagnóstico para consultar?',
        respuesta: 'No. Puedes consultar si tienes un diagnóstico, si lo sospechas o simplemente si te identificas con la experiencia neurodivergente.',
      },
      {
        pregunta: '¿Atienden TDAH en adultos?',
        respuesta: 'Sí. Parte del equipo se especializa en la atención psicoterapéutica de personas adultas con TDAH y otras neurodivergencias.',
      },
    ],
  },
  {
    slug: 'evaluacion-autismo-adultos-adolescentes',
    nombre: 'Evaluación de autismo para adolescentes y adultos',
    titulo: 'Evaluación de autismo en adultos | ADOS-2 Providencia',
    descripcion: `Evaluación para la identificación de autismo en adolescentes y adultos con ADOS-2 y ADI-R en Providencia, Santiago. ${pesos(P.autismo.monto)} en 4 sesiones con informe escrito. Pago en cuotas.`,
    h1: 'Evaluación para la identificación de autismo en adolescentes y adultos',
    resumen: `Proceso de 4 sesiones con instrumentos ADOS-2 y ADI-R e informe escrito. ${pesos(P.autismo.monto)}, con pago en cuotas.`,
    intro: `Un Rincón del Encuentro realiza evaluaciones para la identificación de autismo en adolescentes y adultos en Providencia, Santiago, por ${pesos(P.autismo.monto)} en cuatro sesiones, con pago en cuotas con tarjeta de débito o crédito. Las evaluaciones las realizan psicólogas certificadas en ADOS-2 y ADI-R, e incluyen un informe escrito.`,
    pasos: PASOS_EVALUACION_AUTISMO,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para adolescentes y personas adultas que sospechan que podrían ser autistas y quieren una evaluación especializada. Muchas personas, sobre todo mujeres y personas de la diversidad sexual y de género, no fueron identificadas en la infancia porque aprendieron a enmascarar sus características o porque estas no coincidían con los estereotipos.',
        ],
        lista: [
          'Sensación de ser "diferente" desde siempre, sin saber por qué.',
          'Agotamiento social o necesidad de mucho tiempo a solas para recuperarse.',
          'Sensibilidad sensorial (ruidos, luces, texturas).',
          'Intereses intensos y necesidad de rutinas o previsibilidad.',
          'Diagnósticos previos (ansiedad, depresión, trastornos de la personalidad) que no terminan de explicar la propia experiencia.',
        ],
      },
      {
        titulo: 'Instrumentos: ADOS-2 y ADI-R',
        parrafos: [
          'ADOS-2 (Autism Diagnostic Observation Schedule, segunda edición) es una evaluación estandarizada basada en la observación directa de la comunicación, la interacción social y otros aspectos del comportamiento. ADI-R (Autism Diagnostic Interview, revisada) es una entrevista estructurada sobre el desarrollo de la persona.',
          'Ambos instrumentos son referentes internacionales en la identificación del autismo y requieren profesionales con formación específica. Las psicólogas que realizan la evaluación en el centro están certificadas en ADOS-2 y ADI-R.',
        ],
      },
      {
        titulo: 'Nuestro enfoque',
        parrafos: [
          'Realizamos la evaluación desde una mirada neuroafirmativa: el objetivo no es poner una etiqueta, sino ayudarte a comprender tu forma de funcionar y orientarte sobre los apoyos que podrían servirte. El proceso considera tu historia, tu contexto y tu identidad.',
        ],
      },
    ],
    precios: ['autismo'],
    formulario: 'autismo',
    profesionales: ['magdalena-daveggio', 'brighitt-sanchez', 'sofia-riquelme', 'valentina-morales'],
    faq: [
      {
        pregunta: '¿Cuánto cuesta la evaluación de autismo en adultos?',
        respuesta: `La evaluación cuesta ${pesos(P.autismo.monto)} e incluye cuatro sesiones y un informe escrito. Se puede pagar en cuotas con tarjeta de débito o crédito.`,
      },
      {
        pregunta: '¿Cuántas sesiones tiene y cuáles son presenciales?',
        respuesta: 'Son cuatro sesiones. La tercera, en la que se aplican pruebas formales como ADOS-2, es presencial en Providencia. Las otras tres pueden ser online o presenciales.',
      },
      {
        pregunta: '¿Evalúan autismo en niñas y niños?',
        respuesta: 'La evaluación que ofrecemos actualmente está dirigida a adolescentes y personas adultas.',
      },
      {
        pregunta: '¿Cómo solicito la evaluación?',
        respuesta: 'Completa el formulario de evaluación para la identificación de autismo en la página de agenda y el equipo se pondrá en contacto contigo a la brevedad.',
      },
    ],
  },
  {
    slug: 'terapia-de-pareja',
    nombre: 'Terapia de pareja',
    titulo: 'Terapia de pareja en Providencia | Parejas LGBTIAQ+',
    descripcion: `Terapia de pareja con enfoque sistémico, afirmativo y de género en Providencia, Santiago, y online. Atención a parejas LGBTIAQ+. ${pesos(P.pareja.monto)} por sesión.`,
    h1: 'Terapia de pareja en Providencia, también para parejas LGBTIAQ+',
    resumen: 'Psicoterapia de parejas con enfoque sistémico relacional, afirmativa con la diversidad sexual y de género.',
    intro: `Un Rincón del Encuentro ofrece terapia de pareja en Providencia, Santiago, y online, con un enfoque sistémico relacional, afirmativo y de género. Atendemos a parejas heterosexuales y LGBTIAQ+. La sesión de psicoterapia de parejas cuesta ${pesos(P.pareja.monto)}.`,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para parejas que quieren mejorar su relación, atravesar una crisis o tomar decisiones importantes con apoyo profesional. No es necesario estar "a punto de terminar" para consultar.',
        ],
        lista: [
          'Dificultades de comunicación y discusiones que se repiten.',
          'Crisis por infidelidad, celos o pérdida de confianza.',
          'Cambios vitales: convivencia, crianza, migración, duelos.',
          'Acuerdos sobre la relación y formas de vincularse.',
          'Desafíos específicos de las parejas LGBTIAQ+, como la visibilidad o el rechazo familiar.',
        ],
      },
      {
        titulo: 'Nuestro enfoque',
        parrafos: [
          'Trabajamos desde la terapia sistémica relacional: entendemos los conflictos como parte de una dinámica entre las personas y no como culpa de una de ellas. Integramos el enfoque de género, para observar cómo los mandatos sociales influyen en la relación, y la atención afirmativa a la diversidad sexual y de género.',
        ],
      },
    ],
    precios: ['pareja'],
    formulario: 'general',
    profesionales: ['catalina-magnere'],
    faq: [
      {
        pregunta: '¿Cuánto cuesta la terapia de pareja?',
        respuesta: `La sesión de psicoterapia de parejas cuesta ${pesos(P.pareja.monto)}.`,
      },
      {
        pregunta: '¿Atienden parejas LGBTIAQ+?',
        respuesta: 'Sí. La terapia de pareja del centro es afirmativa con la diversidad sexual y de género.',
      },
    ],
  },
  {
    slug: 'psicologia-infanto-juvenil',
    nombre: 'Psicología infanto-juvenil',
    titulo: 'Psicóloga infantil y adolescente en Providencia',
    descripcion: 'Atención psicológica para niñas, niños y adolescentes en Providencia, Santiago, y online. Enfoque afirmativo, neuroafirmativo y de género, con participación de la familia.',
    h1: 'Psicología infantil y para adolescentes en Providencia',
    resumen: 'Atención psicológica para niñas, niños y adolescentes, con un enfoque afirmativo, neuroafirmativo y de género.',
    intro: 'Un Rincón del Encuentro ofrece atención psicológica para niñas, niños y adolescentes en Providencia, Santiago, y online, con un enfoque afirmativo, neuroafirmativo y de género que incluye a la familia en el proceso.',
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para familias que notan que su hija, hijo o hije está pasando por un momento difícil, y para adolescentes que buscan un espacio propio para hablar.',
        ],
        lista: [
          'Ansiedad, tristeza o cambios de ánimo.',
          'Autoestima y relación con el cuerpo o la alimentación.',
          'Neurodivergencias: autismo, TDAH y otras.',
          'Exploración de la identidad de género o la orientación sexual.',
          'Situaciones difíciles en el colegio o con pares.',
        ],
      },
      {
        titulo: 'Nuestro enfoque',
        parrafos: [
          'Ofrecemos un espacio terapéutico centrado en las necesidades de cada niña, niño o adolescente, comprendiendo su historia, su contexto y su cultura. Trabajamos de forma cercana con la familia y respetamos la confidencialidad del espacio terapéutico, con los límites que establece la ley para proteger a niñas, niños y adolescentes.',
        ],
      },
    ],
    precios: ['general', 'isapre'],
    formulario: 'general',
    profesionales: ['sofia-riquelme', 'valentina-guerra', 'brighitt-sanchez', 'damaris-carrasco'],
    faq: [
      {
        pregunta: '¿Desde qué edad atienden?',
        respuesta: 'Atendemos infancia, adolescencia y adultez. Escríbenos con la edad de tu hija, hijo o hije y te orientaremos sobre la profesional más adecuada.',
      },
      {
        pregunta: '¿Participan las madres, padres o cuidadores?',
        respuesta: 'Sí. En la atención infanto-juvenil la familia forma parte del proceso, de acuerdo con la edad y las necesidades de cada niña, niño o adolescente.',
      },
    ],
  },
  {
    slug: 'terapia-online',
    nombre: 'Terapia online',
    titulo: 'Psicóloga online en Chile | Terapia feminista y afirmativa',
    descripcion: `Psicoterapia online por videollamada con psicólogas feministas, afirmativas y neuroafirmativas. ${pesos(P.general.monto)} por sesión; con Isapre ${pesos(P.isapre.monto)}.`,
    h1: 'Terapia psicológica online con enfoque feminista y afirmativo',
    resumen: 'Psicoterapia por videollamada, con el mismo enfoque y los mismos valores que la atención presencial.',
    intro: `Un Rincón del Encuentro ofrece psicoterapia online por videollamada, con el mismo equipo y enfoque que la atención presencial en Providencia: feminista, afirmativa LGBTIAQ+ y neuroafirmativa. La sesión cuesta ${pesos(P.general.monto)} y con Isapre ${pesos(P.isapre.monto)}.`,
    secciones: [
      {
        titulo: '¿Para quién es?',
        parrafos: [
          'Para personas que viven lejos de Providencia, que tienen horarios difíciles o que se sienten más cómodas atendiéndose desde su casa. La modalidad online también puede ser una buena opción para personas neurodivergentes que prefieren evitar traslados o entornos con mucha estimulación.',
        ],
      },
      {
        titulo: 'Cómo funciona',
        parrafos: [
          'Solo necesitas una conexión a internet estable, un dispositivo con cámara y micrófono, y un lugar privado donde puedas hablar con tranquilidad. Antes de la primera sesión te enviaremos el enlace de la videollamada.',
          'Puedes combinar sesiones online y presenciales si lo conversas con tu psicóloga.',
        ],
      },
    ],
    precios: ['general', 'isapre'],
    formulario: 'general',
    profesionales: ['magdalena-daveggio', 'brighitt-sanchez', 'sofia-riquelme', 'ivonn-lopez', 'valentina-morales', 'catalina-magnere', 'valentina-guerra', 'damaris-carrasco'],
    faq: [
      {
        pregunta: '¿La terapia online tiene el mismo valor que la presencial?',
        respuesta: `Sí. La sesión de atención general cuesta ${pesos(P.general.monto)} y la atención con Isapre ${pesos(P.isapre.monto)}, en ambas modalidades.`,
      },
      {
        pregunta: '¿La evaluación de autismo se puede hacer online?',
        respuesta: 'Tres de las cuatro sesiones pueden ser online. La sesión de aplicación de pruebas formales como ADOS-2 es presencial en Providencia.',
      },
    ],
  },
]

export const buscarServicio = (slug) => servicios.find((s) => s.slug === slug)

// Servicios en los que participa una profesional (para su página de perfil).
export const serviciosDe = (slugProfesional) =>
  servicios.filter((s) => s.profesionales.includes(slugProfesional))
