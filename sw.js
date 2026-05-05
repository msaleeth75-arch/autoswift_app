self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (event) => {
    // Simply pass through requests for now. 
    // In a full PWA, we would cache files here for offline support.
    event.respondWith(fetch(event.request));
});
