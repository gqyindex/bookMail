/* 发送axios请求 */
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

export let getSwiper = () => {
  return axios.get('/swiper')
}
