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

export let getClassify = () => {
  return axios.get('/classify')
}

export let detailBook = (id) => {
  return axios.get(`/bookList?id=${id}`)
}

export let collection = () => {
  return axios.get('/collection')
}

export let addCollect = (id) => {
  return axios.post(`collection?id=${id}`)
}

export let deleteCollect = (id) => {
  return axios.delete(`/collection?id=${id}`)
}

export let getPages = (offset) => {
  return axios.get(`/pages?offset=${offset}`)
}

export let getClass = (id) => {
  return axios.get(`/classList?id=${id}`)
}

export let cart = () => {
  return axios.get(`/cart`)
}

export let addCart = (id) => {
  return axios.post(`/cart?id=${id}`)
}

export let deleteCart = (id) => {
  return axios.delete(`/cart?id=${id}`)
}
