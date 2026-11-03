// Prerender: después de `vite build`, genera un HTML completo por ruta (contenido, <title>,
// meta tags y JSON-LD) para que buscadores, redes sociales y asistentes de IA lo lean sin
// ejecutar JavaScript. También genera sitemap.xml y llms.txt con los mismos datos.
//
//   /                      -> dist/index.html
//   /equipo                -> dist/equipo.html                 (en S3: "equipo", ver deploy-s3.sh)
//   /servicios/terapia-…   -> dist/servicios/terapia-….html    (en S3: "servicios/terapia-…")
//   /404                   -> dist/404.html
import { mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = fileURLToPath(new URL('..', import.meta.url))
const dist = `${raiz}dist/`
const servidor = `${raiz}dist-server/`

const { render, rutas, RUTAS_PUBLICADAS, generarLlmsTxt } = await import(`${servidor}entry-server.js`)
const { SITE_URL } = await import(`${raiz}src/data/negocio.js`)
const plantilla = readFileSync(`${dist}index.html`, 'utf-8')

const reemplazarUnaVez = (texto, patron, reemplazo, descripcion) => {
  if (!patron.test(texto)) throw new Error(`prerender: no se encontró ${descripcion} en dist/index.html`)
  return texto.replace(patron, reemplazo)
}

for (const ruta of rutas) {
  const { html, head } = render(ruta)

  let pagina = plantilla.replace(/\s*<(title|meta)[^>]*\bdata-seo\b[^>]*>(?:[^<]*<\/title>)?/g, '')
  pagina = reemplazarUnaVez(pagina, /<\/head>/, () => `  ${head}\n  </head>`, '</head>')
  pagina = reemplazarUnaVez(pagina, /<div id="root"><\/div>/,
    () => `<div id="root" data-prerendered="${ruta}">${html}</div>`, '<div id="root"></div>')

  const archivo = ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`
  mkdirSync(dirname(`${dist}${archivo}`), { recursive: true })
  writeFileSync(`${dist}${archivo}`, pagina)
  console.log(`prerender: ${ruta.padEnd(52)} -> dist/${archivo}`)
}

const hoy = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...RUTAS_PUBLICADAS.map((ruta) => `  <url><loc>${SITE_URL}${ruta === '/' ? '/' : ruta}</loc><lastmod>${hoy}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n')
writeFileSync(`${dist}sitemap.xml`, sitemap)
writeFileSync(`${dist}llms.txt`, generarLlmsTxt())
console.log(`prerender: sitemap.xml (${RUTAS_PUBLICADAS.length} URLs) y llms.txt`)

rmSync(servidor, { recursive: true, force: true })
