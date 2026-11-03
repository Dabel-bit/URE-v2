# Plan SEO y de visibilidad en IA: unrincondelencuentro.cl

**Sitio:** https://unrincondelencuentro.cl
**Negocio:** Centro Psicológico Un Rincón del Encuentro. Psicología feminista, afirmativa y neurodiversa. Andrés de Fuenzalida 22, Providencia (Metro Los Leones). Presencial y online.
**Fecha del análisis:** 2 de noviembre de 2026
**Objetivo:** aparecer en la primera página de Google (y en las respuestas de asistentes de IA) sin pagar anuncios.

---

## 0. Resumen ejecutivo

El sitio tiene una **base técnica mejor que el promedio**: cada página tiene su propio `<title>`, `meta description`, `canonical`, Open Graph y Twitter Card, y las imágenes del equipo tienen texto alternativo. El problema no es técnico: **el sitio tiene muy poco contenido y no responde a lo que la gente busca**.

Hoy el sitio son 6 páginas cortas (Inicio, Equipo, Valores, Ubicación, Contacto, Formulario). Al buscar el nombre del centro junto a su dirección, los resultados no muestran el sitio sino directorios y otros centros del mismo edificio. Para búsquedas como "evaluación autismo adultos Providencia", la primera página está ocupada por Doctoralia, Psicología y Mente y perfiles individuales con precios y reseñas.

Las 5 acciones de mayor impacto, en orden:

1. **Crear y verificar el perfil de Google Business** (ver el documento `.docx`). Es lo que más rápido te pone en el mapa y en el bloque local.
2. **Crear una página por servicio** (psicoterapia individual, evaluación de autismo, terapia de parejas, atención infanto-juvenil, atención online, etc.), con 600–1.200 palabras cada una.
3. **Crear una página por profesional** (hoy "Ver perfil" no tiene URL propia) con formación, registro en la Superintendencia de Salud y especialidades.
4. **Agregar datos estructurados (JSON-LD)**, una sección de **preguntas frecuentes** y un archivo `llms.txt`.
5. **Corregir el enlace roto del formulario de autismo** y agregar teléfono/WhatsApp.

---

## 1. Diagnóstico página por página

| Página | Title actual | Estado | Qué falta |
|---|---|---|---|
| `/` | Un Rincón del Encuentro \| Psicología Feminista Neurodiversa | ✅ Meta bien escrita | ~90 palabras de contenido. No menciona servicios concretos, precios ni preguntas. Sin enlaces a servicios. |
| `/equipo` | Nuestro Equipo de Psicólogas \| … | ✅ Alt en fotos | 8 profesionales sin página propia. Sin formación, sin n.º de registro, sin especialidad por persona en la vista indexable. |
| `/valores` | Valores y Evaluación de Autismo \| … | ✅ Precios visibles (muy bueno) | El texto describe 4 servicios en una sola página. Cada uno merece su página. Headings saltan de H1 a H4–H6. |
| `/ubicacion` | Ubicación en Providencia \| … | ⚠️ | Dirección sin n.º de oficina. Sin mapa embebido, sin indicaciones de llegada, sin horario. |
| `/contacto` | Contacto \| … | ⚠️ | Solo correo Gmail e Instagram. **Sin teléfono ni WhatsApp.** Sin horario de atención. |
| `/formulario` | Agenda tu Hora \| … | 🔴 | El formulario de autismo enlaza a una URL de **edición** de Google Forms (`/edit?chromeless=1`). Debe ser `/viewform`. Las personas sin permiso verán "Solicitar acceso" o un error. |

### Hallazgos generales

