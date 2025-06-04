importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { precacheAndRoute } = workbox.precaching;
const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;

// Предварительное кэширование всех ресурсов, определенных в манифесте
precacheAndRoute(self.__WB_MANIFEST);

// Обработка push-уведомлений
self.addEventListener('push', function (event) {
	let note = event.data.json();

	event.waitUntil(
		self.registration.showNotification(note.title, {
			body: note.body.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, ''),
			// icon: '/logo.png',
			data: {
				link: 'google.com',
			},
		})
	);
});

// Стратегия кэширования для статических ресурсов
registerRoute(
	({ request }) =>
		request.destination === 'style' ||
		request.destination === 'script' ||
		request.destination === 'image',
	new StaleWhileRevalidate({
		cacheName: 'static-resources',
	})
);
