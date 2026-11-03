import { useState } from 'react'
import { NEGOCIO } from '../data/negocio.js'
import { EnlaceExterno } from './Comunes.jsx'

// El mapa de Google se carga solo cuando la persona lo pide: así la página no envía
// datos ni cookies a Google sin consentimiento, y carga más rápido.
export const MapaUbicacion = () => {
  const [visible, setVisible] = useState(false)

  if (!visible) {
    return (
      <div className="mapa mapa--reposo">
        <p>El mapa interactivo lo entrega Google Maps, que puede usar cookies.</p>
        <div className="acciones">
          <button type="button" className="boton boton--principal" onClick={() => setVisible(true)}>
            Mostrar mapa
          </button>
          <EnlaceExterno href={NEGOCIO.mapa} className="boton boton--secundario">Abrir en Google Maps</EnlaceExterno>
        </div>
      </div>
    )
  }

  return (
    <div className="mapa">
      <iframe
        src={NEGOCIO.mapaEmbed}
        title={`Mapa de ubicación de ${NEGOCIO.nombre}`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        allowFullScreen
      />
    </div>
  )
}