- **Contenido escaso.** Google no puede posicionar una página para "terapia de pareja LGBT Santiago" si no existe una página que hable de eso.
- **Sin preguntas frecuentes.** Las personas buscan "¿cuánto cuesta una evaluación de autismo en adultos?", "¿atienden con Isapre?", "¿la evaluación sirve para el certificado de discapacidad?". Esas preguntas deberían responderse en el sitio.
- **Sin señales de experiencia y confianza (E-E-A-T).** La salud mental es un tema "YMYL" (*Your Money or Your Life*) donde Google exige más evidencia de autoridad: títulos, universidades, registro en la Superintendencia de Salud, años de experiencia, formación en ADOS-2 / ADI-R.
- **Datos de contacto incompletos e inconsistentes.** El mismo edificio (Andrés de Fuenzalida 22) aloja otros centros de salud. Sin n.º de oficina y sin teléfono, Google tiene dificultades para asociar la dirección con tu negocio.
- **Correo `@gmail.com`.** Funciona, pero un correo `contacto@unrincondelencuentro.cl` refuerza la marca y la confianza.
- **Footer con © 2025.** Detalle menor, pero transmite sitio desactualizado. Usar el año dinámico.

### Lo que no pude verificar (revisar tú)

Mi entorno no pudo descargar directamente `robots.txt`, `sitemap.xml` ni el HTML crudo. Revisa con:

```bash
curl -s https://unrincondelencuentro.cl/robots.txt
curl -sI https://unrincondelencuentro.cl/sitemap.xml        # debe ser 200 + application/xml
curl -s https://unrincondelencuentro.cl/ | grep -c 'application/ld+json'   # 0 = no hay datos estructurados
curl -s https://unrincondelencuentro.cl/equipo | grep -i '<h1'          # ¿el H1 viene en el HTML o lo pinta JS?
curl -s https://unrincondelencuentro.cl/ | grep -o '<html[^>]*>'        # debe tener lang="es-CL"
curl -sI https://unrincondelencuentro.cl/no-existe                      # idealmente 404, no 200
```

Si el `<h1>` y el texto **no** aparecen en el HTML crudo, el sitio depende de JavaScript para mostrar contenido y conviene prerenderizar (ver sección 3.1).

---

## 2. Estrategia de palabras clave

Agrupa las búsquedas por **intención** y asigna **una página por grupo**. No intentes posicionar todas en la página de inicio.

| Grupo (página destino) | Palabras clave principales | Variantes |
|---|---|---|
| **Inicio** | centro psicológico Providencia, psicólogos Los Leones | consulta psicológica Providencia, centro de psicología Santiago oriente |
| **Psicoterapia afirmativa LGBTIAQ+** | psicóloga LGBT Santiago, psicólogo afirmativo Chile | psicóloga para personas trans, terapia LGBTIQ+ Providencia, psicóloga lesbiana / queer friendly |
| **Psicología feminista / enfoque de género** | psicóloga feminista Santiago, psicóloga con enfoque de género | terapia para mujeres Providencia, psicóloga violencia de género |
| **Neurodivergencias** | psicóloga neurodivergente, psicóloga TEA adultos | psicóloga TDAH adultos Santiago, terapia neuroafirmativa |
| **Evaluación de autismo adultos y adolescentes** | evaluación autismo adultos Santiago, ADOS-2 adultos Providencia | diagnóstico autismo adultos Chile precio, ADI-R Santiago, evaluación TEA adolescentes |
| **Terapia de pareja** | terapia de pareja Providencia, terapia de pareja LGBT | psicólogo de parejas Santiago precio |
| **Infanto-juvenil** | psicóloga infantil Providencia, psicólogo adolescentes Santiago | |
| **Atención online** | psicóloga online Chile, terapia online feminista | psicólogo online con Isapre |
| **Valores / Isapre** | psicólogo con Isapre Providencia, precio sesión psicólogo Santiago | reembolso Isapre psicólogo, boleta de honorarios psicología |

**Cómo usar cada palabra clave en su página:**

- En el `<title>` (máx. ~60 caracteres), con la palabra clave al inicio.
- En el `<h1>` (uno solo por página).
- En el primer párrafo y en al menos un `<h2>`.
- En la URL: `/servicios/evaluacion-autismo-adultos`, no `/servicio?id=3`.
- En el `alt` de alguna imagen, si tiene sentido.

