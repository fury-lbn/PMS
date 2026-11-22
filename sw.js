/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "6ebc772aeefeb9d373893b4537b8dc2c"
  }, {
    "url": "pwa-512x512.png",
    "revision": "e2f801087993c428d9fd2924a13a530a"
  }, {
    "url": "pwa-192x192.png",
    "revision": "cf05119c8762e707df04fc319fef8ca8"
  }, {
    "url": "index.html",
    "revision": "45c557b5c2794be7aa54295555070598"
  }, {
    "url": "icon.svg",
    "revision": "8f80596667446c1d2d4e8f208007d8e5"
  }, {
    "url": "config.example.js",
    "revision": "156ae6dde44e50ff1a01281dca002f9b"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "f103aca615157f2584dcdffcda4e2f6a"
  }, {
    "url": "assets/index-Dcp0tVz2.css",
    "revision": null
  }, {
    "url": "assets/index-CZSUaHpK.js",
    "revision": null
  }, {
    "url": "assets/aistudio/Fortask_60a843a1.html",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "f103aca615157f2584dcdffcda4e2f6a"
  }, {
    "url": "icon.svg",
    "revision": "8f80596667446c1d2d4e8f208007d8e5"
  }, {
    "url": "pwa-192x192.png",
    "revision": "cf05119c8762e707df04fc319fef8ca8"
  }, {
    "url": "pwa-512x512.png",
    "revision": "e2f801087993c428d9fd2924a13a530a"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "6ebc772aeefeb9d373893b4537b8dc2c"
  }, {
    "url": "manifest.webmanifest",
    "revision": "7c9cac8ad32ce309e23721a6b2adb5ba"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
