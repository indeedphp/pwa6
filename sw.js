const staticCacheName = 's-app-v1'

const assetUrls = [
  'index.html',
  'bootstrap.min.css'
]

self.addEventListener('install', async event => {
 const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)

})

self.addEventListener('activate', event => {
console.log('Service worker acte')
})