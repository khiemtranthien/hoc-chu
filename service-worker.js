const CACHE_NAME = 'hoc-chu-cache-v1.0.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/main.css',
    '/main.js',
    '/fonts/HLHOCTRO.TTF',
    'bootstrap.min.css',
    'bootstrap.bundle.min.js',
    'jquery-3.5.1.slim.min.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});