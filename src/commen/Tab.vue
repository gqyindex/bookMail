<template>
  <footer>
    <router-link to="/home">
      <i class="iconfont icon-shouye myfont"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-fenlei myfont"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang myfont"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/cart">
      <i class="iconfont icon-shoucang myfont"></i>
      <span>购物车</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped lang="less">
  .myfont{
    font-size: 24px;
  }
  footer{
    position: fixed;
    bottom:0 !important;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    a{
      color: #515151;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      span{
        font-size: 12px;
      }
    }
    a.router-link-active{
      color: #00C896;
    }
  }

</style>
