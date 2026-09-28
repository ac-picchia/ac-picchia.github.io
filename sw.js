// ============================================================
//  SERVICE WORKER — AC Picchia Cori
//  Ogni volta che aggiorni i file, incrementa la versione qui:
//  acpicchia-v1 → acpicchia-v2 → acpicchia-v3 …
// ============================================================

const CACHE = 'acpicchia-v1';

const STATIC = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './logo.png'
];

// Installazione: pre-carica i file statici
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC))
  );
  self.skipWaiting();
});

// Attivazione: rimuove le vecchie cache
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first per statici, network-first per audio/foto
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isDynamic = url.pathname.includes('/audio/') || url.pathname.includes('/photos/');

  if (isDynamic) {
    // Network-first: prova la rete, fallback cache
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first: prova cache, fallback rete
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
