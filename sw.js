/* Stoffknacker Service Worker. Version je Build; alte Caches werden beim Aktivieren entfernt.
   Seiten: zuerst Netz, offline aus dem Cache. Gehashte Bilder (assets/): Cache zuerst.
   Fremde Ursprünge (z. B. künftige Werbe- oder Consent-Server) werden nie zwischengespeichert.
   Kein skipWaiting: Ein neuer Build übernimmt erst, wenn keine Seite mehr offen ist,
   damit kein laufender Test unterbrochen wird.
   R157 (MN157-04/05): Die App-Schale (Startadresse, index.html) wird nur von der App selbst überschrieben, nie von
   einer anderen Seite (z. B. /ueber/) und nie von einer Fehlerantwort. Andere Seiten liegen unter ihrer eigenen Adresse.
   Programmdateien (assets/js, mit ?v=) gehören zum Build-Cache und verschwinden mit dem nächsten Build; der
   dauerhafte Cache behält nur gehashte Bilder. */
const VERSION = 'stoffknacker-44aaa8d4c7c0';
const ASSETS = 'mnemika-assets'; /* gehashte, unveränderliche Bilder: bleiben über Builds hinweg gültig */
const SHELL = ['./assets/js/analytics.js?v=2c1d1946f6','./assets/js/life-pack.js?v=376fc600a3','./assets/js/life-view.js?v=871e2ea2c3','./assets/js/life-bridge.js?v=4d66c5a3f9','./assets/js/app-01.js?v=89db4fa232','./assets/js/app-02.js?v=a2be453dac','./assets/js/app-03.js?v=320bf74e01','./assets/js/app-04.js?v=d05c6b0bda','./assets/js/app-05.js?v=82f01d7bd7','./assets/js/app-06.js?v=5f5b4db6ec','./assets/js/app-07.js?v=740b84b182','./assets/js/app-08.js?v=8dddd8ff79','./assets/js/app-09.js?v=a52473e53d','./assets/js/app-10.js?v=9d7cc6f63b','./assets/js/app-11.js?v=db486bb254','./assets/js/app-12.js?v=85110c4910','./assets/js/app-13.js?v=58563b7dbe','./assets/js/app-14.js?v=34a4389dff','./assets/js/app-15.js?v=77a97502d6','./assets/js/app-16.js?v=1da0002cf6','./assets/js/app-17.js?v=c8e01ef341','./assets/js/app-18.js?v=b0a2bf0c0d','./assets/js/app-19.js?v=c7c2421ea8','./assets/js/app-20.js?v=52036cb3fa','./assets/js/app-21.js?v=1196cf5128','./assets/js/app-22.js?v=500d65cc70','./assets/js/app-23.js?v=cb19cdc5f7','./assets/js/app-24.js?v=06dff4f066','./assets/js/app-25.js?v=26c2f40002','./assets/js/app-26.js?v=af0a37c090','./assets/js/app-27.js?v=65a63b65bf','./assets/js/app-28.js?v=94d91034d3','./assets/js/app-29.js?v=e01aa218cc','./assets/js/app-30.js?v=22f87342c3','./assets/js/app-31.js?v=02940290af','./assets/js/app-32.js?v=18b36ca59c','./assets/js/app-33.js?v=9ecd3bdd75','./assets/js/app-34.js?v=76f87cd8d5','./assets/js/app-35.js?v=d7bea0912d','./assets/js/app-36.js?v=b8920fb9e5','./assets/js/app-37.js?v=c456056db7','./assets/js/app-38.js?v=4f6beea620','./assets/js/app-39.js?v=d2c0f4c523','./assets/js/life-core.js?v=0d515cc8b8','./assets/js/life-basics.js?v=579403a069','./assets/js/life-player.js?v=38d7dfcba2','./assets/js/motor.js?v=61aa5adbde','./assets/js/bilder.js?v=f1a7abe3a1','./assets/js/lesen.js?v=616b6755e7','./assets/js/vertiefung.js?v=0e7d47c839','./assets/js/lernkit.js?v=8becd337ef','./assets/js/lernkit-daten.js?v=f7856b5737','./assets/js/sk-leben-index.js?v=1d0ee23914', './', './index.html', './manifest.webmanifest', './assets/icon-180.png', './assets/icon-192.png', './assets/icon-512.png'];
/* R69: Fotos (gehasht, unveraenderlich) nach der Installation einmalig vorab laden, damit sie offline sichtbar sind. */
const BILDER_VORAB = [];
const BASIS = new URL('./', self.location.href).pathname;
const istSchale = p => p === BASIS || p === BASIS + 'index.html';
const gut = res => !!res && res.ok && res.status === 200 && (!res.type || res.type === 'basic' || res.type === 'default');
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => caches.open(ASSETS)).then(c => Promise.all(BILDER_VORAB.map(u => c.match(u).then(h => h || c.add(u).catch(() => null)))))); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => (k.startsWith('stoffknacker-') || k.startsWith('mnemika-') || k.startsWith('Stoffknacker-')) && k !== VERSION && k !== ASSETS).map(k => caches.delete(k))))
  .then(() => caches.open(ASSETS)).then(c => c.keys().then(rs => Promise.all(rs.filter(q => { const x = new URL(q.url); return x.pathname.includes('/assets/js/') || (!x.search && !x.pathname.includes('/assets/fotos/') && /\.(png|svg|ico|webmanifest|css)$/.test(x.pathname)); }).map(q => c.delete(q)))))); });
