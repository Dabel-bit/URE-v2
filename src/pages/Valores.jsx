import { Link } from 'react-router'
import { Seo } from '../components/Seo.jsx'
import { AccionesAgenda, Migas, TarjetaPrecio } from '../components/Comunes.jsx'
import { NEGOCIO } from '../data/negocio.js'
import { PRECIOS, pesos, PASOS_EVALUACION_AUTISMO } from '../data/precios.js'
import { catalogoPrecios, migas } from '../seo/esquemas.js'

const ITEMS = [{ nombre: 'Inicio', ruta: '/' }, { nombre: 'Valores', ruta: '/valores' }]

export const Valores = () => (
  <>
    <Seo
      titulo="Valores de psicoterapia, Isapre y evaluación de autismo"
      descripcion={`Psicoterapia individual ${pesos(PRECIOS.general.monto)}, con Isapre ${pesos(PRECIOS.isapre.monto)}, terapia de parejas ${pesos(PRECIOS.pareja.monto)} y evaluación de autismo para adolescentes y adultos ${pesos(PRECIOS.autismo.monto)}. Providencia y online.`}
      ruta="/valores"
      jsonLd={[catalogoPrecios(), migas(ITEMS)]}
    />
    <div className="contenedor contenedor--angosto pagina">
      <Migas items={ITEMS} />
      <h1>Valores</h1>
      <p className="pagina__bajada">
        Los mismos valores para atención presencial en Providencia y online. Formas de pago: {NEGOCIO.formasDePago.toLowerCase()}.
      </p>

      <div className="grilla grilla--dos">
        <TarjetaPrecio clave="general" nivel={2} />
        <TarjetaPrecio clave="isapre" nivel={2} />
        <TarjetaPrecio clave="pareja" nivel={2} />
      </div>

      <section className="tarjeta tarjeta--destacada">
        <h2>{PRECIOS.autismo.nombre}</h2>
        <p className="precio">{pesos(PRECIOS.autismo.monto)}</p>
        <p>{PRECIOS.autismo.detalle}.</p>
        <ol className="pasos">
          {PASOS_EVALUACION_AUTISMO.map((paso) => (
            <li key={paso.titulo}>{paso.titulo}. <span className="etiqueta">{paso.modalidad}</span></li>
          ))}
        </ol>
        <p>
          <Link to="/servicios/evaluacion-autismo-adultos-adolescentes">Conoce en detalle la evaluación de autismo</Link>
        </p>
      </section>

      <AccionesAgenda />
    </div>
  </>
)
