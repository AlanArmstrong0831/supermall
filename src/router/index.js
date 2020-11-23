import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Category.vue'
// import Cart from '../views/cart/Cart.vue'
// import Profile from '../views/profile/Profile.vue'

const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/Profile.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    },
    
  ],
  mode: 'history'
})
