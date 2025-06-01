/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

self.addEventListener('push', function(event) {
  let note = event.data.json();

  // let note = {
  //   "title": "Обновлено 54",
  //   "body": "Изменено поле <strong>Состояние недвижимости</strong><br>Старое значение: Без отделки, Новое значение: Отделка от застройщика<br>",
  //   "data":
  //     {
  //       "id": "6deac8c4-315e-4df0-9c5a-52259b155fc2",
  //       "link": "/deals/1",
  //       "date": "2025-04-11T08:07:31.844136Z"
  //     }
  // };

  event.waitUntil(
    self.registration.showNotification(note.title, {
      body: note.body.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, ""),
      icon: '/logo.png',
      tag: note.data.link || 'default', // Группировка(заменяет старое уведомление) по объекту. Т.е в рамках одной сделки будет только одно уведомление с последними изменениями
      renotify: true, //  вызывает звук или вибрацию
      data: {
        link: note.data.link,
      },
    })
  );
});