<!-- PWAPrompt.vue -->
<template>
    <div class="install_app_block" v-if="shown"> 
        <h3>Установите приложение для<br>более удобного<br>пользования</h3>
        <div class="install_app_btn" >
            <button @click="installPWA">
                Установить!
            </button>
        
            <button @click="dismissPrompt" class="install_app_btn_decline">
                Нет, спасибо!
            </button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'installApp',
    data: () => ({
      shown: false,
    }),
  
    beforeMount() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        this.installEvent = e
        this.shown = true
      })
    },
  
    methods: {
      dismissPrompt() {
        this.shown = false
      },
  
      installPWA() {
        this.installEvent.prompt()
        this.installEvent.userChoice.then((choice) => {
          this.dismissPrompt() // Hide the prompt once the user's clicked
          if (choice.outcome === 'accepted') {
            // Do something additional if the user chose to install
          } else {
            // Do something additional if the user declined
          }
        })
      },
    }
  }
  </script>