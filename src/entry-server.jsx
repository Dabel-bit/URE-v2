// Punto de entrada del prerender (scripts/prerender.mjs): genera el HTML de cada ruta en Node.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes, RUTAS_PUBLICADAS } from './App.jsx'
import { SeoContext } from './components/Seo.jsx'
import { headComoHtml } from './seo/head.js'
import { generarLlmsTxt } from './seo/llms.js'

export const rutas = [...RUTAS_PUBLICADAS, '/404']
export { RUTAS_PUBLICADAS, generarLlmsTxt }

export const render = (url) => {
  let head = null
  const html = renderToString(
    <SeoContext value={(h) => { head = h }}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </SeoContext>
  )
  if (!head) throw new Error(`prerender: la ruta ${url} no tiene <Seo>`)
  return { html, head: headComoHtml(head) }
}
