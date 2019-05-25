<template>
   <div>
     <section>
       <mheader :back="true">购物车</mheader>
       <p v-if="cartBook.length === 0">您的购物车空空如也~</p>
       <template v-else>
       <ul>
         <li v-for="(item,index) in cartBook" :key="index" >
           <input type="checkbox" v-model="item.isSelected"/>
           <img :src="item.bookImg"/>
             <p>￥{{item.bookPrice}}</p>
             <button @click.stop="deleteCarts(item.bookId)">删除</button>
         </li>
       </ul>
       <div class="pay">
         <p>总计金额</p>
         <p>￥{{total() | fixed(2)}}</p>
         <router-link :to="{name:'order',params:{bid:total()}}" tag="button">确认支付</router-link>
       </div>
       </template>
     </section>
   </div>
</template>

<script>
import {cart, deleteCart} from '../useApi'
import Mheader from '../commen/Mheader'

export default {
  name: 'Cart',
  components: {Mheader},
  data () {
    return {
      check: [true, true, false],
      cartBook: []
    }
  },
  async created () {
    this.cartBook = await cart()
  },
  methods: {
    async deleteCarts (id) {
      await deleteCart(id)
      // 执行完函数，就重新渲染书籍列表
      this.cartBook = this.cartBook.filter(item => item.bookId !== id)
    },
    total () {
      return this.cartBook.reduce((prev, next) => {
        if (!next.isSelected) {
          return prev
        } else {
          return prev + Number(next.bookPrice)
        }
      }, 0)
    }
  },
  filters: {
    fixed (value, param) {
      return value.toFixed(param)
    }
  }
}
</script>

<style scoped lang="less">
  @myfont:20px,14px,12px;
  @mycolor:#00C896,#FF0000;
  ul{
    li{
      width: 92%;
      margin: 10px auto;
      padding: 4px;
      box-shadow: 8px 8px 10px #ccc;
      display: flex;
      border-radius: 12px;
      align-items: center;
      input{
        zoom: 150%;
      }
      img{
        width: 45%;
        height: 90%;
        margin-right: 2%;
      }
        p{
          font-size: extract(@myfont,1);
          color:extract(@mycolor,1);
          margin-right: 2%;
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
  };
  .pay{
    width: 90%;
    height: 60px;
    display: flex;
    margin: auto;
    align-items: center;
    box-shadow: 8px 8px 10px #ccc;
    border-radius: 12px;
    p{
      flex: 1;
      color: extract(@mycolor,2);
    }
    button{
      border: 0;
      height: 30px;
      width: 80px;
      outline: none;
      background-color: extract(@mycolor,1);
      border-radius: 8px;
      color: #fff;
      margin-right: 2%;
    }
  }
</style>
