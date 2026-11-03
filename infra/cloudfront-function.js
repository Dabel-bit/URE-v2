// CloudFront Function (runtime cloudfront-js-2.0), evento "Viewer request".
// Reemplaza a la función "redirigir-www" de la versión anterior: CloudFront admite solo
// una función por evento, así que esta reúne todas las reglas.
//
//  1. www.unrincondelencuentro.cl/...   -> 301 https://unrincondelencuentro.cl/...
//  2. /ruta/ (barra final) -> 301 /ruta  (las páginas se publican sin barra: "servicios/terapia-online")
//  3. /index.html          -> 301 /
//
// HTTP -> HTTPS no se hace aquí: lo hace el comportamiento de la distribución
// ("Viewer protocol policy: Redirect HTTP to HTTPS"), y HSTS evita que se repita.

var DOMINIO = 'unrincondelencuentro.cl';

function querystring(qs) {
  var partes = [];
  for (var clave in qs) {
    var param = qs[clave];
    var valores = param.multiValue ? param.multiValue : [param];
    valores.forEach(function (v) {
      partes.push(v.value ? clave + '=' + v.value : clave);
    });
  }
  return partes.length ? '?' + partes.join('&') : '';
}

function redirigir(uri, qs) {
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: 'https://' + DOMINIO + uri + querystring(qs) },
      'strict-transport-security': { value: 'max-age=63072000; includeSubDomains; preload' },
    },
  };
}

// CloudFront llama a esta función por su nombre.
// eslint-disable-next-line no-unused-vars
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value.toLowerCase() : '';
  var uri = request.uri;

  if (uri === '/index.html') {
    uri = '/';
  } else if (uri.length > 1 && uri.charAt(uri.length - 1) === '/') {
    uri = uri.replace(/\/+$/, '') || '/';
  }

  if (host !== DOMINIO || uri !== request.uri) {
    return redirigir(uri, request.querystring);
  }

  return request;
}
