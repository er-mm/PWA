self.addEventListener('install', (event) => {
	console.log('[Service Worker] Installing Service Worker....', event);
});

self.addEventListener('activate', (event) => {
	console.log('[Service Worker] Activating Sevice Worker....', event);
	return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
	console.log('[Service Worker] Fetching....', event);
	event.respondWith(fetch(event.request));
})