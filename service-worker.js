const CACHE_NAME = 'hoc-chu-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/main.css',
    '/main.js',
    '/fonts/HLHOCTRO.TTF'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
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