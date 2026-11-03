import { Link, useParams } from 'react-router'
import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, ListaPreguntas, Migas, TarjetaPrecio } from '../components/Comunes.jsx'
import { TarjetaProfesional } from '../components/TarjetaProfesional.jsx'
import { servicios, buscarServicio } from '../data/servicios.js'
import { profesionales } from '../data/equipo.js'
import { migas, paginaPreguntas, servicio as esquemaServicio } from '../seo/esquemas.js'
import { NoEncontrada } from './NoEncontrada.jsx'

const MIGAS_SERVICIOS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Servicios', ruta: '/servicios' }]

export const Servicios = () => (
  <>
    <Seo
      titulo="Servicios de psicología en Providencia y online"
      descripcion="Psicoterapia afirmativa LGBTIAQ+, psicología feminista, neurodivergencias, evaluación de autismo en adultos y adolescentes, terapia de pareja, atención infanto-juvenil y terapia online."
      ruta="/servicios"
      jsonLd={[migas(MIGAS_SERVICIOS)]}
    />
    <div className="contenedor pagina">
      <Migas items={MIGAS_SERVICIOS} />
      <h1>Servicios de psicología</h1>
      <p className="pagina__bajada">
        Atención presencial en Providencia y online, con un enfoque feminista, afirmativo y neuroafirmativo.
      </p>
      <ul className="grilla grilla--servicios">
        {servicios.map((s) => (
          <li key={s.slug} className="tarjeta tarjeta--servicio">
            <h2><Link to={`/servicios/${s.slug}`} className="enlace-tarjeta">{s.nombre}</Link></h2>
            <p>{s.resumen}</p>
          </li>
        ))}
      </ul>
      <AccionesAgenda />
    </div>
  </>
)

export const Servicio = () => {
  const { slug } = useParams()
  const s = buscarServicio(slug)
  if (!s) return <NoEncontrada />

  const ruta = `/servicios/${s.slug}`
  const items = [...MIGAS_SERVICIOS, { nombre: s.nombre, ruta }]
  const equipoServicio = profesionales(s.profesionales)

  return (
    <>
      <Seo
        titulo={s.titulo}
        descripcion={s.descripcion}
        ruta={ruta}
        jsonLd={[esquemaServicio(s), migas(items), paginaPreguntas(s.faq)]}
      />
      <article className="contenedor contenedor--angosto pagina">
        <Migas items={items} />
        <h1>{s.h1}</h1>
        <p className="pagina__bajada">{s.intro}</p>
        <AccionesAgenda formulario={s.formulario} />

        {s.secciones.map((seccion) => (
          <section key={seccion.titulo}>
            <h2>{seccion.titulo}</h2>
            {seccion.parrafos.map((p) => <p key={p}>{p}</p>)}
            {seccion.lista && <ul className="lista">{seccion.lista.map((li) => <li key={li}>{li}</li>)}</ul>}
            {seccion.enlace && <p><Link to={seccion.enlace.a}>{seccion.enlace.texto}</Link></p>}
          </section>
        ))}

        {s.pasos && (
          <section>
            <h2>¿Cómo es el proceso?</h2>
            <ol className="pasos">
              {s.pasos.map((paso) => (
                <li key={paso.titulo}>
                  <strong>{paso.titulo}.</strong> <span className="etiqueta">{paso.modalidad}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section>
          <h2>Valores y formas de pago</h2>
          {s.precios.length
            ? <div className="grilla grilla--dos">{s.precios.map((c) => <TarjetaPrecio key={c} clave={c} />)}</div>
            : <p>Consulta los valores escribiéndonos o al completar el formulario de agenda.</p>}
          <p><Link to="/valores">Ver todos los valores</Link></p>
        </section>

        <section>
          <h2>Profesionales que realizan este servicio</h2>
          <ul className="grilla grilla--equipo">
            {equipoServicio.map((p) => <li key={p.slug}><TarjetaProfesional profesional={p} /></li>)}
          </ul>
        </section>

        <section>
          <h2>Preguntas frecuentes</h2>
          <ListaPreguntas preguntas={s.faq} />
        </section>

        <section className="cierre">
          <h2>Agenda tu hora</h2>
          <p>Completa el formulario y te contactaremos a la brevedad para coordinar una sesión inicial.</p>
          <AccionesAgenda formulario={s.formulario} />
        </section>
      </article>
    </>
  )
}
