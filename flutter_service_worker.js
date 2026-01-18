'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/caches/deviceStreaming.xml": "7ec4c7c46ee06dde6705da6ad030f76b",
".idea/material_theme_project_new.xml": "7a870bab3e4b98ceef614759ca51ff7b",
".idea/misc.xml": "f46b3cae22635f78d804b2e47c21394c",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "1a16809a3a296b65911ab7b1b4ce2459",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "07802f8217277db116e1cabdccd8cdad",
"assets/AssetManifest.bin": "dc9f4661e037b78860596118b41f430c",
"assets/AssetManifest.bin.json": "b1f576157af6683cadcdb2f48482f4cf",
"assets/AssetManifest.json": "9ed7a358c937bd0568a01ef7d9e7f72b",
"assets/assets/images/defaults/level_default_0.jpg": "3e74a99104d39884aa3f7c281aeead1f",
"assets/assets/images/defaults/level_default_1.jpg": "ab79aef80a77d0e7e61f1be4d8b811d6",
"assets/assets/images/defaults/level_default_10.jpg": "79af3adf71561dfd85f5faa70734a47f",
"assets/assets/images/defaults/level_default_11.jpg": "dcb09f7b9356955309fe33a0d5b34e71",
"assets/assets/images/defaults/level_default_2.jpg": "5de6c6e4e8a0ad9352e325f32178b064",
"assets/assets/images/defaults/level_default_3.jpg": "b88e71403ef244517466f6c106c10398",
"assets/assets/images/defaults/level_default_4.jpg": "aa53603943c31a5da4198300d0bc395a",
"assets/assets/images/defaults/level_default_5.jpg": "23d392dcaea4a53b6cbf79d8da268747",
"assets/assets/images/defaults/level_default_6.jpg": "e6453ffd4ac86ef2078a648eacf24e87",
"assets/assets/images/defaults/level_default_7.jpg": "d5e6a88a1f17c6b3e568ede9cd2682c7",
"assets/assets/images/defaults/level_default_8.jpg": "66607d024f9611ee2f225d810b79af01",
"assets/assets/images/defaults/level_default_9.jpg": "7d435ca3de079a66ca02ee6454b6a8b6",
"assets/assets/images/workouts/1.jpg": "542236ecc04d6db3257cb25e7295bc1c",
"assets/assets/images/workouts/10.jpg": "4bbc813e23f58a35230704ba7b596e0d",
"assets/assets/images/workouts/11.jpg": "8c9704db1febc4bd4528355c1d302c4e",
"assets/assets/images/workouts/12.jpg": "e98b294c50ea396ca7a3e90ed4b3ab0f",
"assets/assets/images/workouts/2.jpg": "ea9524ecef54ef620d5a3df6927db067",
"assets/assets/images/workouts/3.jpg": "3c1f2b3b56af02b0317606c1d21a3b50",
"assets/assets/images/workouts/4.jpg": "820a85824c1516863625f18429f24bbe",
"assets/assets/images/workouts/5.jpg": "423d17963600f355e95fbd56eb530ba6",
"assets/assets/images/workouts/6.jpg": "59798c71a27646f3b4f047851389c1a4",
"assets/assets/images/workouts/7.jpg": "88d7f1a195e4a0a0ea3491057a57cf8c",
"assets/assets/images/workouts/8.jpg": "41497134cc7e05a0a1741da20dee0fb2",
"assets/assets/images/workouts/9.jpg": "a0a1071d099ea28e83dbd868741a4e90",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c6879d3f58e8dbb7abc81bba404a4fa5",
"assets/NOTICES": "c4205d4e3a0fe1863906f8406eef5925",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "118efe0121cdfb2e8a6c668582714fc1",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "37d464d2947c2c265e1ec90913c16d36",
"icons/Icon-192.png": "9f03e9e953d31386d05a3fd3b1d3bd22",
"icons/Icon-512.png": "42098868a2818abb3f6fb35c7cc9ed63",
"icons/Icon-maskable-192.png": "9f03e9e953d31386d05a3fd3b1d3bd22",
"icons/Icon-maskable-512.png": "42098868a2818abb3f6fb35c7cc9ed63",
"index.html": "41440492de2559203899880f192d2a02",
"/": "41440492de2559203899880f192d2a02",
"main.dart.js": "01b722e3bda03076d671eb15635b4cc8",
"manifest.json": "79da9ab8a933fe0ab8806847378126d2",
"splash/img/dark-1x.png": "1fdd2d28161864a8b14fd4e700a89859",
"splash/img/dark-2x.png": "fa80626ddce21fa7c1612af280913b78",
"splash/img/dark-3x.png": "cb98e7205aee2bdf6ff5ecf51f46b1a6",
"splash/img/dark-4x.png": "23c3ad8435c4c843605859c40fc24fce",
"splash/img/light-1x.png": "1fdd2d28161864a8b14fd4e700a89859",
"splash/img/light-2x.png": "fa80626ddce21fa7c1612af280913b78",
"splash/img/light-3x.png": "cb98e7205aee2bdf6ff5ecf51f46b1a6",
"splash/img/light-4x.png": "23c3ad8435c4c843605859c40fc24fce",
"version.json": "f5c1e31cbfee7b8f75cf801214fbafdd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
