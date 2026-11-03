import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App.jsx'

const contenedor = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Las páginas generadas en el build (scripts/prerender.mjs) traen el HTML armado y marcan su
// ruta en data-prerendered. Solo se hidrata si coincide con la URL actual; si no (por ejemplo,
// 404.html servida para una URL inexistente), se renderiza desde cero.
const normalizar = (ruta) => ruta.replace(/\/+$/, '') || '/'
const prerenderizada = contenedor.dataset.prerendered

if (prerenderizada && normalizar(prerenderizada) === normalizar(window.location.pathname)) {
  hydrateRoot(contenedor, app)
} else {
  createRoot(contenedor).render(app)
}
