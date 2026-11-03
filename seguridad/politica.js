// Política de seguridad del sitio: fuente única para
//   - el <meta> CSP que se inyecta en el HTML del build (vite.config.js),
//   - los encabezados de `vite preview` (para probar la política en local),
//   - la Response Headers Policy de CloudFront (scripts/generar-politica-cloudfront.mjs).
//
// Si se agrega un servicio externo (analítica, agenda en línea, etc.), se autoriza aquí
// y en ningún otro lugar.

// Content-Security-Policy: solo recursos propios y por HTTPS.
// - Sin scripts inline ni eval (el JSON-LD es un bloque de datos y no lo afecta).
// - Sin estilos inline: el código no usa atributos style.
// - frame-src: mapa de Google, que solo se carga si la persona lo pide (MapaUbicacion.jsx).
export const CSP = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  'style-src': ["'self'"],
  'img-src': ["'self'"],
  'font-src': ["'self'"],
  'connect-src': ["'self'"],
  'frame-src': ['https://www.google.com'],
  'manifest-src': ["'self'"],
  'media-src': ["'none'"],
  'worker-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': [],
}

// Directivas que el navegador ignora si vienen en <meta> (solo valen como encabezado).
const SOLO_ENCABEZADO = new Set(['frame-ancestors'])

export const cspComoTexto = ({ paraMeta = false } = {}) =>
  Object.entries(CSP)
    .filter(([directiva]) => !(paraMeta && SOLO_ENCABEZADO.has(directiva)))
    .map(([directiva, valores]) => [directiva, ...valores].join(' '))
    .join('; ')

// HSTS: el navegador recuerda usar siempre HTTPS durante 2 años.
// includeSubDomains y preload exigen que www (y cualquier subdominio) ya funcione por HTTPS:
// ver docs/seguridad-https.md antes de publicar esta política.
export const HSTS = { maxAge: 63072000, includeSubDomains: true, preload: true }

export const PERMISSIONS_POLICY = [
  'accelerometer=()', 'camera=()', 'geolocation=()', 'gyroscope=()', 'magnetometer=()',
  'microphone=()', 'payment=()', 'usb=()', 'browsing-topics=()',
].join(', ')

export const REFERRER_POLICY = 'strict-origin-when-cross-origin'

// Encabezados para `vite preview`. Sin HSTS: en localhost afectaría a otros proyectos.
export const encabezadosPreview = () => ({
  'Content-Security-Policy': cspComoTexto(),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': REFERRER_POLICY,
  'Permissions-Policy': PERMISSIONS_POLICY,
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin',
})
