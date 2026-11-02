// Rótulos del Reel «¿Cuánto te cuesta este gin-tonic?» (PNG transparentes 1080 × 1920).
// Cifras de ejemplo, comprobadas: 14 € / 700 ml = 0,02 €/ml → 50 ml = 1,00 €; coste 1,00 + 1,00 + 0,20 = 2,20 €;
// 9 € / 1,07 = 8,41 € sin IGIC; 8,41 − 2,20 = 6,21 € de margen bruto.
const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
const S=__dirname,O=path.join(__dirname,'..','rotulos');fs.mkdirSync(O,{recursive:true});
const {pathToFileURL}=require('url');const u=f=>pathToFileURL(path.join(S,f)).href; // vale en Windows y Linux
const css=`@font-face{font-family:M;src:url(${u('montserrat.woff2')})}@font-face{font-family:P;src:url(${u('playfair-display.woff2')})}
*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1920px;background:transparent;font-family:M;font-variant-numeric:tabular-nums}
.box{position:absolute;left:80px;right:80px;top:300px;background:rgba(14,74,90,.92);color:#F6F1E8;padding:56px 60px}
h1{font-family:P;font-weight:800;font-size:92px;line-height:1.02;letter-spacing:-.02em}
h2{font-family:P;font-weight:800;font-size:84px;line-height:1.05}
.big{font-family:M;font-weight:800;font-size:120px;color:#D9B382;line-height:1;margin-top:18px}
p{font-size:42px;line-height:1.35;margin-top:22px;font-weight:500}
.lbl{font-size:38px;font-weight:700;color:#D9B382}
.ej{position:absolute;right:80px;top:236px;font-size:28px;font-weight:600;color:#F6F1E8;background:rgba(14,74,90,.85);padding:8px 16px}
.row{display:flex;justify-content:space-between;font-size:46px;margin-top:14px;font-weight:600}.row b{font-weight:800}
.tot{border-top:4px dotted #D9B382;margin-top:22px;padding-top:18px}
.end{position:absolute;inset:0;background:#0E4A5A;color:#F6F1E8;display:flex;flex-direction:column;justify-content:center;padding:0 90px 200px}
.end h1{font-size:110px}.end .cta{margin-top:60px;background:#D9B382;color:#0E4A5A;font-weight:800;font-size:64px;padding:30px 40px;align-self:flex-start}
.end .h{margin-top:46px;font-size:40px;font-weight:600}`;
const ej='<div class="ej">Cifras de ejemplo</div>';
const C={
 '1_gancho':`<div class="box"><h1>Este gin-tonic se vende a 9 €.</h1><p>¿Cuánto les cuesta a ustedes?</p></div>`,
 '2_ginebra':`${ej}<div class="box"><div class="lbl">Ginebra · 50 ml</div><div class="big">1,00 €</div><p>Botella de 70 cl a 14 € → <span style="white-space:nowrap">0,02 € por ml</span></p></div>`,
 '3_tonica':`${ej}<div class="box"><div class="lbl">Tónica</div><div class="big">1,00 €</div><p>Lo que pagas por cada tónica</p></div>`,
 '4_hielo':`${ej}<div class="box"><div class="lbl">Hielo y lima</div><div class="big">0,20 €</div><p>También cuentan</p></div>`,
 '5_coste':`${ej}<div class="box"><div class="lbl">Coste de la copa</div><div class="row"><span>Ginebra</span><b>1,00 €</b></div><div class="row"><span>Tónica</span><b>1,00 €</b></div><div class="row"><span>Hielo y lima</span><b>0,20 €</b></div><div class="row tot"><span>Total</span><b>2,20 €</b></div></div>`,
 '6_margen':`${ej}<div class="box"><p style="margin:0">Precio sin IGIC (7 %): 8,41 €</p><div class="lbl" style="margin-top:28px">Te quedan por copa</div><div class="big">6,21 €</div><p>Es margen bruto, no beneficio: faltan personal, alquiler y el resto de gastos.</p></div>`,
 '7_cierre':`<div class="end"><h1>¿Lo calculamos con su carta?</h1><div class="cta">Escríbannos «COSTE»</div><div class="h">@islaybarra.hosteleria · islaybarra.es</div></div>`};
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 const solo=process.argv.slice(2); // opcional: node textos.js 2_ginebra → regenera solo esos rótulos
 for(const [k,h] of Object.entries(C)){if(solo.length&&!solo.includes(k))continue;const f=path.join(S,'_t.html');fs.writeFileSync(f,`<!doctype html><meta charset=utf-8><style>${css}</style>${h}`);
  await p.goto(pathToFileURL(f).href);await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:path.join(O,k+'.png'),omitBackground:true});console.log('ok',k)}
 fs.unlinkSync(path.join(S,'_t.html'));await b.close()})();
