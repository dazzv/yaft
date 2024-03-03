import { createStore } from 'vuex'

let travelData = window.localStorage.getItem('travelData')

let weatherData = window.localStorage.getItem('weatherData')

let necessary_things = window.localStorage.getItem('necessary');
let equipment_things = window.localStorage.getItem('equipment');
let accessories = window.localStorage.getItem('accessories');


let guideData = window.localStorage.getItem('guideData')

let infrastructureData = window.localStorage.getItem('infrastructureData')

export default createStore({
  state: {
    fullTravelData: travelData ? JSON.parse(travelData) : {},
    isAllGood: false,

    fullWeatherData: weatherData ? JSON.parse(weatherData) : [],

    necessary_things: necessary_things ? JSON.parse(necessary_things) : [],
    equipment_things: equipment_things ? JSON.parse(equipment_things) : [],
    accessories : accessories ? JSON.parse(accessories) : [],

    guideData: guideData ? JSON.parse(guideData) : [],
    infrastructureData: infrastructureData ? JSON.parse(infrastructureData) : [],
  },

  actions: {
    async newTravelData ({commit}, travelData){
      commit("updateTravelData", travelData) 
    },

    async changeAllGoodStatus ({commit}, status) {
      commit("updateAllGoodStatus", status)
    },

    async newWeatherData ({commit}, weatherData) {
      commit("updateWeatherData", weatherData) 
    },

    async newListData({commit}, type){    
      fetch('/listData.json')
      .then(response => response.json())
      .then(data => { 
        commit("updateListData", data[0])
      });
// accessories.json
      fetch('/listData.json')
      .then(response => response.json())
      .then(data => { 
        commit("updateList2Data", data[type])
      });
      
      fetch('/accessories.json')
      .then(response => response.json())
      .then(data => { 
        commit("updateList3Data", data)
      });



    },

    async newGuideData({commit}, dataForGuide){
        // сначала получаем данные по типу туризма
      fetch('/guideData.json')
        .then(response => response.json())
        .then(data => {
          const newData = data[dataForGuide.type-1] 
          const guideData = newData.filter(item => item.location === dataForGuide.city);
          commit("updateGuideData", guideData)
        });
        // получаем данные по инфраструктуре выбранного города
        fetch('/infrastructure.json')
        .then(response => response.json())
        .then(data => {
          const newData = data.filter(item => item.city === dataForGuide.city)
          const infrastructureData = newData[0].infrastructure       
          commit("updateInfrastructureData", infrastructureData)
        });
      }
    


  },

  mutations: {
    updateTravelData(state, travelData){
      state.fullTravelData = travelData
      window.localStorage.setItem('travelData', JSON.stringify(travelData))
    },

    updateAllGoodStatus(state, status){
      state.isAllGood = status
    },

    updateWeatherData(state, weatherData){
      state.fullWeatherData = weatherData;
      window.localStorage.setItem('weatherData', JSON.stringify(weatherData))
    },

    updateListData(state, data){
      state.necessary_things = data;
      window.localStorage.setItem('necessary', JSON.stringify(data))
    },
    updateList2Data(state, data){
      state.equipment_things = data;
      window.localStorage.setItem('equipment', JSON.stringify(data))
    },
    updateList3Data(state, data){
      state.accessories = data;
      window.localStorage.setItem('accessories', JSON.stringify(data))
    },

    updateGuideData(state, guideData){
      state.guideData = guideData
      window.localStorage.setItem('guideData', JSON.stringify(guideData))
    },

    updateInfrastructureData(state, infrastructureData){
      state.infrastructureData = infrastructureData
      window.localStorage.setItem('infrastructureData', JSON.stringify(infrastructureData))
    }


  },

  getters: {
    fullTravelData(state){
      return state.fullTravelData
    },
    isAllGood(state){
      return state.isAllGood
    },

    fullWeatherData(state) {
      return state.fullWeatherData
    },

    necessaryThings(state){
      return state.necessary_things
    },
    equipmentThings(state){
      return state.equipment_things
    },
    accessories(state){
      return state.accessories
    },

    guideData(state){
      return state.guideData
    },

    infrastructureData(state){
      return state.infrastructureData
    }

  },

})
