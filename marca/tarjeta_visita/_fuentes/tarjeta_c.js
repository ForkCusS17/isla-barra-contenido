// Tarjeta final (estilo C, atardecer canario): 85×55 mm + 3 mm de sangrado = 91×61 mm. PDF de imprenta y PNG a 300 ppp.
const {chromium}=require('playwright');const QR=require('qrcode');const fs=require('fs'),path=require('path');const {pathToFileURL}=require('url');
const S=__dirname,O=path.join(__dirname,'..','final');fs.mkdirSync(O,{recursive:true});const u=f=>pathToFileURL(path.join(S,f)).href;
(async()=>{
const qr=(await QR.toString('https://islaybarra.es',{type:'svg',margin:0,errorCorrectionLevel:'M',color:{dark:'#0E4A5A',light:'#00000000'}})).replace('<svg','<svg style="width:100%;height:100%"');
const css=`@font-face{font-family:M;src:url(${u('montserrat.woff2')})}@font-face{font-family:P;src:url(${u('playfair-display.woff2')})}
@page{size:91mm 61mm;margin:0}*{margin:0;padding:0;box-sizing:border-box}html,body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
.c{width:91mm;height:61mm;position:relative;overflow:hidden;page-break-after:always;font-family:M;font-variant-numeric:tabular-nums}.P{font-family:P;font-weight:800;letter-spacing:-.02em}`;
// Escena a sangre (910×610 unidades = 91×61 mm)
const scene=`<svg viewBox="0 0 910 610" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%">
<defs><linearGradient id="k" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#082F3A"/><stop offset=".45" stop-color="#0E4A5A"/><stop offset=".72" stop-color="#2A7F7D"/><stop offset=".92" stop-color="#E2C08E"/></linearGradient>
<radialGradient id="s" cx="660" cy="395" r="190" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#F3D9AE" stop-opacity=".9"/><stop offset=".45" stop-color="#D9B382" stop-opacity=".35"/><stop offset="1" stop-color="#D9B382" stop-opacity="0"/></radialGradient>
<linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C29A66"/><stop offset="1" stop-color="#7A5A3C"/></linearGradient></defs>
<rect width="910" height="395" fill="url(#k)"/><circle cx="660" cy="395" r="190" fill="url(#s)"/>
${Array.from({length:22},(_,i)=>`<circle cx="${(i*137)%900+5}" cy="${(i*61)%150+10}" r="${1+(i%3)*.6}" fill="#F6F1E8" opacity="${.3+(i%4)*.12}"/>`).join('')}
<circle cx="820" cy="70" r="15" fill="#F6F1E8" opacity=".9"/><circle cx="827" cy="66" r="14" fill="#0A3946"/>
<path d="M330 395 C 380 380, 420 350, 455 346 C 475 344, 485 356, 500 356 C 530 340, 560 345, 585 372 C 600 386, 620 392, 650 395 Z" fill="#0A3A47"/>
<path d="M-10 395 C 60 370, 120 315, 190 305 C 220 300, 235 322, 255 322 C 290 300, 330 310, 360 350 C 380 375, 410 390, 440 395 Z" fill="#072D38"/>
<rect y="395" width="910" height="215" fill="#0E4A5A"/>
${Array.from({length:9},(_,i)=>`<rect x="${625+(i%3)*7-i*2}" y="${405+i*15}" width="${80-i*7}" height="3.2" rx="1.5" fill="#D9B382" opacity="${(.65-i*.06).toFixed(2)}"/>`).join('')}
${Array.from({length:4},(_,i)=>`<path d="M0 ${450+i*40} C 250 ${444+i*40}, 500 ${458+i*40}, 910 ${448+i*40}" stroke="#2A9D8F" stroke-width="1.6" fill="none" opacity="${.18+i*.04}"/>`).join('')}
<path d="M390 610 C 520 530, 690 500, 910 492 L910 610 Z" fill="url(#a)"/>
<path d="M400 610 C 525 532, 692 503, 910 496" stroke="#F6F1E8" stroke-width="2.4" fill="none" opacity=".6"/>
<g transform="translate(770,462) scale(.5)"><ellipse cx="0" cy="168" rx="62" ry="10" fill="#4A3524" opacity=".5"/>
 <path d="M-62 -10 C -70 60, -40 105, 0 107 C 40 105, 70 60, 62 -10 Z" fill="#F6F1E8" fill-opacity=".28" stroke="#F6F1E8" stroke-width="5"/>
 <path d="M-58 30 C -30 38, 30 38, 58 30 C 54 70, 30 100, 0 101 C -30 100, -54 70, -58 30 Z" fill="#E9D7A8" opacity=".55"/>
 <path d="M18 -6 c 10 -18 34 -22 48 -10" stroke="#7CB342" stroke-width="9" fill="none" stroke-linecap="round"/>
 <path d="M0 107 V 160 M-34 166 C -18 158, 18 158, 34 166" stroke="#F6F1E8" stroke-width="6" fill="none" stroke-linecap="round"/></g></svg>`;
const front=`<div class="c">${scene}<div style="position:absolute;left:9mm;top:8.5mm;color:#F6F1E8"><div class="P" style="font-size:8.2mm;line-height:1">Isla &amp; Barra</div>
 <div style="font-size:2.5mm;color:#F3D9AE;margin-top:1.6mm;font-weight:500">Ideas digitales para hostelería</div></div></div>`;
const back=`<div class="c" style="background:#F6F1E8;color:#282828">
 <div style="position:absolute;left:9mm;right:9mm;top:8.5mm;bottom:12mm;display:grid;grid-template-columns:1fr 16mm;gap:4mm">
  <div style="display:flex;flex-direction:column;justify-content:space-between">
   <div><div class="P" style="font-size:5.6mm;color:#0E4A5A;line-height:1">Samuel Garcia</div>
    <div style="font-size:2.45mm;color:#1F7A70;margin-top:1.4mm;font-weight:600">Asesor de barra · Canarias</div>
    <div style="font-size:2.15mm;margin-top:2.4mm;line-height:1.45;color:#4f4c46">Escandallos, cartas de bebidas<br>y control de stock</div></div>
   <div style="font-size:2.4mm;line-height:1.6"><b style="color:#0E4A5A">info@islaybarra.es</b><br>islaybarra.es<br>@islaybarra.hosteleria</div></div>
  <div style="align-self:end;text-align:center"><div style="width:16mm;height:16mm">${qr}</div><div style="font-size:1.8mm;color:#4f4c46;margin-top:1.2mm">islaybarra.es</div></div></div>
 <div style="position:absolute;left:0;right:0;bottom:0;height:7mm;background:#D9B382"></div>
 <div style="position:absolute;left:0;right:0;bottom:7mm;height:1.1mm;background:#2A9D8F;opacity:.55"></div></div>`;
const f=path.join(S,'_t.html');fs.writeFileSync(f,`<!doctype html><meta charset=utf-8><style>${css}</style>${front}${back}`);
const b=await chromium.launch();const p=await b.newPage();await p.goto(pathToFileURL(f).href);await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:path.join(O,'tarjeta_isla_barra_imprenta.pdf'),width:'91mm',height:'61mm',printBackground:true,preferCSSPageSize:true});
const q=await b.newPage({viewport:{width:344,height:231},deviceScaleFactor:3.125});await q.goto(pathToFileURL(f).href);await q.evaluate(()=>document.fonts.ready);
const cs=await q.$$('.c');await cs[0].screenshot({path:path.join(O,'anverso_300ppp.png')});await cs[1].screenshot({path:path.join(O,'reverso_300ppp.png')});
fs.unlinkSync(f);await b.close();console.log('ok')})();
