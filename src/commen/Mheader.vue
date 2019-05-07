<template>
  <header>
    <slot></slot>
    <i class="iconfont icon-fanhui myfont" v-if="back" @click="goBack"></i>
  </header>
</template>

<script>
export default {
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  .myfont{
    position: absolute;
    left: 20px;
    font-size: 24px;
  }
  header{
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
</style>
