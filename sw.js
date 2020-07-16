importScripts('https:storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox)
    console.log(`Workbox berhasil dimuat`);
else
    console.log(`Workbox gagal dimuat`);


workbox.precaching.precacheAndRoute([
    { url: '/', revision: '1' },
    { url: '/index.html', revision: '1' },
    { url: '/nav.html', revision: '1' },
    { url: '/team.html', revision: '1' },
    { url: '/asset/premierLeague.jpg', revision: '1' },
    { url: '/pages/home.html', revision: '1' },
    { url: '/pages/saved.html', revision: '1' },
    { url: '/css/materialize.min.css', revision: '1' },
    { url: '/css/style.css', revision: '1' },
    { url: '/js/materialize.min.js', revision: '1' },
    { url: '/js/nav.js', revision: '1' },
    { url: '/js/action.js', revision: '1' },
    { url: '/js/data.js', revision: '1' },
    { url: '/js/database.js', revision: '1' },
    { url: '/js/idb.js', revision: '1' },
    { url: '/main.js', revision: '1' },
    { url: '/rexzy.png', revision: '1' },
    { url: '/rexzy512.png', revision: '1' },
    { url: '/manifest.json', revision: '1' }
],
    {
        ignoreUrlParametersMatching: [/.*/]
    });

workbox.routing.registerRoute(
    /^https:\/\/api\.football-data\.org\/v2/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'football'
    })
);
workbox.routing.registerRoute(
    /^https:\/\/upload\.wikimedia\.org\/wikipedia/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'logo'
    })
);

self.addEventListener('push', function (event) {
    let body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    const options = {
        body: body,
        icon: 'rexzy.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

