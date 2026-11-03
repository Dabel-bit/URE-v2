import { Link, useParams } from 'react-router'
import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, EnlaceExterno, Migas } from '../components/Comunes.jsx'
import { TarjetaProfesional } from '../components/TarjetaProfesional.jsx'
import { equipo, buscarProfesional, REGISTRO_PRESTADORES_URL } from '../data/equipo.js'
import { serviciosDe } from '../data/servicios.js'
import { migas, persona } from '../seo/esquemas.js'
import { NoEncontrada } from './NoEncontrada.jsx'

const MIGAS_EQUIPO = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Equipo', ruta: '/equipo' }]

export const Equipo = () => (
  <>
    <Seo
      titulo="Equipo de psicólogas en Providencia"
      descripcion="Conoce a las psicólogas de Un Rincón del Encuentro: psicoterapia afirmativa y con enfoque de género, neurodivergencias, evaluación de autismo (ADOS-2 y ADI-R) y terapia de parejas LGBTIAQ+."
      ruta="/equipo"
      jsonLd={[migas(MIGAS_EQUIPO)]}
    />
    <div className="contenedor pagina">
      <Migas items={MIGAS_EQUIPO} />
      <h1>Nuestro equipo</h1>
      <p className="pagina__bajada">
        Psicólogas clínicas con formación en enfoque de género, atención afirmativa a la diversidad sexual y de
        género, y neurodivergencias.
      </p>
      <ul className="grilla grilla--equipo">
        {equipo.map((p) => <li key={p.slug}><TarjetaProfesional profesional={p} nivel={2} /></li>)}
      </ul>
    </div>
  </>
)

export const Profesional = () => {
  const { slug } = useParams()
  const p = buscarProfesional(slug)
  if (!p) return <NoEncontrada />

  const ruta = `/equipo/${p.slug}`
  const items = [...MIGAS_EQUIPO, { nombre: p.nombre, ruta }]
  const susServicios = serviciosDe(p.slug)
  // "psicóloga" o "psicólogx", según el cargo de cada profesional.
  const profesion = p.cargo.split('·').pop().trim().split(' ')[0].toLowerCase()

  return (
    <>
      <Seo
        titulo={`${p.nombre}, ${profesion} en Providencia`}
        descripcion={`${p.nombre} (${p.pronombres}), ${p.cargo.toLowerCase()} en Un Rincón del Encuentro. ${p.areas.slice(0, 4).join(', ')}. Providencia, Santiago.`}
        ruta={ruta}
        tipo="profile"
        imagen={{ url: p.imagen, alt: p.nombre }}
        jsonLd={[persona(p), migas(items)]}
      />
      <article className="contenedor contenedor--angosto pagina perfil">
        <Migas items={items} />
        <header className="perfil__cabecera">
          <img src={p.imagen} alt={`${p.nombre}, ${p.cargo.toLowerCase()} en Providencia`} width={180} height={180} />
          <div>
            <h1>{p.nombre}</h1>
            <p className="perfil__cargo">{p.cargo}</p>
            <p>Pronombres: {p.pronombres}</p>
          </div>
        </header>

        <p className="pagina__bajada">{p.enfoque}</p>

        <section>
          <h2>Formación y certificaciones</h2>
          <ul className="lista">{p.formacion.map((f) => <li key={f}>{f}</li>)}</ul>
          {p.registroSIS && (
            <p>
              Registro Nacional de Prestadores Individuales de Salud n.º {p.registroSIS}.{' '}
              <EnlaceExterno href={REGISTRO_PRESTADORES_URL}>Verificar en la Superintendencia de Salud</EnlaceExterno>
            </p>
          )}
        </section>

        <section>
          <h2>Áreas de atención</h2>
          <ul className="etiquetas">{p.areas.map((a) => <li key={a}>{a}</li>)}</ul>
          <p>Atiende a: {p.poblaciones.join(', ').toLowerCase()}.</p>
        </section>

        {susServicios.length > 0 && (
          <section>
            <h2>Servicios</h2>
            <ul className="lista">
              {susServicios.map((s) => <li key={s.slug}><Link to={`/servicios/${s.slug}`}>{s.nombre}</Link></li>)}
            </ul>
          </section>
        )}

        <section className="cierre">
          <h2>Agenda con {p.nombre.split(' ')[0]}</h2>
          <p>Completa el formulario y te contactaremos a la brevedad para coordinar una sesión inicial.</p>
          <AccionesAgenda />
        </section>
      </article>
    </>
  )
}
