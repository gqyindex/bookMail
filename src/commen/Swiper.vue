<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: ['swiperSlides'],
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  img{
    width: 100%;
  }
</style>
