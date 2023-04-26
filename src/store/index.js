import { createStore } from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
import { useToast } from 'vue-toastification'
const toast = useToast()
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default createStore({
  state: {
    products: [],
    favourites: [],
  },
  getters: {
    PRODUCTS(state){
      return state.products
    },
    PRODUCT_BY_ID(state){
      return ProductId => {
        return state.products.find(Product => Product.id === ProductId)
      }
    },
    FAVOURITES(state){
      return state.favourites
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) =>{
      state.products = products
    },
    SET_TO_FAVOURITES: (state, favouritesItem) => {
      if (state.favourites.length){
        let ProductExist = false
        state.favourites.map(function(item){
          if (item.id === favouritesItem.id){
            //Ошибка должна вызываться
            toast.warning("Блюдо уже было добавлено", {
              timeout: 3000,
              closeOnClick: true,
              hideProgressBar: true,
            });
            ProductExist = true
          }
        })
        if (!ProductExist){
          state.favourites.push(favouritesItem)
          toast.success("Блюдо было добавлено", {
            timeout: 3000,
            closeOnClick: true,
            hideProgressBar: true,
          });
        } 
      } else{
        state.favourites.push(favouritesItem)
        toast.success("Блюдо было добавлено", {
          timeout: 3000,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    },
    DELTE_PRODUCTS(state, {data, getters}){
      getters.FAVOURITES.splice(data,1)
      toast.success("Блюдо было удалено", {
        timeout: 3000,
        closeOnClick: true,
        draggable: true,
        draggablePercent: 2,
        hideProgressBar: true,
      });
    }
  },
  actions: {
    async GET_PRODCUTS_FROM_DB({commit}){
      try {
        //const products = await axios("https://raw.githubusercontent.com/sedm1/selldish/main/db.json", {
        const products = await axios("https://raw.githubusercontent.com/sedm1/Selldish/main/db-2.json", {
          method: "GET"
        })
        commit("SET_PRODUCTS_TO_STATE", products.data)
        return products.data
      } catch (error) {
        console.log("Ошибка при получении продуктов" + error)
        return error
      }
    },
    ADD_TO_FAVOURITES({commit}, favouritesItem){
      commit('SET_TO_FAVOURITES', favouritesItem)
    },
    DELTE_PRODUCTS_FROM_FAVOURITES({commit, getters}, data){
      commit('DELTE_PRODUCTS', {data, getters})
    }
  },
  modules: {
  },
  plugins: [
    vuexLocal.plugin
  ]
})
