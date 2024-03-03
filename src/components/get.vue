<template>
    <!-- <router-view/> -->
    <div class="weather">
      <input type="text" v-model="city"> <h3 v-on:click="getWeather()">ok</h3>
      <div class="item">
        <h3>{{generalInfo.list[0].dt_txt.slice(0,10)}}</h3>
        <h1>{{generalInfo.city.name}}</h1>
        
        <h3>{{Math.round(generalInfo.list[0].main.temp)}}&deg;</h3>
        <img :src="`https://openweathermap.org/img/wn/${generalInfo.list[0].weather[0].icon}.png`" alt="logo">
        <h3>{{generalInfo.list[0].weather[0].description}}</h3>
      </div>
      
    </div>
</template>
  
<script>
  import axios from 'axios'
  
  export default {
    name: 'Weather',
    data() {
      return {
        generalInfo: [],
        errors: [],
        city: "",
        // imageWay: `https://openweathermap.org/img/wn/'${weather.list[0].weather[0].icon}'.png'`
      }
    },
    methods: {
      getWeather() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&lang=ru&appid=aa5001c166de783d663ea84db1abfa1a&units=metric`)
      // axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?q=London&exclude=daily&appid=aa5001c166de783d663ea84db1abfa1a")
      .then(responce => {
        this.generalInfo = responce.data
      })
      .catch( e => {
        this.errors.push(e)
      })
      }
    },
    // created() {
    //   // axios.get('api.openweathermap.org/data/2.5/forecast/daily?lat=53.20007&lon=50.15&lang=ru&cnt=16&appid=aa5001c166de783d663ea84db1abfa1a&units=metric')
    //   axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Самара&lang=ru&appid=aa5001c166de783d663ea84db1abfa1a&units=metric')
    //   .then(responce => {
    //     this.generalInfo = responce.data
    //   })
    //   .catch( e => {
    //     this.errors.push(e)
    //   })
    // },
  
  }
  </script>
  
  <style>
  
  </style>
  