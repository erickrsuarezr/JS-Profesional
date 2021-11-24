const VERSION = "v1"


self.addEventListener('install', event =>{
    event.waitUntil(precache())
})

self.addEventListener('fetch', event =>{
    const request = event.request;
    //peticiones get
    if(request.method != "GET"){
        return;
    }

    //Buscar en el cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache de la aplicacion
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/Autoplay.js',  
        '/assets/plugins/Autopause.js',
        '/assets/index.css',
        '/assets/video-wonejo.mp4',  
    ])
}

async function cachedResponse (request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}