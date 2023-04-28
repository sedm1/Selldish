<template>
    <div>
        <VPreloader></VPreloader>
        <TheHeader></TheHeader>
        <VBreadCrumbs
        :BreadCrumdsLinks="BreadCrumdsLinks"
        >{{Product.title}}</VBreadCrumbs>
        <div class="product">
            <div class="container">
                <div class="product__img"><img :src="'../' + require('@/assets/img/products/' + Product.image)" alt=""></div>
                <div class="product__info">
                    <h3 class="product__title">{{Product.title}}</h3>
                    <p class="product__descript">{{Product.moreDescription}}</p>
                    <div class="product__cooking">
                        <div class="product__cooking-item">
                            <div class="item__img"><img src="@/assets/img/porz.png" alt="porz"></div>
                            <div class="item__title">Порций: <span>{{Product.quantityOfServings}}</span></div>
                        </div>
                        <div class="product__cooking-item">
                            <div class="item__img"><img src="@/assets/img/clock.png" alt="porz"></div>
                            <div class="item__title">Готовка: <span>{{Product.timeForCookong}} мин.</span></div>
                        </div>
                        <div class="product__cooking-item">
                            <div class="item__img"><img src="@/assets/img/sloz.png" alt="porz"></div>
                            <div class="item__title">Сложность: <span>{{GetCookongLevel()}}</span></div>
                        </div>
                    </div>
                    <div class="product__ingredients">
                        <h2 class="product__ingredients-title">Для приготовления понадобится: </h2>
                        <div class="product__ingredients-table">
                            <div class="table-item" 
                            v-for="(ProductIngredientsItem, index) in Product.ingredients"
                            :key="index"
                            >
                                <div class="item-title">{{ProductIngredientsItem.title}}</div>
                                <div class="item-quantity">{{ProductIngredientsItem.quantity}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductsSteps :ProductsSteps="this.Product.steps"></ProductsSteps>
    </div>
</template>

<script>
import VPreloader from '@/components/v-preloader.vue'
import TheHeader from '@/components/TheHeader.vue';
import VBreadCrumbs from '../components/VBreadCrumbs.vue';
import ProductsSteps from '@/components/products-steps.vue';
export default {
    name: "ProductPage",
    data(){
        return {
            BreadCrumdsLinks: [
                {
                    id: "1",
                    title: "Рецепты",
                    links: "/MainPage",
                }
            ]
        }
    },
    props: ["id"],
    computed: {
        Product() {
            const id = this.id;
            return this.$store.getters.PRODUCT_BY_ID(id);
        }
    },
    methods: {
        GetCookongLevel(){
            let level = this.Product.CoocingLevel
            switch(level){
                case 'hard': return "сложная"
                case 'easy': return "легкая"
                case 'all': return "средняя"
            }
        }
    },
    components: { VPreloader, TheHeader, VBreadCrumbs, ProductsSteps }
}
</script>

<style lang="sass" scoped>
.product
    .container
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        align-items: flex-start
    &__img
        max-width: 578px
        width: 100%
        background: $white
        filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.15))
        border-radius: 20px
        padding: 10px
        img
            border-radius: 20px
            height: 100%
    &__info
        max-width: 700px
        width: 100%
    &__title
        margin-bottom: 16px
        font-size: 43px
        font-weight: 700
        color: $braun
    &__descript
        color: $braun
        font-size: 16px
        font-weight: 400
    &__cooking
        +flexa
        margin-top: 20px
        &-item
            +flexa 
            margin-right: 20px
            &:last-child
                margin-right: 0px
            span
                color: $orange
        .item__img
            width: 30px
            margin-right: 10px
            font-weight: 500
        .item__title
            font-size: 16px
    &__ingredients
        margin-top: 27px
        &-title
            color: $braun
            font-weight: 700
            font-size: 30px
        &-table 
            margin-top: 22px
    .table-item
        +flexa 
        justify-content: space-between
        padding: 9px 15px
        background: #E6E6E6
        &:nth-child(2n)
            background: #F0F0F0
        &:first-child
            border-radius: 10px 10px 0px 0px
        &:last-child
            border-radius: 0px 0px 10px 10px
@media screen and (max-width: $mainContainer)
    .product__img
        margin-bottom: 20px
@media screen and (max-width: $mobileContainer)
    .product__title
        font-size: 9vw 
    .product__ingredients-title
        font-size: 5.5vw
    .product__cooking
        flex-direction: column
        align-items: flex-start
        &-item
            margin-right: 0px
            margin-bottom: 15px
            &:last-child
                margin-bottom: 0px
            
</style>