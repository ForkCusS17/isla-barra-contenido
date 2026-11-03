// Motor de Reels animados de Isla & Barra (sin IA): cada Reel es una lista de escenas con texto, filas de cifras y
// tarjeta final. Se dibuja fotograma a fotograma en Chromium (Playwright) y se monta con ffmpeg.
// Uso: node reel_motor.js <repo-app> <fuentes-dir> <guion.js> <salida.mp4>
//   guion.js exporta {tema:'claro'|'oscuro', foto?:ruta, escenas:[...]}
const path=require('path'),fs=require('fs'),{execFileSync}=require('child_process');
const [,,REPO,FONTS,GUION,OUT]=process.argv;
const pw=require(path.join(REPO,'node_modules','playwright'));
const G=require(path.resolve(GUION));const FPS=30;
const f64=n=>fs.readFileSync(path.join(FONTS,n)).toString('base64');
const foto=G.foto?'data:image/jpeg;base64,'+fs.readFileSync(G.foto).toString('base64'):'';
const oscuro=G.tema==='oscuro';
const C=oscuro?{bg:'#0E4A5A',b1:'rgba(42,157,143,.55)',b2:'rgba(30,110,120,.6)',tit:'#F6F1E8',txt:'#E9EEEC',ac:'#D9B382',sub:'#cfe0dd',bar:'rgba(255,255,255,.18)',fill:'#2A9D8F'}
                :{bg:'#F6F1E8',b1:'rgba(42,157,143,.22)',b2:'rgba(217,179,130,.35)',tit:'#0E4A5A',txt:'#282828',ac:'#1F7A70',sub:'#5d6a6e',bar:'#e3ddd2',fill:'#2A9D8F'};
