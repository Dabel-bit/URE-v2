import { Seo } from '../components/Seo.jsx'
import { EnlaceExterno, Migas } from '../components/Comunes.jsx'
import { NEGOCIO } from '../data/negocio.js'
import { migas } from '../seo/esquemas.js'

const ITEMS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Agenda tu hora', ruta: '/formulario' }]

export const Agenda = () => (
  <>
    <Seo
      titulo="Agenda tu hora"
      descripcion="Agenda tu primera sesión: completa el formulario de atención general o el de evaluación para la identificación de autismo y te contactaremos a la brevedad. Providencia, Santiago y online."
      ruta="/formulario"
      jsonLd={[migas(ITEMS)]}
    />
    <div className="contenedor contenedor--angosto pagina">
      <Migas items={ITEMS} />
      <h1>Agenda tu hora</h1>
      <p className="pagina__bajada">
        ¡Bienvenidx! Un Rincón del Encuentro está compuesto por psicólogxs que buscan entregar un espacio
        psicoterapéutico seguro, desde un enfoque afirmativo y de género.
      </p>
      <p>
        El formulario nos permite conocer inicialmente tu motivo de consulta para contactarte y ofrecerte la atención
        que necesitas. Una vez enviado, nos pondremos en contacto a la brevedad a través del número que nos indiques,
        para conversar sobre la posibilidad de agendar una sesión inicial con alguna de nuestras profesionales.
      </p>
      <p>
        Toda la información que entregues es confidencial y solo se usará para los fines mencionados.
      </p>

      <div className="grilla grilla--dos">
        <section className="tarjeta">
          <h2>Atención general</h2>
          <p>Psicoterapia individual, de pareja, infanto-juvenil u online.</p>
          <EnlaceExterno href={NEGOCIO.formularios.general} className="boton boton--principal">
            Formulario de atención general
          </EnlaceExterno>
        </section>
        <section className="tarjeta">
          <h2>Evaluación de autismo</h2>
          <p>Evaluación para la identificación de autismo en adolescentes y adultos.</p>
          <EnlaceExterno href={NEGOCIO.formularios.autismo} className="boton boton--principal">
            Formulario de evaluación de autismo
          </EnlaceExterno>
        </section>
      </div>

      <p>
        Si tienes alguna consulta, escríbenos a <a href={`mailto:${NEGOCIO.correo}`}>{NEGOCIO.correo}</a>.
      </p>
    </div>
  </>
)
