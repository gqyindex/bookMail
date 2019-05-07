<template>
  <div>
    <Mheader :back="true">首页</Mheader>
    <Swiper :swiperSlides = 'slide'></Swiper>
  </div>
</template>

<script>
// 全局导入
import Mheader from '../commen/Mheader'
import Swiper from '../commen/Swiper'
import {getSwiper} from '../useApi'
export default {
  name: 'Home',
  components: {Mheader, Swiper},
  async created () {
    let {data} = await getSwiper()
    this.slide = data
  },
  data () {
    return {
      slide: []
    }
  }

}
</script>

<style scoped lang="less">

</style>
