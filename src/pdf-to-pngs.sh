#!/usr/bin/bash
#
# pdf-to-pngs.sh
# 2022-09-19

readonly WD="$(cd -- "$(dirname -- "${BASH_SOURCE:-$0}")" &> /dev/null && pwd)"
readonly DEV_IMGS_DIR="${WD}/../dev-imgs"
readonly IN="${DEV_IMGS_DIR}/WCP 2.2 S-CLAS_120922.pdf"
readonly OUT="${DEV_IMGS_DIR}/slides_"$(date +'%Y-%m-%d')""

mkdir -p "$OUT"

pdftoppm -f 1 -l 17 -png "$IN" "${OUT}/slide"

for f in "$OUT"/*.png; do
    convert "$f" -resize 60% "$f"
done

pngquant \
    --force \
    --skip-if-larger \
    --ext '.png.' \
    --speed 1 \
    --strip \
    -- "$OUT"/*.png

