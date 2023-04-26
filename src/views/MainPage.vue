<template>
  <div>
    <VPreloader></VPreloader>
    <section class="mainSection">
      <TheHeader></TheHeader>
      <swiper
          :slides-per-view="1"
          :space-between="0"
          :modules="modules"
          :speed="1000"
          :pagination="{ clickable: true }"
          :loop="false"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="main__slider"
          
      >
          <swiper-slide 
          v-for="SliderProductsItem in this.SliderProducts"
          :key="SliderProductsItem.id"
          class="slide"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/products/' + SliderProductsItem.image) + ')' }"
          >
            <div class="bg">
              
              <div class="slide__text">
                <h1 class="slide__title">{{SliderProductsItem.title}}</h1>
                <p class="slide__descript">{{SliderProductsItem.description}}</p>
                <div class="link__block">
                  <router-link :to = "{name: 'ProductPage', params: {id: SliderProductsItem.id}}" class="slide__link">Перейти к рецепту</router-link>
                </div>
                
              </div>
              
            </div>
          </swiper-slide>
      </swiper>
        
        
    </section>
    <ProductsOfDay></ProductsOfDay>
  </div>
</template>

<script>
import {mapGetters } from 'vuex';
//Модули слайдера
import {Swiper, SwiperSlide } from 'swiper/vue'; 
import {Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
//Модули компонентов
import VPreloader from '@/components/v-preloader.vue';
import TheHeader from '@/components/TheHeader.vue';
import ProductsOfDay from '@/components/ProductsOfDay.vue';
export default {
    name: "MainPage",
    computed: {
        ...mapGetters([
          "PRODUCTS"
        ]),
        SliderProducts: function(){
          return this.PRODUCTS.filter(function (productsItem) {
            return productsItem.MainSlider
          })
        }
    },
    components: { VPreloader, TheHeader, Swiper, SwiperSlide, ProductsOfDay },
    setup() {
      return {
        modules: [ Pagination, Autoplay],
        
      };
    }
}
</script>

<style lang="sass" scoped>
.mainSection
  position: relative
  height: 800px
header
  position: absolute
  top: 0
  z-index: 999
  background: none
.main__slider
  height: 100%
  .bg 
    height: 100%
    width: 100%
    background: rgba(0, 0, 0, 0.6)
    +flexa 
    justify-content: center
    position: relative
.slide
  +bg
  text-align: center
  background-repeat: no-repeat !important
  &__title
    color: $yellow
    margin-bottom: 27px
  &__descript
    color: $white
    font-family: 'Lato', sans-serif
    font-weight: 500
    text-align: center
  .link__block
    margin-top: 49px
  &__link
    color: $white
    border: 1px solid $white
    padding: 15px 65px
    background: none
    border-radius: 30px
.swiper-button-next, .swiper-button-prev
  width: 20px
  height: 31px 
  color: $white 
  position: absolute
  top: 50%
  transform: translateY(-50%)
  z-index: 20
  +bg
  cursor: pointer
.swiper-button-next
  right: 60px
  background-image: url("@/assets/img/prev.png")
.swiper-button-prev
  left: 60px
  background-image: url("@/assets/img/prev.png")
  transform: rotate(180deg)
@media screen and (max-width: $smallTabletContainer)
  .mainSection
    height: 600px
</style>