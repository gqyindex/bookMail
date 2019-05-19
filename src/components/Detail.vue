<template>
  <section>
  <mheader :back="true">图书详情</mheader>
    <section id="detail">
      <h3>{{bookMeg.bookName}}</h3>
      <h4>{{bookMeg.bookContent}}</h4>
      <h4>抢购价：￥{{bookMeg.bookPrice}}</h4>
      <img :src="bookMeg.bookImg"/>
    </section>
  <footer></footer>
  </section>
</template>

<script>
import {detailBook} from '../useApi'
import Mheader from '../commen/Mheader'
export default {
  name: 'Detail',
  components: {Mheader},
  data () {
    return {
      bookMeg: []
    }
  },
  computed: {
    /* 接收返回的bid */
    bid () {
      return this.$route.params.bid
    }
  },
  async created () {
    this.bookMeg = await detailBook(this.bid)
  }
}
</script>

<style scoped lang="less">
footer{
  position: fixed;
  bottom:0 !important;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
  z-index: 1;
}
  #detail{
    width: 90%;
    height: 100%;
    background-color: #fff;
    box-shadow: 10px 10px 10px #ccc;
    border-radius: 10px;
    margin: auto;
    padding: 10px;
    img{
      width: 80%;
    }
    h4:nth-child(3){
      color: red;
    }
  }
</style>
