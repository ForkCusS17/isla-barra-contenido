# Calendario de Instagram · noviembre de 2026

**Única fuente de verdad** de lo que se publica en @islaybarra.hosteleria. Antes de preparar o programar algo, mirar aquí;
al programar o publicar, actualizar el estado. Versión 2 (2-11-2026), **pendiente de aprobación de Samuel**.

## Reglas del calendario
- **Herramienta**: los **Reels e imágenes sueltas** se programan con **SocialClaw**; los **carruseles** los publica Samuel desde la app de Instagram (SocialClaw solo admite un archivo por publicación con esta cuenta), con un archivo `DIA_publicar_desde_la_app.md` en la carpeta de la semana con los pasos y el texto. Meta Business Suite
  no se usa para programar (el 2-11-2026 Samuel borró allí todo lo programado). Las **historias** con stickers las publica
  Samuel desde la app.
- **Aprobación**: cada semana Claude enseña la tabla de la semana con textos e imágenes; con un «sí» de Samuel la programa
  entera (`socialclaw apply`). Nada se programa sin ese «sí».
- **Ritmo**: 3 publicaciones de feed por semana (martes y jueves a las 12:00, sábado a las 11:00) más historias diarias.
  Máximo una publicación de feed al día.
- **Trato**: «ustedes» en todo lo nuevo (pies, rótulos e imágenes). Lo ya publicado con «tú» no se toca.
- **Cifras de ejemplo fijas** (las ya publicadas; no inventar otras para lo mismo):
  - Botella de 70 cl a 14 € → 0,02 € por ml → 50 ml = 1,00 €.
  - **Gin-tonic** (Reel del 2-11): coste de la copa **2,40 €**; a 9 € con IGIC (7 %) quedan **8,41 €** sin impuestos.
  - **Mojito** (carrusel del 29-10): coste **1,55 €**; precio sin impuestos 8,00 €; margen bruto **6,45 € (80,6 %)**.
    Con un ron de 28 € el coste sube a 2,55 € y el margen baja a 5,45 €.
  - **Stock**: 7000 + 2800 − 3500 = 6300 ml de consumo real; teórico 5800 ml; diferencia +500 ml (no demuestra nada).
  - Siempre «Cifras de ejemplo»; el margen es bruto, no beneficio.
- **Contacto**: info@islaybarra.es (nunca el gmail antiguo) y la palabra «COSTE» por mensaje.
- **No repetir**: un tema ya publicado no vuelve hasta pasadas 4 semanas, y si vuelve es con otro enfoque y las mismas cifras.
- Textos de lo que estaba en Meta: `Textos_de_Meta_borrados.md` (las imágenes se perdieron: hay que rehacerlas).
- **Límites de SocialClaw con esta cuenta (comprobado el 2-11-2026 al validar)**: **un solo archivo por publicación** (no hay carruseles: «Instagram currently supports one media asset per post»), y no admite texto alternativo, portada propia del Reel (`instagramCoverUrl`), `instagramShareToFeed` ni `instagramIsAiGenerated`. Sí: imagen suelta o Reel, con `instagramPublishMode` e `instagramPlacement`. Cada archivo se sube con `socialclaw assets upload` y en `schedule.json` va con su `id` y su `url` (el `publicUrl` de la respuesta). Los carruseles se publican desde la app o se convierten en Reel.

## Ya publicado (no repetir)
| Fecha | Tema |
|---|---|
| 23-10 | Presentación «Somos Isla & Barra» (correo antiguo: cambiarlo desde la app) |
| 25-10 | 4 errores que arruinan un mojito |
| 28-10 | Carta de bebidas con QR (servicio; correo antiguo: cambiarlo desde la app) |
| 29-10 | ¿Cuánto cuesta preparar una copa? (mojito en 3 pasos) |
| 2-11 | Reel: coste real de un gin-tonic |

