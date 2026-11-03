import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, ListaPreguntas, Migas } from '../components/Comunes.jsx'
import { categoriasPreguntas, todasLasPreguntas } from '../data/preguntas.js'
import { migas, paginaPreguntas } from '../seo/esquemas.js'

const ITEMS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Preguntas frecuentes', ruta: '/preguntas-frecuentes' }]

export const PreguntasFrecuentes = () => (
  <>
    <Seo
      titulo="Preguntas frecuentes sobre la atención psicológica"
      descripcion="Valores, Isapre, atención online, evaluación de autismo, terapia afirmativa y cómo agendar en Un Rincón del Encuentro, Providencia."
      ruta="/preguntas-frecuentes"
      jsonLd={[paginaPreguntas(todasLasPreguntas), migas(ITEMS)]}
    />
    <div className="contenedor contenedor--angosto pagina">
      <Migas items={ITEMS} />
      <h1>Preguntas frecuentes</h1>
      {categoriasPreguntas.map((c) => (
        <section key={c.titulo}>
          <h2>{c.titulo}</h2>
          <ListaPreguntas preguntas={c.preguntas} />
        </section>
      ))}
      <section className="cierre">
        <h2>¿Tienes otra pregunta?</h2>
        <p>Escríbenos y te responderemos a la brevedad.</p>
        <AccionesAgenda />
      </section>
    </div>
  </>
)
