<template>
  <div>
    <mheader :back="true">{{classMeg[0].className}}</mheader>
    <ul>
      <router-link v-for="(item,index) in classMeg[0].bookMeg" :key="index" :to="{name:'detail',params:{bid:item.bookId}}" tag="li">
        <img :src="item.bookImg"/>
        <div>
          <p>{{item.bookName}}</p>
          <p>{{item.bookContent}}</p>
          <p>￥{{item.bookPrice}}</p>
          <button @click.stop="addCollects(item.bookId)">收藏</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Mheader from '../commen/Mheader'
import {getClass, addCollect} from '../useApi'

export default {
  name: 'classList',
  components: {Mheader},
  data () {
    return {
      classMeg: []
    }
  },
  computed: {
    /* 接收返回的bid */
    bid () {
      return this.$route.params.bid
    }
  },
  async mounted () {
    this.classMeg = await getClass(this.bid)
  },
  methods: {
    async addCollects (id) {
      await addCollect(id)
    }
  }
}
</script>

<style scoped lang="less">
  @myfont:16px,14px,12px;
  @mycolor:#00C896,#FF0000;
  ul{
    li{
      width: 92%;
      margin: 10px auto;
      padding: 4px;
      box-shadow: 8px 8px 10px #ccc;
      display: flex;
      border-radius: 12px;
      img{
        width: 45%;
        height: 90%;
        margin-right: 3%;
      }
      div{
        padding-top: 10px;
        p{
          margin-bottom: 4px;
        }
        p:nth-child(1){
          font-size: extract(@myfont,1);
          color:extract(@mycolor,1);
        }
        p:nth-child(2){
          font-size: extract(@myfont,2);
        }
        p:nth-child(3){
          font-size: extract(@myfont,3);
          color:extract(@mycolor,2)
        }
        button{
          border: 0;
          outline: none;
          width: 60px;
          height: 20px;
          background-color: extract(@mycolor,2);
          border-radius: 8px;
          color: #fff;
        }
      }
    }
  }
</style>
