'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "4d31645a180e8790a703db0e141a34fb",
"404.template.html": "cd5deb4d7f27933642404bd2ede9b61e",
"assets/AssetManifest.bin": "1674bfcd7d290fe08508e0c936ef16b4",
"assets/AssetManifest.bin.json": "00a4db6159808d943099b711111b7c10",
"assets/AssetManifest.json": "ea4ea409d3bcca5257bf13ad23a85c2b",
"assets/assets/font/Avenir.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/font/Inter.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/font/VNM-Sans-Std.otf": "e2855e21f3d74a54a2f9e904fb5dd74a",
"assets/assets/images/chrome_note1.png": "673b013ff8b0307d6079e44a4b73f343",
"assets/assets/images/chrome_note2.png": "8c8d4c4ac952c9c855ea3d6487e5bd58",
"assets/assets/images/circle.png": "ea5a26c5a0d1931d2a43f2b8fc372289",
"assets/assets/images/edge_note1.png": "8e1a65f4aaf2edb64e1a862bb04d3509",
"assets/assets/images/edge_note2.png": "cc523eff2ca2de3c9c32d8c05f89b8c6",
"assets/assets/images/image1.png": "2a60db121443f12c5b896e91e3b0e874",
"assets/assets/images/key_visual.png": "94e89d8fbf895282e3453a2195588e59",
"assets/assets/images/key_visual_filled.png": "d934b14443d484850456e25fbd5b56a3",
"assets/assets/images/login_image.jpg": "c66fbe35d84837c8e44a27bc7d3bcd33",
"assets/assets/images/login_image.png": "4c76a8603b2b7333f869f727e94c95fe",
"assets/assets/images/logo.png": "a479e5a1c39b0a0bec8a13113dd09015",
"assets/assets/images/logo_name.png": "a479e5a1c39b0a0bec8a13113dd09015",
"assets/assets/images/name.png": "789d3192f5434bf1636acb38327af5f7",
"assets/assets/images/question.png": "578ab1e9ba8485756befb953835b18e3",
"assets/assets/images/sharescreen_popup.png": "f0ddb25b43da96757acf04c8db9d09fe",
"assets/assets/images/take_test.png": "97972a1b919e504203f1305d25a73958",
"assets/assets/images/title.png": "1ed8e8f4e4c82df098a09d48b3512878",
"assets/FontManifest.json": "0684c3e82e8e55fdcc8d421500b85e6a",
"assets/fonts/MaterialIcons-Regular.otf": "2c79897fab7962d7d59caf1daef79842",
"assets/NOTICES": "081bc5dfa41e353ef996f98c2848b61c",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"config.json": "a7e6b7d03102adb40d6c589b8eabd253",
"favicon.png": "a479e5a1c39b0a0bec8a13113dd09015",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "efa352ddd985e993c86d1c13baec2598",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "066406f6f0de595f8b3cd6f46ae4a077",
"/": "066406f6f0de595f8b3cd6f46ae4a077",
"index.template.html": "0879cc0e2b8d3d6758c8b017f87d1d30",
"main.dart.js": "e10684361f62008852cf9b1e35e5ed81",
"manifest.json": "ebbe008cb66a340d54d44a5cefcd4cf0",
"manifest.template.json": "b405775b7fcf9dc7f3544bbbb1ce713e",
"version.json": "36371f647c583d9f9a24ca587998f2be"};
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
