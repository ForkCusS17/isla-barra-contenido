# Web de Isla & Barra: página de inicio

Página estática, sin dependencias: `index.html`, páginas legales `aviso-legal.html`, `privacidad.html` y `cookies.html` + `assets/` (foto y captura de la app) + `fonts/` (Montserrat y Playfair Display, licencia OFL) + `_headers` (cabeceras de seguridad para Netlify).

## Publicar
Igual que la app: arrastra la carpeta (o el zip) a https://app.netlify.com/drop. Es un sitio distinto de la app.

## Revisar antes de publicar
- Los textos de «Qué te llevas» de cada servicio están deducidos de la web anterior y de la app: confirma que es lo que ofreces.
- La calculadora usa IGIC 7 % por defecto (tipo general en Canarias); se puede cambiar en la propia página.
- Aviso legal, privacidad y cookies: páginas propias, sin domicilio por ahora y con contacto info@islaybarra.es; provisionales hasta su revisión profesional. La app aún muestra el domicilio y el correo de gmail en sus avisos legales.
- No hay testimonios, logos de clientes ni precios: añádelos solo si son reales.
- Enlaces: «Pide una consulta» abre el correo con una plantilla; Instagram @islaybarra.hosteleria.

## Limpiador de la app (`sw.js` y `_redirects`)
El 30-10-2026 la app se subió por error a este proyecto. `sw.js` borra en los navegadores la caché que dejó y `_redirects` lleva su dirección antigua a https://app.islaybarra.es. Se pueden quitar dentro de unos meses.
