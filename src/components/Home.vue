<template>
  <div>
    <Mheader :back="false">首页</Mheader>
    <Swiper :swiperSlides = 'slide'></Swiper>
    <hot-book :hotBook = 'hotBook'></hot-book>
  </div>
</template>

<script>
// 全局导入
import Mheader from '../commen/Mheader'
import Swiper from '../commen/Swiper'
import {getSwiper, getClassify} from '../useApi'
import HotBook from '../commen/HotBook'

export default {
  name: 'Home',
  components: {HotBook, Mheader, Swiper},
  created () {
    this.getSwipers()
    this.getHotBooks()
  },
  data () {
    return {
      slide: [],
      hotBook: []
    }
  },
  methods: {
    async getSwipers () {
      this.slide = await getSwiper()
    },
    async getHotBooks () {
      this.hotBook = await getClassify()
      console.log(this.hotBook)
    }
  }

}
</script>

<style scoped lang="less">

</style>
