'use strict';

var cacheName = 'aikidoData-20180207';
var filesToCache = [
  'index.html',
  'images/bg3.png',
  'images/belts/1e_dan.png',
  'images/belts/1e_kyu.png',
  'images/belts/2e_kyu.png',
  'images/belts/3e_kyu.png',
  'images/belts/4e_kyu.png',
  'images/belts/5e_kyu.png',
  'images/belts/6e_kyu.png',
  'images/belts/none.png',
  'images/movements/Ai_hanmi_katate_dori.png',
  'images/movements/Aiki_otoshi.png',
  'images/movements/Chudan_tsuki.png',
  'images/movements/Gokyo.png',
  'images/movements/Hiji_kime_osae.png',
  'images/movements/Ikkyo.png',
  'images/movements/Irimi_nage.png',
  'images/movements/Jodan_tsuki.png',
  'images/movements/Juji_garami.png',
  'images/movements/Kaiten_nage.png',
  'images/movements/Kata_dori.png',
  'images/movements/Kata_dori_men_uchi.png',
  'images/movements/Katate_dori.png',
  'images/movements/Katate_ryote_dori.png',
  'images/movements/Kokyu_hoo.png',
  'images/movements/Kokyu_nage.png',
  'images/movements/Koshi_nage.png',
  'images/movements/Kote_gaeshi.png',
  'images/movements/Mae_geri.png',
  'images/movements/Muna_dori.png',
  'images/movements/Nikyo.png',
  'images/movements/Ryokata_dori.png',
  'images/movements/Ryote_dori.png',
  'images/movements/Sankyo.png',
  'images/movements/Shihoo_nage.png',
  'images/movements/Sho_men_uchi.png',
  'images/movements/Sokumen_irimi_nage.png',
  'images/movements/Sumi_otoshi.png',
  'images/movements/Tenchi_nage.png',
  'images/movements/Ude_garami.png',
  'images/movements/Ude_kime_nage.png',
  'images/movements/Ushiro_eri_dori.png',
  'images/movements/Ushiro_katate_dori_kubi_shime.png',
  'images/movements/Ushiro_kiri_otoshi.png',
  'images/movements/Ushiro_ryo_hiji_dori.png',
  'images/movements/Ushiro_ryo_kata_dori.png',
  'images/movements/Ushiro_ryote_dori.png',
  'images/movements/Yoko_men_uchi.png',
  'images/movements/Yonkyo.png'
];

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


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  /*
   * The app is asking for app shell files. In this scenario the app uses the
   * "Cache, falling back to the network" offline strategy:
   * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
   */
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
