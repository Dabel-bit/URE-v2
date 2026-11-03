// Genera infra/response-headers-policy.json a partir de seguridad/politica.js, para crear o
// actualizar la Response Headers Policy de CloudFront con la misma CSP que usa el sitio:
//
//   npm run infra:politica
//   aws cloudfront create-response-headers-policy --response-headers-policy-config file://infra/response-headers-policy.json
//
// Ver docs/seguridad-https.md.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { cspComoTexto, HSTS, PERMISSIONS_POLICY, REFERRER_POLICY } from '../seguridad/politica.js'

const destino = fileURLToPath(new URL('../infra/response-headers-policy.json', import.meta.url))

const politica = {
  Name: 'unrincondelencuentro-seguridad',
  Comment: 'Generada por scripts/generar-politica-cloudfront.mjs. No editar a mano.',
  SecurityHeadersConfig: {
    StrictTransportSecurity: {
      Override: true,
      AccessControlMaxAgeSec: HSTS.maxAge,
      IncludeSubdomains: HSTS.includeSubDomains,
      Preload: HSTS.preload,
    },
    ContentSecurityPolicy: { Override: true, ContentSecurityPolicy: cspComoTexto() },
    ContentTypeOptions: { Override: true },
    FrameOptions: { Override: true, FrameOption: 'DENY' },
    ReferrerPolicy: { Override: true, ReferrerPolicy: REFERRER_POLICY },
  },
  CustomHeadersConfig: {
    Quantity: 3,
    Items: [
      { Header: 'Permissions-Policy', Value: PERMISSIONS_POLICY, Override: true },
      { Header: 'Cross-Origin-Opener-Policy', Value: 'same-origin', Override: true },
      { Header: 'Cross-Origin-Resource-Policy', Value: 'same-origin', Override: true },
    ],
  },
  RemoveHeadersConfig: {
    Quantity: 1,
    Items: [{ Header: 'Server' }],
  },
}

writeFileSync(destino, JSON.stringify(politica, null, 2) + '\n')
console.log(`Política escrita en ${destino}`)
