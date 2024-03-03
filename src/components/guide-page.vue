<template >
    <section class="guide_page">
        <div class="block_name big_block guide_big_block">
            <div class="container">
                <h1 class="page_title">Проводник</h1>
                <h5 class="page_text">Ваш персональный гид</h5>
                <h3 class="block_title">Куда можно сходить?<div class="block_underscore"></div></h3>
                <img class="guide_block_img" src="../assets/img/guide_block.gif" alt="man_img">
            </div>
        </div>
        <div class="guide_page_main">
            <div class="container">
                <div class="attractions">
                    <div class="attraction"
                    v-for="(item, index) in guideData" 
                    :key="index"                    
                    >
                        <img :src="require(`../assets${item.icon}`)" alt="attraction_logo">
                        <h3 @click="hrefTo(item.name)">{{ item.name }}</h3>
                        <h5>{{ item.type }}</h5>
                        <p>{{item.location}}</p>
                    </div>
                </div>
                <div class="block_name center_block">
                    <h3 class="block_title">Инфраструктура отдыха</h3>   
                </div>
                <div class="attractions infrastructure">
                    <div class="attraction"
                    v-for="(place, index) in infrastructureData" 
                    :key="index"                    
                    >
                        <img :src="require(`../assets${place.icon}`)" alt="attraction_logo">
                        <h3 @click="goToMaps(place.name)">{{ place.name }}</h3>
                        <h5>{{ place.type }}</h5>
                        <p>{{place.location}}</p>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>


<script>
import {mapGetters} from 'vuex'

export default {
    name: "guidePage",
    data() {
        return {
           href: ""
        }
    },
    methods: {
        hrefTo(itemName){
            let a= document.createElement('a');
            a.target= '_blank';
            
            if(this.fullTravelData.selectedType !== 1 && this.fullTravelData.selectedType !== 3){
                a.href= `https://www.vpoxod.ru/search?q=${itemName}`;
                a.click();
            }else{
                a.href= `https://yandex.ru/maps/?mode=search&text=${itemName}&z=8`; 
                a.click();
            }
        },
        goToMaps(placeName){
            let a= document.createElement('a');
            a.target= '_blank';
            a.href= `https://yandex.ru/maps/?mode=search&text=${placeName}&z=8`; 
            a.click();
        }
    },
    computed: {
        ...mapGetters ([
            "fullTravelData",
            "guideData",
            "infrastructureData"

        ])
    }

    
}
</script>

<style lang="scss" src="../assets/style/styles.scss">
    
</style>