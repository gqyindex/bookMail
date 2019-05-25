<template>
  <div>
    <Mheader :back="true">书籍列表</Mheader>
    <div class="content"  ref="scroll"  @scroll="scrollHandler">
    <ul>
      <router-link v-for="(item,index) in bookLists" :key="index" :to="{name:'detail',params:{bid:item.bookId}}" tag="li">
        <img v-lazy="item.bookImg"/>
        <div>
        <p>{{item.bookName}}</p>
        <p>{{item.bookContent}}</p>
        <p>￥{{item.bookPrice}}</p>
        <button @click.stop="addCollects(item.bookId)">收藏</button>
        <button @click.stop="addCarts(item.bookId)">加购物车</button>
        </div>
      </router-link>
    </ul>
      <section v-show="flag" class="dialog">
        <h3>操作成功</h3>
        <button @click="hide">我知道了</button>
      </section>
    </div>
  </div>
</template>

<script>
import Mheader from '../commen/Mheader'
import {getPages, addCollect, addCart} from '../useApi'
export default {
  name: 'List',
  components: {Mheader},
  mounted () {
    this.getBookLists()
    window.addEventListener('scroll', this.scrollHandler, true)
  },
  data () {
    return {
      bookLists: [],
      flag: false,
      offset: 0,
      haveMore: true,
      timer: ''
    }
  },
  methods: {
    scrollHandler () {
      clearTimeout(this.timer)
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      let clientHeight = this.$refs.scroll.clientHeight
      this.timer = setTimeout(() => {
        if (scrollTop + clientHeight - 30 > scrollHeight) {
          this.getBookLists()
        }
      }, 100)
    },
    async getBookLists () {
      if (this.haveMore) {
        let {haveMore, partBooks} = await getPages(this.offset)
        // 每一次加载的图书加上上一次的图书，全部显示出来
        this.bookLists = [...this.bookLists, ...partBooks]
        this.haveMore = haveMore
        /* 偏移量等于第一次加载的图书长度跟后来加载图书长度之和 */
        this.offset = this.bookLists.length
      }
    },
    async addCollects (id) {
      this.flag = true
      await addCollect(id)
    },
    async addCarts (id) {
      this.flag = true
      await addCart(id)
    },
    /* 点击对话框，让dialog消失 */
    hide () {
      this.flag = false
    }
  }
}
</script>

<style scoped lang="less">
  @myfont:16px,14px,12px;
  @mycolor:#00C896,#FF0000,#ffffff;
  .content{
    height: 100%;
  }
  .dialog{
    position: fixed;
    top: 30%;
    left: 20%;
    width: 60%;
    height: 20%;
    background-color: extract(@mycolor,3);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
      margin:10% 0;
    }
    button{
      background-color: extract(@mycolor,3);
      width: 100%;
      height: 30%;
      margin-top: 12%;
      border-radius: 20px;
    }
  }
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
