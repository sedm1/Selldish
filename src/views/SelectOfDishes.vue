<template>
  <div>
    <VPreloader></VPreloader>
    <TheHeader></TheHeader>
    <main>
      <VBreadCrumbs>Подбор блюда</VBreadCrumbs>
      <div class="container">
        <h2 class="section__title">Подбор блюда</h2>
        <p class="section__descript">Выберите один параметр из вариантов в каждом блоке и получите блюда, подходящие вам </p>
        <div class="row">
          <div class="filter">
            <div class="col-filters">
              <h3 class="filters-title">Тип блюда</h3>
              <div v-for="(cat,index) in TypeOfproducts" :key="index" class="filters-item">
                <input type="checkbox" :id="cat" :value="cat" v-model="categories1">
                <label :for="cat">{{TypeOfproductsR[index]}}</label>
              </div>
            </div>
            <div class="col-filters">
              <h3 class="filters-title">Количество персон</h3>
              <div v-for="(cat1,index) in quantityOfServings" :key="index" class="filters-item">
                <input type="checkbox" :id="cat1" :value="cat1" v-model="categories2">
                <label :for="cat1">{{cat1}}</label>
              </div>
            </div>
            <div class="col-filters">
              <h3 class="filters-title">Уровень сложности</h3>
              <div v-for="(cat3,index) in CoocingLevel" :key="index" class="filters-item">
                <input type="checkbox" :id="cat3" :value="cat3" v-model="categories4">
                <label :for="cat3">{{CoocingLevelR[index]}}</label>
              </div>
            </div>
          </div>
          <div class="col-dishes">
            <v-productblock-item 
            :Products="selectedItems"
            v-if="selectedItems.length > 0"
            ></v-productblock-item>
            <!--Подумать, может все же сделать, что бы показывались все-->
            <h3 class="error__title" v-else>К сожалению по вашему запросу не было ничего найдено</h3>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import VPreloader from '@/components/v-preloader.vue'
import VBreadCrumbs from '@/components/VBreadCrumbs.vue';
import { mapGetters } from 'vuex';
import VProductblockItem from '@/components/v-productblock-item.vue';
export default {
  components: { TheHeader, VPreloader, VBreadCrumbs, VProductblockItem },
    name: "SelectOfDishes",
    data(){
      return{
        TypeOfproducts: ['lunch', 'dinner', 'breakfast'],
        TypeOfproductsR: ['Завтрак', 'Обед', 'Ужин'],
        quantityOfServings: [1,2,3,4,5],
        CoocingLevel: ['easy', 'medium', 'hard'],
        CoocingLevelR: ['легкий', 'средний', 'тяжелый'],
        categories1: [],
        categories2: [],
        categories4: [],
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      selectedItems: function () {
        return this.PRODUCTS
          .filter(item => {
            return this.categories1.includes(item.TypeOfproducts ) && 
            this.categories4.includes(item.CoocingLevel) &&
            this.categories2.includes(item.quantityOfServings)
          })
      },
    },
}
</script>

<style lang="sass" scoped>
.row
  display: flex
  justify-content: space-between
  margin-top: 40px
.col-dishes
  max-width: 800px
  width: 100%
.col-filters
  margin-bottom: 15px
.product__block
  grid-template-columns: repeat(2, 1fr)
.section__descript
  font-size: 21px
  color: $braun
  max-width: 700px
  margin-top: 20px
.filters-title
  margin-bottom: 5px
  font-weight: 700
  color: $braun
.filters-item
  +flexa
  margin-bottom: 5px
  padding-left: 5px
  label
    margin-left: 10px
.error__title
  font-size: 30px
  color: $braun
@media screen and (max-width: $tabletContainer)
  .row
    flex-direction: column
    .filter
      display: flex
      justify-content: space-between
    .col-filters
      max-width: 33.33%
      width: 100%
@media screen and (max-width: $smallTabletContainer)
  .product__block
    grid-template-columns: repeat(1, 1fr)
  .row 
    .filter
      flex-wrap: wrap
    .col-filters
      max-width: 50%
</style>