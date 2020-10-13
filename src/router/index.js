import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
  import ('../views/home/Home.vue')
const Categories = () =>
  import ('../views/categories/Categories.vue')
const ShoppingCart = () =>
  import ('../views/shopping-cart/ShoppingCart.vue')
const Profile = () =>
  import ('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/shopping-cart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router