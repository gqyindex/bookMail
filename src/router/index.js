import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {path: '/home', component: () => import('../components/Home.vue'), meta: {keepAlive: true}},
    {path: '/list', component: () => import('../components/List.vue'), meta: {keepAlive: true}},
    {path: '/cart', component: () => import('../components/Cart.vue')},
    {path: '/collect', component: () => import('../components/Collect.vue')},
    {path: '/detail/:bid', component: () => import('../components/Detail.vue'), name: 'detail'},
    {path: '/class/:bid', component: () => import('../components/ClassList.vue'), name: 'class'}
  ]
})
