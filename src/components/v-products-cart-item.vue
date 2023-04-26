<template>
  <div class="products__cart">
    <button
    @click="addToCarts"
    class="products__cart-favorite">
        <img v-if="!IsProductExist" src="@/assets/img/sterNoLiked.svg" alt="starNoLiked">
        <img v-else src="@/assets/img/StarLiked.svg" alt="starLiked">
    </button>
    <div class="products__cart-image"><img :src="require('@/assets/img/products/' + Productsitem.image)" alt=""></div>
    <div class="products__cart-text">
        <div class="text_up">
            <h3 class="products__cart-title">{{Productsitem.title}}</h3>
            <p class="products__cart-descript">{{Productsitem.description}}</p>
        </div>
        <div class="link__block">
            <router-link :to = "{name: 'ProductPage', params: {id: Productsitem.id}}" class="products__cart-link">Приступить к готовке</router-link>
        </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "ProductsCart",
    data(){
        return {
            IsProductExist: false,
        }
    },
    computed: {
        ...mapGetters([
            'FAVOURITES'
        ]),
        
    },
    props: {
        Productsitem: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        ...mapActions([
            'DELTE_PRODUCTS_FROM_FAVOURITES'
        ]),
        addToCarts(){
            if(this.$route.name === 'Favourites'){
                let ProductItemIndex = this.FAVOURITES.map(e => e.id).indexOf(this.Productsitem.id)
                this.DELTE_PRODUCTS_FROM_FAVOURITES(ProductItemIndex)
            } else {
                this.$emit('addToCarts', this.Productsitem)
                this.IsProductExist = true
            }
            
        }
    },
    mounted(){
        this.$nextTick(function () {
            if(this.FAVOURITES.length > 0){
                for(let i = 0; i < this.FAVOURITES.length; i++){
                    if(this.FAVOURITES[i].id === this.Productsitem.id){
                        this.IsProductExist = true
                    }
                }
            }
        })
    }
}
</script>

<style lang="sass" scoped>
.products__cart
    max-width: 361px
    width: 100%
    border-radius: 20px
    background: $white
    position: relative
    transition: .3s
    min-height: 460px
    &:hover
        box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2)
    &-favorite
        position: absolute
        z-index: 10
        top: -10px
        right: -10px
        width: 35px
        height: 35px
        border-radius: 100%
        +flexa 
        justify-content: center
        background: $orange
        img
            width: 21px
            height: 19px
    &-image
        max-width: 100%
        max-height: 217px
        height: 217px
        margin-bottom: 20px
        img
            border-top-left-radius: 20px
            border-top-right-radius: 20px
            object-fit: cover
            height: 100%
    &-title
        color: $braun
        font-size: 20px
        margin-bottom: 12px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
    &-descript
        color: $braun
        font-size: 14px
        font-weight: 400
        max-height: 126px
        min-height: 126px
        overflow-y: hidden
    &-text
        padding: 0px 16px
        padding-bottom: 12px
        display: flex
        flex-direction: column
        justify-content: space-between
    .link__block
        margin-top: 15px
    &-link
        width: 100%
        text-align: center
        padding: 7px 0px
        background: $yellow
        border-radius: 15px
        font-size: 16px
        color: $white
@media screen and (max-width: $mainContainer)
    .products__cart
        margin: 0 auto
@media screen and (max-width: 380px)
    .products__cart
        max-width: 320px
</style>