import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// удаляю старый кеш, чтобы приложение работало корректно и не использовало старые данные
// во время разработки я скидывал ссылку нескольким людям для тестирования, поэтому чтобы им при установки новой версии не пришлось удалить данные сайте вручную, делаю следющее:
if (!localStorage.getItem('isFirstTimeUse')) {
    // Очистка кеша
    if ('caches' in window) {
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          return caches.delete(key);
        }));
      });
    }
    
    // Очистка localstorage
    localStorage.clear();
    
    // Установка флага
    localStorage.setItem('isFirstTimeUse', true);
}

createApp(App).use(store).use(router).mount('#app')
