import { Link } from 'react-router'

export const TarjetaProfesional = ({ profesional, nivel = 3 }) => {
  const { slug, nombre, cargo, pronombres, imagen, areas } = profesional
  const Titulo = `h${nivel}`
  return (
    <article className="tarjeta tarjeta--profesional">
      <img src={imagen} alt={`${nombre}, ${cargo.toLowerCase()} en Providencia`} width={120} height={120} loading="lazy" />
      <Titulo>
        <Link to={`/equipo/${slug}`} className="enlace-tarjeta">{nombre}</Link>
      </Titulo>
      <p className="tarjeta__cargo">{cargo} · <span>{pronombres}</span></p>
      <p className="tarjeta__areas">{areas.slice(0, 3).join(' · ')}</p>
    </article>
  )
}
