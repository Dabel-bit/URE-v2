import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, Horario, Migas } from '../components/Comunes.jsx'
import { MapaUbicacion } from '../components/MapaUbicacion.jsx'
import { NEGOCIO, direccionCompleta } from '../data/negocio.js'
import { migas } from '../seo/esquemas.js'

const ITEMS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Ubicación', ruta: '/ubicacion' }]

export const Ubicacion = () => (
  <>
    <Seo
      titulo="Ubicación en Providencia, Metro Los Leones"
      descripcion={`Estamos en ${direccionCompleta()}, a pasos del ${NEGOCIO.metro}. Atención psicológica presencial y online.`}
      ruta="/ubicacion"
      jsonLd={[migas(ITEMS)]}
    />
    <div className="contenedor contenedor--angosto pagina">
      <Migas items={ITEMS} />
      <h1>Ubicación</h1>
      <address className="pagina__bajada">
        {direccionCompleta()}, {NEGOCIO.direccion.region}.
      </address>

      <section>
        <h2>Cómo llegar</h2>
        <p>Estamos a pasos del {NEGOCIO.metro}.</p>
      </section>

      <Horario />

      <section>
        <h2>Mapa</h2>
        <MapaUbicacion />
      </section>

      <section>
        <h2>¿Prefieres atención online?</h2>
        <p>También atendemos por videollamada, con los mismos valores.</p>
        <AccionesAgenda />
      </section>
    </div>
  </>
)
