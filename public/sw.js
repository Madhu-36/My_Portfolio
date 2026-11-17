// Cache identifier
const CACHE_NAME = 'madhu-portfolio-v1.2.0';

// Cache core assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        './',
        './manifest.json',
        './favicon.svg',
      ]);
    })
  );
  self.skipWaiting();
});

// Clean up stale caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Network-first strategy with cache fallback and navigation resilience
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Handle SPA navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cached = await caches.match('./');
        return cached || fetch(event.request);
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
