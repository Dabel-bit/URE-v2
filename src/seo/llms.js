// llms.txt: resumen del sitio en Markdown para asistentes de IA (plan SEO, sección 6).
// Se genera en el build a partir de los mismos datos del sitio, para que nunca se desactualice.

import { NEGOCIO, SITE_URL, direccionCompleta } from '../data/negocio.js'
import { PRECIOS, pesos } from '../data/precios.js'
import { servicios } from '../data/servicios.js'
import { equipo } from '../data/equipo.js'
import { todasLasPreguntas } from '../data/preguntas.js'

export const generarLlmsTxt = () => {
  const lineas = [
    `# ${NEGOCIO.nombre}`,
    '',
    `> ${NEGOCIO.descripcion}`,
    '',
    '## Valores',
    ...Object.values(PRECIOS).map((p) => `- ${p.nombre}: ${pesos(p.monto)} ${p.detalle}.`),
    '',
    '## Contacto',
    `- Dirección: ${direccionCompleta()}, ${NEGOCIO.direccion.region}, Chile. A pasos del ${NEGOCIO.metro}.`,
    `- Correo: ${NEGOCIO.correo}`,
    NEGOCIO.telefono ? `- Teléfono: ${NEGOCIO.telefono}` : null,
    NEGOCIO.whatsapp ? `- WhatsApp: https://wa.me/${NEGOCIO.whatsapp}` : null,
    `- Instagram: ${NEGOCIO.instagram}`,
    `- Agenda: ${SITE_URL}/formulario`,
    ...NEGOCIO.horario.map((h) => `- Horario ${h.etiqueta}: ${h.abre} a ${h.cierra}`),
    '',
    '## Servicios',
    ...servicios.map((s) => `- [${s.nombre}](${SITE_URL}/servicios/${s.slug}): ${s.resumen}`),
    '',
    '## Equipo',
    ...equipo.map((p) => `- [${p.nombre}](${SITE_URL}/equipo/${p.slug}) (${p.pronombres}), ${p.cargo}. ${p.areas.join(', ')}.`),
    '',
    '## Preguntas frecuentes',
    ...todasLasPreguntas.flatMap((q) => [`### ${q.pregunta}`, q.respuesta, '']),
    '## Páginas',
    `- [Valores](${SITE_URL}/valores)`,
    `- [Preguntas frecuentes](${SITE_URL}/preguntas-frecuentes)`,
    `- [Ubicación](${SITE_URL}/ubicacion)`,
    `- [Contacto](${SITE_URL}/contacto)`,
  ]
  // null = dato pendiente en la ficha del negocio: se omite la línea.
  return lineas.filter((l) => l !== null).join('\n') + '\n'
}
