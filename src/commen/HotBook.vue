<template>
  <section>
    <h4>为您推荐:热门分类</h4>
      <ul>
        <router-link v-for="(item,index) in hotBook" :key="index" :to="{name:'class',params:{bid:item.classId}}" tag="li">
          <img :src="item.classImg"/>
          <p>{{item.className}}</p>
        </router-link>
      </ul>
  </section>
</template>

<script>
export default {
  props: ['hotBook'],
  name: 'HotBook'
}
</script>

<style scoped lang="less">
  @mycolor:#00C896,#FF0000;
  h4{
    color: extract(@mycolor,2);
    margin-top: 10px;
    margin-left: 10px;
  }
ul{
  list-style: none;
  display: flex;
  flex-grow: 1;
  align-self: center;
  /*一行不够就换行*/
  flex-wrap: wrap;
  width: 100%;
  li{
    width: 40%;
    padding: 2%;
    margin:3%;
    box-shadow: 6px 6px 8px #ccc;
    border-radius: 12px;
    text-align: center;
    img{
      width: 100%;
    }
    p:nth-child(2){
      color: extract(@mycolor,2);
      font-size: 16px;
    }
    p:nth-child(3){
      color: extract(@mycolor,2);
      font-size: 12px;
    }
  }
}
</style>
