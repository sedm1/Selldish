<template>
  <div>
    <VPreloader></VPreloader>
    <TheHeader></TheHeader>
    <main>
        <VBreadCrumbs>Случайное блюдо</VBreadCrumbs>
        <div class="container">
            <h2 class="section__title">Случайное блюдо для готовки</h2>
            <p class="main__descript">Здесь вы можете выбрать себе одно или же несколько случайных блюд из нашего обширного католога. Вам лишь нужно ввести некоторые значения </p>
            <div class="form">
              <div class="form__item">
                <p class="form__item-title">Выберите сложность блюда</p>
                <VSelectItem 
                @ChangeSelect="ChangeSelect"
                :options="options">
                </VSelectItem>
              </div>
              <button 
              class="form__button"
              @click="FiltredProducts(this.level)"
              >Найти случайное блюдо</button>
            </div>
            <VProductblockItem 
              :Products="FilterProducts"
              v-if="FilterProducts.length > 0"
            ></VProductblockItem>
            <VSliderBlock :Products="this.ProductsItem">Блюда дня</VSliderBlock>
        </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import VBreadCrumbs from '@/components/VBreadCrumbs.vue';
import VPreloader from '@/components/v-preloader.vue';
import VSelectItem from '@/components/v-select-item.vue';
import { mapGetters } from 'vuex';
import VProductblockItem from '@/components/v-productblock-item.vue';
import VSliderBlock from '@/components/v-slider-block.vue';
export default {
    name: "RandomProducts",
    components: { TheHeader, VBreadCrumbs, VPreloader, VSelectItem, VProductblockItem, VSliderBlock },
    data(){
      return{
        level: "",
        timeCoocking: 0,
        sortedProducts: [],
        options: [
          {name: "Все", value: "all"},
          {name: "Легкое", value: "easy"},
          {name: "Сложное", value: "hard"},
        ]
      }
    },
    methods: {
      ChangeSelect(data){
        this.level = data.target.value
      },
      FiltredProducts(level){
        if (this.level){
          this.sortedProducts = []
          if (level === "all"){
            //Если уровень сложности = всем, то выбираем случайный товар
            let idx = Math.floor(Math.random() * this.PRODUCTS.length)
            this.sortedProducts.push(this.PRODUCTS[idx])
          } else {
            //Создаем добавочный массив, что бы при фильтрации потом отобрать случайное блюдо
            let SaveMassiv = []
            this.PRODUCTS.filter(function(item){
              //Фильтруем по уровню сложности
              if (item.CoocingLevel === level){
                SaveMassiv.push(item)
              }
            })
            let idx1 = Math.floor(Math.random() * SaveMassiv.length)
            this.sortedProducts.push(SaveMassiv[idx1])
          }
        } else {
          alert("Сначала выберите сложность")
        }
        //Здесь уже работает с готовым массивом, и создаем  его по-новой, но кладем
        //туда только один элемент
        
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      FilterProducts(){
        if(this.sortedProducts.length > 0){
          return this.sortedProducts
        } else {
          return {}
        }
      },
      ProductsItem: function(){
          return this.PRODUCTS.filter(function (ItemProducts) {
            return ItemProducts.ProductOfDay
          })
      }
    }
    
}
</script>

<style lang="sass" scoped>
.main
  &__descript
    font-size: 21px
    color: $braun
    max-width: 980px
    margin-top: 19px
.form
  margin-top: 40px
  &__item
    position: relative
    max-width: 520px
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0px
    &-input
      width: 100%
      background: $white
      border-radius: 10px
      height: 50px
      padding: 0px 15px
      font-size: 16px
      color: $braun
      border: 1px solid $gray
      &::placeholder
        font-size: 16px
    &-title
      font-size: 13px
      margin-bottom: 3px
      margin-left: 5px
      color: $braun
  &__button
    max-width: 520px
    width: 100%
    border-radius: 10px
    padding: 15px 0px
    text-align: center
    color: $white
    font-weight: 500
    background: $orange
    margin-top: 20px
</style>