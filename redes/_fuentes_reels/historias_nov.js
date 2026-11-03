// Historias 1080×1920 del 3 al 21 de noviembre, con hueco para el sticker (zona 1000–1500 px), en «ustedes».
// Uso: node historias_nov.js <repo-app> <fuentes-dir> <dir-publicaciones>
const path=require('path'),fs=require('fs');
const [,,REPO,FONTS,PUB]=process.argv;
const pw=require(path.join(REPO,'node_modules','playwright'));
const f64=n=>fs.readFileSync(path.join(FONTS,n)).toString('base64');
const css=`@font-face{font-family:PF;src:url(data:font/woff2;base64,${f64('playfair-display.woff2')}) format('woff2');font-weight:400 900}
@font-face{font-family:MS;src:url(data:font/woff2;base64,${f64('montserrat.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;overflow:hidden;font-family:MS;background:#F6F1E8;color:#282828;position:relative;font-variant-numeric:lining-nums tabular-nums}
body.d{background:#0E4A5A;color:#F6F1E8}
.w{position:absolute;left:90px;right:90px;top:300px}.eb{font-weight:700;font-size:32px;color:#1F7A70;margin-bottom:24px}.d .eb{color:#D9B382}
h1{font-family:PF;font-weight:800;font-size:96px;line-height:1.05;color:#0E4A5A}.d h1{color:#F6F1E8}
.s{font-size:44px;line-height:1.4;margin-top:34px}
.hueco{visibility:hidden;position:absolute;left:140px;right:140px;top:1060px;height:380px;border:4px dashed rgba(14,74,90,.18);border-radius:40px;display:flex;align-items:center;justify-content:center;font-size:30px;color:rgba(14,74,90,.35)}
.d .hueco{border-color:rgba(246,241,232,.22);color:rgba(246,241,232,.4)}
ol{margin:40px 0 0;padding:0;list-style:none;counter-reset:n}ol li{counter-increment:n;font-size:46px;line-height:1.35;margin-bottom:30px;padding-left:70px;position:relative}ol li:before{content:counter(n);position:absolute;left:0;font-family:PF;font-weight:800;color:#D9B382;font-size:54px;top:-4px}
.f{position:absolute;left:90px;bottom:330px;display:flex;align-items:center;gap:16px;font-size:30px;font-weight:600;color:#5d6a6e}.d .f{color:#d7e3e2}
.f i{width:54px;height:54px;border-radius:10px;background:#0E4A5A;color:#F6F1E8;font-family:PF;font-style:normal;font-weight:800;font-size:22px;display:flex;align-items:center;justify-content:center}.d .f i{background:#F6F1E8;color:#0E4A5A}
.ej{position:absolute;right:90px;bottom:342px;font-size:28px;font-weight:600;color:#5d6a6e}.d .ej{color:#d7e3e2}`;
// [carpeta, archivo, oscuro, antetítulo, título, subtítulo, texto del hueco (sin hueco si vacío), cifras de ejemplo, lista]
const H=[
 ['2026-11-02_semana_2-8_nov/2_martes','historia_quiz_50ml.png',1,'Cuestionario · 10 segundos','Botella de 70 cl a 14 €. ¿Cuánto cuestan 50 ml?','Calculen sin mirar el Reel de ayer.','Sticker: cuestionario',1],
 ['2026-11-09_semana_9-15_nov/1_lunes','historia_encuesta_recuento.png',0,'Lunes de barra','¿Cada cuánto cuentan el stock?','Con sinceridad: nadie ve quién vota.','Sticker: encuesta'],
 ['2026-11-09_semana_9-15_nov/2_martes','historia_encuesta_7cosas.png',1,'Del Reel de hoy','¿Cuál de las 7 se les escapa más?','La medida, el proveedor, las invitaciones, las mermas…','Sticker: encuesta'],
 ['2026-11-09_semana_9-15_nov/3_miercoles','historia_caja_margen.png',0,'Les leo','¿Qué duda tienen sobre el margen de sus copas?','El viernes respondo las más repetidas.','Sticker: preguntas'],
 ['2026-11-09_semana_9-15_nov/4_jueves','historia_quiz_igic.png',1,'Cuestionario','Un cóctel a 9 € con IGIC del 7 %. ¿Cuánto es sin impuestos?','El margen se calcula sobre ese precio.','Sticker: cuestionario',1],
 ['2026-11-09_semana_9-15_nov/5_viernes','historia_respuestas_margen.png',0,'Respondo','Sus preguntas sobre el margen','','' ],
 ['2026-11-09_semana_9-15_nov/5_viernes','historia_encuesta_precios.png',1,'Viernes de barra','¿Van a revisar los precios de la carta este mes?','','Sticker: encuesta'],
 ['2026-11-09_semana_9-15_nov/6_sabado','historia_encuesta_invitaciones.png',0,'Del Reel de hoy','¿Apuntan las invitaciones el mismo día?','Sin juzgar: es la pregunta que más cambia la cuenta.','Sticker: encuesta'],
 ['2026-11-09_semana_9-15_nov/7_domingo','historia_resumen_semana.png',1,'La semana en 3 ideas','Para guardar','', 'Sticker: enlace',0,['Midan antes de tocar los precios.','El margen bruto no es beneficio.','Lo que no se apunta, no existe.']],
 ['2026-11-16_semana_16-22_nov/1_lunes','historia_quiz_mojito.png',0,'Cuestionario','¿Qué sube más el coste de un mojito?','Pista: mañana lo vemos con números.','Sticker: cuestionario'],
 ['2026-11-16_semana_16-22_nov/2_martes','historia_encuesta_marcas.png',1,'De la publicación de hoy','¿Cuántas marcas de ron tienen en la barra?','Cada botella tiene su coste por copa.','Sticker: encuesta'],
 ['2026-11-16_semana_16-22_nov/3_miercoles','historia_cuenta_atras.png',0,'Mañana a las 12:00','Buscamos 5 bares para probar la herramienta','Activen el recordatorio.','Sticker: cuenta atrás'],
 ['2026-11-16_semana_16-22_nov/4_jueves','historia_caja_dudas.png',1,'Les leo','¿Tienen dudas sobre la prueba con su carta?','Respondo mañana.','Sticker: preguntas'],
 ['2026-11-16_semana_16-22_nov/5_viernes','historia_respuestas_prueba.png',0,'Respondo','Sus dudas sobre la prueba','','' ],
 ['2026-11-16_semana_16-22_nov/5_viernes','historia_encuesta_promesas.png',1,'Antes del Reel de mañana','¿Les han prometido alguna vez ahorrar sin ver su barra?','','Sticker: encuesta']];
