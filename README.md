# Un Rincón del Encuentro: sitio web (versión 2)

Sitio de https://unrincondelencuentro.cl. React 19 + React Router 8 sobre Vite 8, con cada página
prerenderizada como HTML estático (contenido, metadatos y JSON-LD visibles sin JavaScript) y
publicado en S3 + CloudFront.

Esta versión implementa las recomendaciones de `seo-unrincondelencuentro.md` y
`configuracion-negocio-unrincondelencuentro.docx`.

## Requisitos

- Node.js **26.13.0** (LTS vigente), definido en `.nvmrc`: `nvm install && nvm use`.
- npm 11 (viene con Node).

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala dependencias (versiones exactas; ver `.npmrc`) |
| `npm run dev` | Servidor de desarrollo en https://localhost:5173 |
| `npm run build` | Build + prerender + `sitemap.xml` + `llms.txt` + verificación |
| `npm run preview` | Sirve `dist/` en https://localhost:4173 con los encabezados de seguridad de producción |
| `npm run lint` | ESLint |
| `npm run infra:politica` | Genera `infra/response-headers-policy.json` para CloudFront |
| `npm run deploy:s3` | Build y publicación en S3 (`DRYRUN=1` para simular) |

El navegador pedirá aceptar el certificado autofirmado de `localhost` la primera vez.

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Nombre, dirección, teléfono, WhatsApp, horario, formularios | `src/data/negocio.js` |
| Precios | `src/data/precios.js` |
| Servicios (textos, profesionales, preguntas) | `src/data/servicios.js` |
| Equipo | `src/data/equipo.js` (fotos en `src/assets/img/`) |
| Preguntas frecuentes | `src/data/preguntas.js` |
| CSP y encabezados de seguridad | `seguridad/politica.js` |

Las páginas, el sitemap, `llms.txt` y los datos estructurados se generan a partir de estos
archivos, así que un precio o un dato de contacto se cambia en un solo lugar.

Si una página nueva necesita un servicio externo (analítica, agenda en línea), hay que
autorizarlo en `seguridad/politica.js`; la CSP bloquea todo lo demás.

## Pendientes del negocio

Los campos vacíos no se muestran en el sitio. Al completarlos, aparecen solos en las páginas,
en los datos estructurados y en `llms.txt`:

- [ ] Teléfono y WhatsApp (`negocio.js`): activa el botón flotante de WhatsApp.
- [ ] Número de oficina y código postal (`negocio.js`).
- [ ] Horario de atención (`negocio.js`).
- [ ] N.º de registro en la Superintendencia de Salud de cada profesional (`equipo.js`).
- [ ] Respuestas para Fonasa, duración de la sesión, elegir psicóloga, cancelación, reembolsos,
      estacionamiento y uso del informe de autismo en trámites (lista en `preguntas.js`).
- [ ] Revisión de los textos de servicios por el equipo (`servicios.js`).
- [ ] Blog o recursos: la arquitectura está lista para agregar la sección cuando haya artículos.

## Seguridad

- Solo HTTPS: en local (`@vitejs/plugin-basic-ssl`) y en producción (CloudFront + HSTS).
  Pasos en `docs/seguridad-https.md`.
- CSP estricta sin scripts ni estilos inline, como encabezado (CloudFront) y como `<meta>` (build).
- `npm run build` falla si alguna página trae scripts o estilos inline, recursos `http://`,
  JSON-LD inválido o le falta título, H1, descripción o canonical (`scripts/verificar-build.mjs`).
- El mapa de Google se carga solo si la persona lo pide (sin cookies de terceros por defecto).
- Fuentes propias, sin Google Fonts.
- Dependencias: versiones exactas, `ignore-scripts=true` y `engine-strict` en `.npmrc`;
  `npm audit` sin vulnerabilidades.

## Cambios respecto de la versión anterior

- URLs nuevas: `/servicios`, 7 páginas de servicio, 8 perfiles en `/equipo/<nombre>` y `/preguntas-frecuentes`.
  Las URLs anteriores (`/equipo`, `/valores`, `/ubicacion`, `/contacto`, `/formulario`) se mantienen.
- Se eliminó `/card` (imagen del logo para Instagram), que estaba excluida en `robots.txt`.
- El formulario de autismo apunta a la URL pública (`/viewform`) en vez de la de edición.
- `react-helmet-async` se reemplazó por un módulo propio (`src/seo/`) compatible con React 19.
- Se quitaron dependencias sin uso (`@react-google-maps/api`, Font Awesome, `gh-pages`).
