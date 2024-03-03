<template>
   <section class="listPage">
    <div class="block_name big_block list_big_block">
        <div class="container">
                <h1 class="page_title">Рюкзак
                    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.25" y="5.12158" width="14.4499" height="17.9643" rx="4.75" stroke="white" stroke-width="2.5"/>
                        <rect x="6.63889" y="1.24454" width="5.67215" height="2.4889" rx="1.24445" stroke="white" stroke-width="2.4889"/>
                        <path d="M1.62778 16.5926C1.62778 16.1621 1.69627 15.8363 1.80426 15.5591C2.24309 14.4328 3.57361 13.8271 4.78237 13.8271H14.6273C15.854 13.8271 17.0064 14.5668 17.2336 15.7723C17.2873 16.057 17.3221 16.3393 17.3221 16.5926" stroke="white" stroke-width="2"/>
                        <path d="M1.62778 16.0396C1.62778 15.6091 1.69627 15.2833 1.80426 15.0061C2.24309 13.8798 3.57361 13.2742 4.78237 13.2742H14.6273C15.854 13.2742 17.0064 14.0139 17.2336 15.2193C17.2873 15.504 17.3221 15.7863 17.3221 16.0396" stroke="white" stroke-width="2"/>
                    </svg>
                </h1>
                <h5 class="page_text">{{fullTravelData.localeTravelDate}} - {{fullTravelData.localeTravelEndDate}}</h5>
                <h3 class="block_title">Самое необходимое:<div class="block_underscore"></div></h3>
                <img class="list_block_img" src="../assets/img/weather_block.png" alt="girl_img">
            </div>
        </div>
        <div class="list_page_main">
            <div class="container">
               <div class="necessary_things">
                    <div class="necessary" 
                        v-for="(item, index) in necessaryThings"
                        @key="index"
                        @click="clickThing(item)" 
                        :class="{necessary_clicked: item.clicked}"
                        >
                        <img :src="require(`../assets/img/${item.icon}`)" alt="item">
                        <h3>{{item.title}}</h3>
                    </div>
                    
               </div>
                <div class="block_name center_block">
                    <h3 class="block_title">Могут пригодиться:</h3>   
                </div>
                <div class="equipments types">
                    <div class="equipment"
                        v-for="(item, index) in equipmentThings"
                        @key="index"
                        @click="clickEquipment(item)" 
                        :class="{equipment_clicked: item.clicked}"
                        >
                        <h3>{{item.title}}</h3>
                    </div>
                
                </div>
                <div class="block_name center_block">
                    <h3 class="block_title">Аксессуары:</h3>   
                </div>
                <div class="equipments">
                    <div class="equipment"
                        v-for="(item, index) in accessories"
                        @key="index"
                        @click="clickEquipment(item)" 
                        :class="{equipment_clicked: item.clicked}"
                        >
                        <h3>{{item.title}}</h3>
                    </div>
                
                </div>
            </div>
        </div>
   </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
   name: "listPage",
    data() {
        return {
            clicked: false,
        }
    },
    computed: {
        ...mapGetters ([
            'fullTravelData',
            "necessaryThings",
            "equipmentThings",
            "accessories"
        ])

    },

    methods:{
        clickThing(item) {
            if(item.clicked == false){
                item.clicked = true
            } else {
                item.clicked = false
            }

            window.localStorage.setItem('necessary', JSON.stringify(this.necessaryThings))
        },
        clickEquipment(item){
            if(item.clicked == false){
                item.clicked = true
            } else {
                item.clicked = false
            }
            window.localStorage.setItem('equipment', JSON.stringify(this.equipmentThings))
        }
    },
  
}
</script>

<style lang="scss" src="../assets/style/styles.scss">
    
</style>