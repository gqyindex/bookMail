import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import List from '../components/List'
import Add from '../components/Add'
import Detail from '../components/Detail'
import Collect from '../components/Collect'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
  routes: [
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '/add', component: Add},
    {path: '/collect', component: Collect},
    {path: '/detail', component: Detail}
  ]
})
