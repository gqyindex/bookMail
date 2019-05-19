/* 发送axios请求 */
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

// 设置拦截器，减少get的promiss对象数据转化
axios.interceptors.response.use((res) => {
  return res.data
})

export let getSwiper = () => {
  return axios.get('/swiper')
}

export let getHotBook = () => {
  return axios.get('/hotbook')
}

export let getBookList = () => {
  return axios.get('/bookList')
}

export let detailBook = (id) => {
  return axios.get(`/bookList?id=${id}`)
}

export let collection = () => {
  return axios.get('/collection')
}

export let addcollect = (id) => {
  return axios.post(`collection?id=${id}`)
}

export let deleteCollect = (id) => {
  return axios.delete(`/collection?id=${id}`)
}
