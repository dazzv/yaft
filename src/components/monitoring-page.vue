<template >
    <section class="monitoring_page">
        <div class="block_name big_block profile_big_block">
            <div class="container">
                <h1 class="page_title">Здоровье
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </h1>
                <p class="page_text">В реальном времени</p>
                <!-- <div class="sign_up">
                    <img src="../assets/img/user.svg" alt="user-logo" class="sign_up_logo">
                    <h3 class="sign_up_text">Войти</h3>
                </div> -->
                <img class="health_block_img" src="../assets/img/health.gif" alt="health">
            </div>
        </div>
        <div class="monitoring_page_main ">
            <div class="container">
              <div class="selected_days">
                <div
                    v-for="(day, index) in fullTravelData.days"
                    :key="index"
                    class="day"
                    :class="{'selected_day': index===0}"
                >
                  <p class="date">{{ day.split(' ')[0] }}</p>
                  <p class="month">{{ day.split(' ')[1] }}</p>
                </div>
              </div>
              <p style="text-align: center; margin: 10px 0;">Мониторинг</p>

              <div class="blocks">
                <div class="block">Пульс</div>
                <div class="block">Сон</div>
                <div class="block">Давление</div>
                <div class="block">Температура</div>
              </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "profilePage",
    data() {
        return {
           
        }
    },

    computed: {
        ...mapGetters ([
            'fullTravelData',
            'fullWeatherData'
        ])

    },

}
</script>

<style lang="scss" src="../assets/style/styles.scss"></style>