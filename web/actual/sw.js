// La app se publicó por error en islaybarra.es y dejó su service worker en algunos navegadores.
// Este archivo lo sustituye: borra su caché, se da de baja y recarga las pestañas para que se vea la web.
// La app está en https://app.islaybarra.es. Se puede borrar dentro de unos meses.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{
 for(const k of await caches.keys())await caches.delete(k);
 await self.registration.unregister();
 for(const c of await self.clients.matchAll({type:'window'}))c.navigate(c.url);
})()));
