<script setup>
import { useStore } from 'vuex'
import {computed, onMounted, ref} from 'vue'

const store = useStore()
const fullTravelData = computed(() => store.getters.fullTravelData)

const pulse = ref(0)
const bedTime = ref(0)
const temperature = ref(0)
const oxygenLevel = ref(0)
const systolicPressure = ref(0)
const diastolicPressure = ref(0)
const noiseLevel = ref(0)

onMounted(() => {
  getPulse(70, 80, 3600, pulse)
  getTemperature(36.1, 36.8, 10000, temperature)
  getOxygenLevel(97, 100, 15000, oxygenLevel)
  getPressure(110, 120, 15000, systolicPressure, 60, 80, diastolicPressure)
  getNoiseLevel(47, 52, 10000, noiseLevel)
})

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getPulse = (min, max, intervalMs, object) => {
  object.value = '...'
  setInterval(() => {
    object.value = getRandomValue(min, max)
  }, intervalMs)
}

const getTemperature = (min, max, intervalMs, object) => {
  object.value = '...'
  setInterval(() => {
    object.value = getRandomValue(min, max)
  }, intervalMs)
}

const getOxygenLevel = (min, max, intervalMs, object) => {
  object.value = '...'
  setInterval(() => {
    object.value = getRandomValue(min, max)
  }, intervalMs)
}

const getPressure = (min, max, intervalMs, object1, min2, max2, object2) => {
  object1.value = '...'
  object2.value = '...'

  setInterval(() => {
    object1.value = getRandomValue(min, max)
    object2.value = getRandomValue(min2, max2)
  }, intervalMs)
}

const getNoiseLevel = (min, max, intervalMs, object) => {
  object.value = '...'
  setInterval(() => {
    object.value = getRandomValue(min, max)
  }, intervalMs)
}

</script>


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

              <div class="blocks " style="margin-bottom:71px">
                <div class="block">
                  <div class="block-text">
                    <p>Пульс</p>
                    <p class="block-value">{{ pulse }} <span class="block-value-about">уд/мин</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="block-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <div class="block">
                  <div class="block-text">
                    <p>Сон</p>
                    <p class="block-value">{{ bedTime }} <span class="block-value-about">час/мин</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>

                </div>
                <div class="block">
                  <div class="block-text">
                    <p>Температура</p>
                    <p class="block-value">{{temperature}}<span class="block-value-about"> &deg;С</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25a2.25 2.25 0 00-2.25 2.25v9a4.5 4.5 0 103 0v-9A2.25 2.25 0 0012 2.25z" />
                  </svg>
                </div>
                <div class="block">
                  <div class="block-text">
                    <p>Уровень кислорода в крови</p>
                    <p class="block-value">{{ oxygenLevel }}<span class="block-value-about"> %</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c-2.5 3.5-6 8-6 11a6 6 0 0012 0c0-3-3.5-7.5-6-11z" />
                    <text x="9.5" y="16" font-family="Arial, sans-serif" font-weight="300" font-size="6" fill="currentColor" stroke-width="0.5" >O</text>
                    <text x="14" y="17" font-family="Arial, sans-serif" font-weight="300" font-size="4" fill="currentColor" stroke-width="0.5">2</text>
                  </svg>
                </div>
                <div class="block">
                  <div class="block-text">
                    <p>Артериальное давление</p>
                    <p class="block-value">{{ systolicPressure }}/{{ diastolicPressure }}<span class="block-value-about"> мм рт. ст</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="block-svg">
                    <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 12L16 8" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  </svg>

                </div>
                <div class="block">
                  <div class="block-text">
                    <p>Уровень шума</p>
                    <p class="block-value">{{ noiseLevel }}<span class="block-value-about"> децибел</span></p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="block-svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 9v6h4l5 5V4L9 9H5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.5 8.5a3.5 3.5 0 010 7" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.5 6.5a6 6 0 010 11" />
                  </svg>
                </div>

              </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" src="../assets/style/styles.scss"></style>