const css=`@font-face{font-family:PF;src:url(data:font/woff2;base64,${f64('playfair-display.woff2')}) format('woff2');font-weight:400 900}
@font-face{font-family:MS;src:url(data:font/woff2;base64,${f64('montserrat.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}body{width:1080px;height:1920px;overflow:hidden;background:${C.bg};font-family:MS;color:${C.txt};font-variant-numeric:lining-nums tabular-nums}
.blob{position:absolute;border-radius:50%;filter:blur(90px)}#b1{width:900px;height:900px;background:${C.b1}}#b2{width:1000px;height:1000px;background:${C.b2}}
#stage{position:absolute;left:84px;right:84px;top:260px;bottom:440px;display:flex;flex-direction:column;justify-content:center}
.eb{font-weight:700;font-size:38px;color:${C.ac};margin-bottom:26px;display:flex;align-items:center;gap:18px}.eb:before{content:'';width:44px;height:4px;background:${C.ac};border-radius:2px}
.t{font-family:PF;font-weight:800;font-size:118px;line-height:1.06;color:${C.tit};letter-spacing:-.5px}
.s{font-size:52px;line-height:1.45;margin-top:38px}
.hl{color:${C.ac};font-family:PF;font-weight:800}
.it{display:flex;gap:34px;align-items:baseline;font-size:58px;line-height:1.3;margin:0 0 40px}.it b{font-family:PF;font-weight:800;color:${C.ac};font-size:66px;min-width:60px}
.row{margin:0 0 40px}.row .l{display:flex;justify-content:space-between;font-size:50px;line-height:1.3}.row .l span:last-child{font-weight:700;white-space:nowrap;margin-left:24px}
.row .bar{height:16px;border-radius:8px;background:${C.bar};margin-top:14px;overflow:hidden}.row .bar i{display:block;height:100%;background:${C.fill};border-radius:8px}
.row.tot .l{font-weight:800;color:${C.tit}}.row.tot .bar i{background:${C.tit}}
.big{font-family:PF;font-weight:800;font-size:190px;white-space:nowrap;line-height:1;color:${C.tit};margin-top:10px}
.end{position:absolute;left:84px;right:84px;top:260px;bottom:440px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.end>*{max-width:100%}.end .logo{width:170px;height:170px;border-radius:32px;background:${oscuro?'#F6F1E8':'#0E4A5A'};color:${oscuro?'#0E4A5A':'#F6F1E8'};font-family:PF;font-weight:800;font-size:72px;display:flex;align-items:center;justify-content:center;margin:0 auto 46px}
.end .ft{width:300px;height:300px;border-radius:50%;border:8px solid #D9B382;background-size:cover;background-position:center;margin:0 auto 40px}
.end .t{font-size:92px}.end .s{font-size:40px;margin-top:26px;color:${C.sub}}.end .h{font-weight:700;font-size:44px;color:${C.ac};margin-top:36px}
.ej{position:absolute;right:84px;bottom:230px;font-size:30px;font-weight:600;color:${C.sub}}`;
// cada escena: {d: duración en s, html: (t,d)=>string}; ayudas para aparecer en secuencia
const ap=(t,t0,dur=.5)=>{const k=Math.max(0,Math.min(1,(t-t0)/dur));const e=1-Math.pow(1-k,3);return `opacity:${e};transform:translateY(${(1-e)*40}px)`};
const num=(t,t0,v,dec=0,dur=1)=>{const k=Math.max(0,Math.min(1,(t-t0)/dur));const e=1-Math.pow(1-k,3);const x=(v*e).toFixed(dec).split('.');return x[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.')+(dec?','+x[1]:'')};
const H={ap,num,foto};
(async()=>{const tmp=OUT+'_frames';fs.rmSync(tmp,{recursive:true,force:true});fs.mkdirSync(tmp,{recursive:true});
 const b=await pw.chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
 await p.setContent(`<html><head><style>${css}</style></head><body><div class="blob" id="b1"></div><div class="blob" id="b2"></div><div id="stage"></div><div id="endw"></div><div class="ej" id="ej"></div></body></html>`);await p.evaluate(()=>document.fonts.ready);
 let n=0,T=0;const total=G.escenas.reduce((a,e)=>a+e.d,0);
 for(const e of G.escenas){const frames=Math.round(e.d*FPS);for(let i=0;i<frames;i++){const t=i/FPS,gt=T+t;
   // salida suave: los últimos 0,35 s de cada escena se desvanecen (menos en la última)
   const last=e===G.escenas[G.escenas.length-1];const fade=last?Math.min(1,(e.d-t)/0.6):Math.min(1,(e.d-t)/0.35);
   const html=e.html(t,e.d,H);const isEnd=!!e.end;
   await p.evaluate(([html,isEnd,fade,gt,ej])=>{const st=document.getElementById('stage'),en=document.getElementById('endw');st.innerHTML=isEnd?'':html;en.innerHTML=isEnd?'<div class="end">'+html+'</div>':'';st.style.opacity=en.style.opacity=fade;
     document.getElementById('b1').style.cssText=`left:${-250+Math.sin(gt/5)*60}px;top:${-200+Math.cos(gt/6)*50}px`;document.getElementById('b2').style.cssText=`left:${300+Math.cos(gt/7)*70}px;top:${1100+Math.sin(gt/6)*60}px`;
     document.getElementById('ej').textContent=ej||''},[html,isEnd,Math.max(0,fade),gt,e.ej]);
   await p.screenshot({path:path.join(tmp,String(n++).padStart(5,'0')+'.png')})}T+=e.d}
 await b.close();
 execFileSync('ffmpeg',['-v','error','-y','-framerate',String(FPS),'-i',path.join(tmp,'%05d.png'),'-c:v','libx264','-crf','18','-preset','slow','-pix_fmt','yuv420p','-movflags','+faststart',OUT]);
 // portada: un fotograma de la primera escena ya formada
 fs.copyFileSync(path.join(tmp,String(Math.round(Math.min(2.5,G.escenas[0].d-0.5)*FPS)).padStart(5,'0')+'.png'),OUT.replace(/\.mp4$/,'_portada.png'));
 fs.rmSync(tmp,{recursive:true,force:true});console.log('ok',OUT,n,'fotogramas',total.toFixed(1),'s')})().catch(e=>{console.log('ERR',e.message);process.exit(1)});
