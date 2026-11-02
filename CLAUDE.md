# Isla & Barra · contenido — reglas para Claude

Repositorio de trabajo de las **tareas automáticas** de Claude para Isla & Barra (consultoría de barra para hostelería en Canarias; titular Samuel Garcia). Aquí se deja todo **preparado para revisar**; nada se publica solo.

## Reglas permanentes
- Responder y escribir siempre en **español**. En redes, tratar al público de **«ustedes»** (Canarias), tono cercano y profesional, sin presentaciones comerciales vacías.
- **Nunca publicar** en Instagram, Netlify, la web ni la app. **Nunca** hacer merge ni push a `main` del repositorio de la app (`ForkCusS17/Isla-barra-control`): ahí solo ramas `claude/...` y pull requests para revisar.
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

## Habilidades útiles (instalar en la sesión si no están)
- Instagram: `https://github.com/sergebulaev/instagram-skills` y `https://github.com/Jakeschincariol/instagram-agent-skill` (copiar sus carpetas de `skills/` a `~/.claude/skills/`).
- Diseño web: `https://github.com/leonxlnx/taste-skill` (`skills/taste-skill`).
Revisar el código antes de usarlo; sus scripts solo procesan texto o abren un navegador local.
