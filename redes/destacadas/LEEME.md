# Destacadas de Instagram · Isla & Barra

Cuatro destacadas, en este orden: **Qué hacemos · Cómo trabajamos · La app · Preguntas**.
Todas las imágenes miden 1080 × 1920 (formato de historia).

## Qué hay en cada carpeta
- `portadas/`: la portada de cada destacada (icono en un círculo crema sobre azul atlántico).
- `1_que_hacemos/`: 3 historias.
- `2_como_trabajamos/`: 4 historias (pasos 1 a 4).
- `3_la_app/`: 4 historias (dos con capturas de la app con «Datos de ejemplo»).
- `4_preguntas/`: 4 historias.

## Cómo montarlas (desde el móvil)
1. Sube como historia, en orden, las imágenes de una carpeta (por ejemplo, las 3 de `1_que_hacemos`).
2. En tu perfil, toca **«+ Nueva»** bajo la biografía, elige esas historias y ponle el nombre (**Qué hacemos**).
3. En «Editar portada», toca el icono de la galería y elige `portadas/1_que_hacemos.png`. Céntrala si hace falta: Instagram la recorta en círculo.
4. Repite con las otras tres.
5. Para ordenarlas, Instagram coloca primero la última que crees; créalas en orden inverso (Preguntas, La app, Cómo trabajamos, Qué hacemos) si quieres que «Qué hacemos» quede a la izquierda.

Si prefieres no publicar 15 historias seguidas, súbelas a lo largo de dos o tres días: cuentan además como historias activas en tu perfil.

## Qué dicen (y qué no)
- No prometen ahorros ni resultados, no citan clientes ni precios.
- Margen = margen bruto, no beneficio. Una diferencia de stock no demuestra pérdidas.
- La app aparece como herramienta de trabajo en pruebas, con acceso por invitación (es así hoy).
- Llamada a la acción: escribir «COSTE» por mensaje o a info@islaybarra.es.

## Cambiar textos
Los textos están en `_fuentes/build.js` (objeto `H`). Con Node y Playwright: `node _fuentes/build.js` vuelve a generar todas las imágenes.
