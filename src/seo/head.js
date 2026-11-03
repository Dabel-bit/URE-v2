// Etiquetas <head> de cada página: <title>, description, canonical, Open Graph, Twitter y JSON-LD.
//
// La misma lista se usa en dos lugares, para que nunca difieran:
//   - en el prerender (scripts/prerender.mjs), como texto HTML;
//   - en el navegador al cambiar de página (Components/Seo.jsx), como elementos del DOM.
// Todas llevan el atributo data-seo, que permite reemplazarlas sin tocar el resto del <head>.

import { NEGOCIO, SITE_URL } from '../data/negocio.js'
import { grafo } from './esquemas.js'

const SUFIJO = ` | ${NEGOCIO.nombre}`
const OG_IMAGEN = { url: `${SITE_URL}/og-image.jpg`, ancho: 1200, alto: 630, alt: `Logo de ${NEGOCIO.nombre}` }

// Agrega el nombre del centro al título si cabe (Google corta alrededor de 60 caracteres).
const tituloCompleto = (titulo) =>
  titulo.includes(NEGOCIO.nombre) || (titulo + SUFIJO).length > 65 ? titulo : titulo + SUFIJO

export const urlAbsoluta = (ruta) => new URL(ruta, SITE_URL).href

export const construirHead = ({ titulo, descripcion, ruta, imagen, tipo = 'website', jsonLd = [], noIndex = false }) => {
  const url = urlAbsoluta(ruta)
  const og = imagen ? { url: urlAbsoluta(imagen.url), alt: imagen.alt } : OG_IMAGEN
  const tituloFinal = tituloCompleto(titulo)

  const etiquetas = [
    ['meta', { name: 'description', content: descripcion }],
    noIndex ? ['meta', { name: 'robots', content: 'noindex' }] : ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: tipo }],
    ['meta', { property: 'og:locale', content: 'es_CL' }],
    ['meta', { property: 'og:site_name', content: NEGOCIO.nombre }],
    ['meta', { property: 'og:title', content: tituloFinal }],
    ['meta', { property: 'og:description', content: descripcion }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:image', content: og.url }],
    og.ancho && ['meta', { property: 'og:image:width', content: String(og.ancho) }],
    og.alto && ['meta', { property: 'og:image:height', content: String(og.alto) }],
    ['meta', { property: 'og:image:alt', content: og.alt }],
    ['meta', { name: 'twitter:card', content: imagen ? 'summary' : 'summary_large_image' }],
  ].filter(Boolean)

  return { titulo: tituloFinal, etiquetas, jsonLd: noIndex ? null : grafo(jsonLd) }
}

// --- Prerender (Node) ---

const escaparAtributo = (valor) =>
  valor.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escaparTexto = (valor) => valor.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// JSON dentro de <script>: "<" escapado para que ningún texto pueda cerrar la etiqueta.
const jsonSeguro = (datos) => JSON.stringify(datos).replace(/</g, '\\u003c')

export const headComoHtml = ({ titulo, etiquetas, jsonLd }) =>
  [
    `<title data-seo>${escaparTexto(titulo)}</title>`,
    ...etiquetas.map(([tag, attrs]) =>
      `<${tag} data-seo ${Object.entries(attrs).map(([k, v]) => `${k}="${escaparAtributo(v)}"`).join(' ')}>`),
    jsonLd && `<script type="application/ld+json" data-seo>${jsonSeguro(jsonLd)}</script>`,
  ].filter(Boolean).join('\n    ')

// --- Navegador ---

export const aplicarHeadEnDocumento = ({ titulo, etiquetas, jsonLd }) => {
  document.title = titulo
  document.head.querySelectorAll('[data-seo]:not(title)').forEach((el) => el.remove())

  const nuevas = etiquetas.map(([tag, attrs]) => {
    const el = document.createElement(tag)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    return el
  })
  if (jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    nuevas.push(script)
  }
  nuevas.forEach((el) => {
    el.setAttribute('data-seo', '')
    document.head.append(el)
  })
}
