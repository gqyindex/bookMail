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
    {path: '/add', component: () => import('../components/Add.vue')},
    {path: '/collect', component: () => import('../components/Collect.vue')},
    {path: '/detail/:bid', component: () => import('../components/detail.vue'), name: 'detail'}
  ]
})
