#!/bin/sh
# Publica dist/ en el bucket S3 que sirve unrincondelencuentro.cl (vía CloudFront).
# Uso: npm run deploy:s3            (hace el build y la verificación antes)
#      DRYRUN=1 npm run deploy:s3   (solo muestra lo que haría, sin cambiar nada)
#
# Las páginas prerenderizadas (dist/equipo.html, dist/servicios/terapia-online.html, ...) se
# suben SIN extensión ("equipo", "servicios/terapia-online") y con Content-Type text/html,
# para que /equipo se sirva directo desde S3. index.html y 404.html conservan su nombre.
set -eu
# shellcheck disable=SC2086  # $DRY y $EXCLUIR se expanden a propósito

BUCKET="${BUCKET:-unrincondelencuentro-webpage-bucket}"
DRY="${DRYRUN:+--dryrun}"
cd "$(dirname "$0")/../dist"

PAGINAS=$(find . -name '*.html' ! -name index.html ! -name 404.html | sed 's|^\./||; s|\.html$||')
EXCLUIR=""
for p in $PAGINAS; do EXCLUIR="$EXCLUIR --exclude $p"; done

HTML='--content-type text/html;charset=utf-8 --cache-control no-cache'

# 1. Assets con hash en el nombre: se pueden cachear para siempre.
aws s3 sync $DRY assets "s3://$BUCKET/assets" --cache-control "public, max-age=31536000, immutable"

# 2. Resto de archivos estáticos (robots.txt, sitemap.xml, llms.txt, íconos).
aws s3 sync $DRY . "s3://$BUCKET" --exclude "assets/*" --exclude "*.html" $EXCLUIR --cache-control "no-cache"
aws s3 cp $DRY llms.txt "s3://$BUCKET/llms.txt" --content-type "text/markdown; charset=utf-8" --cache-control "no-cache"

# 3. Páginas HTML (al final, cuando sus assets ya están arriba).
aws s3 cp $DRY index.html "s3://$BUCKET/index.html" $HTML
aws s3 cp $DRY 404.html "s3://$BUCKET/404.html" $HTML
for p in $PAGINAS; do
  aws s3 cp $DRY "$p.html" "s3://$BUCKET/$p" $HTML
done

# 4. Borra archivos de versiones anteriores que ya no existen (assets viejos, páginas eliminadas).
aws s3 sync $DRY . "s3://$BUCKET" --delete --exclude "*.html" $EXCLUIR --size-only

echo "Listo: publicado en s3://$BUCKET${DRYRUN:+ (simulación, no se cambió nada)}"
