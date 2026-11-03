import { Link } from 'react-router'
import { Seo } from '../components/Seo.jsx'
import { servicios } from '../data/servicios.js'

// Se publica como dist/404.html; CloudFront la entrega con código 404 (docs/seguridad-https.md).
export const NoEncontrada = () => (
  <>
    <Seo
      titulo="Página no encontrada"
      descripcion="La página que buscas no existe o cambió de dirección."
      ruta="/404"
      noIndex
    />
    <div className="contenedor contenedor--angosto pagina">
      <h1>No encontramos esta página</h1>
      <p className="pagina__bajada">Puede que la dirección haya cambiado. Estas páginas pueden ayudarte:</p>
      <ul className="lista">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/formulario">Agenda tu hora</Link></li>
        {servicios.map((s) => <li key={s.slug}><Link to={`/servicios/${s.slug}`}>{s.nombre}</Link></li>)}
      </ul>
    </div>
  </>
)