> **Tip:** antes de escribir cada página, busca la palabra clave en Google en modo incógnito y revisa la sección **"Otras preguntas de los usuarios"** y las **búsquedas relacionadas** al final. Esas preguntas son tus `<h2>` y tu FAQ.

---

## 3. SEO técnico

### 3.1 Confirmar que el contenido está en el HTML (prerender)

Si el sitio es una SPA de React + Vite (como el flujo de despliegue en S3/CloudFront), Google puede renderizar JavaScript, pero con retraso. Bing y los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot) **renderizan mal o no renderizan** JavaScript. Para un sitio que quiere aparecer en asistentes de IA, prerenderizar es importante.

Opciones, de menor a mayor esfuerzo:

```bash
# Opción A: generar HTML estático por ruta en el build (Vite)
npm install -D vite-react-ssg          # o vite-plugin-ssr / vike
# Opción B: prerender después del build
npm install -D react-snap               # agrega "postbuild": "react-snap" en package.json
# Opción C: migrar a Astro (ideal para sitios de contenido) o Next.js con output: 'export'
```

Después de prerenderizar, el `curl` de la sección 1 debe mostrar el texto de cada página.

### 3.2 `robots.txt` (permitir buscadores y agentes de IA)

```
User-agent: *
Allow: /

# Agentes de IA: permitir explícitamente
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: https://unrincondelencuentro.cl/sitemap.xml
```

### 3.3 `sitemap.xml`

Debe incluir **todas** las URLs nuevas (servicios, profesionales, FAQ, blog). Con Vite:

```js
// vite.config.js
import Sitemap from 'vite-plugin-sitemap'

const routes = [
  '/', '/equipo', '/valores', '/ubicacion', '/contacto', '/formulario', '/preguntas-frecuentes',
  '/servicios/psicoterapia-afirmativa-lgbtiq',
  '/servicios/psicologia-feminista',
  '/servicios/neurodivergencias',
  '/servicios/evaluacion-autismo-adultos-adolescentes',
  '/servicios/terapia-de-pareja',
  '/servicios/psicologia-infanto-juvenil',
  '/servicios/terapia-online',
  '/equipo/magdalena-daveggio', '/equipo/brighitt-sanchez', /* ... resto del equipo */
]

export default {
  plugins: [react(), Sitemap({ hostname: 'https://unrincondelencuentro.cl', dynamicRoutes: routes })],
}
```

Enviar el sitemap en **Google Search Console** y **Bing Webmaster Tools** (pasos en la guía anterior).

### 3.4 Otros puntos técnicos

