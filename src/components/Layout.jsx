import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Encabezado } from './Encabezado.jsx'
import { PiePagina } from './PiePagina.jsx'
import { NEGOCIO, enlaceWhatsapp } from '../data/negocio.js'

// Al cambiar de página: vuelve arriba y lleva el foco al contenido, para que los
// lectores de pantalla anuncien la página nueva (no en la carga inicial).
const useFocoAlNavegar = (mainRef) => {
  const { pathname } = useLocation()
  const primeraVez = useRef(true)

  useEffect(() => {
    if (primeraVez.current) {
      primeraVez.current = false
      return
    }
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname, mainRef])
}

export const Layout = () => {
  const mainRef = useRef(null)
  useFocoAlNavegar(mainRef)

  return (
    <>
      <a href="#contenido" className="saltar">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido" tabIndex={-1} ref={mainRef}>
        <Outlet />
      </main>
      <PiePagina />
      {NEGOCIO.whatsapp && (
        <a href={enlaceWhatsapp()} className="whatsapp-flotante" target="_blank" rel="noopener noreferrer">
          WhatsApp<span className="solo-lectores"> (se abre en una pestaña nueva)</span>
        </a>
      )}
    </>
  )
}
