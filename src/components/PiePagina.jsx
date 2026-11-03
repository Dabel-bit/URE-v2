import { Link } from 'react-router'
import { NEGOCIO, direccionCompleta, enlaceWhatsapp } from '../data/negocio.js'
import { servicios } from '../data/servicios.js'
import { MENU } from './Encabezado.jsx'

export const PiePagina = () => (
  <footer className="pie">
    <div className="contenedor pie__grilla">
      <section aria-labelledby="pie-centro">
        <h2 id="pie-centro">{NEGOCIO.nombre}</h2>
        <p>{NEGOCIO.descripcionCorta}</p>
        <address>
          {direccionCompleta()}
          <br />
          {NEGOCIO.metro}
          <br />
          <a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a>
          {NEGOCIO.telefono && (
            <>
              <br />
              <a href={`tel:${NEGOCIO.telefono.replace(/\s/g, '')}`}>{NEGOCIO.telefono}</a>
            </>
          )}
          {NEGOCIO.whatsapp && (
            <>
              <br />
              <a href={enlaceWhatsapp()} rel="noopener noreferrer" target="_blank">WhatsApp</a>
            </>
          )}
        </address>
      </section>

      <nav aria-labelledby="pie-servicios">
        <h2 id="pie-servicios">Servicios</h2>
        <ul>
          {servicios.map((s) => (
            <li key={s.slug}><Link to={`/servicios/${s.slug}`}>{s.nombre}</Link></li>
          ))}
        </ul>
      </nav>

      <nav aria-labelledby="pie-sitio">
        <h2 id="pie-sitio">El centro</h2>
        <ul>
          {MENU.filter((m) => m.a !== '/servicios').map(({ a, texto }) => (
            <li key={a}><Link to={a}>{texto}</Link></li>
          ))}
          <li><Link to="/formulario">Agenda tu hora</Link></li>
          <li>
            <a href={NEGOCIO.instagram} rel="noopener noreferrer" target="_blank">
              Instagram {NEGOCIO.instagramUsuario}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <p className="pie__legal contenedor">
      © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {NEGOCIO.nombre}®
    </p>
  </footer>
)
