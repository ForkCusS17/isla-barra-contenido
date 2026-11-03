// Imágenes de feed 1080×1350 con la identidad de Isla & Barra (Playfair Display + Montserrat), en el estilo de los
// carruseles ya publicados. Uso: node render.js <repo-app> <fuentes-dir> <salida-dir>
const path=require('path'),fs=require('fs');
const [,,REPO,FONTS,OUT]=process.argv;
const pw=require(path.join(REPO,'node_modules','playwright'));
const f64=n=>fs.readFileSync(path.join(FONTS,n)).toString('base64');
const base=`
@font-face{font-family:PF;src:url(data:font/woff2;base64,${f64('playfair-display.woff2')}) format('woff2');font-weight:400 900}
@font-face{font-family:MS;src:url(data:font/woff2;base64,${f64('montserrat.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1350px;background:#F6F1E8;color:#282828;font-family:MS;position:relative;overflow:hidden;font-variant-numeric:lining-nums tabular-nums}h1,.big{font-variant-numeric:lining-nums}
.wrap{position:absolute;left:84px;right:84px;top:112px}
.eyebrow{font-weight:700;font-size:30px;color:#1F7A70;margin-bottom:26px}
h1{font-family:PF;font-weight:800;font-size:96px;line-height:1.04;color:#0E4A5A;letter-spacing:-.5px}
.rule{width:120px;height:6px;border-radius:3px;background:#D9B382;margin:44px 0 40px}
.sub{font-size:40px;line-height:1.45;font-weight:400}
.card{background:#fff;border-radius:20px;border-left:10px solid #2A9D8F;padding:34px 44px;margin-top:40px}
.card .lbl{font-weight:700;font-size:28px;color:#1F7A70;margin-bottom:14px}
.row{display:flex;justify-content:space-between;align-items:baseline;font-size:36px;line-height:1.7}
.row b{font-weight:700}.row.tot{border-top:2px solid #e6e0d6;margin-top:6px;padding-top:6px;font-weight:700;color:#0E4A5A}
.foot{position:absolute;left:84px;right:84px;bottom:64px;display:flex;align-items:center;justify-content:space-between;font-size:28px;color:#5d6a6e;font-weight:600}
.logo{display:flex;align-items:center;gap:16px}.logo i{width:56px;height:56px;border-radius:10px;background:#0E4A5A;color:#F6F1E8;font-family:PF;font-style:normal;font-weight:800;font-size:24px;display:flex;align-items:center;justify-content:center}
.note{font-size:28px;color:#5d6a6e;font-weight:600}
.two{display:flex;gap:28px;margin-top:40px}.two .card{flex:1;margin-top:0;padding:30px 34px}
.big{font-family:PF;font-weight:800;font-size:72px;color:#0E4A5A;line-height:1.1;margin-top:6px}
.small{font-size:30px;line-height:1.4;color:#282828}
.dark{background:#0E4A5A;color:#F6F1E8}.dark h1{color:#F6F1E8}.dark .eyebrow{color:#D9B382}.dark .foot{color:#d7e3e2}.dark .logo i{background:#F6F1E8;color:#0E4A5A}
ul.pts{list-style:none;padding:0;margin-top:10px}ul.pts li{font-size:40px;line-height:1.4;padding-left:40px;position:relative;margin-bottom:22px}ul.pts li:before{content:'';position:absolute;left:0;top:20px;width:16px;height:16px;border-radius:50%;background:#D9B382}
`;
const foot=(extra='Cifras de ejemplo')=>`<div class="foot"><div class="logo"><i>I&amp;B</i>@islaybarra.hosteleria</div><div class="note">${extra}</div></div>`;
const pages={
'jue12_margen_bruto.png':`<div class="wrap"><div class="eyebrow">Márgenes · sin confusiones</div><h1>Margen bruto no es beneficio.</h1><div class="rule"></div>
<div class="sub">Es lo que queda del precio, sin impuestos, después de pagar los ingredientes.</div>
<div class="card"><div class="lbl">El mojito de nuestro ejemplo</div>
<div class="row"><span>Precio sin impuestos</span><b>8,00 €</b></div>
<div class="row"><span>− Coste de los ingredientes</span><b>1,55 €</b></div>
<div class="row tot"><span>= Margen bruto</span><span>6,45 €</span></div></div>
<div class="sub" style="margin-top:38px">Con eso aún hay que pagar <b>personal, alquiler y suministros</b>.</div></div>${foot()}`,
'mar17_misma_receta.png':`<div class="wrap"><div class="eyebrow">Mismo mojito · otra botella</div><h1>Misma receta, distinta botella.</h1><div class="rule"></div>
<div class="sub">50 ml de ron en la copa y el mismo precio sin impuestos, 8,00 €. Solo cambia la botella de 70 cl.</div>
<div class="two"><div class="card"><div class="lbl">Ron a 14 €</div><div class="small">Coste de la copa</div><div class="big">1,55 €</div><div class="small" style="margin-top:18px">Margen bruto</div><div class="big" style="font-size:56px">6,45 €</div></div>
<div class="card" style="border-left-color:#D9B382"><div class="lbl" style="color:#8a5a12">Ron a 28 €</div><div class="small">Coste de la copa</div><div class="big">2,55 €</div><div class="small" style="margin-top:18px">Margen bruto</div><div class="big" style="font-size:56px">5,45 €</div></div></div>
<div class="sub" style="margin-top:38px">Por eso se calcula con <b>su botella y su precio</b>, no con una receta genérica.</div></div>${foot()}`,
'jue19_buscamos_bares.png':`<div class="wrap"><div class="eyebrow">Piloto</div><h1>Buscamos 5 bares para probarlo.</h1><div class="rule"></div>
<ul class="pts"><li>Unos <b>60 minutos</b>: media hora para contarnos cómo trabajan y el resto, probando la herramienta juntos.</li>
<li>Con <b>su carta</b>: el coste y el margen bruto de cada copa.</li><li>A cambio, les pedimos su <b>opinión sincera</b>.</li></ul>
<div class="sub" style="margin-top:30px;font-weight:700;color:#D9B382">Escríbannos por mensaje<br>o a info@islaybarra.es</div></div>${foot('islaybarra.es')}`
};
(async()=>{const b=await pw.chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350}});fs.mkdirSync(OUT,{recursive:true});
 for(const [name,html] of Object.entries(pages)){const dark=name.startsWith('jue19');await p.setContent(`<html><head><style>${base}</style></head><body class="${dark?'dark':''}">${html}</body></html>`);await p.evaluate(()=>document.fonts.ready);
  const over=await p.evaluate(()=>{const f=document.querySelector('.foot').getBoundingClientRect().top;const w=document.querySelector('.wrap').getBoundingClientRect().bottom;return{espacio:Math.round(f-w),anchoOk:document.body.scrollWidth<=1080}});
  await p.screenshot({path:path.join(OUT,name)});console.log(name,JSON.stringify(over))}
 await b.close()})().catch(e=>{console.log('ERR',e.message);process.exit(1)});
