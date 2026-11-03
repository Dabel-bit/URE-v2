// Valores vigentes (CLP). Se usan en /valores, en cada servicio, en las preguntas
// frecuentes, en llms.txt y en los datos estructurados: cambiarlos solo aquí.

export const PRECIOS = {
  general: { nombre: 'Atención general', monto: 30000, detalle: 'por sesión' },
  isapre: { nombre: 'Atención con Isapre', monto: 35000, detalle: 'por sesión, con boleta para reembolso' },
  pareja: { nombre: 'Psicoterapia de parejas', monto: 55000, detalle: 'por sesión' },
  autismo: {
    nombre: 'Evaluación para la identificación de autismo (adolescentes y adultos)',
    monto: 140000,
    detalle: 'por 4 sesiones, con informe escrito. Pago en cuotas con tarjeta de débito o crédito',
  },
}

const formato = new Intl.NumberFormat('es-CL')

export const pesos = (monto) => `$${formato.format(monto)}`

export const PASOS_EVALUACION_AUTISMO = [
  { titulo: 'Entrevista y observación directa', modalidad: 'Online o presencial' },
  { titulo: 'Continuación de la entrevista y aplicación de cuestionarios de pesquisa', modalidad: 'Online o presencial' },
  { titulo: 'Aplicación de pruebas formales como ADOS-2 u otras', modalidad: 'Presencial' },
  { titulo: 'Devolución de resultados, orientaciones, resolución de dudas y envío del informe escrito', modalidad: 'Online o presencial' },
]
