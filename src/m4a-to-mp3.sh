#!/bin/bash
#
# m4a-to-mp3.sh
# 2022-09-19

readonly WD="$(cd -- "$(dirname -- "${BASH_SOURCE:-$0}")" &> /dev/null && pwd)"
readonly DEV_AUD_DIR="${WD}/../dev-aud"
readonly IN="${DEV_AUD_DIR}/m4a_2022-09-14"
readonly OUT="${DEV_AUD_DIR}/mp3_"$(date +'%Y-%m-%d')""

mkdir -p "$OUT"

for filepath in "$IN"/*.m4a; do
    f_in="${filepath/"$IN"\//}"
    f_out="${f_in/SCLAS/S-CLAS}"
    f_out="$(echo "$f_out" | sed 's/Q\([0-9][^0-9]*\)\./Q0\1./')"
    f_out="${f_out%.m4a}.mp3"
    
    ffmpeg \
        -i "$filepath" \
        -codec:v copy \
        -codec:a libmp3lame \
        -q:a 4 \
        "${OUT}/${f_out}"
done



