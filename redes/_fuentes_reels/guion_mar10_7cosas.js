// Reel del martes 10-11-2026: 7 cosas que medir antes de tocar la carta (unos 27 s, sin música).
const items=['La medida real de cada copa','El precio actual del proveedor','Las invitaciones','Las mermas','El escandallo de cada receta','El stock al principio y al final','El periodo que comparan'];
module.exports={tema:'claro',escenas:[
 {d:3.6,html:(t,d,{ap})=>`<div class="eb" style="${ap(t,0)}">Antes de subir precios</div><div class="t" style="${ap(t,.25)}">7 cosas que medir antes de tocar la carta</div><div class="s" style="${ap(t,.9)}">Guárdenlo para su próximo inventario.</div>`},
 {d:13.2,html:(t,d,{ap})=>`<div class="eb" style="${ap(t,0)}">Lo primero que reviso en cada barra</div>`+items.map((x,i)=>`<div class="it" style="${ap(t,.4+i*1.7)}"><b>${i+1}</b><span>${x}</span></div>`).join('')},
 {d:5,html:(t,d,{ap})=>`<div class="t" style="${ap(t,0)}">Ninguna demuestra nada por sí sola.</div><div class="s" style="${ap(t,1)}">Juntas les dicen <span class="hl">dónde mirar</span> antes de decidir.</div>`},
 {d:4.4,end:true,html:(t,d,{ap})=>`<div class="logo" style="${ap(t,0)}">I&amp;B</div><div class="t" style="${ap(t,.3)}">¿Lo medimos con su barra?</div><div class="s" style="${ap(t,.8)}">Escríbannos «COSTE» por mensaje.</div><div class="h" style="${ap(t,1.2)}">@islaybarra.hosteleria</div>`}]};
