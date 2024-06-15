var cacheName = 'hiptech-pwa';
var filesToCache = [
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(networkResponse => {
      caches.open(cacheName).then(cache => cache.put(e.request, networkResponse));
        return networkResponse.clone();
    }).catch(() => {
      return caches.match(e.request);
    })
  );
});