(async()=>{const b=await pw.chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 for(let [dir,name,dark,eb,t,s,hueco,ej,lista] of H){const nb=x=>x&&x.replace(/(\d) (€|%|ml|cl)/g,"$1&nbsp;$2");t=nb(t);s=nb(s);const out=path.join(PUB,dir);fs.mkdirSync(out,{recursive:true});
  const html=`<div class="w"><div class="eb">${eb}</div><h1>${t}</h1>${s?`<div class="s">${s}</div>`:''}${lista?`<ol>${lista.map(x=>`<li>${x}</li>`).join('')}</ol>`:''}</div>${hueco?`<div class="hueco">${hueco}</div>`:''}<div class="f"><i>I&amp;B</i>@islaybarra.hosteleria</div>${ej?'<div class="ej">Cifras de ejemplo</div>':''}`;
  await p.setContent(`<html><head><style>${css}</style></head><body class="${dark?'d':''}">${html}</body></html>`);await p.evaluate(()=>document.fonts.ready);
  const fin=await p.evaluate(()=>Math.round(document.querySelector('.w').getBoundingClientRect().bottom));
  await p.screenshot({path:path.join(out,name)});console.log(dir+'/'+name,'texto hasta',fin,'px',fin>1040&&hueco?'⚠ TOCA EL HUECO':'')}
 await b.close()})().catch(e=>{console.log('ERR',e.message);process.exit(1)});
