import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout.jsx'
import { Inicio } from './pages/Inicio.jsx'
import { Servicios, Servicio } from './pages/Servicios.jsx'
import { Equipo, Profesional } from './pages/Equipo.jsx'
import { Valores } from './pages/Valores.jsx'
import { PreguntasFrecuentes } from './pages/PreguntasFrecuentes.jsx'
import { Ubicacion } from './pages/Ubicacion.jsx'
import { Contacto } from './pages/Contacto.jsx'
import { Agenda } from './pages/Agenda.jsx'
import { NoEncontrada } from './pages/NoEncontrada.jsx'
import { servicios } from './data/servicios.js'
import { equipo } from './data/equipo.js'

import '@fontsource/livvic/400.css'
import '@fontsource/livvic/700.css'
import './styles/base.css'
import './styles/componentes.css'

// Rutas que se publican como HTML (prerender) y en sitemap.xml. '/404' se publica pero no se indexa.
export const RUTAS_PUBLICADAS = [
  '/',
  '/servicios',
  ...servicios.map((s) => `/servicios/${s.slug}`),
  '/equipo',
  ...equipo.map((p) => `/equipo/${p.slug}`),
  '/valores',
  '/preguntas-frecuentes',
  '/ubicacion',
  '/contacto',
  '/formulario',
]

// Compartidas por el navegador (BrowserRouter, abajo) y el prerender (StaticRouter, en entry-server.jsx).
export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Inicio />} />
      <Route path="servicios" element={<Servicios />} />
      <Route path="servicios/:slug" element={<Servicio />} />
      <Route path="equipo" element={<Equipo />} />
      <Route path="equipo/:slug" element={<Profesional />} />
      <Route path="valores" element={<Valores />} />
      <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="ubicacion" element={<Ubicacion />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="formulario" element={<Agenda />} />
      <Route path="*" element={<NoEncontrada />} />
    </Route>
  </Routes>
)

export const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
