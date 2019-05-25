<template>
  <section>
    <mheader :back="true">填写订单</mheader>
    <h2>总金额：{{bid}}</h2>
    收货人姓名：<input v-model="name"/><br>
    收货人电话：<input v-model="tel"/><br>
    收获地址：<input v-model="site"/><br>
    <button @click="submitOrder">确定提交订单</button>
    <!--提交成功显示提示信息-->
    <section v-show="flag" class="dialog">
      <h3>操作成功</h3>
      <button @click="hide">我知道了</button>
    </section>
    <footer></footer>
  </section>
</template>

<script>
import Mheader from '../commen/Mheader'

export default {
  name: 'order',
  components: {Mheader},
  data () {
    return {
      name: '',
      site: '',
      tel: '',
      flag: false
    }
  },
  computed: {
    bid () {
      return parseFloat(this.$route.params.bid).toFixed(2)
    }
  },
  methods: {
    submitOrder () {
      this.flag = true
    },
    /* 点击对话框，让dialog消失,然后跳转到首页 */
    hide () {
      this.flag = false
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped lang="less">
  @mycolor:#00C896,#FF0000,#ffffff;
  h2{
    margin:10px 0;
    color: extract(@mycolor,2);
  }
  input {
    height: 40px;
    width: 80%;
    border: 1px solid extract(@mycolor,1);
    border-radius: 10px;
    margin: 10px 10%;
  }
  button{
    height: 40px;
    width: 80%;
    background-color: extract(@mycolor,2);
    color: extract(@mycolor,3);
    border-radius: 10px;
    margin: 10px 10%;
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
      margin-top: 6%;
      border-radius: 20px;
      color: extract(@mycolor,1)
    }
  }
  footer {
    position: fixed;
    bottom: 0 !important;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #fff;
    z-index: 1;
  }
</style>
