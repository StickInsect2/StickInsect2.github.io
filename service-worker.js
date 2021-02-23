/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4ec850a07aefc3adbb209dbc2c3cc12d"
  },
  {
    "url": "assets/css/0.styles.39f6aafe.css",
    "revision": "023385b0920da3a2376a28de9217a6aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.32059001.js",
    "revision": "737aa960bb7331ff29b26123ef09f03e"
  },
  {
    "url": "assets/js/11.7984c98d.js",
    "revision": "e394a67652741fa0f325db812093cd75"
  },
  {
    "url": "assets/js/12.9ed222fb.js",
    "revision": "a3e9eb9159e222479c002dbf839a4a98"
  },
  {
    "url": "assets/js/13.9202593c.js",
    "revision": "8a138542ef8c890f6f97dd2cc824d0e0"
  },
  {
    "url": "assets/js/14.22936df2.js",
    "revision": "b3e7ac4915cf33fe17d42b5c3ee05345"
  },
  {
    "url": "assets/js/15.1c292487.js",
    "revision": "965e42ddc301da2935c6bced9d100291"
  },
  {
    "url": "assets/js/16.b585eafa.js",
    "revision": "49c5bf7aceca98f740d76ef1c5056012"
  },
  {
    "url": "assets/js/17.b97ac1e0.js",
    "revision": "add0aad718b75dac57f2a3ffc3e4cf91"
  },
  {
    "url": "assets/js/18.e7974464.js",
    "revision": "2574f226551b4eccccc3373d199a2dcd"
  },
  {
    "url": "assets/js/19.5e2912d2.js",
    "revision": "8d836237fb10eb1cb2d02dfe05a54198"
  },
  {
    "url": "assets/js/2.acab570a.js",
    "revision": "b4ed2142fcf04e6c6fbedf8a9cdfe1f8"
  },
  {
    "url": "assets/js/3.6aadd557.js",
    "revision": "0356b5d61eda2c010ee83732135e42f5"
  },
  {
    "url": "assets/js/4.0e3bf148.js",
    "revision": "e63efbcf47440b487e089d9194514c7f"
  },
  {
    "url": "assets/js/5.3355cfb1.js",
    "revision": "45d03466bb43b0179b9289997bda656a"
  },
  {
    "url": "assets/js/6.d0e6a115.js",
    "revision": "0f9396f3d1c255123b3828e89eb37f9e"
  },
  {
    "url": "assets/js/7.aacc527e.js",
    "revision": "b144902a9b610b9167b011f7a86b8034"
  },
  {
    "url": "assets/js/8.2c019a91.js",
    "revision": "d060c65574a43b68953d2b047ecc9b53"
  },
  {
    "url": "assets/js/9.4298c5b0.js",
    "revision": "665837c83c1627e70f259b02b154c0a8"
  },
  {
    "url": "assets/js/app.f89a45ef.js",
    "revision": "d995ba333a08a2425ab465471cbe32ab"
  },
  {
    "url": "automation/apiAuto.html",
    "revision": "acd8db70d3637d9c68e7738dfac3acae"
  },
  {
    "url": "automation/index.html",
    "revision": "b99a55033f94661e3af8ac8d2b6ffc20"
  },
  {
    "url": "automation/performanceTest.html",
    "revision": "2056812cad7c3525f440305d51659f26"
  },
  {
    "url": "automation/securityTest.html",
    "revision": "38bcc27da274e13be2a662f00a117358"
  },
  {
    "url": "automation/webAuto.html",
    "revision": "f54c7ddca27959cf4bf41ac14080d74e"
  },
  {
    "url": "guide.html",
    "revision": "8195e9a5c7ad0540b9f6a78ae55a2bac"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/home.jpeg",
    "revision": "229d61c0c33b27cbf2c92ea1c48a3fa0"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/py1.png",
    "revision": "12ec0c4d31a24b9a5dd8bbc778596164"
  },
  {
    "url": "index.html",
    "revision": "d92274c300d88b273bd1851e91cc7dcf"
  },
  {
    "url": "others/book.html",
    "revision": "f9c08cdd2bdc8edf5bfae5e728cb23eb"
  },
  {
    "url": "others/index.html",
    "revision": "c56574cfdc53dbabb435400f7262f397"
  },
  {
    "url": "python/advance.html",
    "revision": "2e59676d881c02ee16b009c5699c761e"
  },
  {
    "url": "python/basic.html",
    "revision": "867fa02e113ad91d3a2d2d6df7a68791"
  },
  {
    "url": "python/book.html",
    "revision": "b863c29853c4feb0c0d01454d987383a"
  },
  {
    "url": "python/index.html",
    "revision": "4c5fb3519e7e1530d34f76781be059d0"
  },
  {
    "url": "test/book.html",
    "revision": "a32b36c705483e50ef12c3ee999dffc2"
  },
  {
    "url": "test/finance.html",
    "revision": "57b59c7d03f1505716ba52efeaf4f798"
  },
  {
    "url": "test/index.html",
    "revision": "75879ee58d00b4ce243187312689690e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