## Semana 1 · 3 al 8 de noviembre (material ya preparado en `Publicaciones\2026-11-02_semana_2-8_nov`)
| Día | Formato | Tema | Material | Falta | Estado |
|---|---|---|---|---|---|
| Jue 5, 12:00 | Carrusel (8) | Así trabajamos: 6 pasos, primero los datos | `4_jueves` (diapositivas 3, 4 y 8 rehechas en «ustedes») | Lo publica **Samuel desde la app**: `JUEVES_5_publicar_desde_la_app.md` | preparado |
| Sáb 7, 11:00 | Reel | Control de stock en 3 números (+500 ml) | `6_sabado/reel_stock.mp4` (cierre rehecho en «ustedes») | Programado en SocialClaw el 3-11-2026 (`run_mw0mxneb_bb991ebc4e97`, `post_mw0mxneb_e7ea12985abe`) | programado |
| Historias | — | Mié 4: pregunta del día y encuesta · Jue 5: encuesta «¿Por qué paso empezarían?» · Vie 6: imagen «la ginebra sube y la carta no» · Sáb 7: deslizador «¿Cuánto confían en su último inventario?» · Dom 8: la app con enlace a islaybarra.es | `3_miercoles`, `4_jueves`, `5_viernes`, `6_sabado`, `7_domingo` | Las publica Samuel: todas revisadas y en «ustedes»; guía con stickers en `HISTORIAS_semana_publicar_desde_la_app.md` | preparado |

El martes 3 no sale nada en el feed (el Reel del gin-tonic sigue reciente).

## Semana 2 · 9 al 15 de noviembre
| Día | Formato | Tema | Material | Falta |
|---|---|---|---|---|
| Mar 10, 12:00 | Carrusel (8) | 7 cosas que medir antes de tocar la carta | `2_martes` | Rehacer la portada (01) con «ustedes» y revisar el resto |
| Jue 12, 12:00 | Imagen | Margen bruto no es beneficio (mojito 6,45 €) | Texto en `Textos_de_Meta_borrados.md` | Imagen nueva; texto en «ustedes» |
| Sáb 14, 11:00 | Reel | Mermas e invitaciones: lo que no se apunta no existe | Nuevo (rutina del lunes 9) | Guion con las cifras de stock fijas |

## Semana 3 · 16 al 22 de noviembre
| Día | Formato | Tema | Material | Falta |
|---|---|---|---|---|
| Mar 17, 12:00 | Imagen | Misma receta, distinta botella (1,55 € → 2,55 €) | Texto en `Textos_de_Meta_borrados.md` | Imagen nueva; texto en «ustedes» |
| Jue 19, 12:00 | Imagen | Buscamos hasta 5 bares para probar la herramienta | Texto en `Textos_de_Meta_borrados.md` | Imagen nueva sin «tus datos se quedan en tu dispositivo» |
| Sáb 21, 11:00 | Reel | Sin promesas de ahorro: primero medir | `7_domingo/reel_sin_promesas.mp4` | Revisar rótulos; pie en «ustedes» |

## Semana 4 · 23 al 29 de noviembre (se preparan el lunes 23)
| Día | Formato | Tema |
|---|---|---|
| Mar 24, 12:00 | Carrusel | Así es la herramienta (capturas actuales del bar de ejemplo) |
| Jue 26, 12:00 | Carrusel | Tres preguntas para revisar el stock |
| Sáb 28, 11:00 | Reel | Una medida orientativa no es una medida «oficial»: cómo fijar la de cada local |

## Aparcado (no programar sin decidirlo)
- Reel del gin-tonic de SocialClaw (coste 2,20 €): repetía el del 2-11 con otra cifra. Solo se reutiliza rehecho con 2,40 € y después del 30-11.
- «¿Sabes cuánto te cuesta cada copa de su carta?»: repite el gancho del 2-11; si se usa, como historia con caja de preguntas.
- Precio con IGIC y sin IGIC: cuál usar para el margen (para diciembre).
