// Piezas pequeñas que se repiten en varias páginas.
import { Link } from 'react-router'
import { NEGOCIO, enlaceWhatsapp } from '../data/negocio.js'
import { PRECIOS, pesos } from '../data/precios.js'

// Enlaces externos: siempre en pestaña nueva y sin filtrar la página de origen.
export const EnlaceExterno = ({ href, children, className }) => (
  <a href={href} className={className} target="_blank" rel="noopener noreferrer">
    {children}
    <span className="solo-lectores"> (se abre en una pestaña nueva)</span>
  </a>
)

// Migas de pan visibles. items: [{ nombre, ruta }]; el último es la página actual.
export const Migas = ({ items }) => (
  <nav aria-label="Ruta de navegación" className="migas">
    <ol>
      {items.map((item, i) => (
        <li key={item.ruta}>
          {i < items.length - 1
            ? <Link to={item.ruta}>{item.nombre}</Link>
            : <span aria-current="page">{item.nombre}</span>}
        </li>
      ))}
    </ol>
  </nav>
)

export const AccionesAgenda = ({ formulario = 'general' }) => (
  <div className="acciones">
    <Link to="/formulario" className="boton boton--principal">
      {formulario === 'autismo' ? 'Solicitar evaluación' : 'Agenda tu hora'}
    </Link>
    {NEGOCIO.whatsapp
      ? <EnlaceExterno href={enlaceWhatsapp()} className="boton boton--secundario">Escríbenos por WhatsApp</EnlaceExterno>
      : <a href={`mailto:${NEGOCIO.correo}`} className="boton boton--secundario">Escríbenos un correo</a>}
  </div>
)

export const TarjetaPrecio = ({ clave, nivel = 3 }) => {
  const { nombre, monto, detalle } = PRECIOS[clave]
  const Titulo = `h${nivel}`
  return (
    <div className="tarjeta tarjeta--precio">
      <Titulo>{nombre}</Titulo>
      <p className="precio">{pesos(monto)}</p>
      <p>{detalle}</p>
    </div>
  )
}

// Preguntas frecuentes con <details>: funcionan sin JavaScript y con teclado.
export const ListaPreguntas = ({ preguntas, nivel = 3 }) => {
  const Titulo = `h${nivel}`
  return (
    <div className="preguntas">
      {preguntas.map(({ pregunta, respuesta, enlace }) => (
        <details key={pregunta}>
          <summary><Titulo>{pregunta}</Titulo></summary>
          <p>
            {respuesta}
            {enlace && <> <Link to={enlace}>Más información</Link></>}
          </p>
        </details>
      ))}
    </div>
  )
}

// Solo aparece cuando NEGOCIO.horario tiene datos.
export const Horario = () =>
  NEGOCIO.horario.length > 0 && (
    <section>
      <h2>Horario de atención</h2>
      <dl className="horario">
        {NEGOCIO.horario.map((h) => (
          <div key={h.etiqueta}>
            <dt>{h.etiqueta}</dt>
            <dd>{h.abre} a {h.cierra}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
