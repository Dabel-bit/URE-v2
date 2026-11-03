# Seguridad y HTTPS en producción (CloudFront + S3)

El sitio solo debe responder por HTTPS. En local, `npm run dev` y `npm run preview` ya funcionan
solo por HTTPS (certificado autofirmado). En producción, HTTPS lo garantizan CloudFront y HSTS.
Esta guía continúa la de la versión anterior (`URE-WebPage-Prod/.../docs/forzar-https-aws.md`):
si los pasos 1 a 5 de esa guía (certificado con `www`, `www` en CloudFront y Route 53) ya están
hechos, empieza aquí.

| Capa | Qué hace | Dónde |
|---|---|---|
| Viewer protocol policy | `http://` → 301 a `https://` | Comportamiento de la distribución |
| Política TLS | Solo TLS 1.2 o superior | Configuración de la distribución |
| HSTS (2 años, subdominios, preload) | El navegador nunca vuelve a intentar `http://` | Response headers policy |
| CSP con `upgrade-insecure-requests` | Ningún recurso se carga por `http://` | Response headers policy + `<meta>` en cada página |
| Función de CloudFront | `www` → dominio principal, barras finales, `/index.html` | `infra/cloudfront-function.js` |
| Bucket S3 privado (OAC) | El bucket no se puede leer sin pasar por CloudFront | S3 + CloudFront |

## 1. Distribución: HTTPS y TLS

**CloudFront → Distributions → (la del sitio)**

1. **General → Settings → Edit**
   - **Security policy:** `TLSv1.2_2021` (o la más reciente que ofrezca la consola).
   - **Supported HTTP versions:** HTTP/2 y HTTP/3.
2. **Behaviors → Default (\*) → Edit**
   - **Viewer protocol policy:** `Redirect HTTP to HTTPS`.
     (Con `HTTPS only` las visitas por `http://` reciben un error 403 en vez de redirigirse: no
     se recomienda, porque quien escriba el dominio sin `https://` no llegaría al sitio.)
   - **Allowed HTTP methods:** `GET, HEAD`.

## 2. Función de CloudFront

1. **CloudFront → Functions** → abre `redirigir-www` (o crea una nueva con runtime `cloudfront-js-2.0`).
2. Reemplaza el código por el de `infra/cloudfront-function.js` → **Save changes** → **Publish**.
3. Confirma que esté asociada a **Behaviors → Default (\*) → Viewer request**.

## 3. Encabezados de seguridad (Response headers policy)

La política se genera desde `seguridad/politica.js`, la misma fuente de la CSP que va en el HTML:

```sh
npm run infra:politica          # escribe infra/response-headers-policy.json
aws cloudfront create-response-headers-policy \
  --response-headers-policy-config file://infra/response-headers-policy.json
```

Después: **Behaviors → Default (\*) → Edit → Response headers policy** → elige
`unrincondelencuentro-seguridad` (reemplaza a `SecurityHeadersPolicy`). Para actualizarla más
adelante, usa `aws cloudfront update-response-headers-policy --id <ID> --if-match <ETag> ...`.

> **Antes de publicar HSTS con `includeSubDomains` y `preload`**, confirma que
> `https://www.unrincondelencuentro.cl` funciona (paso 5 de la guía anterior). Los navegadores
> guardan la regla por 2 años: un subdominio sin HTTPS quedaría inaccesible. Si hay dudas, cambia
> `HSTS` en `seguridad/politica.js` a `{ maxAge: 31536000, includeSubDomains: false, preload: false }`,
> regenera la política y súbela.
>
> Cuando todo funcione por un par de semanas, inscribe el dominio en https://hstspreload.org.

Si en el futuro se agrega un servicio externo (analítica, agenda en línea, chat), hay que
autorizar su dominio en `CSP` dentro de `seguridad/politica.js`, regenerar la política y volver a
hacer el build: si no, el navegador lo bloqueará.

## 4. Página 404 real

**Error pages → Create custom error response**, dos veces:

| HTTP error code | Response page path | HTTP response code |
|---|---|---|
| 403 | `/404.html` | 404 |
| 404 | `/404.html` | 404 |

(S3 privado responde 403 cuando un archivo no existe.) Si hoy existe una regla que responde
`/index.html` con código 200, elimínala: es la que hacía que URLs inexistentes aparecieran como
páginas válidas en Google.

## 5. Bucket S3 privado

1. **CloudFront → Origins → (el bucket) → Edit → Origin access:** `Origin access control settings`
   → **Create new OAC** → guarda y copia la política de bucket que propone la consola.
2. **S3 → (bucket) → Permissions → Bucket policy:** pega esa política.
3. **Block public access:** activado (las cuatro opciones).
4. **Properties → Static website hosting:** desactivado (ya no se usa; CloudFront lee el bucket directo).
5. **Default root object** de la distribución: `index.html`.

## Verificación

```sh
for u in http://unrincondelencuentro.cl/ http://www.unrincondelencuentro.cl/ \
         https://www.unrincondelencuentro.cl/ https://unrincondelencuentro.cl/servicios/ \
         https://unrincondelencuentro.cl/no-existe; do
  echo "== $u"; curl -sI "$u" | grep -iE '^HTTP|location'
done
curl -sI https://unrincondelencuentro.cl/ | grep -iE 'strict-transport|content-security|x-frame|x-content-type|referrer|permissions'
curl -sI --tlsv1.1 --tls-max 1.1 https://unrincondelencuentro.cl/ ; echo "TLS 1.1 debe fallar: código $?"
```

Resultado esperado: `http://` y `www` redirigen con 301 a `https://unrincondelencuentro.cl/...`,
`/servicios/` redirige a `/servicios`, `/no-existe` responde 404, y la portada envía los seis
encabezados. También se puede revisar en https://securityheaders.com y https://www.ssllabs.com/ssltest/.
