<template>
  <header>
    <transition name="fade" @closeModal="IsLoginWindowOpen = !IsLoginWindowOpen">
        <vLoginPopup v-if="IsLoginWindowOpen"></vLoginPopup>
    </transition>
    <div class="container">
        <div class="left__header">
            <ul class="menu" :class="{'menu-active' : IsMenuOpen}">
            <li class="menu__item">
                <router-link to="/MainPage">Главная</router-link>
            </li>
            <li class="menu__item">
                <router-link to="/Recipes">Рецепты</router-link>
            </li>
            <li class="menu__item">
                <router-link to="/Favourites">Избранное</router-link>
                <div class="round" v-if="this.FAVOURITES.length > 0">{{this.FAVOURITES.length}}</div>
            </li>
            <li class="menu__item">
                <router-link to="/SelectOfDishes">Подбор блюда</router-link>
            </li>
            <li class="menu__item">
                <router-link to="/RandomProducts">Случайное блюдо</router-link>
            </li>
        </ul>
        <svg 
        class="ham7" 
        viewBox="0 0 100 100" 
        width="80" 
        @click="toggleMenu"
        :class="{active : IsMenuOpen}"
        >
            <path class="top" d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013" />
            <path class="middle" d="m 70,50 h -40" />
            <path class="bottom" d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40" />
        </svg>
        </div>
        <div class="right__header">
            <button 
            class="logIn"
            
            @click="IsLoginWindowOpen = !IsLoginWindowOpen"
            >Вход</button>
            
        </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import vLoginPopup from './v-login-popup.vue'
export default {
  components: { vLoginPopup },
    name: "TheHeader",
    data(){
        return {
            IsMenuOpen: false,
            IsLoginWindowOpen: false,
        }
    },
    computed: {
        ...mapGetters([
            'FAVOURITES'
        ])
    },
    methods: {
        toggleMenu(){
            this.IsMenuOpen = !this.IsMenuOpen
        },
    }
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active 
  transition: opacity .5s
.fade-enter, .fade-leave-to 
  opacity: 0
header
    width: 100%
    padding: 20px 0px
    background: $orange
.container
    display: flex
    justify-content: space-between
    align-items: center
.menu
    +flexa 
    justify-content: center
    &__item
        color: $white
        font-size: 16px
        margin-right: 25px
        position: relative
        font-weight: 400
        letter-spacing: 0.02em
    .round
        position: absolute
        width: 20px
        height: 20px
        border-radius: 100%
        background: $yellow
        +flexa 
        justify-content: center
        font-size: 12px
        top: -8px
        right: -10px
.ham7
    display: none
.logIn
    color: $white
    font-size: 16px
    border: 1px solid $white
    border-radius: 15px
    padding: 10px 25px
@media screen and (max-width: $smallTabletContainer)
    header
        padding: 0px
    .ham7
        display: block
    .menu
        position: fixed
        top: 0 
        left: -120%
        transition: .5s
        width: 65%
        height: 100vh
        flex-direction: column
        background: $white
        align-items: flex-start
        justify-content: flex-start
        padding: 30px 40px
        z-index: 100
        &__item
            color: $braun
            margin-bottom: 20px
            font-size: 25px
            font-weight: 500
        &-active
            left: 0px
        .round
            color: $white
            top: -5px
    .container
        justify-content: flex-end
@media screen and (max-width: $mobileContainer)
    .menu
        max-width: 80%
        width: 100%
        padding: 30px
        &__item
            font-size: 5vw
</style>