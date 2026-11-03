import { Link } from 'react-router'
import { Seo } from '../components/Seo.jsx'
import { EnlaceExterno, Horario, Migas } from '../components/Comunes.jsx'
import { NEGOCIO, direccionCompleta, enlaceWhatsapp } from '../data/negocio.js'
import { migas } from '../seo/esquemas.js'

const ITEMS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Contacto', ruta: '/contacto' }]

export const Contacto = () => (
  <>
    <Seo
      titulo="Contacto"
      descripcion="Escríbenos para agendar atención psicológica afirmativa, feminista y neurodiversa en Providencia, Santiago, o en modalidad online."
      ruta="/contacto"
      jsonLd={[migas(ITEMS)]}
    />
    <div className="contenedor contenedor--angosto pagina">
      <Migas items={ITEMS} />
      <h1>Contacto</h1>
      <p className="pagina__bajada">
        Para agendar, lo más rápido es completar el <Link to="/formulario">formulario de agenda</Link>.
        También puedes escribirnos:
      </p>

      <ul className="grilla grilla--dos">
        <li className="tarjeta">
          <h2>Correo</h2>
          <p><a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a></p>
        </li>
        {NEGOCIO.telefono && (
          <li className="tarjeta">
            <h2>Teléfono</h2>
            <p><a href={`tel:${NEGOCIO.telefono.replace(/\s/g, '')}`}>{NEGOCIO.telefono}</a></p>
          </li>
        )}
        {NEGOCIO.whatsapp && (
          <li className="tarjeta">
            <h2>WhatsApp</h2>
            <p><EnlaceExterno href={enlaceWhatsapp()}>Escríbenos por WhatsApp</EnlaceExterno></p>
          </li>
        )}
        <li className="tarjeta">
          <h2>Instagram</h2>
          <p><EnlaceExterno href={NEGOCIO.instagram}>{NEGOCIO.instagramUsuario}</EnlaceExterno></p>
        </li>
        <li className="tarjeta">
          <h2>Dirección</h2>
          <p><Link to="/ubicacion">{direccionCompleta()}</Link></p>
        </li>
      </ul>

      <Horario />
    </div>
  </>
)
