// ============================================================
// Mangalore AutoParts - Service Worker
// Handles caching, offline support, and push notifications
// ============================================================

const CACHE_NAME = 'mangalore-autoparts-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './admin.js',
    './firebase-config.js',
    './logo.png',
    './manifest.json',
    './images/battery.png',
    './images/brake_disc.png',
    './images/engine_oil.png',
    './images/stereo.png',
    './images/tyre.png'
];

// Install - Cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate - Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch - Cache-first for static, network-first for API
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Skip Firebase/Razorpay API calls (always network)
    if (url.hostname.includes('firestore') ||
        url.hostname.includes('firebase') ||
        url.hostname.includes('googleapis') ||
        url.hostname.includes('razorpay') ||
        url.hostname.includes('gstatic')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                // Return cache but also fetch and update in background
                fetch(event.request).then(response => {
                    if (response && response.status === 200) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, response);
                        });
                    }
                }).catch(() => {});
                return cachedResponse;
            }
            return fetch(event.request).then(response => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            });
        }).catch(() => {
            // Offline fallback
            if (event.request.destination === 'document') {
                return caches.match('./index.html');
            }
        })
    );
});

// Push Notification handler
self.addEventListener('push', event => {
    let data = { title: 'Mangalore AutoParts', body: 'You have a new update!', icon: './logo.png' };
    
    if (event.data) {
        try {
            data = { ...data, ...event.data.json() };
        } catch (e) {
            data.body = event.data.text();
        }
    }

    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon || './logo.png',
            badge: './logo.png',
            vibrate: [200, 100, 200],
            data: data.url || './',
            actions: [
                { action: 'open', title: 'View Details' },
                { action: 'dismiss', title: 'Dismiss' }
            ]
        })
    );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
    event.notification.close();
    if (event.action === 'dismiss') return;
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if (client.url.includes('index.html') && 'focus' in client) {
                    return client.focus();
                }
            }
            return clients.openWindow(event.notification.data || './');
        })
    );
});
