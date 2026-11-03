import { Link } from 'react-router'
import logo from '../assets/img/LogoUre.webp'
import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, ListaPreguntas, TarjetaPrecio } from '../components/Comunes.jsx'
import { TarjetaProfesional } from '../components/TarjetaProfesional.jsx'
import { NEGOCIO, direccionCompleta } from '../data/negocio.js'
import { servicios } from '../data/servicios.js'
import { equipo } from '../data/equipo.js'
import { todasLasPreguntas } from '../data/preguntas.js'

const PILARES = [
  {
    titulo: 'Feminista y con enfoque de género',
    texto: 'Comprendemos el malestar en su contexto social, sin culpabilizar a la persona por experiencias que tienen raíces en la desigualdad.',
    a: '/servicios/psicologia-feminista',
  },
  {
    titulo: 'Afirmativa LGBTIAQ+',
    texto: 'Un espacio seguro para la diversidad sexual y de género, donde se respetan tu nombre, tus pronombres y tu historia.',
    a: '/servicios/psicoterapia-afirmativa-lgbtiq',
  },
  {
    titulo: 'Neuroafirmativa',
    texto: 'Acompañamos a personas autistas, con TDAH y otras neurodivergencias sin intentar que dejen de ser quienes son.',
    a: '/servicios/neurodivergencias',
  },
]

const PREGUNTAS_DESTACADAS = ['¿Cuánto cuesta una sesión de psicoterapia?', '¿Atienden con Isapre?', '¿Atienden online?', '¿Cómo agendo una hora?']

export const Inicio = () => (
  <>
    <Seo
      titulo="Centro psicológico en Providencia | Un Rincón del Encuentro"
      descripcion="Psicología feminista, afirmativa LGBTIAQ+ y neurodiversa en Providencia (Metro Los Leones) y online. Psicoterapia para infancia, adolescencia y adultez, terapia de parejas y evaluación de autismo en adultos."
      ruta="/"
    />

    <section className="portada">
      <div className="contenedor portada__grilla">
        <div>
          <p className="antetitulo">Centro psicológico en Providencia y online</p>
          <h1>Un Rincón del Encuentro</h1>
          <p className="portada__bajada">
            Somos un colectivo de psicólogxs feministas que busca entregar un espacio seguro de atención,
            desde un enfoque de género y con especialidad en temáticas LGBTIAQ+ y neurodivergencias.
          </p>
          <p>
            Atendemos infancia, juventud y adultez en {NEGOCIO.direccion.comuna}, a pasos del {NEGOCIO.metro}, y por videollamada.
          </p>
          <AccionesAgenda />
        </div>
        <img src={logo} alt={`Logo de ${NEGOCIO.nombre}`} width={600} height={600} fetchPriority="high" className="portada__logo" />
      </div>
    </section>

    <section className="seccion" aria-labelledby="titulo-servicios">
      <div className="contenedor">
        <h2 id="titulo-servicios">Servicios</h2>
        <ul className="grilla grilla--servicios">
          {servicios.map((s) => (
            <li key={s.slug} className="tarjeta tarjeta--servicio">
              <h3><Link to={`/servicios/${s.slug}`} className="enlace-tarjeta">{s.nombre}</Link></h3>
              <p>{s.resumen}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="seccion seccion--lila" aria-labelledby="titulo-enfoque">
      <div className="contenedor">
        <h2 id="titulo-enfoque">Nuestro enfoque</h2>
        <p className="seccion__bajada">
          Ofrecemos un espacio terapéutico centrado en las necesidades de cada paciente, comprendiendo su historia,
          su contexto y su cultura. Nuestro objetivo es generar procesos psicoterapéuticos y promover el bienestar
          integral de la salud mental.
        </p>
        <ul className="grilla grilla--tres">
          {PILARES.map((p) => (
            <li key={p.a} className="tarjeta">
              <h3><Link to={p.a} className="enlace-tarjeta">{p.titulo}</Link></h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="seccion" aria-labelledby="titulo-valores">
      <div className="contenedor">
        <h2 id="titulo-valores">Valores</h2>
        <div className="grilla grilla--cuatro">
          {['general', 'isapre', 'pareja', 'autismo'].map((clave) => <TarjetaPrecio key={clave} clave={clave} />)}
        </div>
        <p><Link to="/valores">Ver todos los valores y formas de pago</Link></p>
      </div>
    </section>

    <section className="seccion seccion--crema" aria-labelledby="titulo-equipo">
      <div className="contenedor">
        <h2 id="titulo-equipo">Nuestro equipo</h2>
        <ul className="grilla grilla--equipo">
          {equipo.slice(0, 4).map((p) => <li key={p.slug}><TarjetaProfesional profesional={p} /></li>)}
        </ul>
        <p><Link to="/equipo">Conoce a todo el equipo</Link></p>
      </div>
    </section>

    <section className="seccion" aria-labelledby="titulo-preguntas">
      <div className="contenedor contenedor--angosto">
        <h2 id="titulo-preguntas">Preguntas frecuentes</h2>
        <ListaPreguntas preguntas={todasLasPreguntas.filter((p) => PREGUNTAS_DESTACADAS.includes(p.pregunta))} />
        <p><Link to="/preguntas-frecuentes">Ver todas las preguntas frecuentes</Link></p>
      </div>
    </section>

    <section className="seccion seccion--cierre" aria-labelledby="titulo-agenda">
      <div className="contenedor contenedor--angosto">
        <h2 id="titulo-agenda">Agenda tu primera sesión</h2>
        <p>Estamos en {direccionCompleta()}. También atendemos online.</p>
        <AccionesAgenda />
      </div>
    </section>
  </>
)
