const CACHE='inverno-v5-4';
const FILES=['./','./index.html','./style.css','./data.js','./app.js','./manifest.webmanifest','./icon.svg','./apple-touch-icon.png','./piano-originale.pdf',...['006','012','018','024','030'].map(n=>'./images/piano-'+n+'.jpg')];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('message',event=>{if(event.data==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('inverno-')&&k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin)return;const allowed=FILES.some(p=>new URL(p,self.registration.scope).href===url.href);if(!allowed)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));});
