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

## Habilidades (en `.claude/skills/` de este repositorio, ya revisadas)
- **Redes (Instagram)**: `ig-*` (planificar la semana, pies de foto, carruseles, historias, Reels con ganchos puntuados, hashtags, perfil, comentarios, respuestas, mensajes, humanizar textos). Los scripts de `ig-human` detectan sobre todo patrones en inglés: con textos en español, tomarlos con cautela.
- **Contenido y marketing**: `brand-voice` (voz de Samuel a partir de sus textos reales), `content-engine`, `marketing-campaign`.
- **Web**: `seo` y `taste-skill` (diseño y revisión con navegador; para la app, solo revisar sin cambiar su identidad visual).
- **Vídeo**: `remotion-video-creation` (vídeos con código, ideal para cifras exactas animadas sin gastar créditos) y `video-editing` (montaje con FFmpeg).
- **Publicar**: `social-publisher` (SocialClaw), solo con la regla de aprobación de arriba. Cuenta conectada: Instagram `islaybarra.hosteleria`, provider `instagram` (standalone), account_id `acct_mvzh5nwm_2d0b8b07ac0f`. La sesión de SocialClaw solo existe en el portátil de Samuel (`socialclaw login`); en la nube no hay clave.
- Servicios de pago o con clave que **no** están configurados: ElevenLabs, fal.ai, Apify, Publora. No usarlos ni pedir claves por el chat; si una tarea los necesita, proponerlo a Samuel.
