// service-worker.js


// Cache the files specified below
const CACHE_NAME="mov4uCache_1";
const urlsToCache=["/user/home","/assets","/index.html","/bundle.js"]


// Install event: caching necessary files
self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Opened cache");
            return cache.addAll(urlsToCache)
        })
    )
});



// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
    console.log('Service Worker activating.');
});




// Fetch event: serve cached files if available
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
