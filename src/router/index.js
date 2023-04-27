import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "homepage",
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: "Добро пожаловать"
    }
  },
  {
    path: "/MainPage",
    name: "MainPage",
    component: () => import("../views/MainPage"),
    meta: {
      title: "Главная страница"
    }
  },
  {
    path: "/productPage/:id",
    name: "ProductPage",
    props: true,
    component: () => import("../views/ProductPage"),
    meta: {
      title: "Страница рецепта"
    }
  },
  {
    path: "/Favourites",
    name: "Favourites",
    component: () => import("../views/Favourites"),
    meta: {
      title: "Избранное"
    }
  },
  {
    path: "/RandomProducts",
    name: "RandomProducts",
    component: () => import("../views/RandomProducts"),
    meta: {
      title: "Случайное блюдо"
    }
  },
  {
    path: "/Recipes",
    name: "Recipes",
    component: () => import("../views/Recipes"),
    meta: {
      title: "Рецепты"
    }
  }
  ,
  {
    path: "/SelectOfDishes",
    name: "SelectOfDishes",
    component: () => import("../views/SelectOfDishes"),
    meta: {
      title: "Подбор блюда"
    }
  }
]

const router = createRouter({
  publicPath: '',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
const DEFAULT_TITLE = 'Не задан заголовок';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});
