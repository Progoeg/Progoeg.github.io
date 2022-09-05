'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "551e4b478f8833b78d7cafa3853dbb1a",
"assets/assets/i18n/ar.json": "a46385cf183148549b576420ab3ebf92",
"assets/assets/i18n/en.json": "6044cfdcf6c9512ae259a6cffb048862",
"assets/assets/images/1.png": "78fbc4b37557311488de2c7f1b200081",
"assets/assets/images/2.png": "59cae9e1e241a801266ee6e167987407",
"assets/assets/images/3.png": "b26db1cf42bb2d6771c8cc00bc9ce268",
"assets/assets/images/4.png": "75ce732f2e85ee7750740a2d08251f92",
"assets/assets/images/ad.png": "aedf6adb8402b00613da8650aa62564f",
"assets/assets/images/behance.png": "337d6771651a5713c8daf5791210cb73",
"assets/assets/images/cell.png": "56cbe1573f327cb2b4a08b47ab028e18",
"assets/assets/images/connection.png": "1dea91e3360fb13990ab0935f0691618",
"assets/assets/images/contact.png": "fc85cba8d4026640311503e897b6b3e7",
"assets/assets/images/desktop.png": "4b87e7e579671c2e5df5623e19ec3ceb",
"assets/assets/images/e.png": "912811661676f954c75ca62a1d714745",
"assets/assets/images/e1.png": "3619dc04de4bb899be4a7f9cc38eaba6",
"assets/assets/images/error.png": "6952e7dad23ccfd9b9ccaedbbf241f8f",
"assets/assets/images/facebook.png": "ea1a536f9fa5b613dc7a8052d8a8d768",
"assets/assets/images/fw.png": "c777f497d2d190120667c3ac73e736ba",
"assets/assets/images/h.png": "70f2dfc694df01e16ed9c8dc134ad541",
"assets/assets/images/h1.png": "48d8e5db0242315f73157aa8c17ca373",
"assets/assets/images/hand.png": "805bae26c2d81960abc11b8ca0b96a65",
"assets/assets/images/instagram.png": "bcf7ae482e2fb587deda4e6826507eef",
"assets/assets/images/linkedin.png": "6eeb4d381521fea016f729f2a8c1ab59",
"assets/assets/images/logo.png": "31f438143625fa9f203337673fd28a1c",
"assets/assets/images/mobile.png": "09ce50ca3abfa32b54d5a6990d773885",
"assets/assets/images/p.png": "6c8685790b279d51d73b60eab956056b",
"assets/assets/images/pp.png": "d170c27f28d7b416f212106cb32b18cf",
"assets/assets/images/s.png": "a56f12e68961596f723ff1a48f60b9ce",
"assets/assets/images/s1.png": "9d5f19146a4f2e26af010482a39a8b69",
"assets/assets/images/seda.png": "41b5f7a2cd81f041d2d05e22d99bef58",
"assets/assets/images/speaker.png": "2d0b40ca7507e7ed140c7293c2bb38ca",
"assets/assets/images/ss.png": "da6f446f5272daa992a2cdb2cac18334",
"assets/assets/images/star.png": "547092d2bdf7c16b5640e33fbf1081f7",
"assets/assets/images/twitter.png": "089636632e9346057eb78173d3232912",
"assets/assets/images/ui.png": "6ec8b006498db06f2a2834e4af2f915e",
"assets/assets/images/web.png": "f570cde2ba835e52a5bfe81c3504e00b",
"assets/assets/images/web2.png": "66b7cd3f578787202b74a97748a2038a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2bb3e64bb3ce512b777752f186b63aeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "eea9c737bb70b5521e9914ae049f6935",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "9e498d66999b96e89cfd418645ade53c",
"icons/Icon-512.png": "b9096823c6767f7ba1d20589f3ee1711",
"icons/Icon-maskable-192.png": "9e498d66999b96e89cfd418645ade53c",
"icons/Icon-maskable-512.png": "b9096823c6767f7ba1d20589f3ee1711",
"index.html": "c37a2093b423ab57c3bbae6499dde507",
"/": "c37a2093b423ab57c3bbae6499dde507",
"main.dart.js": "57696e96df5744e60c670b445d74c36f",
"manifest.json": "26d8202fba4750bb43d7548cdf73e0fc",
"version.json": "403be1877fa11f408f5f1d2f38a1ec1f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
