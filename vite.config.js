import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { cspComoTexto, encabezadosPreview, REFERRER_POLICY } from './seguridad/politica.js'

// Agrega la CSP y la política de referrer como <meta> en el HTML del build, justo después
// de <meta charset> para que cubran todos los scripts y estilos que vienen después.
// Es una segunda capa: en producción CloudFront envía los mismos valores como encabezados.
// Solo en el build, porque el servidor de desarrollo de Vite necesita scripts inline (HMR).
const seguridadEnHtml = () => ({
  name: 'seguridad-en-html',
  apply: 'build',
  transformIndexHtml: (html) => {
    const charset = '<meta charset="UTF-8" />'
    if (!html.includes(charset)) throw new Error('index.html debe tener <meta charset="UTF-8" />')
    const csp = cspComoTexto({ paraMeta: true }).replaceAll("'", '&#39;')
    return html.replace(charset, `${charset}
    <meta http-equiv="Content-Security-Policy" content="${csp}" />
    <meta name="referrer" content="${REFERRER_POLICY}" />`)
  },
})

// https://vite.dev/config/
export default defineConfig({
  // basicSsl: el servidor de desarrollo y `vite preview` funcionan solo por HTTPS
  // (certificado autofirmado: el navegador pide aceptarlo la primera vez).
  plugins: [react(), basicSsl(), seguridadEnHtml()],
  base: '/',
  server: {
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    host: 'localhost',
    strictPort: true,
    headers: encabezadosPreview(),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    // Fuentes e imágenes siempre como archivo (nunca data: URI), para mantener la CSP estricta.
    assetsInlineLimit: 0,
  },
})
