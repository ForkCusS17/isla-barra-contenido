// Portadas e historias de las destacadas de Instagram de Isla & Barra (1080 × 1920).
// Uso: node build.js  → escribe los PNG en la carpeta de arriba.
const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
const SRC=__dirname,OUT=path.join(__dirname,'..');
const url=f=>'file://'+path.join(SRC,f);
const C={azul:'#0E4A5A',turq:'#2A9D8F',tinta:'#1F7A70',arena:'#D9B382',crema:'#F6F1E8',carbon:'#282828'};

const base=`@font-face{font-family:Montserrat;src:url(${url('montserrat.woff2')}) format('woff2');font-weight:100 900}
@font-face{font-family:'Playfair Display';src:url(${url('playfair-display.woff2')}) format('woff2');font-weight:400 900}
*{box-sizing:border-box;margin:0;padding:0}html,body{width:1080px;height:1920px;overflow:hidden}
body{font-family:Montserrat,sans-serif;color:${C.carbon};font-variant-numeric:tabular-nums}`;

// Olas de la marca (como en las publicaciones)
const waves=(h=300)=>`<svg class="waves" viewBox="0 0 1080 ${h}" preserveAspectRatio="none" style="position:absolute;left:0;bottom:0;width:1080px;height:${h}px">
<path d="M0 ${h*.42} C 220 ${h*.22}, 420 ${h*.62}, 640 ${h*.40} S 960 ${h*.20}, 1080 ${h*.34} L1080 ${h} L0 ${h}Z" fill="${C.turq}" opacity=".55"/>
<path d="M0 ${h*.62} C 260 ${h*.44}, 480 ${h*.80}, 720 ${h*.58} S 980 ${h*.48}, 1080 ${h*.56} L1080 ${h} L0 ${h}Z" fill="${C.arena}"/>
<path d="M0 ${h*.80} C 300 ${h*.68}, 560 ${h*.94}, 820 ${h*.78} S 1000 ${h*.74}, 1080 ${h*.80} L1080 ${h} L0 ${h}Z" fill="${C.azul}"/></svg>`;

// Iconos (trazo) para las portadas
const ICON={
 que:`<path d="M60 60 H200 L130 140 Z" /><path d="M130 140 V215"/><path d="M95 215 H165"/><circle cx="178" cy="52" r="16"/>`,
 como:`<circle cx="70" cy="70" r="22"/><path d="M60 70 l8 8 l14 -16"/><path d="M110 70 H210"/><circle cx="70" cy="135" r="22"/><path d="M60 135 l8 8 l14 -16"/><path d="M110 135 H210"/><circle cx="70" cy="200" r="22"/><path d="M110 200 H180"/>`,
 app:`<rect x="78" y="30" width="104" height="200" rx="18"/><path d="M112 52 H148"/><path d="M100 120 H160"/><path d="M100 150 H145"/><path d="M100 180 H155"/>`,
 preguntas:`<path d="M95 95 C95 55 165 55 165 95 C165 128 130 130 130 162"/><circle cx="130" cy="205" r="6" fill="currentColor"/>`
};
const cover=k=>`<!doctype html><html><head><meta charset="utf-8"><style>${base}
body{background:${C.azul};display:flex;align-items:center;justify-content:center}
.disc{width:640px;height:640px;border-radius:50%;background:${C.crema};display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 18px ${C.arena}}
svg{width:400px;height:400px;color:${C.azul}}</style></head><body><div class="disc">
<svg viewBox="0 0 260 260" fill="none" stroke="currentColor" stroke-width="13" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg></div></body></html>`;

// Historia: zonas seguras (arriba 250 px y abajo 340 px sin texto importante)
const story=({tag,n,of,title,body='',list,cta,img,note})=>`<!doctype html><html><head><meta charset="utf-8"><style>${base}
body{background:${C.crema};position:relative}
.top{position:absolute;top:270px;left:90px;right:90px;display:flex;justify-content:space-between;align-items:center}
.brand{font-family:'Playfair Display';font-weight:700;font-size:48px;color:${C.azul}}
.pill{background:${C.azul};color:${C.crema};font-weight:600;font-size:36px;padding:14px 32px;border-radius:40px}
.main{position:absolute;left:90px;right:90px;top:420px}
.n{font-weight:700;font-size:40px;color:${C.tinta};margin-bottom:26px}
h1{font-family:'Playfair Display';font-weight:700;color:${C.azul};font-size:${img?92:116}px;line-height:1.06;margin-bottom:48px}
p{font-size:54px;line-height:1.42;color:${C.carbon}}
ul{list-style:none;margin-top:10px}li{margin-bottom:54px;padding-left:56px;position:relative}
li:before{content:'';position:absolute;left:0;top:24px;width:26px;height:26px;border-radius:50%;background:${C.turq}}
li b{display:block;font-size:58px;color:${C.azul};margin-bottom:6px}li span{font-size:46px;line-height:1.38}
.cta{margin-top:70px;background:${C.azul};color:${C.crema};border-radius:32px;padding:44px 48px;font-size:50px;font-weight:600;line-height:1.35}
.cta em{font-style:normal;color:${C.arena}}
.phone{margin:0 auto;width:600px;border-radius:56px;background:${C.carbon};padding:18px;box-shadow:0 30px 60px rgba(14,74,90,.25)}
.phone img{display:block;width:100%;height:760px;object-fit:cover;object-position:top;border-radius:40px}
.note{text-align:center;font-size:34px;color:#5b5b5b;margin-top:22px}
.foot{position:absolute;left:0;right:0;bottom:360px;text-align:center;font-size:36px;font-weight:600;color:${C.azul};letter-spacing:.5px}
</style></head><body>
<div class="top"><span class="brand">Isla &amp; Barra</span><span class="pill">${tag}</span></div>
<div class="main">${n?`<div class="n">${n} / ${of}</div>`:''}<h1>${title}</h1>${body?`<p>${body}</p>`:''}
${list?`<ul>${list.map(([b,s])=>`<li><b>${b}</b><span>${s}</span></li>`).join('')}</ul>`:''}
${img?`<div class="phone"><img src="${url(img)}"></div>${note?`<div class="note">${note}</div>`:''}`:''}
${cta?`<div class="cta">${cta}</div>`:''}</div>
${waves(300)}</body></html>`;