- [ ] `<html lang="es-CL">`.
- [ ] Una sola versión del dominio: `www` → redirección 301 a la versión sin `www` (CloudFront Function de la guía de dominio).
- [ ] Las URLs inexistentes deben devolver **404** real, no la home con 200. Con CloudFront y errores → `index.html`, crea una página 404 en React y, si prerenderizas, sirve `404.html` con código 404.
- [ ] Headings en orden: un `<h1>`, luego `<h2>`, `<h3>`. En `/valores` los precios están en `<h4>`–`<h6>`: cambiarlos por `<h2>` (servicio) + párrafo (precio).
- [ ] Imágenes WebP ✅ (ya lo hacen). Agregar `width`/`height` y `loading="lazy"` excepto en la primera imagen.
- [ ] Revisar velocidad en [PageSpeed Insights](https://pagespeed.web.dev/): objetivo LCP < 2,5 s, CLS < 0,1, INP < 200 ms en móvil.
- [ ] Enlace "Agenda tu hora" y teléfono/WhatsApp visibles en el móvil sin hacer scroll.
- [ ] Favicon y `apple-touch-icon`.
- [ ] `og:image` por página cuando sea posible (por ejemplo, foto de la profesional en su perfil).

---

## 4. Contenido: la parte que más mueve el ranking

### 4.1 Nueva arquitectura del sitio

```
/                                         Inicio (resumen + enlaces a todo)
/servicios/                               Índice de servicios
  psicoterapia-afirmativa-lgbtiq
  psicologia-feminista
  neurodivergencias
  evaluacion-autismo-adultos-adolescentes
  terapia-de-pareja
  psicologia-infanto-juvenil
  terapia-online
/equipo/                                  Grilla del equipo
  <nombre-apellido>                       Una página por profesional (8)
/valores                                  Precios, Isapre, formas de pago
/preguntas-frecuentes                     FAQ completa
/blog/ (o /recursos/)                     Artículos
/ubicacion                                Mapa, cómo llegar, horarios
/contacto
/formulario
```

### 4.2 Plantilla para cada página de servicio

Cada página de servicio debería tener entre 600 y 1.200 palabras, escritas para personas (no para Google):

1. **H1** con la palabra clave: *"Evaluación de autismo en adultos y adolescentes en Providencia"*.
2. **Primer párrafo**: qué es, para quién, dónde (presencial Providencia / online) y precio. Las IA citan mucho el primer párrafo.
3. **H2 ¿Para quién es?**: señales o motivos de consulta.
4. **H2 ¿Cómo es el proceso?**: los pasos (ya los tienes en `/valores` para autismo; súbelos aquí).
5. **H2 Nuestro enfoque**: afirmativo, neurodiverso, no patologizante. Esto es lo que te diferencia de los directorios.
6. **H2 Valores y formas de pago**: precio, Isapre, cuotas.
7. **H2 Profesionales que realizan este servicio**: tarjetas con enlace a cada perfil.
8. **H2 Preguntas frecuentes**: 4 a 6 preguntas propias del servicio.
9. **Botón de agenda** al inicio y al final.

### 4.3 Plantilla para cada profesional

- Nombre completo, pronombres, cargo.
- Título, universidad y año. **N.º de registro en la Superintendencia de Salud** (con enlace a la verificación pública).
- Formación de posgrado y certificaciones (ADOS-2, ADI-R, etc.).
- Áreas de atención y poblaciones (infancia, adolescentes, adultos, parejas).
- Modalidad (presencial / online) y si atiende con Isapre.
- Breve texto en primera persona sobre su enfoque.
- Foto con `alt="Nombre Apellido, psicóloga en Providencia"`.
- Botón para agendar con esa profesional.

Esto alimenta el E-E-A-T, permite posicionar por nombre propio y responde a búsquedas tipo "psicóloga ADOS-2 Providencia".

### 4.4 Página de preguntas frecuentes (FAQ)

Preguntas sugeridas (responder cada una en 2–5 oraciones, directas):

- ¿Cuánto cuesta una sesión? ¿Y con Isapre?
- ¿Atienden por Fonasa? (si no, decirlo claramente)
- ¿Puedo pedir reembolso a mi Isapre o seguro complementario?
- ¿Cómo es la primera sesión?
- ¿Cuánto dura una sesión y cada cuánto son?
- ¿Atienden online? ¿Desde regiones o fuera de Chile?
- ¿Qué significa terapia afirmativa?
- ¿Qué es el enfoque feminista en psicoterapia?
- ¿Cuántas sesiones tiene la evaluación de autismo? ¿Qué incluye el informe?
- ¿El informe de evaluación sirve para trámites (licencias, credencial de discapacidad, colegio, trabajo)?
- ¿Evalúan autismo en niños? (si no, aclarar desde qué edad)
- ¿Puedo elegir a mi psicóloga?
- ¿Cuál es la política de cancelación?
- ¿Cómo se paga? ¿Se puede en cuotas?
- ¿Cómo llego en Metro? ¿Hay estacionamiento?

### 4.5 Blog o sección de recursos

Publica **2 artículos al mes** como mínimo durante 6 meses. Temas con búsquedas reales y alineados con tu especialidad:

- Autismo en mujeres adultas: por qué se diagnostica tarde.
- Qué es el *masking* (enmascaramiento) en personas autistas.
- ADOS-2 y ADI-R: qué son y qué esperar de una evaluación.
- TDAH en adultos: señales y cuándo consultar.
- Cómo elegir una psicóloga afirmativa LGBTIAQ+.
- Salir del clóset en la adultez: acompañamiento psicológico.
- Terapia de pareja en relaciones LGBTIAQ+.
- Diferencias entre psicólogo, psiquiatra y neurólogo en una evaluación de TEA.
- ¿Cómo funciona el reembolso de Isapre por psicoterapia?
- Burnout autista: qué es y cómo se diferencia de la depresión.

Cada artículo debe enlazar a la página de servicio correspondiente y estar firmado por una profesional del equipo (con enlace a su perfil).

#### Convertir los mejores carruseles de Instagram en artículos

La forma más rápida de alimentar el blog es reutilizar el contenido que ya funciona en Instagram. Los carruseles con más guardados, compartidos o comentarios ya demostraron que responden a dudas reales del público. En Instagram, ese texto vive dentro de imágenes que Google y los asistentes de IA casi no leen. En el sitio, el mismo contenido se transforma en texto indexable y citable.

**Cómo hacerlo:**

1. **Elegir los carruseles.** En Instagram, en *Estadísticas → Contenido*, ordenar por guardados y compartidos (indican más interés que los "me gusta"). Priorizar los que tratan temas con búsquedas reales: autismo en adultos, *masking*, TDAH, terapia afirmativa, salir del clóset, etc.
2. **Ampliar, no copiar.** Cada lámina del carrusel se convierte en un `<h2>` con 2–4 párrafos de desarrollo. El artículo final debería tener entre 1.000 y 1.500 palabras, mucho más que el carrusel.
3. **Agregar lo que el carrusel no tiene:**
   - Un primer párrafo que responda directamente la pregunta del título (es lo que citan Google y las IA).
   - Una sección de preguntas frecuentes con 3–5 preguntas, tomadas de los comentarios y mensajes que generó el post y de "Otras preguntas de los usuarios" en Google.
   - Firma de la profesional que lo escribió, con enlace a su perfil.
   - Un enlace al servicio relacionado (por ejemplo, a la evaluación de autismo con su precio) y un botón para agendar.
4. **Ajustar el título a la búsqueda.** El título de Instagram suele ser llamativo ("5 señales que quizás no conocías"); el del artículo debe contener la palabra clave ("Autismo en mujeres adultas: 5 señales que suelen pasar desapercibidas").
5. **Imágenes.** Se pueden usar las láminas del carrusel dentro del artículo, en WebP y con `alt` descriptivo. El texto importante debe estar también escrito en la página, no solo en las imágenes.
6. **Cerrar el círculo.** Al final del artículo, un enlace al post original como complemento visual ("Revisa el resumen en nuestro Instagram"). En Instagram, avisar en una historia con sticker de enlace y fijar el artículo en la bio durante unos días.

**Evitar:** incrustar el post de Instagram (embed) en lugar de escribir el texto. Google no cuenta ese contenido como parte de la página y el embed hace más lenta la carga.

**Ritmo sugerido:** convertir 1 carrusel por semana o cada dos semanas. Con los carruseles que ya existen, el centro puede tener varios artículos publicados en pocas semanas sin partir de cero.

### 4.6 Enlazado interno

- Desde la home, enlaza a cada servicio con texto descriptivo ("evaluación de autismo en adultos"), no "ver más".
- Desde cada servicio, enlaza a las profesionales que lo atienden y viceversa.
- Desde cada artículo del blog, enlaza a 1–2 servicios.
- Menú: agregar **Servicios** y **Preguntas frecuentes**.

---

## 5. Datos estructurados (JSON-LD)

Agrega estos bloques en el `<head>` (o con `react-helmet-async`). Valídalos en [Rich Results Test](https://search.google.com/test/rich-results) y [Schema Validator](https://validator.schema.org/).

### 5.1 Negocio (en todas las páginas, o al menos en Inicio, Ubicación y Contacto)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": "https://unrincondelencuentro.cl/#clinica",
  "name": "Un Rincón del Encuentro",
  "alternateName": "Centro Psicológico Un Rincón del Encuentro",
  "description": "Centro de psicología feminista, afirmativa y neurodiversa. Psicoterapia para infancia, adolescencia y adultez, terapia de parejas y evaluación para la identificación de autismo. Presencial en Providencia y online.",
  "url": "https://unrincondelencuentro.cl/",
  "logo": "https://unrincondelencuentro.cl/og-image.jpg",
  "image": "https://unrincondelencuentro.cl/og-image.jpg",
  "email": "unrincondelencuentro@gmail.com",
  "telephone": "+56 9 XXXX XXXX",
  "priceRange": "$30.000 - $140.000",
  "currenciesAccepted": "CLP",
  "paymentAccepted": "Débito, Crédito, Transferencia",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Andrés de Fuenzalida 22, oficina XXX",
    "addressLocality": "Providencia",
    "addressRegion": "Región Metropolitana",
    "postalCode": "XXXXXXX",
    "addressCountry": "CL"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": -33.42XX, "longitude": -70.60XX },
  "hasMap": "https://maps.app.goo.gl/Pp8aakQ4LJmejiVd9",
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "20:00" }
  ],
  "areaServed": [{ "@type": "City", "name": "Santiago" }, { "@type": "Country", "name": "Chile" }],
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Psicoterapia individual afirmativa" },
    { "@type": "MedicalTherapy", "name": "Terapia de parejas" },
    { "@type": "MedicalTest", "name": "Evaluación para la identificación de autismo (ADOS-2, ADI-R)" }
  ],
  "sameAs": [
    "https://www.instagram.com/unrincondelencuentro"
  ]
}
</script>
```

Completa los `XXX` (teléfono, oficina, código postal, coordenadas y horario reales). Los datos deben ser **idénticos** a los del perfil de Google Business.

### 5.2 Servicios con precio (en `/valores` o en cada página de servicio)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Valores Un Rincón del Encuentro",
  "itemListElement": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Psicoterapia individual" }, "price": "30000", "priceCurrency": "CLP" },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Psicoterapia individual con Isapre" }, "price": "35000", "priceCurrency": "CLP" },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Psicoterapia de parejas" }, "price": "55000", "priceCurrency": "CLP" },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Evaluación para la identificación de autismo (4 sesiones)" }, "price": "140000", "priceCurrency": "CLP" }
  ]
}
</script>
```

