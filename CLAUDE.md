# Isla & Barra · contenido — reglas para Claude

Repositorio de trabajo de las **tareas automáticas** de Claude para Isla & Barra (consultoría de barra para hostelería en Canarias; titular Samuel Garcia). Aquí se deja todo **preparado para revisar**; nada se publica solo.

## Reglas permanentes
- Responder y escribir siempre en **español**. En redes, tratar al público de **«ustedes»** (Canarias), tono cercano y profesional, sin presentaciones comerciales vacías.
- **Nunca publicar** en Instagram, Netlify, la web ni la app sin aprobación expresa de Samuel. Única excepción: redes sociales con la habilidad `social-publisher` (SocialClaw), y solo así: preparar y validar `schedule.json`, enseñar a Samuel cada publicación (red, cuenta, texto, imagen o vídeo, fecha y hora) y ejecutar `socialclaw apply` únicamente después de su «sí» explícito en esa misma conversación. Las tareas programadas **nunca** ejecutan `apply`: como mucho dejan el `schedule.json` validado en la carpeta de la semana. La clave de SocialClaw la pone Samuel en su terminal (`socialclaw login`); nunca se escribe en el chat, en archivos ni en el repositorio. **Nunca** hacer merge ni push a `main` del repositorio de la app (`ForkCusS17/Isla-barra-control`): ahí solo ramas `claude/...` y pull requests para revisar.
- **Higgsfield**: máximo **30 créditos por semana** entre todas las tareas. Consultar siempre el coste (`get_cost`) antes de generar; usar borradores 480p salvo que Samuel pida otra cosa. Anotar cada gasto en `informes/creditos.md` (fecha, job, créditos, saldo) y no superar el límite semanal: si no alcanza, dejar el guion preparado y decirlo.
- Revisar siempre cada vídeo o imagen generado (fotogramas: manos, líquidos, texto raro, caras) antes de darlo por bueno. La IA va como **ambiente**, nunca como el bar de un cliente, el local de Samuel o un resultado real.
- **Cifras**: comprobadas con cálculo; si no son reales, rótulo «Cifras de ejemplo». Nunca inventar clientes, opiniones, ahorros ni resultados. El margen es **bruto, no beneficio**. Una desviación de stock **no demuestra** pérdida ni robo.
- Las recetas son **orientativas**, nunca «oficiales».
- No mencionar modelos de IA concretos en los textos públicos.
- Marca: azul atlántico #0E4A5A, turquesa #2A9D8F (texto turquesa: #1F7A70), arena #D9B382, crema #F6F1E8, carbón #282828; Playfair Display (titulares) y Montserrat (resto), archivos en `redes/destacadas/_fuentes/`.
- Instagram: @islaybarra.hosteleria · web https://islaybarra.es · app https://app.islaybarra.es · correo info@islaybarra.es. Llamada a la acción habitual: escribir «COSTE» por mensaje.

## Estructura
- `redes/AAAA-MM-DD/` — contenido de cada semana: `PLAN.md`, textos, imágenes, guiones y vídeos listos para publicar a mano.
- `web/actual/` — la web publicada en islaybarra.es (Netlify, proyecto `frolicking-speculoos-84d8e7`; se publica arrastrando la carpeta, solo Samuel).
- `web/borrador-carta/` — borrador de rediseño «la web como una carta» (no publicado).
- `informes/` — informe semanal y `creditos.md`.

