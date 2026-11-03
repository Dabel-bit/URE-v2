import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import logo from '../assets/img/LogoUre.webp'
import { NEGOCIO } from '../data/negocio.js'

export const MENU = [
  { a: '/servicios', texto: 'Servicios' },
  { a: '/equipo', texto: 'Equipo' },
  { a: '/valores', texto: 'Valores' },
  { a: '/preguntas-frecuentes', texto: 'Preguntas frecuentes' },
  { a: '/ubicacion', texto: 'Ubicación' },
  { a: '/contacto', texto: 'Contacto' },
]

export const Encabezado = () => {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  useEffect(() => {
    if (!abierto) return
    const alPresionar = (e) => e.key === 'Escape' && setAbierto(false)
    document.addEventListener('keydown', alPresionar)
    return () => document.removeEventListener('keydown', alPresionar)
  }, [abierto])

  return (
    <header className="encabezado">
      <div className="encabezado__barra contenedor">
        <Link to="/" className="encabezado__marca" onClick={cerrar}>
          <img src={logo} alt="" width={44} height={44} />
          <span>{NEGOCIO.nombre}</span>
        </Link>

        <button
          type="button"
          className="encabezado__menu-boton"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="encabezado__menu-icono" aria-hidden="true" />
          <span>{abierto ? 'Cerrar' : 'Menú'}</span>
        </button>

        <nav id="menu-principal" aria-label="Principal" className={`encabezado__nav${abierto ? ' es-abierto' : ''}`}>
          <ul>
            {MENU.map(({ a, texto }) => (
              <li key={a}>
                <NavLink to={a} onClick={cerrar}>{texto}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/formulario" className="boton boton--principal encabezado__agenda" onClick={cerrar}>
          Agenda tu hora
        </Link>
      </div>
    </header>
  )
}
