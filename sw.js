const CACHE_NAME = 'dpi-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles/main.css',
    '/js/header.js',
    '/js/btn_to_top.js',
    '/Frame 25.png',
    '/logonew.png'
];

// Установка сервис-воркера и кэширование основных ресурсов
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Стратегия кэширования: сначала кэш, потом сеть
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Возвращаем кэшированный ответ, если он есть
                if (response) {
                    return response;
                }

                // Если ответа нет в кэше, делаем запрос к сети
                return fetch(event.request).then(
                    response => {
                        // Проверяем валидность ответа
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Клонируем ответ, так как он может быть использован только один раз
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
}); 