### 5.3 Profesional (en cada `/equipo/<nombre>`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nombre Apellido",
  "jobTitle": "Psicóloga clínica",
  "url": "https://unrincondelencuentro.cl/equipo/nombre-apellido",
  "image": "https://unrincondelencuentro.cl/assets/nombre.webp",
  "worksFor": { "@id": "https://unrincondelencuentro.cl/#clinica" },
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universidad ..." },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "Certificación ADOS-2" }
  ],
  "knowsAbout": ["Autismo en adultos", "Psicoterapia afirmativa", "Enfoque de género"]
}
</script>
```

### 5.4 Preguntas frecuentes

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una sesión de psicoterapia?",
      "acceptedAnswer": { "@type": "Answer", "text": "La sesión de atención general cuesta $30.000 y la atención con Isapre $35.000." }
    }
  ]
}
</script>
```

> Google muestra los resultados enriquecidos de FAQ casi solo para sitios gubernamentales y de salud con mucha autoridad, pero el marcado igual ayuda a buscadores y asistentes de IA a entender las respuestas.

### 5.5 Breadcrumbs (en páginas internas)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://unrincondelencuentro.cl/" },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://unrincondelencuentro.cl/servicios/" },
    { "@type": "ListItem", "position": 3, "name": "Evaluación de autismo" }
  ]
}
</script>
```

---

## 6. Optimización para agentes de IA (GEO / AEO)

ChatGPT, Gemini, Perplexity, Claude y Copilot recomiendan negocios cuando encuentran información **clara, consistente y citada en varias fuentes**. Para lograrlo:

1. **Permitir los rastreadores de IA** en `robots.txt` (sección 3.2) y asegurar que el contenido esté en el HTML (sección 3.1).
2. **Publicar `llms.txt`** en la raíz (`public/llms.txt`), un resumen en Markdown pensado para modelos de lenguaje:

   ```markdown
   # Un Rincón del Encuentro

   > Centro psicológico en Providencia, Santiago de Chile (Metro Los Leones). Colectivo de psicólogas feministas con enfoque afirmativo LGBTIAQ+ y neurodiverso. Atención presencial y online para infancia, adolescencia, adultez y parejas.

   ## Servicios y valores
   - Psicoterapia individual: $30.000 por sesión. Con Isapre: $35.000.
   - Psicoterapia de parejas: $55.000 por sesión.
   - Evaluación para la identificación de autismo (adolescentes y adultos, ADOS-2): $140.000 en 4 sesiones. Pago en cuotas con tarjeta.

   ## Contacto
   - Dirección: Andrés de Fuenzalida 22, oficina XXX, Providencia, Santiago.
   - Correo: unrincondelencuentro@gmail.com
   - Teléfono / WhatsApp: +56 9 XXXX XXXX
   - Agenda: https://unrincondelencuentro.cl/formulario

   ## Páginas
   - [Equipo](https://unrincondelencuentro.cl/equipo)
   - [Valores](https://unrincondelencuentro.cl/valores)
   - [Preguntas frecuentes](https://unrincondelencuentro.cl/preguntas-frecuentes)
   - [Ubicación](https://unrincondelencuentro.cl/ubicacion)
   ```
3. **Escribir oraciones "citables"**: frases cortas y autosuficientes que una IA pueda copiar como respuesta. Ejemplo: *"Un Rincón del Encuentro realiza evaluaciones para la identificación de autismo en adolescentes y adultos en Providencia, Santiago, por $140.000 en cuatro sesiones."*
4. **Estar en Bing.** ChatGPT Search y Copilot usan el índice de Bing. Registrar el sitio en Bing Webmaster Tools y usar IndexNow.
5. **Coherencia de datos (NAP: nombre, dirección, teléfono)** en el sitio, Google Business, Instagram, Doctoralia y cualquier directorio. Las IA desconfían de datos contradictorios.
6. **Menciones externas.** Las IA recomiendan más lo que aparece en varias fuentes: directorios de salud, reseñas, prensa, organizaciones LGBTIAQ+ y de autismo, podcasts, entrevistas. Ver el documento de configuración de negocio.
7. **Probar periódicamente** preguntando a ChatGPT, Gemini y Perplexity: *"¿Dónde puedo hacer una evaluación de autismo para adultos en Providencia?"* o *"Recomiéndame una psicóloga afirmativa LGBT en Santiago"*. Anota si apareces y qué fuentes citan.

---

## 7. Autoridad externa (backlinks)

Google sigue usando los enlaces desde otros sitios como señal de confianza. Fuentes realistas para este negocio:

- **Directorios de salud**: Doctoralia, Psicología y Mente, TopDoctors, Encuentra tu Psicólogo, Psico.org, con enlace al sitio y datos idénticos.
- **Organizaciones**: fundaciones y agrupaciones de autismo, TDAH y diversidad sexual en Chile (por ejemplo, redes de profesionales afirmativos). Ofrecer charlas o material a cambio de aparecer en su listado.
- **Universidades**: perfiles de egresadas, colaboraciones de práctica o docencia.
- **Prensa y medios**: notas sobre autismo en mujeres adultas, salud mental LGBTIAQ+, etc. Las profesionales pueden ofrecerse como fuente.
- **Podcasts y entrevistas** con enlace en la descripción.
- **Instagram**: poner el enlace del sitio en la bio (Linktree o enlace directo a `/formulario`).

Evita comprar enlaces o directorios de baja calidad: pueden perjudicar el posicionamiento.

---

## 8. Conversión (que las visitas agenden)

Mejor posicionamiento sin conversión no sirve. Recomendaciones:

- **Corregir el enlace del formulario de autismo** (`/edit?chromeless=1` → `/viewform`).
- Agregar **WhatsApp** con botón flotante (`https://wa.me/569XXXXXXXX?text=Hola,%20quiero%20agendar`).
- Mostrar **horarios** de atención.
- Considerar un sistema de agenda en línea (Agenda Pro, Reservo, Medilink, Calendly) en lugar de un formulario que obliga a esperar contacto.
- Mostrar **reseñas** de Google en el sitio (cuando existan).
- Medir con **Google Analytics 4** o una alternativa sin cookies (Plausible, Umami) y marcar como conversión los clics en "Agenda tu hora", WhatsApp y correo.

---

## 9. Plan de trabajo sugerido

| Semana | Tareas |
|---|---|
| 1 | Corregir enlace del formulario. Agregar teléfono/WhatsApp y horario. Verificar `robots.txt`, `sitemap.xml`, `lang`, 404. Crear Google Business Profile (ver `.docx`). Search Console + Bing. |
| 2 | Agregar JSON-LD de negocio y servicios. Publicar `llms.txt`. Prerender si el contenido no está en el HTML. |
| 3–4 | Crear las 7 páginas de servicios y la página de preguntas frecuentes. Actualizar menú y enlaces internos. |
| 5–6 | Crear las 8 páginas de profesionales con credenciales y JSON-LD `Person`. |
| 7 en adelante | 2 artículos de blog al mes. Pedir reseñas en Google. Registrar en directorios. Buscar 1–2 menciones externas al mes. |
| Mensual | Revisar Search Console (consultas, páginas, errores). Probar consultas en asistentes de IA. Ajustar títulos de páginas con muchas impresiones y pocos clics. |

### Plazos esperables

- **Perfil de Google Business**: visible en Maps y búsquedas locales en 2–6 semanas tras la verificación.
- **Nuevas páginas indexadas**: días a 2 semanas, acelerando con Search Console.
- **Primera página para búsquedas de nicho** ("evaluación autismo adultos Providencia", "psicóloga afirmativa LGBT Providencia"): 3–6 meses con contenido sólido y reseñas.
- **Búsquedas amplias** ("psicólogo Santiago"): 6–12 meses o más; están dominadas por directorios. El camino realista es posicionar en el nicho, donde tu diferenciación es fuerte.

---

## 10. Checklist

**Urgente**
- [ ] Enlace del formulario de autismo corregido a `/viewform`
- [ ] Teléfono / WhatsApp en contacto y en el sitio
- [ ] Dirección con n.º de oficina
- [ ] Google Business Profile creado y verificado

**Técnico**
- [ ] Contenido presente en el HTML (prerender)
- [ ] `robots.txt` con sitemap y bots de IA permitidos
- [ ] `sitemap.xml` con todas las URLs, enviado a Google y Bing
- [ ] `lang="es-CL"`, 404 reales, redirección `www`
- [ ] Headings en orden correcto
- [ ] JSON-LD: negocio, servicios, personas, FAQ, breadcrumbs
- [ ] `llms.txt`
- [ ] PageSpeed móvil en verde

**Contenido**
- [ ] 7 páginas de servicio
- [ ] 8 páginas de profesionales con registro en Superintendencia de Salud
- [ ] Página de preguntas frecuentes
- [ ] Blog con 2 artículos al mes
- [ ] Los mejores carruseles de Instagram convertidos en artículos
- [ ] Enlazado interno entre servicios, equipo y blog

**Autoridad**
- [ ] Perfiles en Doctoralia y otros directorios con NAP idéntico
- [ ] Enlace en la bio de Instagram
- [ ] 1–2 menciones externas al mes
- [ ] Estrategia de reseñas activa
