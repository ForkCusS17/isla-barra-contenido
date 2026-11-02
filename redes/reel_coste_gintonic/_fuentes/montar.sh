#!/bin/sh
# Monta el Reel «¿Cuánto te cuesta este gin-tonic?» con los 4 planos de Higgsfield y los rótulos de la marca.
# Planos en ../planos/: 0_copa.mp4 (copa terminada), 1_ginebra.mp4, 2_tonica.mp4, 3_hielo.mp4. Resultado: ../reel_coste_gintonic.mp4
set -e
cd "$(dirname "$0")/.."
P=planos R=rotulos T=_tmp; mkdir -p $T
V="scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,format=yuv420p"
seg(){ # $1 plano  $2 rótulo  $3 inicio  $4 duración  $5 velocidad (1 normal, 1.5 = más lento)  $6 salida
 ffmpeg -v error -y -ss "$3" -i "$P/$1" -loop 1 -i "$R/$2" -filter_complex \
  "[0:v]setpts=$5*(PTS-STARTPTS),$V,trim=duration=$4,setpts=PTS-STARTPTS[b];[1:v]format=rgba,fade=t=in:st=0:d=0.35:alpha=1[o];[b][o]overlay=0:0:shortest=1,trim=duration=$4,setpts=PTS-STARTPTS[v]" \
  -map "[v]" -an -c:v libx264 -crf 20 -preset medium -pix_fmt yuv420p "$T/$6"
}
seg 0_copa.mp4    1_gancho.png  0 3.0 1   a.mp4
seg 1_ginebra.mp4 2_ginebra.png 0 3.5 1   b.mp4
seg 2_tonica.mp4  3_tonica.png  0.9 3.5 1.15 c.mp4   # empieza en 0,9 s: antes hay una mano y un salto de la copa
seg 3_hielo.mp4   4_hielo.png   0 3.5 1   d.mp4
seg 0_copa.mp4    5_coste.png   0 3.5 1.5 e.mp4
seg 0_copa.mp4    6_margen.png  1 4.0 1.5 f.mp4
ffmpeg -v error -y -loop 1 -t 3 -i "$R/7_cierre.png" -vf "fps=30,format=yuv420p" -c:v libx264 -crf 20 -pix_fmt yuv420p "$T/g.mp4"
printf "file '%s'\n" a.mp4 b.mp4 c.mp4 d.mp4 e.mp4 f.mp4 g.mp4 > $T/lista.txt
ffmpeg -v error -y -f concat -safe 0 -i $T/lista.txt -c copy -movflags +faststart reel_coste_gintonic.mp4
rm -rf $T; echo "listo: reel_coste_gintonic.mp4"
