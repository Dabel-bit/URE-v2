import { createContext, useContext, useEffect } from 'react'
import { construirHead, aplicarHeadEnDocumento } from '../seo/head.js'

// En el prerender, entry-server.jsx entrega en este contexto una función que recibe el
// <head> de la página. En el navegador no hay contexto y el <head> se actualiza al navegar.
export const SeoContext = createContext(null)

// Props: titulo, descripcion, ruta, imagen ({ url, alt }), tipo, jsonLd (nodos schema.org), noIndex.
export const Seo = (props) => {
  const registrarHead = useContext(SeoContext)
  const head = construirHead(props)
  registrarHead?.(head)

  const clave = JSON.stringify(head)
  useEffect(() => {
    aplicarHeadEnDocumento(JSON.parse(clave))
  }, [clave])

  return null
}
