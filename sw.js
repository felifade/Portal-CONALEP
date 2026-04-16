/* ============================================================
   Service Worker — Portal Académico CONALEP
   Estrategia: Cache-first para assets estáticos,
               Network-first para calendar.ics (datos en vivo)
   ============================================================ */

const CACHE_NAME   = 'conalep-portal-v6';
const BASE         = '/Portal-CONALEP';

// Recursos a cachear en la instalación
const PRECACHE = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/manifest.json`,
  `${BASE}/icons/icon-192.png`,
  `${BASE}/icons/icon-512.png`,
  `${BASE}/icons/icon.svg`,
  `${BASE}/icons/apple-touch-icon.png`,
  // Fuente Inter (se cachea en el primer uso)
];

// ── Instalación: precachear recursos core ──────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// ── Activación: borrar caches antiguas ────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch: estrategia según tipo de recurso ───────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // calendar.ics → Network-first (datos en vivo, con fallback a caché)
  if (url.pathname.endsWith('calendar.ics')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Google Fonts y CDNs externos → Cache-first, sin fallo silencioso
  if (url.origin !== self.location.origin) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Resto de recursos del portal → Cache-first
  event.respondWith(cacheFirst(event.request));
});

// ── Estrategias ────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Sin red y sin caché → devuelve la página principal (SPA fallback)
    return caches.match(`${BASE}/index.html`);
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Sin red → usar caché si existe
    const cached = await caches.match(request);
    return cached || new Response('Sin conexión', { status: 503 });
  }
}