const CTA='¿Quieren verlo con su carta?<br>Escríbannos <em>«COSTE»</em> por mensaje.';
const H={
 '1_que_hacemos':{cover:'que',tag:'Qué hacemos',s:[
  {title:'Ayudamos a bares de Canarias a entender sus números.',body:'Cuánto cuesta cada copa, cuánto deja y dónde se va el margen.'},
  {title:'Tres cosas, bien hechas.',list:[['Costes y escandallos','El coste real de cada bebida según su receta.'],['Márgenes de la carta','Lo que deja cada bebida después de su coste.'],['Control de stock','Lo que se compró frente a lo que se vendió.']]},
  {title:'Datos para decidir. El criterio es suyo.',body:'No prometemos ahorros: les enseñamos lo que dicen sus números y lo revisamos con ustedes.',cta:CTA}]},
 '2_como_trabajamos':{cover:'como',tag:'Cómo trabajamos',s:[
  {title:'Vemos su barra.',body:'Repasamos la carta, los productos y las facturas de compra.'},
  {title:'Calculamos.',body:'El coste de cada bebida y su margen bruto, con los precios reales de sus proveedores.'},
  {title:'Revisamos el stock.',body:'Comparamos lo comprado con lo vendido. Si hay diferencias, se revisan con ustedes: una diferencia no demuestra pérdidas.'},
  {title:'Un informe claro.',body:'Qué es un hecho, qué es una hipótesis y qué conviene comprobar después.',cta:CTA}]},
 '3_la_app':{cover:'app',tag:'La app',s:[
  {title:'Isla &amp; Barra Control',body:'Nuestra herramienta de trabajo. La usamos en cada visita, desde el móvil.'},
  {title:'El coste de cada copa, al momento.',img:'app_receta.png',note:'Datos de ejemplo'},
  {title:'Compras y stock en el mismo sitio.',img:'app_stock.png',note:'Datos de ejemplo'},
  {title:'Funciona también sin conexión.',body:'Cada bar tiene sus datos aparte. Ahora mismo está en pruebas y el acceso es por invitación.',cta:CTA}]},
 '4_preguntas':{cover:'preguntas',tag:'Preguntas',s:[
  {title:'¿Qué es un escandallo?',body:'El coste de una bebida según su receta: cada ingrediente, en su medida, a su precio de compra.'},
  {title:'¿El margen es lo que gano?',body:'No. El margen bruto es el precio sin impuestos menos el coste de la bebida. El beneficio llega después de personal, alquiler y el resto de gastos.'},
  {title:'Si el stock no cuadra, ¿me están robando?',body:'No necesariamente. Mermas, invitaciones, errores de recuento o medidas distintas también explican diferencias. Se comprueba antes de concluir nada.'},
  {title:'¿Cómo empezamos?',body:'Escríbannos «COSTE» por mensaje o a <b>info@islaybarra.es</b> y lo vemos.'}]}
};

(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 const shot=async(html,file)=>{const tmp=path.join(SRC,'_tmp.html');fs.writeFileSync(tmp,html);await p.goto('file://'+tmp,{waitUntil:'load'});await p.evaluate(()=>document.fonts.ready);
  const of=await p.evaluate(()=>{const m=document.querySelector('.main');if(!m)return 0;return Math.round(m.getBoundingClientRect().bottom)});
  if(of>1920-360)console.log('AVISO: el texto entra en la zona inferior',file,of);
  await p.screenshot({path:file});console.log('ok',path.relative(OUT,file))};
 fs.mkdirSync(path.join(OUT,'portadas'),{recursive:true});
 for(const [dir,h] of Object.entries(H)){const d=path.join(OUT,dir);fs.mkdirSync(d,{recursive:true});
  await shot(cover(h.cover),path.join(OUT,'portadas',dir+'.png'));
  for(let i=0;i<h.s.length;i++)await shot(story({tag:h.tag,n:dir==='2_como_trabajamos'?'Paso '+(i+1):'',of:h.s.length,...h.s[i]}),path.join(d,`historia_${i+1}.png`))}
 fs.unlinkSync(path.join(SRC,'_tmp.html'));await b.close()})();
