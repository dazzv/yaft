<template >
    <section class="profile_page">
        <div class="block_name big_block profile_big_block">
            <div class="container">
                <h1 class="page_title">Мой профиль
                </h1>
                <h5 class="page_text">+7 996 624 00 00</h5>
                <!-- <div class="sign_up">
                    <img src="../assets/img/user.svg" alt="user-logo" class="sign_up_logo">
                    <h3 class="sign_up_text">Войти</h3>
                </div> -->
                <h3 class="block_title">История поездок: <div class="block_underscore"></div></h3>
                
            </div>
        </div>
        <div class="weather_page_main">
            <div class="container">

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
        ])

    }
    
}
</script>

<style lang="scss" src="../assets/style/styles.scss">
    
</style>