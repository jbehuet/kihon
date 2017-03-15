// Install Service Worker
self.addEventListener('install', function(event) {

    console.log('Service Worker: Installing....');

    event.waitUntil(

        // Open the Cache
        caches.open(cacheName).then(function(cache) {
            console.log('Service Worker: Caching App Shell at the moment......');

            // Add Files to the Cache
            return cache.addAll(filesToCache);
        })
    );
});