## Estado actual (actualizado el 2026-11-02)
- **Netlify sin créditos de publicación** (aviso del 2-11-2026): las publicaciones a producción están en pausa para la app y para la web; las dos siguen en línea con su versión anterior. Samuel ha decidido **no subir actualizaciones por ahora**. En tareas e informes no propongas «subir a Netlify» ni des por hecho que algo se publicó; si hay algo listo, apúntalo como «pendiente de publicar cuando vuelva Netlify». Alternativa propuesta y **sin decidir**: Cloudflare Pages (gratis; entiende el mismo `_headers`; solo cambiaría el registro `app` en Hostalia). No migres nada sin que Samuel lo pida.
- **App** (`Isla-barra-control`): `main` está en la **0.4.6**: «Descargar informe PDF» (la app genera el PDF del informe) y, en la 0.4.5, el arreglo del fallo intermitente de Firefox al guardar una bebida. `app.islaybarra.es` sigue con una versión anterior (no se ha podido publicar).
- **Higgsfield**: la semana del 2 al 8 de noviembre ya pasa del límite (78 créditos en el Reel del gin-tonic, ver `informes/creditos.md`). No generar nada más hasta el lunes 9.
- **Publicación programada**: `redes/2026-11-02/schedule.json` (Reel del coste del gin-tonic, Instagram, martes 3 de noviembre a las 13:00) aprobado por Samuel y programado el 2-11-2026 (`run_mvzn3ifi_67b399ef9614`, publicación `post_mvzn3ifi_ae59ae138d23`). No volver a ejecutar `apply` con ese archivo. El informe del viernes puede consultar el resultado con `socialclaw status` solo si tiene SocialClaw (en la nube no hay clave).
- **Semana del 2 al 8 de noviembre**: preparada en el portátil y copiada en `redes/2026-11-02/` (textos e imágenes; los 3 Reels están en el PC). Temas ya usados: coste del gin-tonic (Reel), 7 cosas que medir antes de subir precios (carrusel), método en 6 pasos (carrusel), la ginebra sube y la carta no (imagen), control de stock en 3 números (Reel), «sin promesas de ahorro» (Reel) e historias de la app. No repetirlos tal cual.

## PC de Samuel (la «sesión del portátil»)
Todo lo de Isla & Barra está en `Escritorio\Isla y Barra` (OneDrive), con `LEEME.md` y `CLAUDE.md`. Equivalencias con este repositorio:
| Repositorio | PC |
|---|---|
| `redes/AAAA-MM-DD/` | `03_Redes_sociales\Instagram\Publicaciones\AAAA-MM-DD_semana_…\` |
| `redes/destacadas/` | `03_Redes_sociales\Instagram\Destacadas\` |
| `redes/reel_*/` | `03_Redes_sociales\Instagram\Reels\reel_*\` |
| `web/actual/` | `02_Web\web-isla-barra\` |
| `web/borrador-carta/` | `02_Web\web-borrador-carta\` |
| repositorio de la app | `01_App\Isla-barra-control\` |
Cuando dejes algo para la sesión del portátil (montar un Reel, descargar planos, publicar), di en qué carpeta del PC va. Lo de cada cliente va en `04_Clientes\<bar>\` del PC y **nunca** en este repositorio.

## Habilidades (en `.claude/skills/` de este repositorio, ya revisadas)
- **Redes (Instagram)**: `ig-*` (planificar la semana, pies de foto, carruseles, historias, Reels con ganchos puntuados, hashtags, perfil, comentarios, respuestas, mensajes, humanizar textos). Los scripts de `ig-human` detectan sobre todo patrones en inglés: con textos en español, tomarlos con cautela.
- **Contenido y marketing**: `brand-voice` (voz de Samuel a partir de sus textos reales), `content-engine`, `marketing-campaign`.
- **Web**: `seo` y `taste-skill` (diseño y revisión con navegador; para la app, solo revisar sin cambiar su identidad visual).
- **Vídeo**: `remotion-video-creation` (vídeos con código, ideal para cifras exactas animadas sin gastar créditos) y `video-editing` (montaje con FFmpeg).
- **Publicar**: `social-publisher` (SocialClaw), solo con la regla de aprobación de arriba. Cuenta conectada: Instagram `islaybarra.hosteleria`, provider `instagram` (standalone), account_id `acct_mvzh5nwm_2d0b8b07ac0f`. La sesión de SocialClaw solo existe en el portátil de Samuel (`socialclaw login`); en la nube no hay clave.
- Servicios de pago o con clave que **no** están configurados: ElevenLabs, fal.ai, Apify, Publora. No usarlos ni pedir claves por el chat; si una tarea los necesita, proponerlo a Samuel.
