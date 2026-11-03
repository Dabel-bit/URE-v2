// Revisa el resultado del build antes de publicarlo. Falla (código 1) si alguna página:
//   - no tiene exactamente un <h1>, un <title> y una meta description;
//   - no tiene canonical HTTPS (salvo 404.html, que debe tener noindex);
//   - carga recursos por http:// o usa scripts o estilos inline (romperían la CSP);
//   - tiene JSON-LD inválido.
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const paginas = readdirSync(dist, { recursive: true }).filter((f) => f.endsWith('.html'))
const errores = []
const contar = (html, patron) => (html.match(patron) ?? []).length

for (const archivo of paginas) {
  const html = readFileSync(dist + archivo, 'utf-8')
  const error = (mensaje) => errores.push(`${archivo}: ${mensaje}`)

  if (contar(html, /<h1[\s>]/g) !== 1) error(`debe tener un <h1> (tiene ${contar(html, /<h1[\s>]/g)})`)
  if (contar(html, /<title[\s>]/g) !== 1) error('debe tener un <title>')
  if (contar(html, /<meta[^>]+name="description"/g) !== 1) error('debe tener una meta description')

  if (archivo === '404.html') {
    if (!/<meta[^>]+name="robots" content="noindex"/.test(html)) error('debe tener noindex')
  } else if (!/<link[^>]+rel="canonical" href="https:\/\/[^"]+"/.test(html)) {
    error('falta el canonical HTTPS')
  }

  if (/\s(?:src|href|action)="http:\/\//.test(html)) error('carga o enlaza recursos por http://')
  if (/\sstyle="/.test(html)) error('tiene atributos style inline (bloqueados por la CSP)')
  if (/<style[\s>]/.test(html)) error('tiene <style> inline (bloqueado por la CSP)')
  for (const [, atributos] of html.matchAll(/<script([^>]*)>/g)) {
    const esDatos = /type="application\/ld\+json"/.test(atributos)
    if (!esDatos && !/\ssrc="/.test(atributos)) error('tiene un <script> inline (bloqueado por la CSP)')
  }
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json) } catch { error('JSON-LD inválido') }
  }
  if (!/http-equiv="Content-Security-Policy"/.test(html)) error('falta la CSP')
}

if (errores.length) {
  console.error(`verificar-build: ${errores.length} problema(s)\n  ${errores.join('\n  ')}`)
  process.exit(1)
}
console.log(`verificar-build: ${paginas.length} páginas OK`)