/* R157b (FIN-04): Cache-Schreibvorgänge bleiben an die Lebensdauer des Ereignisses gebunden. waitUntil wird sofort
   registriert; das Versprechen erfüllt sich, sobald das Schreiben (oder der Verzicht darauf) abgeschlossen ist. */
function halte(e) { let fertig; const p = new Promise(r => { fertig = r; }); try { e.waitUntil(p); } catch (x) { fertig(); } return w => { Promise.resolve(w).then(fertig, fertig); }; }
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== self.location.origin) return;
  const ende = halte(e);
  if (r.mode === 'navigate') {
    const schale = istSchale(u.pathname);
    e.respondWith(fetch(r).then(res => {
        ende(gut(res) ? (k => caches.open(VERSION).then(c => c.put(schale ? './index.html' : u.origin + u.pathname, k)))(res.clone()) : null);
        return res; })
      .catch(() => { ende(null); return caches.open(VERSION).then(async c => {
        const direct = await c.match(schale ? './index.html' : u.origin + u.pathname);
        if (direct) return direct;
        const shell = await c.match('./index.html') || await caches.match('./index.html');
        if (!shell) return new Response('Offline: Die App wurde noch nicht vollstaendig geladen.', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});
        if (schale) return shell;
        // Do not serve root-relative HTML at an uncached nested URL: its assets would resolve under the wrong directory.
        const target = new URL('./', self.location.href); target.searchParams.set('offline','1');
        if (u.pathname.endsWith('/schule-fuers-leben/')) target.searchParams.set('life','');
        /* r174: ein nicht zwischengespeichertes Kapitel behält offline seine Identität: Weiterleitung direkt ins Kapitel der App */
        const kap = u.pathname.slice(BASIS.length).match(/^lernen\/[^/]+\/([A-Za-z0-9._-]+)\/(?:index\.html)?$/);
        if (kap) target.hash = 'lesson/' + kap[1];
        /* r175: Lektionen aus «Schule fürs Leben» (Grundlagen und Vertiefung) behalten offline ebenfalls ihre Identität */
        const leben = u.pathname.slice(BASIS.length).match(/^schule-fuers-leben\/(?:grundlagen|vertiefung|themen)\/([A-Za-z0-9._-]+)\/(?:index\.html)?$/);
        if (leben) target.searchParams.set('life', /\/themen\//.test(u.pathname) ? '' : leben[1]);
        return Response.redirect(target.href,302);
      }); }));
    return;
  }
  // Mutable photo manifest: explicit network-first. Request cache mode does not override Cache API.
  if (u.pathname.endsWith('/assets/fotos/fotos.json')) {
    e.respondWith(fetch(r).then(res => {
      if (!gut(res)) throw new Error('Photo manifest unavailable');
      ende(caches.open(VERSION).then(c => c.put(r,res.clone()))); return res;
    }).catch(async () => {
      ende(null); const current=await caches.open(VERSION);const hit=await current.match(r) || await caches.match(r);
      return hit || new Response('{"version":1,"themen":{}}',{status:503,headers:{'Content-Type':'application/json'}});
    }));return;
  }
  /* r174: veränderliche Stylesheets (z. B. assets/lesen.css, ohne Hash) zuerst aus dem Netz, damit nie alte Gestaltung hängen bleibt; offline aus dem Build-Cache */
  /* r175: Symbole, Manifest und Vorschaubild ohne Hash ebenfalls zuerst aus dem Netz (sonst bleiben alte Logos hängen) */
  if (u.pathname.endsWith('.css') || (!u.search && /\.(png|svg|ico|webmanifest)$/.test(u.pathname) && !/\/assets\/fotos\//.test(u.pathname))) {
    e.respondWith(fetch(r, {cache: 'no-cache'}).then(res => { ende(gut(res) ? (k => caches.open(VERSION).then(c => c.put(r, k)))(res.clone()) : null); return res; })
      .catch(async () => { ende(null); const hit = await (await caches.open(VERSION)).match(r) || await caches.match(r); return hit || new Response('', {status:503}); }));
    return;
  }
  if (u.pathname.includes('/assets/js/')) {
    e.respondWith(caches.match(r).then(hit => { if (hit) { ende(null); return hit; } return fetch(r).then(res => { ende(gut(res) ? (k => caches.open(VERSION).then(c => c.put(r, k)))(res.clone()) : null); return res; }, x => { ende(null); throw x; }); }, x => { ende(null); throw x; }));
    return;
  }
  if (u.pathname.includes('/assets/')) {
    e.respondWith(caches.match(r).then(hit => { if (hit) { ende(null); return hit; } return fetch(r).then(res => { ende(gut(res) ? (k => caches.open(ASSETS).then(c => c.put(r, k)))(res.clone()) : null); return res; }, x => { ende(null); throw x; }); }, x => { ende(null); throw x; }));
    return;
  }
  ende(null);
});
